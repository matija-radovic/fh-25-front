# FH25 frontend

## Link dizajna i sajta

• [link](https://www.figma.com/design/Oo6Wc3wnnCZ4T6NJ7kGAQq/FON-HAKATON-2025?node-id=0-1&t=VBwUWzA67E3dRG33-1) do figme

• [link](https://youtu.be/xvFZjo5PgG0) do glavnog sajta (vercel master)

• [link](https://youtu.be/xvFZjo5PgG0) do devolpment sajta (vercel development)

# Rad na projektu

Projekat skidate i instalirate na sledeći način
```bash
# Kloniranje projekta
git clone https://github.com/matija-radovic/fh-25-front.git

# Instalacija projekta
cd fh-25-front
npm install

# Otvaranje projekta u Visual Studio Code-u
code .
```

## Git i GitHub
Glavna grana je `main`. U nju ne pišemo commitove ni pod kojim uslovima. master grana služi da se sajt deployuje na hosting i na njoj će biti samo finalne verzije sajta.

Glavna grana u kojoj ćemo vršiti development biće `development` grana. Ni u nju ne radimo ništa već to radimo u sporednim "feature" granama i kasnije samo merge-ujemo u development kada je neki feature gotov.

<b>Kada hoćemo da napravimo granu za novi feature, uvek se granamo iz </b>`development`<b> grane. Naravno prvo odemo u </b>`development`<b> i pullujemo promene koje su se možda desile.</b>

Za svaki deo zaduženja koji imate pravite vašu granu na Git-u. Naziv grane treba da bude `feature/<ime-grane>`. Poželjno da je ovo radite u Git Bash konzoli da lakše vidite u kojoj se grani nalazite. Takođe, lakša i preporučena alternativa je putem aplikacije [Github Desktop](https://github.com/apps/desktop).

Kada popravljamo neki **bug** koji smo našli u `development` ili drugoj grani to radimo u `bugfix/<ime-grane-ili-bug-a>` grani.

Primeri:
```bash
# Kreiranje grane
git branch # da vidite gde se nalazite
git checkout development # prelazak na development granu
git checkout -b "feature/<ime-grane>" # kreiranje grane
git branch # provera da li smo na pravilnoj grani
```
|Dodavanje feature-a|Rešavanje bug-a|
|:-|:-|
|`git branch "feature/agenda"`|`git branch "bugfix/agenda-animacija`

### Spajajnje grana
Spajanje sporedne grane sa glavnom radimo drugačije malo nego na radionici, i to na sledeći način
1. Kada smo završili sa poslom na `feature` ili `bugfix` sporednoj grani i uradili zadnji commit, možemo da se checkout-ujemo na development granu `git checkout development`
2. U development grani uzmemo najnovije promene `git pull origin development`
3. Zatim sve te nove promene potrebno je da prenesmo u našu sporednu granu odakle smo izašli. Tako da kucamo `git checkout "<ime-naše-grane>"`
4. Sada mergujemo development granu (sve nove promene koje su se desile) nazad u našu granu komandom `git merge development`
5. Onda izvršimo komandu `git push origin <ime-naše-grane>`
6. Nakon toga potrebno je da odemo na GitHub i napravimo Pull Request ka `development`!!!! grani<br/>
Pull Request se pravi tako što odemo u sekciju "Pull Requst" koja se nalazi ispod naziva repozitorijuma, nakon toga kliknemo na zeleno dugme gde piše "New Pull Request". Postoje u gornjem delu sekcije dva mala rop down menija, **OBAVZENO** izaberite kao `base` granu `development` granu, a kao `compare` granu izaberite vašu sporednu granu. [Youtube Tutorial](https://youtu.be/nCKdihvneS0)

## Komponente
Sav kod koji kucate, kucate na <b>ENGLESKOM</b>!!! <br/>(uključujući i naziv sekcija, css klasa, funkcija itd. npr. AboutHackathon, Agenda..., getName, EXAMPLE_CONSTANT)

Takođe, sav kod kucate u TypeScript fajlovima. Ako je to komponenta onda je ekstenzija `.tsx`, ukoliko je bilo šta drugo `.ts`.

***
#### Konvencija Imenovanja
* Konvencija imenovanja za JavaScript koda je ***camelCase***.
* Komponente kreću velikim slovom ***ComponentExample***
Konstante se pišu u ***snake_case***-u velikim slovima ***CONST_EXAMPLE***.
* CSS klase se pišu u ***kebab-case***-u malim slovima.
* SCSS fajlovi imaju isti naziv kao i komponente

***
Sekcije sajta pravite u folderu `./src/components/`. Potrebno je da napravite folder sa fajlom koji ima naziv vaše sekcije na *engleskom jeziku* i u sebi sadrži komponentu. Nakon toga import-ujete i export-ujete vašu komponentu u okviru [`./src/components/index.tsx`](./src/components/index.tsx).<br/>
Sve ostale komoponente koje pravite i jedino će se koristiti u vašoj sekciji, ostavite ih u istom folderu ili kreirajte isto folder u vašoj sekciji sa komponentom itd.

Ukoliko pravite neku deljenu komponentu, poput text-box-a, na isti način kao i sekciju samo na putanji `./src/components/-shared/` i export-ujete na isti fazon kao i sekciju.

Svaku sekciju koju radite na stranici uokvirite sa `<Section>` komponentom i ukoliko vaša sekcija ima naslov prosledite joj parametar `heading="ime naslova"`. Primer:<br/>
```tsx
import { Section } from '../components'
const YourSection = () => {
    //... Vaš kod
    return (
        <Section heading="naslov">
            <div>
                {/* Vaši elementi i komponente*/}
            <div>
            <div>...</div>
        </Section>
    )
}
```
Imate primer na putanji `./src/components/Example`<br/>
Nemojte da zaboravite da importujete SCSS fajl u okviru vaše komponente.

## CSS
Za izradu stila sajta koristićemo css pretprocesor [SASS](https://sass-lang.com).<br/>
Sve vaši sass fajlovi će imati ekstenziju `.scss`. Imate moju dozvolu da koristite i `.sass` ali je moja preporuka da se ostane na scss.<br/>
Ovaj pretprocesor se samo nadograđuje preko običnog CSS-a, tako da možete kucati običan CSS bez ikakvog problema.

Vaši CSS fajlovi će se nalaziti u folderu gde se nalazi vaša komponenta koju pravite.

**OBAVEZNO KORISTITE UNIKATNA IMENA ZA KLASE**
<br/> Primer: "agenda-container", "agenda-wrapper", "agenda-box", "agenda-anchor", a ne "container" "wrapper" "box"... itd.

### Korišćenje promenljivih
U našoj aplikaciji ćemo iskucati dosta istog CSS koda.. te možemo da koristimo promenljive kako bi osigurali da promenom jedne vrednosti utičemo na sve delove stranice/sekcije.

Globalne promenljive, tj. promnljive koje će se koristiti svuda stoje na putanji [`./src/utils/css/`](./src/utils/css/). Tu možete kreirati fajl, sa prefixom "_" (npr. `_containers.scss`), ukoliko smatrate da je potreban ili da upišete neku vredost u već postojećim.<br/>
Uglavnom ćete koristiti fajl [`_colors.scss`](./src/utils/css/_colors.scss) i [`_mediaqueries.scss`](./src/utils/css/_mediaqueries.scss) da uzmete vrednosti koje su definsane za boje i širine ekrana.

**SVE BOJE UZIMATE IZ** `_colors.scss` **I NIGDE DRUGDE!!!! ISTO VAŽI I ZA REZOLUCIJE EKRANA**<br/>
Gradiente i slično kreirate uz pomoć importovanih boja u vašim fajlovima.

## SLIKE
Kada ne znate šta da stavite za alt tag, stavite prazan string.

Sve slike idu u jedan od ova dva foldera:
### Public folder
***
U okiviru public foldera idu svi asseti čije ime mora da ostane takvo kakvo jeste -> PetarPetrovic.jpg, slike za akreditaciju itd. Takođe ovde idu i svi ne navedeni i neiskorišćeni fajlovi.

### Assets folder
***
Svi fajlovi koji su stavljeni u okviru `"./src"` direktorijuma dobiće hash-ovan naziv. Ovde stavljate sve nepotrebne ikonice i ostale stvari koje nisu potrebne nikome. Ako je potrebno da neku logiku primenite sa nazivom fajla itd. smestite ih u public folder (alternativna opcija za rukovođenje fajlovima i njihovim nazivima u nastavku).
```js
import __img0png from './dir/img0.png'
import __img1png from './dir/img1.png'

function getImageUrl(name) {
  const modules = {
    './dir/img0.png': __img0png,
    './dir/img1.png': __img1png,
  }
  return new URL(modules[`./dir/${name}.png`], import.meta.url).href
  // return modules[`./dir/${name}.png`] // Alternativni način
} 

function getImageUrl(name) {
  const modules = {
    macka: __img0png,
    pas: __img0png
  }

  return modules[name];
}
```

***

Fajlovi koji se nalaze na putanji `./src/**/*` moraju da se importuju da bi radili, dok fajlovi iz public foldera mogu da se navedu
```jsx
import __img0png from './dir/img0.png'

const Component = () => {
  return (
    <>
      <img src={__img0png} alt=""/>
      <img src="/slika-iz-public-foldera.png" alt=""/>
    </>
  )
}
```
## Najvažnije

Srećno sa radom, za sve vam stojim na raspolaganju












