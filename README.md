# Signal Hill — React + TypeScript

A React 18 + TypeScript (Vite) rebuild of signalhill.co.nz.

## Pages
- `/` Home — hero, intro, hours, story teaser, newsletter signup
- `/menu` Menu — winter menu + drinks list (images with lightbox, PDF links, online ordering)
- `/our-story` Our Story — history of 24 Victoria Road and an Instagram-style journal grid
- `/contact` Contact — reservation request form, contact details, map
- `/press` Press — Devonport Flagstaff feature
- `/cart` Cart — empty-cart page (as on the original)

## Run it
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview
```

## Things to wire up
- **Images** are loaded from the existing Squarespace CDN (see `src/data/site.ts`). Download them into `public/images/` and update the URLs before the Squarespace site is shut down.
- **Menu PDFs** link to the current site's `/s/...` files — copy them into `public/` too.
- **Reservation form** (`src/pages/Contact.tsx`) and **newsletter** (`src/components/Newsletter.tsx`) only show a success message. Connect them to your booking provider / mailing list (look for the `TODO` comments).
- All business details (hours, phone, address, socials) live in `src/data/site.ts`.

## Deploying
It's a single-page app with client-side routing, so configure your host to fall back to `index.html` (Netlify: `_redirects` is included; Vercel: `vercel.json` is included).
