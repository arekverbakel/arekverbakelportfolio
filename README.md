# Are Verbakel — portfolio website

Next.js-project voor je portfolio. Op dit moment is alleen de **homepage**
(desktop + mobiel) gebouwd. Portfolio, Over mij, Project 1 en Project 2
volgen in dezelfde stijl.

## Foto's toevoegen (verplicht voor 1:1 resultaat)

In `public/images/` staan nu placeholder-afbeeldingen. Vervang deze door je
eigen Figma-exports met **exact dezelfde bestandsnaam**:

- `profile.jpg` → je eigen profielfoto (in kleur — de site zet 'm zelf
  automatisch om naar zwart-wit via CSS)
- `project-smart.jpg` → thumbnail van het SMART-project
- `project-giftig.jpg` → thumbnail van Studio Giftig
- `project-persoonlijk.jpg` → thumbnail van je persoonlijke project 2026

Gewoon het oude bestand overschrijven met je export uit Figma (zelfde naam,
zelfde map) — je hoeft geen code aan te passen.

## Stijl aanpassen

Alle kleuren, tussenruimtes en de radius staan op één plek:
`app/globals.css`, bovenin bij `:root { ... }`.

## Lokaal bekijken (optioneel)

Als je het eerst zelf wilt zien voordat je live gaat:

```bash
npm install
npm run dev
```

Open daarna `http://localhost:3000`.

## Live zetten op Vercel

**Makkelijkste manier (geen terminal nodig):**

1. Zet deze hele map in een nieuwe GitHub-repository (via github.com kun je
   bestanden ook gewoon uploaden met "Add file → Upload files").
2. Ga naar [vercel.com](https://vercel.com), log in met je GitHub-account.
3. Klik op "Add New… → Project", kies je repository.
4. Vercel herkent automatisch dat het een Next.js-project is — je hoeft
   niets in te stellen. Klik op "Deploy".
5. Na ~1 minuut krijg je een live URL.

Elke keer dat je daarna bestanden in GitHub aanpast (bijv. een nieuwe foto
uploadt), zet Vercel automatisch de nieuwe versie live.
