<div align="center">

# VEXON Campus Events Hub

**Explore Beyond Boundaries.**

A six-page website for a university events department, built with HTML, CSS, Bootstrap 5 and plain JavaScript.

[Pages](#pages) · [Features](#features) · [Folder structure](#folder-structure) · [Run it](#run-it) · [Team](#team)

</div>

---

## About

VEXON is the events hub of FAST-NUCES Islamabad. Students can find upcoming events, read department news, explore societies, get event resources and send feedback or event proposals. The main event is **New Year Fest 27** on 1 January 2027.

| | |
|---|---|
| Course | CL-1000 Introduction to Information and Communication Technologies |
| Department | AI & DS, Fall 2026 |
| Stack | HTML5, CSS3, Bootstrap 5 (CDN), JavaScript |
| Due | 15 November 2026 |

---

## Pages

Click a page to see what it contains.

<details>
<summary><b>1. Home</b> (<code>html/home.html</code>)</summary>

- Hero banner with the VEXON logo and punchline
- Next big event panel with a live JavaScript countdown to 1 January 2027
- Popular events and recent announcements
</details>

<details>
<summary><b>2. News</b> (<code>html/news.html</code>)</summary>

- Bootstrap carousel with 4 auto-sliding images of past and upcoming events
- Bootstrap accordion with 4 news articles
</details>

<details>
<summary><b>3. Events</b> (<code>html/events.html</code>)</summary>

- 8 event cards in a Bootstrap grid, colour-coded by category
- Hover effect that expands the card details
- Bootstrap modal with the full details of each event
- JavaScript filter buttons: All, Academic, Cultural, Sports, Career
</details>

<details>
<summary><b>4. Clubs</b> (<code>html/clubs.html</code>)</summary>

- 8 societies in 4 categories: Technical, Arts, Sports, Social Welfare
- A different CSS style for each category
- Hover animations on society names and logos
</details>

<details>
<summary><b>5. Resources</b> (<code>html/resources.html</code>)</summary>

- Accessible Bootstrap tabs: Venue Booking, Event Rules, Downloadable Forms, FAQs
- 3 downloadable PDF forms and 10 FAQs
</details>

<details>
<summary><b>6. Contact</b> (<code>html/contact.html</code>)</summary>

- Feedback and event proposal form with JavaScript validation (required fields, valid email, future date)
- Success message after a valid submission
- Google Maps iframe showing the university location
</details>

---

## Features

- [x] Responsive layout with the Bootstrap grid and CSS media queries
- [x] Dark and light mode toggle using CSS variables
- [x] Page-load and hover animations in CSS
- [x] Same navbar, footer, fonts and colours on every page
- [x] Countdown timer, event filter, form validation and theme toggle in plain JavaScript
- [x] No templates, no CMS, no paid libraries

### Design

| Item | Choice |
|---|---|
| Colours | Black `#000000` and teal `#2EB5C5`, taken from the logo |
| Headings font | Ethnocentric |
| Body font | Roboto |
| Event colours | Academic teal · Cultural pink · Sports green · Career amber |

---

## Folder structure

<details>
<summary>Open the file tree</summary>

```
vexon-events-hub/
├── html/
│   ├── home.html
│   ├── news.html
│   ├── events.html
│   ├── clubs.html
│   ├── resources.html
│   └── contact.html
├── css/
│   ├── global.css        shared variables, theme, navbar, footer
│   ├── home.css
│   ├── news.css
│   ├── events.css
│   ├── clubs.css
│   ├── resources.css
│   └── contact.css
├── js/
│   ├── global.js         theme toggle
│   ├── home.js           countdown timer
│   ├── events.js         category filter
│   └── contact.js        form validation
├── images/               logos, hero banner, carousel images
├── fonts/                Ethnocentric font
├── forms/                3 downloadable PDF forms
└── README.md
```
</details>

---

## Run it

No installation is needed.

1. Download or unzip the project folder.
2. Open `html/home.html` in a browser (Chrome, Edge or Firefox).
3. Use the navbar to move between pages.

An internet connection is needed for Bootstrap, Google Fonts and the map, which load from CDNs.

<details>
<summary>Quick test checklist</summary>

- [ ] The countdown ticks every second
- [ ] The Dark/Light button changes the theme on every page
- [ ] The carousel slides by itself
- [ ] The event filter buttons show and hide cards
- [ ] Each event modal opens
- [ ] The resource tabs switch
- [ ] The form shows errors for empty fields, a wrong email and a past date
- [ ] The form shows a success message when valid
- [ ] The layout works on a phone-sized window
</details>

---

## Team

| Name | Roll number |
|---|---|
| Raid Ali | i260097 |
| Sohaib Zulfiqar | i260145 |
| Riyyan Faisal | i260051 |

<div align="center">

<sub>VEXON Campus Events Hub · FAST-NUCES Islamabad · Fall 2026</sub>

</div>
