# VEXON Campus Events Hub: Project Rules

Build a 6-page static website called "VEXON Campus Events Hub" for the events department of a university (FAST-NUCES Islamabad). This is a university semester project (course IICT, CL-1000) graded on a rubric. `project-brief.pdf` is the official brief. EVERY requirement in it and below must be met.

## WORKFLOW
- I will ask for ONE page (or one part) per prompt. Do only what the current prompt asks. Do not edit other pages unless told.
- After each task, tell me what you built and what I should test.
- If you must change a shared file (global.css, global.js), say what and why.

## PRIORITIES (in order)
1. Meet every project requirement. Nothing missing.
2. Keep the code BASIC and easy for students to explain in a viva.
3. Look sleek, minimal, fun and clearly human-designed (see "Avoid the AI look").

Do NOT add anything not in the requirements: no login/signup, testimonials, team section, stats, extra libraries, backend, extra pages, or report. Only HTML, CSS, Bootstrap 5 (CDN) and plain JavaScript. No jQuery, no templates, no CMS.

## CODING STYLE: BASIC ONLY
- Write the simplest code possible. Prefer repetitive, plain code over clever shortcuts. Students must be able to explain every line.
- HTML: simple semantic tags and standard Bootstrap classes. Write each card, modal and list item out in full (copy-paste repetition is fine). No templating or generating HTML with JavaScript.
- CSS: simple class selectors, CSS variables, transitions, @keyframes, hover effects, flexbox, and a few @media queries. No preprocessors, no clamp()/calc() tricks, no complex selectors, no `!important`.
- JavaScript: plain beginner-level JS. Use `function` declarations, `document.getElementById` / `querySelector`, `addEventListener`, `if/else`, and simple `for` loops. NO classes, modules, async/await, fetch, arrow-function chains, map/filter/reduce, destructuring or regex tricks (a basic email check using `includes("@")` and `includes(".")` is enough). One small job per function, each with a plain-English comment.
- Use Bootstrap for: navbar, grid (row/col), accordion, carousel, modal, tabs, form classes, buttons.
- Use CSS for: dark/light theme variables, hover effects, animations, colour-coding, per-section styles, media queries.
- Use JavaScript only for: countdown timer, theme toggle, event category filter, form validation.
- Short comments before every section/function. Consistent indentation. Meaningful class names.

## BRAND
- Name: VEXON. Punchline: "Explore Beyond Boundaries."
- Logos (provided, black background): `images/logo-icon.jpg` (three gears) and `images/logo-wordmark.jpg` (VEXON text).
- Colours from the logo: black #000000 and teal #2EB5C5 (hover #5FD6E3). One accent colour only; teal is the brand colour everywhere.
- Fonts: "Ethnocentric" (`fonts/ethnocentric.ttf` via @font-face, sans-serif fallback) for headings, nav links, buttons and card titles. Body text: Roboto (Google Fonts). Do NOT use Inter.
- Design reference (attached screenshots): take only the general feel: black navbar, full-width hero image, bordered cards, a dark rounded panel, black footer. Do not copy code, text or images. No Login/Sign Up buttons.

