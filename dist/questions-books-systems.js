/* Ný beitingardæmi úr staðfestum bókarútdráttum og höfundargreinum Meadows.
   Síður í source.pages eru PDF-síður frá 1; locator aðgreinir prentaðar síður.
   Höfundargreinarnar eru skyld lesefni, ekki endurbirtir kaflar úr heilli bók. */
(() => {
  const bank = [];
  const sources = {
    chapter4: {
      file: 'Thinking in Systems · útdráttur úr kafla 4',
      url: 'https://www.gc.soton.ac.uk/files/2015/01/Thinking-in-Systems-A-Primer-Donella-H.-Meadows-112-127.pdf',
      type: 'book-excerpt'
    },
    bathtubs: {
      file: 'Thinking in Systems · Bathtubs 101, handritsútdráttur',
      url: 'https://donellameadows.org/wp-content/userfiles/bathtubs101.pdf',
      type: 'book-excerpt'
    },
    leverage: {
      file: 'Donella Meadows · Leverage Points (höfundargrein)',
      url: 'https://donellameadows.org/wp-content/userfiles/Leverage_Points.pdf',
      type: 'author-essay'
    },
    dancing: {
      file: 'Donella Meadows · Dancing With Systems (höfundargrein)',
      url: 'https://donellameadows.org/archives/dancing-with-systems/',
      type: 'author-essay'
    }
  };

  // Rétti valkosturinn er fyrst í gagnaskránni; viðmótið stokkar röðinni við birtingu.
  function add(lecture, topic, kind, sourceKey, pages, locator, stem, options, explanation, diagram) {
    const question = {
      id: `book-systems-${String(bank.length + 1).padStart(3, '0')}`,
      group: 'systems', origin: 'book-material', lecture, topic, kind,
      stem, options, answer: 0, explanation,
      source: { ...sources[sourceKey], pages, locator }
    };
    if (diagram) question.diagram = diagram;
    bank.push(question);
  }

  // Útreikningar nota fullskilgreind flæði og tafir; tölurnar eru ný æfingadæmi.
  add('F12', 'Birgðir og breytileg flæði', 'calculation', 'bathtubs', [5],
    'Bathtubs 101, PDF-bls. 5: uppsöfnun nettóflæðis',
    'Við upphaf vaktar eru 90 erindi óafgreidd. Fyrstu 2 klukkustundirnar berast 18 erindi á klukkustund og 12 erindum lýkur á klukkustund. Næstu 3 klukkustundir berast 10 erindi á klukkustund og 16 erindum lýkur á klukkustund. Flæðin eru stöðug innan hvors tímabils og ekkert annað breytir fjöldanum. Hve mörg erindi bíða í lok 5 klukkustunda?',
    ['84 erindi', '96 erindi', '108 erindi', '72 erindi'],
    'Fyrst bætast við 2 × (18 − 12) = 12 erindi. Síðan fækkar um 3 × (16 − 10) = 18. Lokastaðan er 90 + 12 − 18 = 84. Námsmarkmið: leggja saman nettóflæði fyrir hvert tímabil.');

  add('F12', 'Útflæði og tími að markmiði', 'calculation', 'bathtubs', [7],
    'Bathtubs 101, PDF-bls. 7: auknar birgðir með minna útflæði',
    'Fyrirtæki hefur 200 starfsmenn. Það ræður 8 á mánuði og 6 hætta. Ný aðgerð lækkar fjölda þeirra sem hætta strax í 3 á mánuði; ráðningum er ekki fjölgað. Fjöldarnir haldast óbreyttir næstu mánuði. Hvenær verða starfsmenn fyrst 240 samkvæmt þessu líkani?',
    ['Eftir 8 mánuði', 'Eftir 5 mánuði', 'Eftir 20 mánuði', 'Eftir 40 mánuði'],
    'Nettófjölgun verður 8 − 3 = 5 á mánuði. Fjölga þarf um 40, svo tíminn er 40 / 5 = 8 mánuðir. Námsmarkmið: sjá að minna útflæði getur byggt upp birgðastærð án meira innflæðis.');

  add('F11', 'Töf milli ákvörðunar og breytingar', 'calculation', 'chapter4', [9, 10, 11],
    'Prentaðar bls. 103–105: Ubiquitous Delays',
    'Í geymi eru 500 lítrar. Innflæði er 20 lítrar á mínútu og útflæði 40. Við upphaf mælingar er gefin skipun um að loka innflæðinu, en lokunin tekur nákvæmlega 2 mínútur: innflæðið helst 20 fyrstu 2 mínúturnar og verður síðan 0. Útflæðið helst 40 og engin önnur flæði eru til staðar. Hve mikið er í geyminum eftir 5 mínútur?',
    ['340 lítrar', '300 lítrar', '400 lítrar', '460 lítrar'],
    'Fyrstu 2 mínúturnar tapast 2 × (40 − 20) = 40 lítrar. Næstu 3 mínúturnar tapast 3 × 40 = 120. Eftir standa 500 − 40 − 120 = 340 lítrar. Námsmarkmið: láta töf aðgerðar koma fram í útreikningi.');

  add('F12', 'Stærð forða miðað við flæði', 'calculation', 'leverage', [9],
    'Vogarpunktur 11; prentuð bls. 7',
    'Vatnsveita A á 600 m³ í forða og notar stöðugt 100 m³ á klukkustund. Vatnsveita B á 400 m³ og notar 40 m³ á klukkustund. Innflæði beggja stöðvast samtímis; notkun helst óbreytt þar til forðinn klárast. Hvor getur haldið notkuninni lengur og í hve langan tíma?',
    ['B í 10 klukkustundir', 'A í 6 klukkustundir', 'A í 15 klukkustundir', 'B í 4 klukkustundir'],
    'A endist 600 / 100 = 6 klukkustundir en B endist 400 / 40 = 10. Námsmarkmið: meta varaforða miðað við flæðishraða, ekki eingöngu eftir heildarmagni.');

  // Orsakaritin eru ný þriggja breytna líkön sem núverandi ExamDiagrams teiknar.
  add('F12', 'Veikja styrkjandi endurgjöf', 'diagram', 'leverage', [13, 14],
    'Vogarpunktur 7; prentaðar bls. 11–12',
    'Í einfalda líkaninu eru allir vextir greiddir með nýjum lánum. Markmiðið er að veikja sjálfa styrkinguna í sýndri lykkju, án þess að greiða niður höfuðstól með utanaðkomandi fé. Hvaða breyting gerir það beinast?',
    ['Lækka vaxtaprósentuna sem reiknar vaxtakostnað af sömu skuld', 'Senda skýrslu um skuldina oftar án breytingar á ákvörðunum', 'Hækka fyrirfram ákveðið skuldaþak án breytingar á vöxtum', 'Lengja tímabilið milli yfirlita en halda vaxtareikningi óbreyttum'],
    'Lægri vextir þýða minni nýja lántöku vegna sömu skuldar og hægari mögnun lykkjunnar. Merkin geta samt öll verið plús. Námsmarkmið: greina styrk endurgjafar frá því hvort hún sé styrkjandi eða jafnvægisleitandi.',
    { type: 'loop', labels: ['Skuld', 'Vaxtakostnaður', 'Ný lántaka'], signs: ['+', '+', '+'] });

  add('F12', 'Skynjun í jafnvægislykkju', 'diagram', 'leverage', [11, 12],
    'Vogarpunktur 8; prentaðar bls. 9–10',
    'Myndin lýsir kælikerfi með föstu hitamarkmiði. Hitaskynjarinn bilar og tilkynnt frávik helst óbreytt þegar raunverulegur hiti hækkar. Kælitækið getur enn aukið afköst ef það fær hærra frávik. Hvaða tenging lykkjunnar hefur fyrst og fremst rofnað?',
    ['Frá herbergishita til skynjaðs fráviks', 'Frá skynjuðu fráviki til kæliafkasta', 'Frá kæliafköstum til herbergishita', 'Allar þrjár tengingarnar hafa endilega snúist við'],
    'Skynjunin endurspeglar ekki lengur hitann. Ákvörðunar- og kælibúnaðurinn getur enn virkað, en fær ekki rétta merkið. Námsmarkmið: finna bilaðan hlekk í endurgjöf í stað þess að gera ráð fyrir að meiri kæligeta leysi upplýsingavanda.',
    { type: 'loop', labels: ['Herbergishiti', 'Skynjað frávik', 'Kæliafköst'], signs: ['+', '+', '−'] });

  add('F12', 'Orsakarit og tímatöf', 'diagram', 'leverage', [10, 11],
    'Vogarpunktur 9; prentaðar bls. 8–9',
    'Tvær verslanir nota sýnda pöntunarreglu og sama fasta birgðamarkmið. Afhending tekur 1 dag hjá annarri en 20 daga hjá hinni. Tafir og styrkur viðbragða eru ekki sýnd á myndinni. Hvaða ályktun er réttmæt?',
    ['Sömu tengslamerki geta fylgt ólíkri hegðun yfir tíma vegna mismunandi tafa', 'Sömu tengslamerki tryggja sömu sveiflur ef birgðamarkmiðið er það sama', 'Lengri afhending krefst þess að plúsinn frá pöntunarhraða til birgða verði mínus', 'Neikvætt merki í lykkjunni tryggir að hvorug verslun fari yfir birgðamarkmiðið'],
    'Merkin lýsa stefnu áhrifa en ekki hversu hratt þau berast eða hversu sterk þau eru. Námsmarkmið: skilja af hverju flokkun lykkju ein nægir ekki til að spá fyrir um sveiflur eða yfirskot.',
    { type: 'loop', labels: ['Birgðastaða', 'Skortur frá markmiði', 'Pöntunarhraði'], signs: ['−', '+', '+'] });

  add('F12', 'Ný upplýsingatenging', 'diagram', 'leverage', [14, 15],
    'Vogarpunktur 6; prentaðar bls. 12–13',
    'Í þessum ímynduðu aðstæðum eru meiri losun, meiri opinber vitneskja og sterkari mótvægisaðgerðir tengd eins og myndin sýnir. Fyrir breytingu voru mælingar lokaðar í skjalasafni og tengingin frá losun til opinberrar vitneskju virkaði ekki. Ný birting mælinganna kemur henni á. Hvaða breytingu lýsir þetta best?',
    ['Upplýsingaflæði lokar endurgjafarlykkju sem áður vantaði', 'Stærri varaforði dempar efnislegt flæði losunar', 'Losunarmörk hafa verið lækkuð þótt engri reglu hafi verið breytt', 'Styrkjandi lykkja myndast því upplýsingar verða fleiri'],
    'Gögn berast nú aðilum sem geta brugðist við og þannig myndast leið til mótvægis. Lykkjan hefur eitt neikvætt tengsl. Námsmarkmið: greina breytingu á upplýsingauppbyggingu frá breytingu á tölulegum mörkum.',
    { type: 'loop', labels: ['Losun', 'Opinber vitneskja', 'Mótvægisaðgerðir'], signs: ['+', '+', '−'] });

  add('F11', 'Mörk ráðast af spurningunni', 'application', 'chapter4', [1, 2, 3, 4],
    'Prentaðar bls. 95–98: Nonexistent Boundaries',
    'Líkan af fataleigu var gert til að skipuleggja næstu vakt og sleppir því förgun slitinna flíka. Nú á að nota það til að meta umhverfisáhrif leigunnar yfir tíu ár. Hver er besta ástæðan til að endurskoða mörkin?',
    ['Nýr tilgangur og lengra tímabil geta gert áður sleppt flæði mikilvægt', 'Líkan sem virkar fyrir eina vakt verður að innihalda sömu breytur fyrir öll tímabil', 'Förgun verður aðeins hluti kerfis ef fataleigan á förgunarfyrirtækið', 'Flæði sem ekki birtist í núverandi líkani má meðhöndla sem núll í nýja matinu'],
    'Förgun getur haft lítil áhrif á vaktaskipulag en mikil uppsöfnuð umhverfisáhrif. Námsmarkmið: velja afmörkun út frá rannsóknarspurningu og tíma, ekki halda gamalli afmörkun sjálfkrafa.');

  add('F11', 'Of víð afmörkun', 'application', 'chapter4', [4, 5],
    'Prentaðar bls. 98–99: Nonexistent Boundaries',
    'Greinandi bætir hundruðum tengsla við líkan sem á að skýra vikulegar sveiflur í afhendingu. Flest nýju tengslin hafa óveruleg áhrif á þessu tímabili og niðurstaðan verður óljós. Hvað samræmist rökum Meadows best?',
    ['Einfalda með rökstuddri afmörkun sem varðveitir tengslin sem skýra sveiflurnar', 'Halda öllum tengslum því stærra líkan gefur alltaf skýrari niðurstöðu', 'Afmarka við skipurit fyrirtækisins óháð því hvað veldur sveiflunum', 'Fjarlægja öll tengsl sem liggja yfir landamæri þótt þau skýri afhendinguna'],
    'Of víð mörk geta falið svör í óþarfa flækjustigi. Námsmarkmið: forðast bæði of þröng og of víð líkön með því að miða við það sem á að skýra.');

  add('F11', 'Að finna ráðandi takmörkun', 'application', 'chapter4', [6, 7, 8],
    'Prentaðar bls. 100–102: Layers of Limits',
    'Verkstæði gæti tekið við 100 pöntunum á dag og vélar gætu unnið 120. Eina sérhæfða yfirferðin ræður hins vegar aðeins við 60 og allar pantanir þurfa hana. Engar aðrar takmarkanir eru til staðar. Stjórnandi vill kaupa vélar til að auka vélagetuna í 150. Hvert er kerfislæga vandamálið við tillöguna?',
    ['Hún eykur aðföng sem þegar eru næg án þess að breyta núverandi takmörkun', 'Hún eyðir þeirri eftirspurn sem áður hélt vélunum uppteknum', 'Hún sannar að sérhæfð yfirferð geti ekki verið flöskuháls', 'Hún krefst þess að öll aðföng séu aukin um sömu prósentu til að nýtast'],
    'Yfirferðin takmarkar afgreiðslu við 60. Meiri vélageta breytir ekki því hámarki við gefnar forsendur. Námsmarkmið: finna takmarkandi aðfang áður en valið er inngrip.');

  add('F11', 'Sami aðili eða sama kerfi?', 'application', 'chapter4', [13, 14, 16],
    'Prentaðar bls. 107–108 og 110: Bounded Rationality',
    'Þrír stjórnendur hafa hver á eftir öðrum tekið svipaðar ákvarðanir sem valda tjóni annars staðar í fyrirtæki. Allir sjá aðeins kostnað eigin deildar og fá umbun fyrir að lækka hann. Hvaða breyting beinist helst að skýringunni í hugtakinu afmörkuð skynsemi?',
    ['Gera heildaráhrif sýnileg og tengja ákvarðanir og hvata við þau', 'Ráða fjórða stjórnandann en halda upplýsingum og umbun óbreyttum', 'Auka tíðni sama kostnaðaryfirlits án upplýsinga um aðrar deildir', 'Gera deildarmarkmiðið strangara án breytinga á því hvaða kostnaður sést'],
    'Sama aðstaða getur endurskapað sömu ákvarðanir þótt einstaklingar skiptist út. Námsmarkmið: greina kerfisbundnar upplýsingar og hvata frá skýringum sem einblína á persónueiginleika.');

  add('F11', 'Tímaskali greiningar', 'application', 'chapter4', [10],
    'Prentuð bls. 104: Ubiquitous Delays',
    'Líkan á að skýra sveiflur í pöntunum sem endurtaka sig á sex vikna fresti. Hvaða töf er eðlilegast að kanna sérstaklega í fyrstu, miðað við lengd hennar?',
    ['Þriggja vikna töf frá pöntun til afhendingar', 'Tveggja sekúndna töf við birtingu staðfestingar á skjá', 'Þrjátíu ára endurnýjunartíma húsnæðis sem er fastur á tímabilinu', 'Einungis lengstu töfina í fyrirtækinu, óháð tengslum hennar við pantanir'],
    'Þriggja vikna afhendingartöf er á sambærilegum tímaskala og sex vikna sveiflur og gæti því skipt miklu. Það sannar ekki að hún sé orsökin. Námsmarkmið: velja tafir til athugunar út frá hegðuninni sem á að skýra.');

  add('F11', 'Hraði viðbragða', 'application', 'chapter4', [10, 11],
    'Prentaðar bls. 104–105: Ubiquitous Delays',
    'Stýring breytir afköstum eftir hverja örlitla og skammvinna sveiflu í mælingum. Teymið leggur til að öll viðbrögð verði enn hraðari. Hvers vegna þarf að meta tillöguna áður en hún er innleidd?',
    ['Of hröð viðbrögð við skammtímasveiflum geta sjálf aukið óstöðugleika', 'Stytting tafar breytir alltaf öllum jafnvægislykkjum í styrkjandi lykkjur', 'Tafir eru aðeins mikilvægar þegar þær vara í mörg ár', 'Hraðari mælingar gera markmið stýringarinnar sjálfkrafa óþörf'],
    'Bæði of sein og óþarflega snögg viðbrögð geta skapað vandamál. Námsmarkmið: meta viðbragðstíma í samhengi við raunverulegan breytingarhraða fremur en að gera ráð fyrir að hraðast sé alltaf best.');

  add('F12', 'Undantekningar um tölulega stika', 'application', 'leverage', [8],
    'Vogarpunktur 12; prentuð bls. 6',
    'Nemandi segir: „Meadows setur tölulega stika neðst, þess vegna getur breyting á einni tölu aldrei haft stór kerfisáhrif.“ Hvaða dæmi sýnir best hvers vegna ályktunin er of sterk?',
    ['Tala sem breytir styrk hraðrar styrkjandi endurgjafar getur breytt hegðun mikið', 'Tala getur aðeins skipt máli ef henni er breytt í textalýsingu', 'Allar tölur hafa nákvæmlega sömu áhrif ef þær breytast um sömu prósentu', 'Stikar verða áhrifamiklir aðeins þegar kerfið hefur engar endurgjafir'],
    'Meadows nefnir sérstaklega undantekningar þar sem stikar hafa áhrif á styrk lykkja eða mikilvæg þröskuldsgildi. Námsmarkmið: nota röðun vogarpunkta með fyrirvörum, ekki sem algilda útilokunarreglu.');

  add('F12', 'Röðun vogarpunkta í framkvæmd', 'application', 'leverage', [5, 21],
    'Inngangur að endurskoðuðum lista og A final caution; prentaðar bls. 3 og 19',
    'Teymi getur lagað þekkt upplýsingagat á viku. Annar kostur er víðtæk hugmyndabreyting sem er enn óútfærð. Má ráða af röðun vogarpunkta einni að seinni kosturinn sé örugglega rétta fyrsta verkefnið?',
    ['Nei; röðunin styður greiningu en er hvorki algild né trygging fyrir framkvæmanleika eða árangri', 'Já; ofar á listanum merkir alltaf meiri árangur óháð aðstæðum', 'Já; upplýsingabreytingar geta ekki haft áhrif nema hugmyndarammi breytist fyrst', 'Nei; velja verður alltaf verkefnið með stystan framkvæmdartíma'],
    'Áhrif, aðgengi og aðstæður skipta máli; listinn er ekki sjálfvirk ákvörðunarregla. Námsmarkmið: bera saman raunhæf inngrip án þess að breyta leiðbeinandi röðun í tryggingu.');

  add('F12', 'Yfirlýst og raunverulegt markmið', 'application', 'leverage', [18, 19],
    'Vogarpunktur 3; prentaðar bls. 16–17',
    'Stofnun kveðst vilja minnka endurkomu viðskiptavina með sömu vandamál. Þegar hún velur verkefni og úthlutar fjármagni hefur fjöldi afgreiðslna þó alltaf forgang, jafnvel þegar endurkomum fjölgar. Hvað er réttast að rannsaka til að skilja markmið kerfisins í framkvæmd?',
    ['Hvaða niðurstöður ráða endurteknum ákvörðunum um úthlutun og umbun', 'Einungis orðalag stefnuskjalsins því það ákvarðar sjálfkrafa hegðun', 'Hvort starfsfólk geti endurtekið slagorðið orðrétt', 'Aðeins stærð stofnunarinnar því markmið leiðir beint af starfsmannafjölda'],
    'Hegðun og forgangsröðun geta sýnt hvaða markmið stýrir kerfinu raunverulega. Námsmarkmið: greina yfirlýsingar frá þeim viðmiðum sem móta ákvarðanir.');

  add('F12', 'Forsendur sjálfskipulagningar', 'application', 'leverage', [17, 18],
    'Vogarpunktur 4; prentaðar bls. 15–16',
    'Rannsóknasetur lokar öllum ólíkum tilraunaleiðum og leyfir aðeins einni staðlaðri aðferð að þróast áfram. Núverandi framleiðni helst góð. Hvaða langtímaáhættu myndi umfjöllun Meadows um sjálfskipulagningu sérstaklega benda á?',
    ['Minni fjölbreytni og færri tilraunir geta skert möguleika á nýjum svörum við breyttum aðstæðum', 'Sjálfskipulagning krefst þess að allar tilraunir skili strax sama árangri', 'Stöðlun gerir allar framtíðarbreytingar í umhverfinu hægari', 'Núverandi framleiðni staðfestir að ólíkar aðferðir hafi ekkert framtíðargildi'],
    'Þróun nýrra lausna nýtir fjölbreyttan efnivið og tækifæri til að prófa hann. Námsmarkmið: meta aðlögunarhæfni til lengri tíma, ekki aðeins núverandi afköst.');

  add('F12', 'Vald yfir kerfisreglum', 'application', 'leverage', [16],
    'Vogarpunktur 5; prentuð bls. 14',
    'Þjónustunet á að endurskoða úthlutunarreglur sínar. Aðeins stærstu birgjarnir mega ákveða hvaða tillögur komast í atkvæðagreiðslu, þótt notendur beri hluta kostnaðarins. Hvaða spurning er mikilvægust til viðbótar við samanburð á einstökum úthlutunarprósentum?',
    ['Hver hefur vald til að móta og breyta reglunum og hvaða hagsmunir komast að?', 'Hvort lægri heildarfjárveiting myndi ein og sér leysa ágreining án breytinga á ákvörðunarvaldi?', 'Hvort hraðari atkvæðagreiðsla um sömu tillögur myndi ein og sér jafna áhrif hagsmunaaðila?', 'Hvort nákvæmari útreikningur á núverandi úthlutunarprósentum geti komið í stað skoðunar á þátttöku?'],
    'Vald yfir reglum mótar hvaða hegðun og niðurstöður verða mögulegar. Námsmarkmið: skoða hver setur leikreglurnar, ekki aðeins tölurnar innan þeirra.');

  add('F12', 'Stefna sem bregst við ástandi', 'application', 'dancing', [],
    'Kafli 7 í greininni: Make feedback policies for feedback systems',
    'Gestastofa vill minnka þrengsli en halda góðu aðgengi þegar lítið er að gera. Hvaða tillaga inniheldur skýrasta endurgjöf frá mældu ástandi til aðgerðar?',
    ['Stilla fjölda nýrra tímabókana reglulega eftir mældum fjölda gesta og skýrum viðmiðum', 'Festa bókunarkvóta ársins óbreyttan eftir að hafa mælt fyrsta daginn', 'Birta vikulegan gestafjölda en ákveða að hann megi ekki hafa áhrif á aðgerðir', 'Ákveða allar breytingar næsta árs fyrirfram án endurmats á meðan'],
    'Fyrsta tillagan tengir ástand við viðbrögð; hún þarf síðan prófun og eftirfylgni. Námsmarkmið: þekkja aðlögunarhæfa stefnu fremur en fasta aðgerð í breytilegu kerfi.');

  add('F12', 'Að samþætta ólík sjónarhorn', 'application', 'dancing', [],
    'Kafli 11 í greininni: Expand thought horizons',
    'Hagfræðingur, sálfræðingur og tæknifræðingur skila hver sinni skýrslu um sömu þjónustu. Skýrslurnar nota ósamrýmanlegar forsendur og teymið setur þær aðeins saman í eitt skjal. Hvað vantar helst samkvæmt Meadows?',
    ['Sameiginlega vandamálaskilgreiningu og vilja til að prófa og samþætta forsendur þvert á fræðin', 'Að velja eitt fræðasvið fyrirfram og hunsa niðurstöður hinna', 'Að hafa skýrslurnar jafnlangar svo fræðasviðin vegi tölulega jafnt', 'Að varðveita allar ósamrýmanlegar forsendur óbreyttar til að sýna fjölbreytni'],
    'Margir sérfræðingar í sama verkefni tryggja ekki að þekking þeirra tengist. Námsmarkmið: greina raunverulegt sameiginlegt nám frá því að safna aðskildum sjónarhornum.');

  add('F12', 'Stuttur og langur tími saman', 'application', 'dancing', [],
    'Kafli 10 í greininni: Expand time horizons',
    'Viðhaldsverkefni lækkar afköst næsta mánaðar en eykur áreiðanleika næstu fimm ára. Annar stjórnandi skoðar aðeins næsta mánuð, hinn vill sleppa öllum skammtímaáhrifum úr matinu. Hvaða nálgun passar best við Meadows?',
    ['Meta bæði tafarlaus áhrif og afleiðingar yfir lengri tíma og tengslin þar á milli', 'Velja eingöngu lengsta tímabilið því skammtímaáhrif eru ekki hluti kerfisins', 'Velja eingöngu næsta mánuð því langtímaafleiðingar geta verið óvissar', 'Reikna með að jákvæð langtímaáhrif eyði sjálfkrafa öllum skammtímavanda'],
    'Ákvarðanir hafa áhrif á mörgum tímaskölum sem tengjast. Námsmarkmið: víkka tímann sem matið nær yfir án þess að missa sjónar á núverandi rekstri.');

  add('F12', 'Nýta það sem virkar fyrir', 'application', 'dancing', [],
    'Kafli 2 í greininni: Listen to the wisdom of the system',
    'Félagasamtök ætla að efla viðgerðarþjónustu í litlu samfélagi. Þar starfa nú þegar verkstæði með staðbundna þekkingu og traust, en þau eiga erfitt með að kaupa einföld verkfæri. Hvaða fyrstu aðgerð styður helst fyrirliggjandi getu kerfisins?',
    ['Kanna með verkstæðunum hvort aðgangur að verkfærum og viðeigandi stuðningi leysi raunverulegar hindranir', 'Skipta öllum verkstæðunum strax út fyrir eina miðlæga lausn áður en hindranir eru kannaðar', 'Meta þjónustuna eingöngu eftir því hve mörg utanaðkomandi fyrirtæki mæta', 'Festa fyrirfram valda lausn og leita aðeins að gögnum sem styðja hana'],
    'Fyrirliggjandi hæfni og tengsl geta verið grunnur umbóta. Námsmarkmið: rannsaka hvað heldur kerfinu gangandi og hverjar hindranirnar eru áður en innviðum þess er breytt.');

  add('F12', 'Lærdómur af afmarkaðri tilraun', 'application', 'dancing', [],
    'Kafli 4 í greininni: Stay humble. Stay a learner.',
    'Ný úthlutunarregla er prófuð hjá einu þjónustuteymi. Bið styttist í tvær vikur en fleiri mál þurfa síðar endurvinnslu. Hvert er skynsamlegasta næsta skref samkvæmt nálgun Meadows?',
    ['Skoða bæði áhrifin, endurskoða tilgátuna og laga tilraunina með áframhaldandi mælingum', 'Innleiða regluna alls staðar því fyrstu biðtölur staðfesta hana endanlega', 'Fjarlægja endurvinnslu úr matinu því hún var ekki upphaflega aðalmælikvarðinn', 'Ljúka öllum tilraunum því óvænt áhrif sýna að ekkert sé hægt að læra'],
    'Tilraun er tækifæri til náms, ekki krafa um að verja fyrstu hugmynd. Námsmarkmið: bregðast við óvæntum niðurstöðum með endurmati og áframhaldandi athugun.');

  globalThis.BOOK_SYSTEMS_QUESTIONS = bank;
})();
