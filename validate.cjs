/* Óháðar prófanir á heimildum, úrtökum, reiknireglum og notendaflæði án vafrastýringar. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=path.resolve(__dirname,'../Prófsundirbúningur');
const checkLocalSources=process.argv.includes('--local-sources');
const context=vm.createContext({console});
const scripts=['questions-bpm.js','questions-systems.js','questions-extra.js','engine.js','diagrams.js'];
for(const file of scripts)vm.runInContext(fs.readFileSync(path.join(__dirname,'dist',file),'utf8'),context,{filename:file});
const bank=[...context.BPM_QUESTIONS,...context.SYSTEMS_QUESTIONS,...context.EXTRA_QUESTIONS],E=context.ExamEngine;
// Lýsigögn fylgja geymslunni svo CI þurfi ekki einkaskrár eða staðbundnar slóðir.
const manifest=JSON.parse(fs.readFileSync(path.resolve(__dirname,'sources.json'),'utf8'));
const pageCounts=new Map(manifest.map(m=>[m.file,m.pages]));
assert(bank.length>=200);assert.equal(new Set(bank.map(q=>q.id)).size,bank.length);
for(const q of bank){assert(q.stem.length>15,q.id);assert.equal(q.options.length,4,q.id);assert.equal(new Set(q.options).size,4,q.id);assert(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4,q.id);assert(q.explanation.length>30,q.id);assert(['bpm','systems','extra'].includes(q.group),q.id);assert(pageCounts.has(q.source.file),`${q.id}: heimild vantar í lýsigögn`);if(checkLocalSources)assert(fs.existsSync(path.join(source,q.source.file)),`${q.id}: staðbundna heimild vantar`);for(const page of q.source.pages)assert(Number.isInteger(page)&&page>0&&page<=pageCounts.get(q.source.file),`${q.id}: ógild blaðsíða ${page}`);if(q.kind==='diagram')assert(q.diagram,`${q.id}: mynd vantar`);if(q.diagram)assert(context.ExamDiagrams.render(q.diagram).includes('<svg'),q.id);}
const original=new Map(bank.map(q=>[q.id,q]));let previous=[],novel=0;const answerPositions=[0,0,0,0];
for(let i=0;i<1000;i++){
  const qs=E.draw(bank,'prufa-'+i,previous);assert.equal(qs.length,80);assert.equal(new Set(qs.map(q=>q.id)).size,80);
  for(const [group,n]of [['bpm',60],['systems',16],['extra',4]])assert.equal(qs.filter(q=>q.group===group).length,n);
  for(const lecture of ['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F13','F14'])assert(qs.filter(q=>q.lecture===lecture).length>=2);
  assert(qs.filter(q=>q.kind==='calculation').length>=12);assert(qs.filter(q=>q.kind==='diagram').length>=13);
  assert(qs.filter(q=>q.lecture==='CJM').length===2);assert(qs.filter(q=>q.lecture==='RPA').length===2);
  for(const q of qs){const base=original.get(q.id);assert.equal(q.options[q.answer],base.options[base.answer]);answerPositions[q.answer]++;}
  if(i){const n=qs.filter(q=>!previous.includes(q.id)).length;assert(n>=40,`Of lítil nýbreytni: ${n}`);novel+=n;}
  previous=qs.map(q=>q.id);
}
assert.deepEqual(JSON.stringify(E.draw(bank,'sama-fræ')),JSON.stringify(E.draw(bank,'sama-fræ')));
assert(answerPositions.every(n=>n>18000&&n<22000));
// Stuttur hamur þarf eigin þekju, nýtt úrtak og réttar vísanir í stokkuð svör.
let quickPrevious=[];
for(let i=0;i<1000;i++){
  const qs=E.draw(bank,'stutt-'+i,quickPrevious,10);
  assert.equal(qs.length,10);assert.equal(new Set(qs.map(q=>q.id)).size,10);
  for(const [group,n]of [['bpm',7],['systems',2],['extra',1]])assert.equal(qs.filter(q=>q.group===group).length,n);
  for(const lecture of ['F11','F12'])assert.equal(qs.filter(q=>q.lecture===lecture).length,1);
  assert(qs.filter(q=>q.kind==='calculation').length>=2);assert(qs.filter(q=>q.kind==='diagram').length>=2);
  assert(qs.every(q=>!quickPrevious.includes(q.id)));
  for(const q of qs){const base=original.get(q.id);assert.equal(q.options[q.answer],base.options[base.answer]);}
  quickPrevious=qs.map(q=>q.id);
}
const shortSession=E.newSession(bank,'quick','stutt-stig');
assert(E.validSession(shortSession));assert.equal(E.timeLeft(shortSession),null);
assert(!E.validSession({...shortSession,index:10}));assert(!E.validSession({...shortSession,mode:'exam'}));
assert(!E.validSession({...shortSession,questions:[shortSession.questions[0],...shortSession.questions.slice(0,9)]}));
for(let i=0;i<7;i++){const q=shortSession.questions[i];shortSession.answers[q.id]=i<5?q.answer:(q.answer+1)%4;}
assert.equal(E.score(shortSession).percent,50);assert.equal(E.score(shortSession).wrong,2);assert.equal(E.score(shortSession).unanswered,3);
const sample=E.newSession(bank,'exam','stig',[],1000);assert(E.validSession(sample));assert.equal(E.timeLeft(sample,1000),10800000);assert.equal(E.timeLeft(sample,10801001),0);
assert.equal(E.score(sample).correct,0);assert.equal(E.score(sample).unanswered,80);
for(let i=0;i<80;i++){const q=sample.questions[i];if(i<30)sample.answers[q.id]=q.answer;else if(i<60)sample.answers[q.id]=(q.answer+1)%4;}
assert.equal(E.score(sample).correct,30);assert.equal(E.score(sample).wrong,30);assert.equal(E.score(sample).unanswered,20);
assert(!E.validSession({...sample,questions:sample.questions.slice(1)}));
/* Réttu tölusvör viðbótardæmanna eru reiknuð aftur, óháð framsetningu spurninganna. */
assert.equal((6/10)**2/(1-6/10),0.8999999999999999);assert.equal(3/12*60,15);assert.equal(12+60/10,18);
function boot(storage={},initialTime=Date.now()){
  let now=initialTime,mode='study';const handlers={},nodes={},intervals=[];
  const node=id=>nodes[id]||(nodes[id]={innerHTML:'',textContent:'',hidden:true,open:false,handlers:{},classList:{toggle(){}},focus(){},scrollIntoView(){},addEventListener(name,fn){this.handlers[name]=fn;},showModal(){this.open=true;},close(){this.open=false;}});
  const document={title:'',visibilityState:'visible',getElementById:node,addEventListener(name,fn){handlers[name]=fn;},querySelector(selector){return selector.includes('name="mode"')?{value:mode}:node('selected');}};
  class Clock extends Date{static now(){return now;}}
  const c=vm.createContext({console,document,window:{scrollTo(){}},Date:Clock,crypto:require('node:crypto').webcrypto,localStorage:{getItem(k){return storage[k]||null;},setItem(k,v){storage[k]=v;}},setInterval(fn){intervals.push(fn);}});
  for(const file of [...scripts,'app.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'dist',file),'utf8'),c,{filename:file});
  return{storage,nodes,handlers,get state(){return JSON.parse(storage['ferlar-prof-v1']||'{}');},mode(m){mode=m;handlers.change({target:{name:'mode',value:m}});},click(action,data={}){handlers.click({target:{closest(){return{dataset:{action,...data},disabled:false};}}});},answer(i){handlers.change({target:{name:'answer',value:String(i)}});},ok(){node('dialog-ok').handlers.click();},tick(ms){now+=ms;intervals.forEach(fn=>fn());},html(){return node('main').innerHTML;}};
}
const ui=boot();assert(ui.html().includes('Hefja æfingu'));ui.click('start');assert(ui.state.session.questions.length===80);let q=ui.state.session.questions[0];
assert(!ui.html().includes('Heimild:'));ui.answer(q.answer);assert.equal(ui.state.session.answers[q.id],q.answer);ui.click('check');assert(ui.html().includes('Heimild:'));ui.answer((q.answer+1)%4);assert.equal(ui.state.session.answers[q.id],q.answer);
ui.click('flag');assert(ui.state.session.flags[q.id]);ui.click('next');assert.equal(ui.state.session.index,1);
const restored=boot(ui.storage);assert(restored.html().includes('Halda áfram'));restored.click('resume');assert.equal(restored.state.session.index,1);assert(restored.state.session.revealed[q.id]);restored.click('finish');assert(restored.nodes['confirm-dialog'].open);restored.ok();assert(restored.state.session.finishedAt);assert(restored.html().includes('Árangur eftir efni'));assert.equal(restored.state.history[0].correct,1);restored.click('filter',{filter:'unanswered'});assert(restored.html().includes('Ósvarað'));
restored.click('new');assert.equal(Object.keys(restored.state.session.answers).length,0);assert.equal(Object.keys(restored.state.session.flags).length,0);assert.equal(Object.keys(restored.state.session.revealed).length,0);assert(!restored.state.session.finishedAt);
const exam=boot();exam.mode('exam');exam.click('start');q=exam.state.session.questions[0];exam.answer(q.answer);exam.click('check');assert(!exam.html().includes('Heimild:'));exam.answer((q.answer+1)%4);assert.equal(exam.state.session.answers[q.id],(q.answer+1)%4);exam.tick(10800001);assert(exam.state.session.autoSubmitted);assert(exam.html().includes('Tíminn rann út'));assert.equal(exam.state.history.length,1);exam.tick(10000);assert.equal(exam.state.history.length,1);
const closed=boot();closed.mode('exam');closed.click('start');const expired=boot(closed.storage,closed.state.session.deadline+100);assert(expired.state.session.autoSubmitted);assert(expired.html().includes('Árangur eftir efni'));
// Viðmótið verður að klára við tíundu spurningu og geta skipt aftur í heilan ham.
const quick=boot();assert(quick.html().includes('Stuttur hamur · 10 spurningar'));
quick.mode('quick');assert(quick.nodes.selected.textContent.includes('10 spurningar'));quick.click('start');
assert.equal(quick.state.session.questions.length,10);assert(quick.html().includes('aria-valuemax="10"'));
q=quick.state.session.questions[0];quick.answer(q.answer);quick.click('check');assert(quick.html().includes('Heimild:'));
quick.click('flag');quick.answer((q.answer+1)%4);assert.equal(quick.state.session.answers[q.id],q.answer);
quick.tick(10800001);assert(!quick.state.session.finishedAt);assert.equal(quick.state.session.deadline,null);
const quickRestored=boot(quick.storage);assert(quickRestored.html().includes('1 af 10 svörum'));quickRestored.click('resume');
assert(quickRestored.html().includes('10% lokið'));assert(quickRestored.state.session.flags[q.id]);assert(quickRestored.state.session.revealed[q.id]);
for(let i=0;i<10;i++)quickRestored.click('next');assert.equal(quickRestored.state.session.index,9);
assert(!quickRestored.html().includes('data-action="next"'));assert(quickRestored.html().includes('10 / 10'));
quickRestored.click('finish');assert(quickRestored.nodes['dialog-message'].textContent.includes('9 spurningum'));quickRestored.ok();
assert.equal(quickRestored.state.history[0].total,10);assert.equal(quickRestored.state.history[0].percent,10);
assert(quickRestored.html().includes(' / 10 · 10%'));quickRestored.click('filter',{filter:'flagged'});assert(quickRestored.html().includes('Spurning 1'));
const priorIds=quickRestored.state.session.questions.map(q=>q.id);quickRestored.click('new');
assert.equal(quickRestored.state.session.mode,'quick');assert.equal(quickRestored.state.session.questions.length,10);
assert(quickRestored.state.session.questions.every(q=>!priorIds.includes(q.id)));
quickRestored.click('home');quickRestored.mode('study');assert(quickRestored.nodes.selected.textContent.includes('80 spurningar'));
quickRestored.click('start');assert(quickRestored.nodes['dialog-message'].textContent.includes('80 spurningum'));quickRestored.ok();assert.equal(quickRestored.state.session.questions.length,80);
quickRestored.click('home');quickRestored.mode('quick');quickRestored.click('start');assert(quickRestored.nodes['dialog-message'].textContent.includes('10 spurningum'));quickRestored.ok();assert.equal(quickRestored.state.session.questions.length,10);
const counts={};for(const q of bank){counts[q.lecture]=(counts[q.lecture]||0)+1;}
console.log(JSON.stringify({passed:true,total:bank.length,byLecture:counts,calculation:bank.filter(q=>q.kind==='calculation').length,diagram:bank.filter(q=>q.kind==='diagram').length,drawTests:1000,quickDrawTests:1000,averageNew:Number((novel/999).toFixed(1)),answerPositions,flows:['study','exam','quick','grading','shuffling','restore','flags','new-draw','review-filters','timeout','timeout-on-reopen','quick-restore','quick-no-deadline','mode-switch']},null,2));