## AVOID THE AI LOOK (strict rules)
- Colour: NO purple, NO gradients of any kind (buttons, backgrounds, text). Solid colours only. No glassmorphism or backdrop blur.
- Typography: ONE type scale in :root with ratio 1.25 (0.8rem, 1rem, 1.25rem, 1.563rem, 1.953rem, 2.441rem, 3.052rem), used through variables only. Headings: letter-spacing 0.04em, line-height 1.2. Body line-height 1.6.
- Buttons: 4px radius, solid fill, no pill shapes, NO arrows, no icons inside buttons. Specific labels ("See New Year Fest events", "View details", "Send message"), never "Get started" or "Learn more".
- Radii: only `--radius-outer: 12px` and `--radius-inner: 6px`. Elements inside a rounded container use `--radius-inner`.
- Spacing: 8px-based scale via variables (0.5rem, 1rem, 1.5rem, 2rem, 3rem, 5rem).
- Alignment: do NOT centre everything. Headings and body text are LEFT-aligned. Only the footer copyright line and the countdown numbers may be centred.
- Layout variety: no "hero + 3 equal feature cards". Each page uses a different section layout; avoid mirrored symmetry and repeated identical blocks.
- Animation: fade-in-up on load, hover lift, soft teal glow, gear logo rotation on hover. NO bounce, spring or wiggle. Durations 0.2s to 0.6s.
- z-index: use Bootstrap defaults; never write a custom z-index above 10.
- Copy: every sentence must be specific to VEXON, New Year Fest 27, Islamabad and the listed events/societies. Use real-sounding details (venues like Main Auditorium, Cricket Ground, CS Lab 3; times; registration fees in PKR; team sizes). BANNED words: unlock, elevate, seamless, empower, revolutionize, cutting-edge, next-level, journey, "world-class".
- NO invented statistics, testimonials, reviews, placeholder people ("Jane Doe") or fake names. Society contacts are emails only (e.g. computing@vexon.edu.pk).
- Text characters: curly quotes and apostrophes (’ “ ”) in all visible text. Straight quotes only inside HTML/CSS/JS syntax.
- Images: never add text to images yourself. hero-banner.jpg already contains the logo and text on purpose. Do not generate or add any image yourself.

## FOLDER STRUCTURE (exactly)
```
vexon-events-hub/
  html/    home.html, news.html, events.html, clubs.html, resources.html, contact.html
  css/     global.css (variables, navbar, footer, theme, shared animations)
           + home.css, news.css, events.css, clubs.css, resources.css, contact.css
  js/      global.js (theme toggle) + home.js (countdown), events.js (filter), contact.js (validation)
           (no empty JS files; news, clubs and resources need none)
  images/  logo-icon.jpg, logo-wordmark.jpg, hero-banner.jpg, carousel-1.jpg to carousel-4.jpg
  fonts/   ethnocentric.ttf
```
Use relative paths (`../css/global.css`). Every page links the Bootstrap 5 CSS and JS bundle (CDN), global.css, its own css, global.js, and its own js if it exists. If an image is missing, keep the img tag and tell me the filename.

## SHARED ON ALL PAGES (identical code on every page)
- Responsive Bootstrap navbar: logo-icon + logo-wordmark on the left; links Home, News, Events, Clubs, Resources, Contact; a Dark/Light toggle button (text label "Dark"/"Light", no emoji). Highlight the active page.
- Footer (one simple block): © 2026 VEXON, small link row, tagline "Explore Beyond Boundaries.", and "Raid Ali (i260097), Sohaib Zulfiqar (i260145), Riyyan Faisal (i260051)".
- Navbar and footer stay black in both themes.
- Dark/Light mode with CSS variables: colours on :root (light) and `[data-theme="dark"]` (dark), default dark. global.js toggles `data-theme` on `<html>` and saves the choice in localStorage so all pages match.
- Favicon: `images/logo-icon.jpg`.
- Responsive: Bootstrap grid AND real CSS @media queries (max-width 768px and 576px).
- Page-load and hover animations as described above.

## PAGE 1: home.html
- Hero: `<img src="../images/hero-banner.jpg" class="img-fluid w-100" alt="VEXON, Explore Beyond Boundaries. New Year Fest 27">`. The banner already contains the logo, name and punchline, so do NOT add them again in HTML. Directly below it: a left-aligned intro block with two specific sentences about New Year Fest 27 at FAST-NUCES Islamabad and the button "See New Year Fest events" linking to events.html.
- Next big event panel: dark rounded panel, split layout (text left: "NEW YEAR FEST 27", 1 January 2027, venue; countdown right). JavaScript countdown (days, hours, minutes, seconds) to 1 Jan 2027 00:00:00 using setInterval. When finished show "New Year Fest is live".
- Popular events: ONE large featured card on the left and TWO smaller stacked cards on the right (taken from the 8 events).
- Recent announcements: simple vertical list, date on the left and text on the right (3 items).

