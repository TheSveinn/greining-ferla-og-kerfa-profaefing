# Prófæfing í greiningu ferla og kerfa

Gagnvirk íslensk prófæfing byggð á fyrirlestrum F1–F14 og viðbótarefni námskeiðsins IÐN301G. Spurningarnar eru sjálfstæð æfingadæmi, ekki opinberar prófspurningar.

## Notkun

Opnaðu `dist/index.html` í vafra. Engin uppsetning eða nettenging er nauðsynleg þegar skrárnar hafa verið sóttar. Einnig má þjóna síðunni staðbundið:

```sh
python -m http.server 8765 --bind 127.0.0.1 --directory dist
```

Opnaðu þá `http://127.0.0.1:8765`.

## Innihald

- 232 spurningar í bankanum; veldu 10 eða 80 spurninga umferð.
- Heill hamur: 60 BPM-spurningar, 16 um kerfishugsun og 4 um CJM/RPA.
- Stuttur hamur: 10 spurningar án tímamarka, 7 um BPM, 2 um kerfishugsun og 1 um CJM/RPA; að minnsta kosti 2 reikningsdæmi og 2 myndspurningar.
- Að minnsta kosti 12 reikningsdæmi og 13 myndspurningar í hverju 80 spurninga úrtaki.
- Nýtt slembival velur nýjar spurningar og stokkar valkostum.
- Æfingahamur og stuttur hamur birta skýringar eftir svar; prófhamur gefur þrjár klukkustundir og yfirferð í lokin.
- Rök, heimildatilvísanir, merking spurninga og yfirlit yfir árangur.

Eitt rétt svar gefur eitt stig og ekkert er dregið niður fyrir röng svör. Svör og nýlegar niðurstöður vistast í localStorage í þeim vafra og á því veffangi sem er notað. Gögn flytjast ekki sjálfkrafa milli staðbundinnar útgáfu, Sites og GitHub Pages.

## Prófanir

Node.js 24 eða nýrra nægir; ekki þarf að setja upp pakka.

```sh
node validate.cjs
```

Prófið sannreynir meðal annars 1.000 slembiúrtök í hvorum ham (10 og 80 spurningar), stigagjöf, efnadreifingu, heimildatilvísanir, vistun og tímamörk. Viðmótsatburðir eru hermdir án vafrastýringar. Sjónræn vafraprófun er ekki hluti af þessu prófi.

Ef upprunalega námsefnismappan er í `../Prófsundirbúningur` má jafnframt athuga að heimildaskrár séu til:

```sh
node validate.cjs --local-sources
```

## GitHub Pages

Geymslan inniheldur sjálfvirkt útgáfuferli fyrir GitHub Pages. Veldu **Settings → Pages → Source: GitHub Actions**. Breytingar á `main` fara þá sjálfkrafa í útgáfu; einnig má velja **Actions → Birta prófæfingu → Run workflow**. Próf verða að standast áður en `dist/` er birt.

GitHub-aðgangurinn þarf að styðja Pages fyrir valið sýnileikastig geymslunnar. Virkjun Pages getur gert vefsíðuna opinbera þótt kóðageymslan sé lokuð; stillingar þarf að velja með það í huga.

## Kóðinn

- `dist/questions-*.js`: spurningar, svör, skýringar og heimildir.
- `dist/engine.js`: slembival, stigagjöf og gögn um umferð.
- `dist/diagrams.js`: SVG-teikningar fyrir BPMN og orsakasamhengi.
- `dist/app.js`: viðmót, tímamörk, vistun og yfirferð.
- `sources.json`: aðeins heiti og blaðsíðufjöldi heimilda.
- `validate.cjs`: sjálfvirkar prófanir.

Frumglærur, kennslubækur og persónulegar staðbundnar slóðir fylgja ekki geymslunni.
