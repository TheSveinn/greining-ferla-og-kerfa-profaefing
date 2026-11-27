/* Reiknivélin er óháð viðmótinu svo hægt sé að prófa slembival og stigagjöf sérstaklega. */
(function(root){
  'use strict';
  const VERSION=1;
  function rng(seed){let a=2166136261;for(const c of String(seed)){a=Math.imul(a^c.charCodeAt(0),16777619);}return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
  function shuffle(items,random){const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}return copy;}
  // Stutti hamurinn er æfing án tímamarka; eldri 80 spurninga umferðir halda sínu sniði.
  function questionCount(mode){return mode==='quick'?10:80;}
  function draw(bank,seed,previous=[],count=80){
    if(![10,80].includes(count))throw Error('Veldu 10 eða 80 spurningar.');
    const random=rng(seed),old=new Set(previous),selected=[];
    // Ónotaðar spurningar fá forgang, en efnadreifingin helst stöðug milli umferða.
    function choose(pool,count){const used=new Set(selected.map(q=>q.id));const available=pool.filter(q=>!used.has(q.id));const ordered=[...shuffle(available.filter(q=>!old.has(q.id)),random),...shuffle(available.filter(q=>old.has(q.id)),random)];if(ordered.length<count)throw Error('Of fáar spurningar fyrir valið efni.');selected.push(...ordered.slice(0,count));}
    const bpm=bank.filter(q=>q.group==='bpm'),systems=bank.filter(q=>q.group==='systems'),extra=bank.filter(q=>q.group==='extra');
    if(count===10){
      // Lítið úrtak heldur BPM í forgrunni og æfir bæði útreikninga og myndlestur.
      choose(bpm.filter(q=>q.kind==='calculation'),2);
      choose(bpm.filter(q=>q.kind==='diagram'),2);
      choose(bpm,3);
      for(const lecture of ['F11','F12'])choose(systems.filter(q=>q.lecture===lecture),1);
      choose(extra,1);
    }else{
    for(const lecture of ['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F13','F14'])choose(bpm.filter(q=>q.lecture===lecture),2);
    const addMinimum=(pool,predicate,n)=>choose(pool.filter(predicate),Math.max(0,n-selected.filter(q=>pool.includes(q)&&predicate(q)).length));
    addMinimum(bpm,q=>q.kind==='calculation',12);
    addMinimum(bpm,q=>q.kind==='diagram',10);
    choose(bpm,60-selected.filter(q=>q.group==='bpm').length);
    // Kerfishlutinn nær bæði yfir hegðun kerfa og túlkun orsakasamhengis.
    choose(systems.filter(q=>q.lecture==='F11'),4);
    choose(systems.filter(q=>q.lecture==='F12'),4);
    addMinimum(systems,q=>q.kind==='diagram',3);
    choose(systems,16-selected.filter(q=>q.group==='systems').length);
    for(const lecture of ['CJM','RPA'])choose(extra.filter(q=>q.lecture===lecture),2);
    }
    if(selected.length!==count)throw Error('Fjöldi spurninga passar ekki við valinn ham.');
    return shuffle(selected,random).map(q=>{const order=shuffle(q.options.map((_,i)=>i),random);return{...q,options:order.map(i=>q.options[i]),answer:order.indexOf(q.answer)};});
  }
  function score(session){let correct=0,answered=0;const groups={};for(const q of session.questions){const a=session.answers[q.id];const has=Number.isInteger(a);const right=has&&a===q.answer;answered+=Number(has);correct+=Number(right);const g=groups[q.group]||(groups[q.group]={total:0,correct:0});g.total++;g.correct+=Number(right);}return{correct,answered,total:session.questions.length,wrong:answered-correct,unanswered:session.questions.length-answered,percent:Math.round(100*correct/session.questions.length),groups};}
  function newSession(bank,mode,seed,previous=[],now=Date.now()){return{version:VERSION,mode,seed,questions:draw(bank,seed,previous,questionCount(mode)),answers:{},flags:{},revealed:{},index:0,startedAt:now,deadline:mode==='exam'?now+3*60*60*1000:null,finishedAt:null,autoSubmitted:false};}
  function validSession(s){return s&&s.version===VERSION&&['study','exam','quick'].includes(s.mode)&&Array.isArray(s.questions)&&s.questions.length===questionCount(s.mode)&&new Set(s.questions.map(q=>q.id)).size===s.questions.length&&s.questions.every(q=>typeof q.id==='string'&&Array.isArray(q.options)&&q.options.length===4&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4)&&s.answers&&s.flags&&s.revealed&&Number.isInteger(s.index)&&s.index>=0&&s.index<s.questions.length&&Number.isFinite(s.startedAt)&&(s.mode==='exam'?Number.isFinite(s.deadline):s.deadline===null);}
  function timeLeft(s,now=Date.now()){return s.deadline===null?null:Math.max(0,s.deadline-now);}
  root.ExamEngine={VERSION,rng,shuffle,questionCount,draw,score,newSession,validSession,timeLeft};
})(typeof globalThis!=='undefined'?globalThis:this);
