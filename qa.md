# QA - KT Roofing Manchester

## Source Audit

- Facebook page resolved and verified as KT Roofing in Manchester.
- Google share resolves to a KT Roofing search/listing with knowledge graph ID `/g/11ghlxqm4v`.
- Instagram public page `kt_roofing` confirms matching service description.
- Phone verified from public snippets: `07468598751`.
- Email verified from public snippets: `Ktroofingx@hotmail.com`.
- Services verified from public snippets: tiling, slating, leadwork, chimney revamps, flat roofs, fascias and guttering.
- No public street address available; no embedded Google map is used.
- No written testimonials available from accessible public routes; no testimonial cards are used.

## Asset Audit

- Real logo/profile image used from Facebook.
- Hero and service visuals are generated and recorded in `image-map.md`.
- Gallery is labelled as service visuals, not portfolio/proof.
- All generated visuals are landscape and crop-safe for the horizontal gallery pattern.

## QA Result

- `npm run build` - PASS
- `npm run build:github` - PASS
- `.nojekyll` added to static export - PASS
- Forbidden phrase/template scan - PASS
- One H1 / one primary form / no iframe by design - PASS
- Verified `mailto:Ktroofingx@hotmail.com` route - PASS
- Image dimension check - PASS
- Desktop hero/form screenshot - PASS
- Mobile hero/form screenshot - PASS
- Gallery screenshot and crop inspection - PASS
- Gallery movement measured locally: approximately `1003px` - PASS
- Deployment/live QA - pending
