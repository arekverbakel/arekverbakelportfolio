# Arek Verbakel — portfolio website

Next.js-project voor je portfolio. Nu 1:1 opgebouwd vanuit de echte Figma-data
(exacte posities, kleuren, teksten). Alleen de **homepage** (desktop + mobiel)
staat er nu in.

## Foto's toevoegen (verplicht voor 1:1 resultaat)

In `public/images/` staan nu placeholder-afbeeldingen. Vervang ze door je
eigen Drive/Figma-exports met **exact dezelfde bestandsnaam**:

| Bestand in `public/images/`   | Vervang met (uit je Google Drive)     |
|--------------------------------|----------------------------------------|
| `profile.jpg`                  | `Profiel foto website.png` (kleur, wordt hier automatisch zwart-wit) |
| `project-smart.jpg`            | `SMART INSTA FOTO.png`                |
| `project-giftig.jpg`           | `HermanLaatsteFoto Portfolio.png`     |

Gewoon het oude bestand overschrijven met dezelfde naam — geen code nodig.

## Wat er nu klopt (rechtstreeks uit je Figma-bestand gehaald)

- Header: alleen locatie, beschikbaarheid en contactknop — geen logo/nav
- Footer: bento-grid van 4 "glazen" (backdrop-blur) navigatieblokken boven
  je "Arek Verbakel"-watermerk
- Hero: "EEN · HELE · GOEDE" klein en verspreid, daaronder groot "MEDIAVORMGEVER"
- Precies 2 portfolio-kaarten (SMART, Studio Giftig)
- Inter Regular/Semi Bold/Bold, overal -5% letter-spacing
- Kleuren #FFFFFF / #D9D9D9 / #262626 / #171717, radius 12,5px, gap 20px/15px

## Stijl aanpassen

Kleuren, tussenruimtes en radius staan op één plek: `app/globals.css`,
bovenin bij `:root { ... }`.

## Lokaal bekijken (optioneel)

```bash
npm install
npm run dev
```

Open daarna `http://localhost:3000`.

## Live zetten op Vercel

Zodra je de nieuwe bestanden naar GitHub pusht (via GitHub Desktop, net zoals
je al deed), bouwt Vercel automatisch een nieuwe versie. Geen nieuwe stappen
nodig — alleen: commit, push, en na ~1 minuut staat 'm live op je bestaande
`arekverbakelportfolio.vercel.app`-link.
