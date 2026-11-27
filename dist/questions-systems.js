/* Spurningarnar eru ný æfingadæmi; heimildir vísa í blaðsíður afhentra glæruskráa. */
(() => {
  const bank = [];
  const files = {
    F8: 'F8 - Endurhönnun ferla.pdf', F9: 'F9 - Ferlahugbúnaður.pdf',
    F10: 'F10 - Ferlaframkvæmd og keyranleg ferlalíkön.pdf',
    F11: 'F11 - TiS kafli 3 til 5.pdf', F12: 'F12 - TiS kafli 6 og 7.pdf',
    CLD: 'Causal Loop Diagrams efni.pdf', SFD: 'F12 - Kerfi og CLD.pdf',
    F13: 'F13 - Stjórnun ferla.pdf', F14: 'F14 - BPM sem eiginleiki í starfseminni.pdf',
    RPA: 'Greining ferla og kerfa - tilbúið.pdf', CJM: 'Customer Journey Map Dæmi 1 (1).png'
  };
  // Rétt svar er fyrst hér; viðmótið stokkar valkostum og varðveitir tengingu við svarið.
  function add(group, lecture, topic, kind, pages, stem, options, explanation, diagram) {
    const item = { id: `sys-${String(bank.length + 1).padStart(3, '0')}`, group,
      lecture: lecture === 'CLD' || lecture === 'SFD' ? 'F12' : lecture,
      topic, kind, stem, options, answer: 0, explanation,
      source: { file: files[lecture], pages: lecture === 'CJM' ? [] : pages } };
    if (diagram) item.diagram = diagram;
    bank.push(item);
  }

  add('bpm','F8','Endurhönnun','application',[4],
    'Þjónusta styttir afgreiðslutíma með dýrri hraðleið en einingarkostnaður hækkar. Hvað lýsir þessu best?',
    ['Málamiðlun milli tíma og kostnaðar í djöflafjórþáttun','Sönnun þess að endurhönnun hafi mistekist á öllum sviðum','Aukinn sveigjanleiki án áhrifa á aðra þætti','Breyting á vöru sem getur ekki talist ferlaendurhönnun'],
    'Tími, kostnaður, gæði og sveigjanleiki geta togast á. Styttri tími getur því kostað meira; meta þarf breytinguna út frá markmiðum.');
  add('bpm','F8','Endurhönnun','application',[7,8],
    'Teymi finnur einn flöskuháls, lagar hann og tekur síðan næsta vanda fyrir. Hvaða nálgun passar best?',
    ['Skrefbundnar umbætur (transactional)','Róttæk heildarumbreyting (transformational)','Að skipta um markað án breytinga á ferli','Að hætta að mæla núverandi ferli'],
    'Transactional-nálgun vinnur með vandamál og flöskuhálsa í skrefum. Transformational-nálgun felur í sér róttækari breytingar á stærri skala.');
  add('bpm','F8','7FE','application',[9],
    'Vinnustofa hefur safnað lausnarhugmyndum. Nú á að prófa markvirkni og hagkvæmni þeirra með hermun. Hvaða stig 7FE er þetta?',
    ['Staðfesta (validate)','Undirbúa (prepare)','Framkalla (generate)','Hefja verkefni í HPR (initiate)'],
    'Á staðfestingarstiginu eru lausnir prófaðar. Undirbúningur skilgreinir meðal annars markmið og skorður; framköllun safnar hugmyndum.');
  add('bpm','F8','HPR','application',[11],
    'Mat á endurhönnuðu ferli sýnir lítinn ávinning og mikla áhættu. Hvað samræmist HPR-aðferðinni?',
    ['Að hætta við breytinguna á grundvelli matsins','Að innleiða alltaf fyrst og meta síðan','Að hunsa eigindlegt mat ef hermun hefur verið gerð','Að útiloka núverandi ferli úr samanburði'],
    'Mat í HPR getur leitt til þess að hætt sé við endurhönnun. Markmiðið er árangur, ekki innleiðing breytingar hvað sem hún kostar.');
  add('bpm','F8','HPR – viðskiptavinur','application',[13],
    'Umsækjandi sér strax í vefeyðublaði hvaða gögn vantar og leiðréttir þau sjálfur. Hvaða endurhönnunarregla sést skýrast?',
    ['Færa eftirlit nær viðskiptavini (control relocation)','Fjölga starfsmönnum (extra resources)','Útvista allri afgreiðslu (outsourcing)','Safna málum í stærri lotur (batching)'],
    'Athugun færist nær viðskiptavininum og hann getur brugðist við á innsláttarstigi. Þetta getur minnkað seinni leiðréttingar og samskipti.');
  add('bpm','F8','HPR – aðgerðir','application',[14],
    'Einfaldar umsóknir og flóknar umsóknir fara í ólíkar útgáfur af sömu yfirferðaraðgerð. Hvaða regla er notuð?',
    ['Triage','Samhliða vinnsla (parallelism)','Miðstýring (centralization)','Upplýsingageymsla (buffering)'],
    'Triage skiptir aðgerð í valkosti sem henta mismunandi málum. Hún merkir ekki að allir valkostir séu framkvæmdir samhliða.');
  add('bpm','F8','HPR – aðgerðir','application',[14],
    'Í stað þess að bíða til föstudags með allar pantanir er hver pöntun afgreidd um leið og hún er tilbúin. Hvaða regla á við?',
    ['Vinna hvert mál sérstaklega (case-based work)','Sameina litlar aðgerðir (activity composition)','Bæta við úttakseftirliti (control addition)','Treysta á þriðja aðila (trusted party)'],
    'Case-based work dregur úr lotuvinnslu og reglubundinni bið. Hér er bið eftir vikulegri lotu tekin út.');
  add('bpm','F8','HPR – röðun','application',[15],
    'Tvær óháðar skoðanir geta hvor um sig stöðvað umsókn. Þær hafna jafn stórum hluta mála, en önnur tekur 2 mínútur og hin 20. Hvora er eðlilegra að framkvæma fyrst?',
    ['2 mínútna skoðunina','20 mínútna skoðunina','Alltaf þá skoðun sem var fyrst í gamla ferlinu','Röðin hefur aldrei áhrif á vænta vinnu'],
    'Þegar höfnunarlíkur eru jafnar er ódýrari skoðunin sett fyrr samkvæmt knock-out-reglunni. Þá sparast lengri skoðun á málum sem stöðvast strax.');
  add('bpm','F8','HPR – skipulag','application',[17],
    'Reyndir afgreiðsluaðilar mega nú samþykkja venjulegar beiðnir sjálfir í stað þess að senda þær alltaf til millistjórnanda. Hvaða regla á við?',
    ['Valdefling (empower)','Aukin sérhæfing með þrengri verkefnum','Miðlæg sameining landfræðilegra teyma','Útvistun ákvarðana til birgja'],
    'Valdefling flytur ákvarðanavald til starfsfólks sem sinnir vinnunni. Hún getur fækkað afhendingum og bið eftir samþykki.');
  add('bpm','F8','HPR – upplýsingar','application',[18],
    'Fyrirtæki geymir verðskrá birgis og fær uppfærslur í stað þess að biðja birginn um sömu upplýsingar fyrir hvert mál. Hvaða regla á við?',
    ['Buffering','Triage','Knock-out','Case assignment'],
    'Buffering felst hér í að geyma upplýsingar og fá uppfærslur í stað endurtekinna fyrirspurna til ytri aðila.');
  add('bpm','F8','HPR – samhliða vinna','calculation',[15],
    'Tvær óháðar yfirferðir taka 12 og 8 mínútur. Hvor hefur eigin starfsmann. Þær fara úr raðvinnslu í samtímis vinnslu án biðar. Hversu mikið styttist þessi hluti ferilsins?',
    ['Um 8 mínútur','Um 4 mínútur','Um 12 mínútur','Um 20 mínútur'],
    'Raðvinnsla tekur 12 + 8 = 20 mínútur. Samhliða vinna tekur max(12, 8) = 12 mínútur. Styttingin er því 8 mínútur; vinnumagnið er enn 20 starfsmannamínútur.');
  add('bpm','F8','HPR – undantekningar','application',[15],
    'Flest mál eru einföld en nokkur þurfa sérfræðirannsókn. Öll mál bíða nú eftir sameiginlegri sérfræðimeðferð. Hvaða breyting fylgir exception-reglunni?',
    ['Hanna venjulega leið fyrir dæmigerð mál og sérstaka leið fyrir frávik','Bæta sérfræðirannsókn við öll mál áður en þau eru flokkuð','Láta einföld mál alltaf bíða eftir þeim flóknustu','Fella allar undantekningar út úr líkaninu'],
    'Exception-reglan einangrar óvenjuleg mál frá venjulegu flæði. Undantekningar eru enn meðhöndlaðar, en hægja síður á dæmigerðum málum.');

  add('bpm','F9','BPMS','application',[5,8],
    'Kerfi stofnar mál, útdeilir verkefnum og kallar á þjónustur samkvæmt ferlalíkani. Hvaða BPMS-eining sinnir þessu fyrst og fremst?',
    ['Keyrsluvél (execution engine)','Teikniverkfæri fyrir líkan','Birtingarlag stjórnendamælaborðs','Skjalasafn fyrir útgefnar verklagsreglur'],
    'Keyrsluvélin heldur utan um keyranleg tilvik, dreifir vinnu og samhæfir sjálfvirkar aðgerðir. Líkangerðarverkfærið skilgreinir líkanið.');
  add('bpm','F9','Vinnulisti','application',[10],
    'Starfsmaður opnar verkefnahólf, sér þau mál sem bíða hans og tekur eitt til afgreiðslu. Hvaða eining er þetta?',
    ['Vinnulistastýring (worklist handler)','Ytri lánshæfisþjónusta','Ferlalíkanasafn (model repository)','Gagnavörpun (data mapping)'],
    'Worklist handler birtir og býður starfsfólki verkefni. Keyrsluvélin ákveður hvaða verkefni eru tilbúin og heldur utan um stöðu þeirra.');
  add('bpm','F9','Ytri þjónustur','application',[11],
    'BPMS sækir sjálfvirkt lánshæfismat frá öðru kerfi. Hvað þarf ytra kerfið að bjóða til að þessi þjónustutenging virki?',
    ['Þjónustuviðmót sem keyrsluvélin getur kallað á','Prentaða handbók fyrir afgreiðslustarfsmann','Sama útlit á skjám og BPMS-kerfið','Sérstakt sund í líkani án tæknilegrar tengingar'],
    'Ytri þjónusta verður að vera aðgengileg keyrsluvélinni um þjónustuviðmót. Myndræn líkanstákn eða sambærilegt skjáútlit búa ekki til tenginguna.');
  add('bpm','F9','Reglufylgni','application',[13,17],
    'Kerfi kemur í veg fyrir að sá sem stofnar greiðslubeiðni samþykki hana líka. Hvaða ávinningur BPMS kemur skýrast fram?',
    ['Reglufylgni með aðskilnaði starfa','Minni vinna við að flytja gögn milli skjáa','Sveigjanleg samþætting ólíkra UT-kerfa','Gegnsæi með sögulegum meðaltölum ferla'],
    'BPMS getur framfylgt reglum um aðskilnað starfa. Hér er óheimil samsetning hlutverka stöðvuð í keyrslu.');
  add('bpm','F9','Keyrsluupplýsingar','application',[16],
    'Þjónustustjóri vill vita hvar tiltekin opin pöntun er stödd núna. Hvaða gögn þarf helst?',
    ['Keyrsluupplýsingar um þetta mál','Meðaltöl lokaðra mála síðasta árs ein og sér','Hönnunarlíkanið án upplýsinga um tilvikið','Samanburð á frammistöðu deilda síðasta árs'],
    'Upplýsingar um núverandi stöðu einstakra mála eru keyrsluupplýsingar. Söguleg meðaltöl lýsa liðinni framkvæmd og svara ekki stöðu þessa máls.');
  add('bpm','F9','Innleiðing BPMS','application',[18],
    'Nýtt BPMS getur ekki haft samskipti við lokað eldra kerfi. Hvernig flokkast þessi innleiðingarvandi helst?',
    ['Tæknileg samþættingaráskorun','Menningarleg andstaða starfsmanna','Óskýr stefna um árangursmælingu','Mistök við val á mælieiningu'],
    'Takmarkaðar tengingar milli kerfa eru tæknileg áskorun. Millilag eða aðrar samþættingarleiðir geta hjálpað; vandinn er ekki sjálfkrafa andstaða starfsfólks.');
  add('bpm','F9','Breytingastjórnun','application',[24],
    'Teymi lýkur fyrstu vel heppnuðu innleiðingu og leggur þá niður alla eftirfylgni. Nýju vinnubrögðin hverfa smám saman. Hver er líklegasta lærdómsályktunin?',
    ['Sigri var lýst yfir of snemma og breytingin ekki fest í sessi','Fyrstu sigrar voru of litlir til að mega nýtast í breytingastarfi','Staðbundin aðlögun var orsökin þótt ekkert slíkt sé nefnt','Tæknileg samþætting hefur verið ranglega flokkuð sem söguleg gögn'],
    'Glærurnar vara við of snemmbærri siguryfirlýsingu. Fyrstu sigrar þurfa að styðja áframhaldandi umbætur og innfestingu.');
  add('bpm','F9','Breytingastjórnun','application',[25],
    'Umbótaverkefni nær illa fótfestu þar sem allar deildir verða að taka upp nákvæmlega sömu lausn án staðbundinnar aðlögunar. Hvaða viðbragð samræmist glærunum best?',
    ['Leyfa deildum að aðlaga breytinguna innan sameiginlegrar stefnu','Miðstýra útfærslunni enn frekar og meta árangur út frá samræmi einu','Setja meiri áherslu á nýtt skipurit en raunverulega tileinkun vinnubragða','Ljúka verkefninu eftir fyrstu þjálfun og láta hverja deild hefja nýtt óháð verkefni'],
    'Glærurnar gagnrýna þá trú að miðlægt breytingaátak eitt nægi. Svigrúm deilda til að tileinka sér breytinguna hjálpar henni að festa rætur.');

  add('bpm','F10','Keyranleg líkön','application',[4,5],
    'BPMN-yfirlit lýsir ferli vel í vinnustofu en vantar gögn, þjónustutengingar og úthlutunarreglur. Hvað þarf áður en BPMS getur keyrt það?',
    ['Útfæra hugtakalíkanið í keyranlegt líkan','Nota líkanið óbreytt því BPMN-táknin skilgreini sjálf þjónustutengingarnar','Skipta öllum notandaaðgerðum í þjónustuaðgerðir óháð innihaldi','Draga líkanið saman svo færri aðgerðir komi í stað gagna og úthlutunarreglna'],
    'Hugtakalíkön eru viljandi óhlutbundin. Keyrsla krefst nánari útfærslu á meðal annars gögnum, aðgerðum og keyrslueiginleikum.');
  add('bpm','F10','Tegundir aðgerða','application',[6,8],
    'Starfsmaður tekur ákvörðun í skjámynd sem BPMS birtir og skilar niðurstöðunni þar. Hvernig er aðgerðin flokkuð?',
    ['Notandaaðgerð (user task)','Handvirk aðgerð án hugbúnaðar (manual task)','Skriftuaðgerð (script task)','Þjónustuaðgerð framkvæmd án starfsmanns'],
    'User task sameinar mannlega vinnu og stuðning kerfis. Manual task fer fram án hugbúnaðaraðstoðar; script og service tasks eru sjálfvirkar.');
  add('bpm','F10','Sjálfvirkar aðgerðir','application',[9,16],
    'Lítið kóðabrot er keyrt innan BPMS til að reikna afslátt. Hvaða BPMN-aðgerð passar best?',
    ['Script task','Manual task','Receive task','User task'],
    'Script task keyrir kóða innan BPMS. Receive task bíður skilaboða, user task þarf þátttöku manns og manual task er án hugbúnaðaraðstoðar.');
  add('bpm','F10','Handvirk vinna','application',[10],
    'Vöruhúsmaður sækir vöru á hillu. BPMS á að vita hvenær þessu er lokið. Hver er heppileg útfærsla?',
    ['Láta skönnun strikamerkis senda kerfinu lokamerki','Skrá lok sjálfkrafa þegar verkefnið er fyrst boðið á vinnulista','Láta áætlaðan meðaltíma einn ráða því hvenær verkefnið telst lokið','Skrá einungis að starfsmaður hafi tekið verkefnið að sér'],
    'Handvirk vinna verður sýnileg BPMS með tæknilegri tengingu eða staðfestingu í notandaaðgerð. Strikamerkisskönnun er dæmi um slíka tengingu.');
  add('bpm','F10','Fullgera líkan','application',[11],
    'XOR-hlið á að velja leið eftir upphæð reiknings en líkanið skilgreinir hvorki upphæðina né uppruna hennar. Hvað vantar?',
    ['Gögn sem ákvörðunin byggist á','Úthlutunarreglu um hvaða starfsmaður tekur lengstu biðröðina','Samþættingu tveggja samliggjandi aðgerða á sama starfsmann','Yfirlit yfir sögulega meðaltalsupphæð án gagna um núverandi mál'],
    'Ákvarðanir í keyranlegu líkani þurfa skilgreind og aðgengileg gögn. Merking á teikningu ein og sér tryggir ekki að skilyrði geti verið metið.');
  add('bpm','F10','Nákvæmnisstig','application',[12],
    'Ein aðgerð í hugtakalíkani felur bæði í sér útreikning endurskoðanda og samþykki fjármálastjóra. Hvernig er eðlilegt að undirbúa keyrslu?',
    ['Skipta henni í fínni aðgerðir sem má úthluta rétt','Halda henni einni og láta þann sem tekur hana fyrst ljúka báðum hlutum','Sameina hana við aðra aðgerð sem enn annar starfsmaður sinnir','Skipta aðeins um heiti hennar og halda úthlutuninni óskilgreindri'],
    'Þegar fleiri en einn aðili þarf að framkvæma mismunandi hluta aðgerðar er hún brotin niður svo úthlutun og keyrsla verði skýr.');
  add('bpm','F10','Úthlutun vinnu','application',[17],
    'Við hönnun er ákveðið að öll ný lánamál bjóðist starfsmönnum með hlutverkið „lánaráðgjafi“. Hvaða úthlutunarregla er þetta?',
    ['Hlutverkamiðuð úthlutun (role-based allocation)','Bein úthlutun á nafngreindan einstakling','Söguleg úthlutun eftir fyrri árangri','Stysta biðröð óháð hlutverki'],
    'Hlutverkið er skilgreint í hönnun og verkefni boðin aðilum sem tilheyra því í keyrslu. Enginn tiltekinn einstaklingur er festur fyrirfram.');
  add('bpm','F10','Úthlutun vinnu','application',[18],
    'Sami ráðgjafi á að taka við umsókn og sinna lokasamtali vegna þess að hann þekkir málið. Hvaða regla tengir þessar tvær aðgerðir?',
    ['Retain familiar','Separation of duties','Random allocation','Round-robin allocation'],
    'Retain familiar lætur sama einstakling framkvæma tilteknar aðgerðir. Separation of duties krefst hins vegar ólíkra einstaklinga.');
  add('bpm','F10','Úthlutun vinnu','application',[19],
    'Þrír jafnhæfir starfsmenn eru með 2, 5 og 3 verkefni í bið. Nýtt verkefni er sent til þess fyrsta vegna biðraðarlengdar. Hvaða regla er notuð?',
    ['Shortest queue','Round-robin','History-based allocation','Direct allocation við hönnun'],
    'Shortest queue velur stystu verkefnabiðröðina. Hún er ekki það sama og að fara reglulega í hring milli starfsmanna.');
  add('bpm','F10','Keyrslueiginleikar','application',[14,16],
    'Þjónustuaðgerð er á réttum stað í líkani, en engar upplýsingar fylgja um hvernig kalla eigi á ytra kerfið. Hvaða vinna er eftir?',
    ['Tilgreina keyrslueiginleika og þjónustutengingu','Endurskoða einungis röð verkefna í hugtakalíkaninu','Ákveða hvort tvær notandaaðgerðir megi sameina','Flokka aðeins aðgerðina sem sjálfvirka án frekari útfærslu'],
    'Tilgreina þarf hvernig þjónustuaðgerðin talar við ytra kerfið, ásamt viðeigandi gögnum. Rétt staðsetning í flæðinu er ekki næg.');

  add('bpm','F13','Ferlaeftirlit','application',[4],
    'Greinandi skoðar atburðaskrá allra lokaðra mála frá síðasta ársfjórðungi. Hvaða tegund eftirlits er þetta?',
    ['Eftirlit með sögulegum keyrslum (offline)','Rauntímaeftirlit eingöngu með opnum málum (online)','Forspá um framhald eins máls sem er enn opið','Hermun framtíðarferils með tilbúnum gögnum'],
    'Offline monitoring greinir sögulegar keyrslur. Online monitoring metur mál sem eru enn í gangi út frá ófullgerðum atburðarunum.');
  add('bpm','F13','Mælaborð','application',[6,9],
    'Framkvæmdastjórn vill heildarmynd af árangri nokkurra ferlaflokka yfir margar frammistöðuvíddir. Hvaða mælaborð hentar best?',
    ['Stefnumiðað mælaborð (strategic)','Rekstrarmælaborð fyrir viðbrögð við einstökum opnum málum','Taktískt mælaborð með ítarlegri greiningu eins ferils','Vinnulisti sem birtir aðeins úthlutuð verkefni einstaklings'],
    'Stefnumiðuð mælaborð sameina mælingar á háu stigi fyrir yfirstjórn. Þau geta tekið saman marga ferla og margar mælingar innan frammistöðuvíddar.');
  add('bpm','F13','Atburðaskrár','application',[16],
    'Atburðir eru tímastimplaðir og aðgerðir nafngreindar en ekki er ljóst hvaða pöntun hver atburður tilheyrir. Hvaða áskorun er þetta?',
    ['Tenging atburða við mál (correlation)','Of fínt nákvæmnisstig (granularity)','Ófullgerð langtímamál (longevity)','Seinkun tímastimplunar (timestamping)'],
    'Correlation-áskorunin er að finna tilvikið sem atburður tilheyrir. Án þess er ekki hægt að endurgera áreiðanlegar atburðarunur einstakra mála.');
  add('bpm','F13','Atburðaskrár','application',[16],
    'Skýrslan nær yfir síðustu tvær vikur en afgreiðsla umsókna tekur oft tvo mánuði. Hvað þarf sérstaklega að varast?',
    ['Að nýbyrjuð mál hafi ekki enn verið athuguð til loka','Að gögnin séu of nákvæm af þeirri ástæðu einni að tímabilið sé stutt','Að málsnúmer séu ótengd atburðum af þeirri ástæðu einni að afgreiðsla taki lengri tíma','Að allir tímastimplar hljóti að vera skráðir of seint'],
    'Longevity-áskorunin felur í sér ófullkomna athugun langra mála. Afmarkað tímabil getur skorið byrjun eða endi þeirra af.');
  add('bpm','F13','Ferlaköfun','application',[17],
    'Teymi hefur atburðaskrá en ekkert ferlalíkan og vill búa til líkan af sýnilegri framkvæmd. Hvaða aðferð á við?',
    ['Sjálfvirk ferlauppgötvun','Samræmisathugun við fyrirliggjandi líkan','Afbrigðagreining tveggja atburðaskráa','Frammistöðugreining sem auðgar fyrirliggjandi líkan'],
    'Sjálfvirk ferlauppgötvun tekur atburðaskrá sem inntak og skilar ferlalíkani. Samræmisathugun þarf bæði skrá og viðmiðunarlíkan.');
  add('bpm','F13','Samræmisathugun','application',[27,28],
    'Reglan er að samþykkja pöntun áður en hún er send. Skráin sýnir „stofna, senda, samþykkja“. Hvaða frávik sést?',
    ['Brot á röðunarskorðu','Brot á skylduskorðu vegna þess að samþykki vanti alveg','Brot á einkvæmniskorðu vegna þess að bæði samþykki og sending séu óheimil í sama máli','Engin frávik því báðar aðgerðir koma einhvern tíma fyrir'],
    'Röðunarskorða krefst ákveðinnar raðar. Þótt báðar aðgerðir séu til staðar er samþykkið of seint miðað við regluna.');
  add('bpm','F13','Frammistöðugreining','application',[24,25],
    'Fyrirliggjandi líkan er litað eftir biðtíma úr atburðaskrá til að finna tafir. Hvaða aðferð er notuð?',
    ['Process performance mining','Sjálfvirk uppgötvun án fyrirliggjandi líkans','Samræmisathugun á leyfilegri aðgerðarröð','Afbrigðagreining tveggja aðskildra atburðaskráa'],
    'Frammistöðugreining auðgar líkan með upplýsingum úr atburðaskrá, svo sem biðtímum. Markmiðið er að sýna hvernig ferlið stendur sig.');
  add('bpm','F13','Afbrigðagreining','application',[29],
    'Teymi ber saman atburðaskrá mála sem afgreiddust á réttum tíma og skrá mála sem urðu of sein. Hvað er þetta?',
    ['Afbrigðagreining (variants analysis)','Samræmisathugun einnar skrár gagnvart viðmiðunarlíkani','Sjálfvirk uppgötvun líkans úr einni atburðaskrá','Úthlutun nýrra mála með keyrsluvél'],
    'Variants analysis ber saman tvær atburðaskrár og greinir mun milli ferlaframkvæmda, til dæmis milli jákvæðrar og neikvæðrar útkomu.');
  add('bpm','F13','Tímamælingar','calculation',[25],
    'Mál hefst kl. 09:00 og lýkur kl. 10:10. Virk vinnsla tók samtals 25 mínútur og önnur tímanotkun var bið. Hver var biðtíminn?',
    ['45 mínútur','25 mínútur','70 mínútur','95 mínútur'],
    'Heildartími málsins er 70 mínútur. Biðtími er 70 − 25 = 45 mínútur, miðað við að ekkert annað en vinnsla og bið komi við sögu.');
  add('bpm','F13','Samræmisathugun','application',[28],
    'Líkan krefst yfirferðar áður en máli er lokað. Atburðaskrá sýnir mál sem er stofnað og lokað án yfirferðar. Hvaða skorða er brotin?',
    ['Skylduskorða (mandatoriness)','Einkvæmniskorða sem bannar tvær aðgerðir saman','Röðunarskorða þar sem yfirferð sé til staðar en komi of seint','Regla um að stofnun og lokun megi ekki koma fyrir í sama máli'],
    'Yfirferð er skylduaðgerð sem vantar í framkvæmdina. Einkvæmniskorða fjallar hins vegar um að ákveðnar aðgerðir megi ekki báðar koma fyrir í sama máli.');

  add('bpm','F14','Árangur BPM','application',[4],
    'Fyrirtæki hefur teiknað hundruð vandaðra líkana en þjónustumarkmið þess nást ekki betur. Hvað er réttasta matið á árangri BPM?',
    ['Meta þarf tengslin við árangur og stefnumarkmið starfseminnar','Meta árangur eingöngu út frá fjölda og gæðum skjalfestra líkana','Láta tæknilega fylgni við líkangerðarstaðla koma í stað árangursmælinga','Nota fjölda starfsmanna sem sóttu BPM-námskeið sem fullnægjandi lokamælikvarða'],
    'Glærurnar tengja BPM-árangur við árangur starfseminnar. Góð verkfæri og líkön eru stuðningur, ekki sjálfstætt lokamarkmið.');
  add('bpm','F14','Stefnumiðun','application',[7],
    'Ný stefna leggur áherslu á hraðari þjónustu, en val á umbótaverkefnum tekur ekkert mið af því. Hvaða þroskaþátt vantar helst?',
    ['Tengingu BPM við stefnu (strategic alignment)','Governance: skýrari reglur um hver samþykkir útgefið líkan','Upplýsingatækni: fleiri líkanagerðarverkfæri fyrir sömu verkefni','Fólk: meiri þjálfun í táknmáli án breytingar á verkefnavali'],
    'Strategic alignment tengir stefnu, val BPM-verkefna, ferlagetu og árangursmælingar. Hér vantar tengingu milli stefnu og verkefnavals.');
  add('bpm','F14','Stjórnskipulag BPM','application',[8],
    'Enginn veit hver má samþykkja ferlabreytingu og deildir nota ósamræmdar leiðbeiningar. Hvaða þroskaþátt þarf helst að styrkja?',
    ['Stjórnskipulag og ábyrgð (governance)','Stefnumiðun: nýjar áherslur í viðskiptastefnu','Upplýsingatækni: aukin afköst þjónustukalla','Fólk: dýpri sérþekking á einni greiningaraðferð'],
    'Governance felur meðal annars í sér ákvarðanatöku, ábyrgð, staðla og gæðaeftirlit í BPM. Þetta eru vandamálin sem lýst er.');
  add('bpm','F14','RACI','application',[9],
    'Ráðgjafi þarf að gefa álit sitt áður en ferlabreyting er samþykkt, en tekur hvorki lokaákvörðun né framkvæmir breytinguna. Hvaða RACI-hlutverk passar?',
    ['Ráðgefandi (consulted)','Upplýstur (informed)','Framkvæmdarábyrgur (responsible)','Lokaábyrgur/eigandi (accountable)'],
    'Consulted veitir ráð áður en ákvörðun eða framkvæmd verður. Informed fær upplýsingar eftir á, en tekur ekki sjálfkrafa þátt í ráðgjöf.');
  add('bpm','F14','Fólk og færni','application',[12],
    'Ferlagreinendur kunna illa aðferðafræðina og starfsmenn þekkja aðeins eigin verkþátt. Hvaða þroskaþáttur tekur beint á þessu?',
    ['Fólk (people): ferlaþekking, BPM-þekking og þjálfun','Upplýsingatækni: tæknilegur stuðningur við hvern líftímafasa','Governance: formlegar samþykktarheimildir fyrir breytingar','Stefnumiðun: tenging verkefnavals við samkeppnisstefnu'],
    'People-þátturinn nær yfir þekkingu á ferlum og BPM, þjálfun, samskipti og leiðtogahæfni. Nýr hugbúnaður einn leysir ekki þekkingarskort.');
  add('bpm','F14','Menning','application',[13],
    'Tæknin og ábyrgðin eru skýr en stjórnendur styðja ekki ferlaumbætur og starfsmenn forðast breytingar. Hvaða þáttur er veikastur samkvæmt lýsingunni?',
    ['Menning (culture)','Upplýsingatækni: samþætting kerfa','Governance: skilgreining formlegrar ábyrgðar','Aðferðir (methods): val á tölulegum greiningartækjum'],
    'Menningarþátturinn nær til viðbragða við breytingum, ferlagilda og stuðnings stjórnenda. Vandinn er því ekki fyrst og fremst tæknilegur.');
  add('bpm','F14','Þroskastig BPM','application',[17],
    'BPM er sjaldan notað og einstök verkefni eru tilviljanakennd og einangruð. Hvaða stig í fimm stiga BPM-líkaninu passar best?',
    ['Stig 1: Initial','Stig 3: Defined','Stig 4: Quantitatively Managed','Stig 5: Optimizing'],
    'Stig 1 lýsir litlum, tilviljanakenndum og einangruðum BPM-verkefnum. Hærri stig krefjast meiri samhæfingar, útbreiðslu og kerfisbundinna vinnubragða.');
  add('bpm','F14','Þroskastig BPM','application',[18,19],
    'BPM er samþætt daglegri stjórnun og stefnu, aðferðir eru almennt viðurkenndar og stöðugar umbætur útbreiddar. Hvaða stig passar best?',
    ['Stig 5: Optimizing','Stig 1: Initial','Stig 2: Managed','Stig 3: Defined'],
    'Optimizing lýsir innfelldri ferlastjórnun og stöðugum umbótum í allri skipulagsheildinni. Stakur árangursríkur tilraunaverkefnisferill nægir ekki til þess.');

  // Ný dæmi úr kerfishugsun leggja áherslu á hegðun, uppbyggingu og endurgjöf.
  add('systems','F11','Seigla','application',[2],
    'Dreifikerfi getur haldið þjónustu gangandi þegar ein leið bilar því aðrar leiðir taka við. Hvaða eiginleiki kemur skýrast fram?',
    ['Seigla með varaleiðum og endurgjöf','Sjálfskipulagning með nýjum tegundum tengsla','Hámörkun nýtingar hverrar leiðar fyrir sig','Stöðugleiki sem byggist á að engin bilun geti átt sér stað'],
    'Seigla er hæfni til að þola álag og ná sér aftur. Varaleiðir geta varðveitt virkni þegar einn hluti bregst.');
  add('systems','F11','Seigla og stöðugleiki','application',[3],
    'Verksmiðja fjarlægir allar varabirgðir og varaleiðir til að auka skammtímaframleiðni. Afköst eru stöðug þar til lítil bilun stöðvar allt. Hvað sýnir þetta?',
    ['Stöðug útkoma við venjulegar aðstæður tryggir ekki seiglu','Aukin framleiðni tryggir alltaf aukna seiglu','Varaleiðir geta aldrei haft virði','Seigla merkir að engar breytingar verði í kerfi'],
    'Seigla og stöðugleiki eru ekki það sama. Framleiðniaukning sem fjarlægir varnir getur gert kerfi viðkvæmara fyrir röskun.');
  add('systems','F11','Stigveldi','application',[5],
    'Innkaupadeild lækkar sinn kostnað með mjög stórum pöntunum, en lagerkostnaður alls fyrirtækisins hækkar meira. Hvaða kerfissýn vantar helst?',
    ['Að meta áhrif undirkerfis á heildina','Að meta innkaup eingöngu eftir kaupverði á einingu','Að miða árangur aðeins við kostnað innkaupadeildar','Að líta á lagerkostnað sem óháðan ákvörðuninni um pöntunarstærð'],
    'Undirkerfi eru hluti af stærri heild. Breyting sem hjálpar einni einingu getur skaðað aðrar, svo meta þarf heildaráhrifin.');
  add('systems','F11','Tafir','application',[6],
    'Stjórnandi fjölgar pöntunum daglega því birgðir hafa ekki enn borist. Afhending tekur fjórar vikur og síðar verður offramboð. Hver er lykilskýringin?',
    ['Viðbrögðin taka ekki tillit til tafar í kerfinu','Aukið innflæði minnkar alltaf birgðir','Jákvæð orsakatengsl merkja að allar ákvarðanir séu góðar','Jafnvægisleitandi lykkjur útiloka sveiflur'],
    'Að bregðast endurtekið við áður en eldri aðgerðir skila sér getur valdið ofviðbrögðum og sveiflum. Tímatöf þarf að vera hluti af skilningi kerfisins.');
  add('systems','F11','Afmörkuð skynsemi','application',[7],
    'Hver deild pantar aukabirgðir til að tryggja sig gegn skorti en sér ekki pantanir hinna. Saman skapa þær óþarfa offramboð. Hvaða hugtak lýsir þessu best?',
    ['Afmörkuð skynsemi (bounded rationality)','Stigmögnun vegna gagnkvæmrar samkeppni deilda','Lækkun markmiða eftir endurtekið tap','Árangur styrkir árangur með sífellt ójafnari umbun'],
    'Ákvarðanir geta virst skynsamlegar með þeim staðbundnu upplýsingum sem aðili hefur, en samt skapað óheppilega heildarniðurstöðu.');
  add('systems','F11','Takmarkandi þættir','application',[8],
    'Aukin vélageta hækkar framleiðslu fyrst, en síðan stöðvast aukningin vegna skorts á hráefni. Hvað hefur gerst?',
    ['Annar takmarkandi þáttur hefur tekið við','Kerfið hefur losnað varanlega við öll vaxtarmörk','Fyrri flöskuhálsinn gat því aldrei verið raunverulegur','Hráefni getur ekki takmarkað framleiðslukerfi'],
    'Þegar einum takmarkandi þætti er aflétt getur annar orðið ráðandi. Það þýðir ekki að fyrsta takmörkunin hafi verið ímynduð.');
  add('systems','F11','Atburðir og uppbygging','application',[9],
    'Verslun bregst við hverri birgðaþurrð sem einstöku óhappi þótt sama mynstur endurtaki sig mánaðarlega. Hvað væri gagnlegasta næsta greining?',
    ['Skoða hegðun yfir tíma og reglurnar sem skapa mynstrið','Rannsaka aðeins síðasta óhappið og sleppa samanburði við eldri atvik','Reikna ársmeðaltal sem felur mánaðarlegu sveiflurnar','Velja einn tilviljanakenndan dag sem fulltrúi alls kerfisins'],
    'Kerfishugsun leitar undir atburðina að mynstrum, uppbyggingu og endurgjöf. Einstök viðbrögð skýra ekki endurtekna hegðun.');
  add('systems','F11','Afmörkun','application',[10],
    'Líkan af afhendingarþjónustu sleppir birgjum, þótt tafir þeirra ráði afhendingartímanum. Hvað er réttasta ályktunin?',
    ['Endurskoða þarf mörk líkansins svo mikilvæg áhrif komist að','Allar afmarkanir eru rangar og hvert líkan verður að innihalda heiminn allan','Breytur utan líkansins geta ekki haft áhrif á raunferlið','Að fjarlægja fleiri tengsl mun sjálfkrafa bæta skýringuna'],
    'Afmörkun er nauðsynleg einföldun, en má ekki fela lykilorsakir þess vandamáls sem á að skýra. Mörkin ráðast af tilgangi líkansins.');
  add('systems','F11','Sameiginleg auðlind','application',[12],
    'Hvert fyrirtæki eykur eigin vatnstöku úr sameiginlegum grunnvatnsforða. Ávinningurinn er einstaklingsbundinn en tjónið dreifist á alla. Hvaða gildra á við?',
    ['Harmleikur sameignar (tragedy of the commons)','Að færa byrðina til utanaðkomandi hjálpara','Lækkandi frammistöðuviðmið','Árangur styrkir árangur vegna ójafnrar úthlutunar tækifæra'],
    'Sameiginleg auðlind getur gengið til þurrðar þegar einstaklingar fá ávinninginn af aukinni nýtingu en bera aðeins hluta kostnaðarins.');
  add('systems','F11','Lækkandi viðmið','application',[12],
    'Þjónustumarkmið er lækkað eftir hvert slakt ár með röksemdinni „þetta er bara raunveruleikinn“. Slakari þjónusta verður svo nýtt viðmið. Hvaða gildra á við?',
    ['Sígandi frammistöðuviðmið (drift to low performance)','Stigmögnun milli samkeppnisaðila','Harmleikur sameignar','Að færa byrðina til utanaðkomandi hjálpara'],
    'Markmiðið er látið síga með slakri frammistöðu og kerfið missir þrýsting til umbóta. Að varðveita metnaðarfull viðmið getur unnið gegn þessu.');
  add('systems','F11','Rangt markmið','application',[13],
    'Þjónustuver umbunar aðeins fyrir fjölda lokaðra erinda. Starfsfólk lokar því óleystum erindum sem viðskiptavinir þurfa að enduropna. Hvað er helsta vandamálið?',
    ['Mælikvarðinn er orðinn rangt staðgengilsmarkmið','Of fá mál eru tekin með í umbunarkerfið en mælikvarðinn sjálfur nægir','Markmiðið hefur verið lækkað eftir slaka frammistöðu','Þjónustuverið hefur orðið háð utanaðkomandi aðila sem sinnir sífellt stærri hluta vinnunnar'],
    'Kerfið hámarkar það sem umbunað er fyrir, ekki endilega raunverulegt markmið. Hér þarf árangur að endurspegla lausn erinda og þjónustu.');
  add('systems','F11','Mótstaða við stefnu','application',[13],
    'Þegar stjórnendur ýta birgðum niður auka söluteymi öryggispantanir til mótvægis. Aukinn þrýstingur leiðir ítrekað til sterkari mótaðgerða. Hvað þarf helst að skoða?',
    ['Ólík markmið aðila og endurgjöf sem vinnur gegn inngripinu','Aðeins hvort skráning birgðatalna geti orðið nákvæmari','Aðeins þann styrk sem stjórnendur beita, án skoðunar á hvötum söluteymis','Hvort hægt sé að hætta að sýna söluteyminu birgðastöðu og halda sömu markmiðum'],
    'Þegar aðilar toga í ólíkar áttir geta aðgerðir þeirra unnið hver á móti annarri. Kerfislæg lausn þarf að taka mið af markmiðum og mótviðbrögðum.');
  add('systems','F11','Að spila á reglurnar','application',[14],
    'Deild eyðir afgangi fjárveitingar í óþarfa kaup svo fjárveiting næsta árs verði ekki lækkuð. Hvaða viðbragð beinist best að kerfisorsökinni?',
    ['Endurskoða fjárveitingaregluna og hvata hennar','Hvetja til enn hraðari eyðslu í desember','Mæla aðeins hvort fjárveiting hafi klárast','Álykta að reglan hafi engin áhrif á hegðun'],
    'Reglan umbunar eyðslu fremur en hagkvæmni og býður upp á að spila á hana. Breyttir hvatar geta fært hegðun nær raunverulegum tilgangi.');
  add('systems','F11','Stigmögnun','application',[14],
    'Tvö fyrirtæki svara hverri auglýsingaherferð hins með enn stærri herferð. Kostnaður beggja hækkar stöðugt. Hvaða kerfisgildra sést?',
    ['Stigmögnun (escalation)','Að færa byrðina til utanaðkomandi hjálpara','Harmleikur sameignar','Markmið sem lækkar eftir slaka frammistöðu'],
    'Stigmögnun verður þegar aðilar bregðast sífellt sterkari við hvor öðrum. Gagnkvæm viðbrögð geta aukið álag eða kostnað fyrir báða.');
  add('systems','F11','Að færa byrðina','application',[15],
    'Ráðgjafi leysir alltaf sömu rekstrarvilluna. Innra teymið hættir að læra lausnina og verður sífellt háðara ráðgjafanum. Hvaða úrræði hittir best á gildruna?',
    ['Byggja upp hæfni innra teymisins til að leysa grunnvandann','Fjarlægja öll tækifæri teymisins til að læra','Tryggja að ráðgjafinn haldi lausninni leyndri','Mæla eingöngu hversu oft ráðgjafinn kemur'],
    'Byrðin færist til utanaðkomandi aðila á kostnað eigin getu kerfisins. Að efla eigin hæfni dregur úr því ósjálfstæði.');
  add('systems','F11','Árangur styrkir árangur','application',[15],
    'Teymið með bestu sölu fær alla næstu þjálfun og eykur því forskot sitt. Önnur teymi fá sífellt minni tækifæri. Hvaða mynstur er þetta?',
    ['Success to the successful','Að færa byrðina til utanaðkomandi hjálpara','Lækkandi frammistöðuviðmið','Jafnvægisleit sem jafnar forskot keppinauta'],
    'Fyrri árangur veitir aðföng sem auðvelda síðari árangur. Þannig styrkir forskotið sig sjálft og getur lokað öðrum leiðina.');

  add('systems','F12','Vogarpunktar – stikar','application',[3],
    'Stjórnandi breytir vikulegu sölumarkmiði úr 100 í 105 en heldur sömu hvötum, reglum og endurgjöf. Hvers konar breyting er þetta fyrst og fremst?',
    ['Breyting á tölulegum stika','Breyting á grunnviðhorfi kerfisins','Breyting á sjálfskipulagsgetu','Endurbygging allra birgða- og flæðistengsla'],
    'Hér er breytt tölu innan sama kerfis. Slíkar breytingar geta skipt máli staðbundið en breyta ekki sjálfkrafa undirliggjandi uppbyggingu.');
  add('systems','F12','Vogarpunktar – varabirgðir','application',[4],
    'Verslun vill þola tveggja daga afhendingartöf og eykur því öryggisbirgðir. Hvaða lýsing er réttust?',
    ['Stærri varabirgðir geta aukið stöðugleika en kosta geymslu og fjármagn','Stærri varabirgðir bæta allar víddir alltaf án kostnaðar','Breytingin fjarlægir allar upplýsingar úr kerfinu','Varabirgðir og flæðishraði eru sama stærðin'],
    'Birgðir sem eru stórar miðað við flæði geta dempað sveiflur. Þeim fylgir þó kostnaður og því þarf að meta hentuga stærð.');
  add('systems','F12','Vogarpunktar – uppbygging','application',[5],
    'Borg bætir við nýrri járnbrautarlínu sem tengir tvö áður illa tengd hverfi. Hvaða vogarpunkti er helst breytt?',
    ['Efnislegri uppbyggingu kerfisins','Upplýsingaflæði til farþega','Hvötum í gjaldskrá samgangna','Grunnviðhorfum um tilgang samgangna'],
    'Samgöngutengingin breytir efnislegu neti kerfisins. Slíkar breytingar geta haft mikil áhrif en eru oft dýrar og tímafrekar.');
  add('systems','F12','Vogarpunktar – jafnvægi','application',[7],
    'Öryggiseftirlit er lagt niður vegna þess að fá slys hafa orðið á meðan það var í notkun. Hvaða kerfislæga varúð vantar?',
    ['Eftirlitið gæti verið jafnvægisleitandi endurgjöf sem heldur áhættu niðri','Fá slys sanna að öryggisráðstafanir geti ekki skipt máli','Allar neikvæðar endurgjafir eru skaðlegar','Jafnvægislykkjur þurfa aldrei viðhald'],
    'Fá frávik geta verið merki um að vörn virki. Að fjarlægja jafnvægisleitandi endurgjöf getur minnkað svið aðstæðna sem kerfið ræður við.');
  add('systems','F12','Vogarpunktar – upplýsingar','application',[9],
    'Íbúar fá nú rauntímaupplýsingar um eigin orkunotkun sem áður sáust aðeins í ársuppgjöri. Hvað er fyrst og fremst breytt?',
    ['Upplýsingaflæði og sýnilegri endurgjöf','Efnislegri uppbyggingu raforkunets','Reglum um verð og viðurlög','Stærð orkubirgða miðað við notkun'],
    'Nýjar upplýsingar gera afleiðingar hegðunar sýnilegri fyrr. Þetta er breyting á því hver fær upplýsingar og hvenær.');
  add('systems','F12','Vogarpunktar – reglur','application',[10],
    'Launakerfi hættir að umbuna eingöngu magni og tengir umbun einnig við gæði. Hvaða vogarpunktur breytist beint?',
    ['Reglur og hvatar','Efnisleg uppbygging birgða og flæðis','Upplýsingaflæði eingöngu, án breytinga á umbun','Stærð öryggisbirgða miðað við afgreiðsluhraða'],
    'Umbunarkerfið er regla sem mótar hegðun. Breyting á hvötum getur breytt því hvað aðilar leggja áherslu á.');
  add('systems','F12','Vogarpunktar – sjálfskipulag','application',[11],
    'Teymi fær heimild og aðstöðu til að mynda ný samstarfsnet og þróa ný vinnubrögð þegar vandamál breytast. Hvaða hæfni er efld?',
    ['Sjálfskipulagning (self-organization)','Stækkun varabirgða innan óbreytts skipulags','Breyting á föstu tölulegu afkastaviðmiði','Stytting einnar afhendingartafar án breytingar á tengslum'],
    'Sjálfskipulagning er hæfnin til að bæta við, breyta eða þróa uppbyggingu og hegðun kerfis. Hún er meira en að stilla eina tölu.');
  add('systems','F12','Vogarpunktar – markmið','application',[12],
    'Þjónustan breytir meginmarkmiði sínu úr „flestar afgreiðslur“ í „varanleg lausn vanda viðskiptavinar“. Hvaða vogarpunkti er beint að?',
    ['Tilgangi og markmiðum kerfisins','Stærð varabirgða miðað við flæði','Efnislegu skipulagi starfsstöðva','Tímatöf milli móttöku og skráningar gagna'],
    'Markmið móta það hvernig aðrar reglur og ferlar eru nýtt. Hér er breytt því sem kerfið á að ná fram.');
  add('systems','F12','Vogarpunktar – hugmyndarammi','application',[13],
    'Skipulagsheild hættir að líta á viðskiptavininn sem truflun og lítur á þjónustu við hann sem ástæðu tilveru sinnar. Hvað breytist á dýpra stigi?',
    ['Grunnviðhorf eða hugmyndarammi (paradigm)','Stiki sem tilgreinir leyfilegan afgreiðslutíma','Stærð þjónustubiðraðar miðað við afköst','Tíðni birtingar sömu upplýsinga til sama hóps'],
    'Hugmyndarammi er safn djúpra viðhorfa sem markmið og reglur spretta úr. Breytt grunnsýn getur því mótað allt kerfið.');
  add('systems','F12','Vogarpunktar – sveigjanleg sýn','application',[14],
    'Greinandi viðurkennir að eigin hugmyndarammi sé aðeins ein leið til að skilja kerfi og er reiðubúinn að endurskoða hann. Hvað lýsir þessu best?',
    ['Að geta stigið út fyrir hugmyndaramma (transcending paradigms)','Að halda eigin líkani óbreyttu hvað sem gögn segja','Að útiloka öll önnur sjónarhorn','Að hafna allri notkun líkana'],
    'Að stíga út fyrir hugmyndaramma felur í sér sveigjanleika og meðvitund um takmarkanir hans, ekki að líkanagerð sé gagnslaus.');
  add('systems','F12','Vinna með kerfi','application',[19],
    'Tveir stjórnendur hafa ólíkar skýringar á endurteknum sveiflum. Hvað er gagnlegt fyrsta skref samkvæmt Meadows?',
    ['Skoða hegðun yfir tíma og gera forsendur líkananna sýnilegar','Velja þá skýringu sem passar við síðasta atburð án þess að skoða eldri atvik','Breyta fyrst einum stika og túlka fyrsta viðbragð sem fulla staðfestingu','Reikna eitt heildarmeðaltal og láta það koma í stað athugunar á sveiflum'],
    'Tímaraðir hjálpa við að prófa tilgátur. Sýnileg hugarlíkön gera öðrum kleift að gagnrýna forsendur og bæta skilninginn.');
  add('systems','F12','Það sem skiptir máli','application',[21,22],
    'Stjórnandi mælir aðeins fjölda afgreiðslna og útilokar traust viðskiptavina því erfitt er að mæla það. Hvaða viðbragð samræmist Meadows best?',
    ['Taka traust með í matið þótt mæling þess sé erfið','Gera ráð fyrir að það sem er ómælt skipti engu máli','Láta stutt tímabil eitt ráða öllum ákvörðunum','Breyta öllum eigindlegum atriðum sjálfkrafa í núll'],
    'Kerfishugsun krefst athygli á því sem er mikilvægt, ekki aðeins auðmælanlegt. Einnig þarf að skoða afleiðingar yfir lengri tíma.');

  // Öll lykkjumerki vísa frá breytu i til næstu breytu og það síðasta aftur til þeirrar fyrstu.
  add('systems','CLD','CLD – styrkjandi lykkja','diagram',[14,16],
    'Hvers konar endurgjafarlykkja er sýnd á myndinni?',
    ['Styrkjandi lykkja (R)','Jafnvægisleitandi lykkja (B)','Opin orsakakeðja án endurgjafar','Lykkja sem er ómögulegt að flokka þótt öll merki séu þekkt'],
    'Öll tengslin eru jákvæð; núll neikvæð tengsl er slétt tala. Upphafleg aukning eða minnkun er því styrkt eftir eina umferð.',
    {type:'loop',labels:['Traust','Samvinna','Árangur'],signs:['+','+','+']});
  add('systems','CLD','CLD – jafnvægislykkja','diagram',[14,16],
    'Óafgreidd mál auka álag, álag eykur viðbótarafköst og viðbótarafköst fækka óafgreiddum málum. Hvernig flokkast lykkjan?',
    ['Jafnvægisleitandi lykkja (B)','Styrkjandi lykkja (R)','Keðja án leiðar aftur til upphafs','Lykkja sem tryggir að bið verði alltaf nákvæmlega núll'],
    'Eitt neikvætt tengslamerki snýr upphaflegri breytingu við. Lykkjan vinnur því gegn aukningu óafgreiddra mála; það tryggir þó ekki tafarlaust jafnvægi.',
    {type:'loop',labels:['Óafgreidd mál','Álag','Viðbótarafköst'],signs:['+','+','−']});
  add('systems','CLD','CLD – tvö mínusmerki','diagram',[16],
    'Gróður dregur úr jarðvegseyðingu, jarðvegseyðing skerðir jarðvegsgæði og betri jarðvegur eykur gróður. Hvernig flokkast þessi lykkja?',
    ['Styrkjandi, því neikvæðu tengslin eru tvö','Jafnvægisleitandi, því eitthvert mínusmerki er til staðar','Opin keðja, því gróður er lifandi','Jafnvægisleitandi, því plúsmerki er til staðar'],
    'Tvö neikvæð tengsl gefa saman jákvæða endurgjöf. Minni gróður getur því valdið meiri eyðingu, lakari jarðvegi og enn minni gróðri.',
    {type:'loop',labels:['Gróður','Jarðvegseyðing','Jarðvegsgæði'],signs:['−','−','+']});
  add('systems','CLD','CLD – þrjú mínusmerki','diagram',[16],
    'Í einfalda orsakaritinu eru öll þrjú tengslin neikvæð. Hver er rétt flokkun lykkjunnar?',
    ['Jafnvægisleitandi, því neikvæðu tengslin eru oddatala','Styrkjandi, því öll merkin eru eins','Styrkjandi, því breyturnar eru þrjár','Engin endurgjöf, því engin jákvæð ör er til staðar'],
    'Þrjú neikvæð tengsl snúa áhrifunum við þrisvar. Niðurstaðan er neikvæð endurgjöf, það er jafnvægisleitandi lykkja.',
    {type:'loop',labels:['A','B','C'],signs:['−','−','−']});
  add('systems','CLD','CLD – hnignun','diagram',[14,16],
    'Traust minnkar í lykkjunni. Sé aðeins fylgt áhrifunum í þessari lykkju, hvernig getur minnkunin þróast?',
    ['Minna traust dregur úr samvinnu og árangri og getur minnkað traust enn frekar','Jákvæð merki tryggja að traust aukist strax','Jákvæð merki útiloka allar lækkanir í breytunum','Minnkað traust eykur samvinnu vegna plúsmerkisins'],
    'Jákvætt tengslamerki merkir sama breytingarátt, líka þegar breyta minnkar. Styrkjandi lykkja getur því skapað hnignun jafnt sem vöxt.',
    {type:'loop',labels:['Traust','Samvinna','Árangur'],signs:['+','+','+']});
  add('systems','CLD','CLD – rekja áhrif','diagram',[6,16],
    'Fylgdu einni umferð á myndinni: fleiri óafgreidd mál auka álag. Hvaða áhrif fara síðan frá álaginu til viðbótarafkasta og þaðan aftur til málafjöldans?',
    ['Viðbótarafköst aukast og draga úr málafjöldanum','Viðbótarafköst minnka og draga úr málafjöldanum','Viðbótarafköst aukast og auka málafjöldann','Engin áhrif berast til málafjöldans þótt ör sé til hans'],
    'Plús frá álagi til afkasta merkir aukin afköst við meira álag í þessu líkani. Mínus frá afköstum til óafgreiddra mála merkir fækkun mála, að öðru óbreyttu.',
    {type:'loop',labels:['Óafgreidd mál','Álag','Viðbótarafköst'],signs:['+','+','−']});
  add('systems','CLD','CLD – breytt tengsl','diagram',[16],
    'Á myndinni eru tvö neikvæð tengsl. Ef merkinu frá C til A er breytt úr plús í mínus, hvernig breytist flokkun lykkjunnar?',
    ['Úr styrkjandi lykkju í jafnvægisleitandi','Úr jafnvægisleitandi lykkju í styrkjandi','Flokkunin breytist ekki því aðeins einu merki er breytt','Lykkjan verður sjálfkrafa opin'],
    'Upphaflega eru tvö mínusmerki og lykkjan styrkjandi. Eftir breytinguna verða þau þrjú og lykkjan jafnvægisleitandi.',
    {type:'loop',labels:['A','B','C'],signs:['−','−','+']});
  add('systems','CLD','CLD – merking plús','diagram',[6,7],
    'Hvaða túlkun er rétt á plúsmerkinu frá samvinnu til árangurs í myndinni?',
    ['Meiri samvinna hefur tilhneigingu til að auka árangur miðað við það sem annars væri, að öðru óbreyttu','Samvinna og árangur eru alltaf jafn stórar tölur','Árangur er alltaf jákvæð tala í mælingum','Samvinna kemur aðeins fyrr í tímaröð og örin segir ekkert um orsök'],
    'Plús lýsir stefnu orsakaáhrifa, ekki stærð, jöfnuði eða siðferðilegu mati. Orsakaör á heldur ekki aðeins að merkja „og svo gerist þetta“.',
    {type:'loop',labels:['Traust','Samvinna','Árangur'],signs:['+','+','+']});
  add('systems','CLD','CLD – orsök og fylgni','application',[5],
    'Regnhlífasala og notkun rúðuþurrka hækka á sömu dögum. Hvað þarf áður en teiknuð er orsakaör frá regnhlífasölu til þurrkunotkunar?',
    ['Rök fyrir orsakasambandinu, því sameiginleg orsök gæti skýrt fylgnina','Að staðfesta aðeins að fylgnin sé jákvæð','Að breyta báðum breytum í prósentur','Að teikna örina í báðar áttir án frekari athugunar'],
    'Fylgni ein og sér sannar ekki orsök. Rigning gæti aukið bæði regnhlífasölu og þurrkunotkun án þess að annað valdi hinu.');
  add('systems','CLD','CLD – breytuheiti','application',[7,9,10],
    'Hvaða breytuheiti hentar best í orsakariti um þjónustu?',
    ['Ánægja viðskiptavina','Aukin ánægja viðskiptavina','Senda tölvupóst og hringja og leysa mál','Þá gerist eitthvað gott'],
    'Heitið á að leyfa bæði aukningu og minnkun. Stefna breytingar á að koma fram í tengslum og merkjum, ekki vera fyrirfram bundin í heitinu.');
  add('systems','SFD','Birgðir og flæði','calculation',[10,11,24],
    'Í byrjun eru 100 einingar á lager. Innflæði er stöðugt 10 einingar á klukkustund og útflæði 6. Hversu margar einingar eru eftir 5 klukkustundir?',
    ['120 einingar','104 einingar','150 einingar','80 einingar'],
    'Nettóflæði er 10 − 6 = 4 einingar á klukkustund. Birgðir verða 100 + 5 × 4 = 120 einingar. Birgðastaðan safnar upp nettóflæðinu.');
  add('systems','SFD','Birgðir og flæði','calculation',[10,17,24],
    'Í kerfi eru 40 mál. Á hverri klukkustund berast 12 ný mál og 12 mál ljúka. Flæðin eru stöðug og engin önnur breyting verður. Hvað gildir eftir 3 klukkustundir?',
    ['40 mál eru enn í kerfinu þótt 36 ný mál hafi borist','76 mál eru í kerfinu því innflæðið leggst alltaf eitt við','4 mál eru í kerfinu því aðeins útflæði hefur áhrif','Birgðastaðan verður núll því innflæði og útflæði eru jöfn'],
    'Nettóflæði er núll, svo birgðastaðan helst 40. Jöfn inn- og útflæði þýða ekki að engin hreyfing sé eða að birgðir séu engar.');

  // Viðbótarefnið fær minni þunga en kjarnaefni BPM og kerfishugsunar.
  add('extra','RPA','Val á sjálfvirkniverkefni','application',[9,11,12],
    'Hvaða verkefni er vænlegast sem upphafsdæmi um stafrænt vinnuafl, miðað við lýsinguna í gestafyrirlestrinum?',
    ['Endurtekin afstemming skipulagðra gagna með mikilli handavinnu og skýru markmiði','Einstakt stefnumótunarverkefni með óljósum markmiðum og engum gögnum','Samskipti sem hafa enga endurtekningu og engar þekktar vinnureglur','Verkefni sem enginn ferlaeigandi getur lýst'],
    'Gestafyrirlesturinn bendir á endurtekningu, handavinnu, tíma og villuhættu við verkefnaval. Skilningur á vandamáli og markmiði þarf að koma fyrst.');
  add('extra','RPA','Mannleg aðkoma','application',[6,13],
    'Stafrænn aðstoðarmaður afgreiðir venjuleg mál en rekst á undantekningu sem krefst sérfræðimats. Hvað ætti hönnun ferlisins að gera ráð fyrir?',
    ['Skýrri leið til mannlegs mats þegar þess er þörf','Að öll frávik verði samþykkt sjálfkrafa','Að gervigreind sé skyldubundin í hverju einasta skrefi','Að ábyrgð ferlaeiganda hverfi við sjálfvirknivæðingu'],
    'Sjálfvirknilausn getur unnið sjálfstætt og kallað eftir mannlegri aðkomu. Afmarka þarf undantekningar og hvar dómgreindar er þörf.');
  add('extra','RPA','Innleiðing','application',[14,15,16,17],
    'Tæknilega virk lausn er tilbúin en ferlaeigandi tók ekki þátt og notendur hafa ekki prófað hana. Hvað vantar sérstaklega áður en hún er tekin í notkun?',
    ['Aðkomu ferlaeiganda, skýrt umfang og viðtökuprófanir','Að fela lausnina fyrir notendum þar til hún er óafturkræf','Að afnema markmið verkefnisins','Að mæla aðeins fjölda kóðalína'],
    'Gestafyrirlesturinn leggur áherslu á buy-in ferlaeiganda, undirbúning, umfang og viðtökuprófanir. Tæknileg virkni ein tryggir ekki nothæfa innleiðingu.');
  add('extra','RPA','Afmörkun sjálfvirknivæðingar','application',[6,13,16],
    'Er nauðsynlegt að sjálfvirknivæða heilt ferli frá upphafi til enda svo stafrænt vinnuafl nýtist?',
    ['Nei, það getur líka sinnt afmörkuðum hluta ferlis','Já, annars getur lausnin ekki talist sjálfvirknivæðing','Já, öll mannleg þátttaka verður að hverfa','Nei, en aðeins ef engin gögn fara milli kerfa'],
    'Stafrænt vinnuafl getur sinnt heilu ferli eða hluta þess. Umfangið á að ráðast af verkefni, ávinningi og þörf fyrir mannlega aðkomu.');
  add('extra','CJM','Vegferð viðskiptavinar','application',[1],
    'Heilsugæsla lýsir eingöngu læknisskoðuninni, en sjúklingar eru óánægðir með bókun og að finna innganginn. Hvað myndi CJM helst bæta við?',
    ['Sýn á upplifun og snertifleti í ferðinni fyrir, við og eftir þjónustuna','Aðeins tæknilegar táknareglur BPMN','Einungis kostnað einstakra starfsmanna','Sönnun þess að bókun hafi engin áhrif á þjónustuupplifun'],
    'CJM skoðar ferð viðskiptavinarins í heild. Í sjúklingadæminu hefst upplifunin fyrir sjálfa meðferðina og nær til komu, biðar og brottfarar.');
  add('extra','CJM','Snertifletir','application',[1],
    'Sjúklingur kemur á réttum tíma en óskýrar merkingar valda streitu áður en hann finnur móttöku. Hvað ætti að skrá á vegferðarkortið?',
    ['Komuna sem snertiflöt ásamt upplifun, vanda og umbótatækifæri','Aðeins upphafstíma læknisskoðunarinnar','Engar upplýsingar því þetta gerist utan skoðunarherbergisins','Einungis kennitölu starfsmanns í móttöku'],
    'Snertifletir og upplifun utan kjarnastarfsins geta ráðið miklu um ferðina. Kortlagningin getur sýnt þörf fyrir leiðbeiningar eða betri merkingar.');
  add('extra','CJM','Mikilvæg samskipti','application',[1],
    'Kvíðinn viðskiptavinur fær skýra útskýringu sem breytir óöryggi í traust. Hvað merkir að þetta sé merkt „moment of truth“ á CJM?',
    ['Þetta eru mikilvæg samskipti sem geta mótað upplifunina verulega','Þetta er alltaf lengsta aðgerðin í ferlinu','Þetta er XOR-hlið sem velur eina leið','Þetta er skyldubundið lokaskref allra þjónustuferla'],
    'Moment of truth er mikilvægt augnablik í samskiptum við þjónustuna. Það þarf hvorki að vera lengsta né síðasta skrefið.');
  add('extra','CJM','Umbætur út frá upplifun','application',[1],
    'Mæling sýnir stuttan afgreiðslutíma en viðskiptavinir lýsa mikilli óvissu á biðstofu. Hver væri rökrétt umbótatilraun byggð á CJM?',
    ['Prófa skýrari upplýsingar og regluleg skilaboð meðan beðið er','Hunsa upplifunina því tíminn einn er góður','Stytta eingöngu skref sem viðskiptavinir verða aldrei varir við','Skipta út öllum snertiflötum fyrir kostnaðartöflu'],
    'Vegferðarkort getur greint óvissu og tilfinningar sem tímatala ein nær ekki yfir. Upplýsingar á biðtíma geta bætt upplifun þótt biðin breytist lítið.');

  globalThis.SYSTEMS_QUESTIONS = bank;
})();