## PAGE 2: news.html
- Bootstrap carousel first: 4 slides (carousel-1 to carousel-4.jpg) with captions, auto-sliding (`data-bs-ride="carousel"`), prev/next controls and indicators. Slides show past and upcoming events: Battle of the Bands 2026 (past), Robotics Showdown 2026 (past), AI and Data Science Hackathon, Jan 2027 (upcoming), Futsal Championship, Jan 2027 (upcoming).
- Bootstrap accordion with 4 articles, left-aligned, each with a date and 3-4 specific sentences: New Year Fest 27 registrations open; Venue booking opens for societies; Robotics team wins national title (fictional but specific); New event proposal guidelines.

## PAGE 3: events.html
- Left-aligned heading and filter buttons (All, Academic, Cultural, Sports, Career). events.js: each card has a `data-category`; clicking a button shows only matching cards (add/remove `d-none` with a simple for loop) and marks the active button.
- 8 event cards in a Bootstrap grid (row/col: 4 per row on large screens, 2 on medium, 1 on small), colour-coded by category: Academic teal #2EB5C5, Cultural pink #FF5C8A, Sports green #4ADE80, Career amber #FBBF24. Each card: title, category badge, date, time, venue, one-line description.
- Hover: the card lifts and expands to reveal more detail (CSS transition on max-height/opacity). "View details" opens a Bootstrap modal with the full details. Write one separate modal per event (no JS needed).
- Events (1-4 Jan 2027, inspired by nascon.com.pk): Academic: Competitive Programming Contest, AI and Data Science Hackathon. Cultural: Battle of the Bands, Mushaira and Talent Night. Sports: Futsal Championship, Esports Tournament. Career: Job Fair, Business Plan Competition.

## PAGE 4: clubs.html
- 4 sections: Technical, Arts, Sports, Social Welfare. Each has a unique CSS style (accent colour, border style, background tint) and a DIFFERENT arrangement (e.g. Technical as horizontal cards, Arts as a 2-column list, Sports as bordered boxes, Social Welfare as a plain list with large logos). 2 societies each = 8: Computing Society, Robotics Club, Music Society, Dramatics Society, Cricket and Futsal Club, Esports Club, Community Service Society, Green Campus Society.
- Each society: logo (Bootstrap Icons via CDN inside a circle), name, 1-2 specific sentences, contact email.
- Hover animation on names and logos (scale, colour change, glow).

## PAGE 5: resources.html
- Bootstrap tabs (`nav-tabs`, `data-bs-toggle="tab"`, `tab-pane` with `fade`) with accessibility attributes (`role="tablist"`, `role="tab"`, `aria-controls`, `aria-selected`, visible focus style): Venue Booking, Event Rules, Downloadable Forms, FAQs.
- Venue Booking: numbered steps + short list of venues. Event Rules: numbered list. Downloadable Forms: 3 download buttons (Venue Booking Form, Event Proposal Form, Equipment Request Form) with `href="#"`. FAQs: 10 specific questions and answers in a Bootstrap accordion.

## PAGE 6: contact.html
- Two-column layout: form on the left, Google Maps iframe on the right (stacked on mobile): `https://www.google.com/maps?q=FAST+NUCES+Islamabad&output=embed`, with address, email and phone below it.
- One form: Name, Email, Society name, Request type (Feedback / Event Proposal), Event title, Proposed event date, Message. Use `novalidate`; validate in contact.js on submit (`preventDefault`): required fields not empty, valid email, event date in the future. Show a red error under each invalid field. If valid, show a green success message ("Thank you, your submission has been received.") and reset the form.

## CODE QUALITY
Semantic HTML5, one h1 per page, alt text on images, consistent indentation, no inline styles, no `!important`, meaningful class names, comments before each section.

## RUBRIC CHECKLIST (confirm at the end of each page)
Responsive navbar, consistent navbar/footer/fonts/colours, dark/light toggle with CSS variables, Bootstrap grid + CSS media queries, advanced CSS animations (load + hover), and every feature listed for that page. Also list the file tree, a one-line summary per file, and anything missing (e.g. absent images).
```