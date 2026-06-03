# Transport Stack — Roundtable 1

Interactive event landing page for **Roundtable 1: Open Data & Interoperability**.

## View the page

Open `index.html` in any browser, or serve locally:

```bash
python3 -m http.server 8088
# → http://localhost:8088/index.html
```

## Features

- **Responsive landing page** — works on mobile and desktop
- **Dark/light mode toggle** — top-right corner
- **Google Form registration** — embedded form for collecting attendee details
- **Animated network canvas** — API connection visualization in the background

## Content

| Field | Value |
|-------|-------|
| **Event** | Roundtable 1 — Open Data & Interoperability |
| **Series** | India Urban Mobility Forum |
| **Date** | June 12th, 2026 |
| **Time** | 10:00 AM – 12:00 PM IST |
| **Format** | Virtual |

### Partners

- **JICA** — Organizing Partner
- **BCG** — Knowledge Partner
- **Chartr** — Ecosystem Partner
- **IIIT Delhi** — Host / Academic Partner

### Agenda (7 sessions)

| Time | Session | Speakers |
|------|---------|----------|
| 10:00 – 10:10 | Welcome Address | Prof. Pravesh Biyani |
| 10:10 – 10:25 | Keynote Talk | Prof. Inder Gopal |
| 10:25 – 11:05 | Panel Discussion | Prof. Gitakrishnan Ramadurai, Dr Amit Jain (Director Operations, DMRC), Ms Aswathy Dilip (ITDP) |
| 11:05 – 11:15 | Startup Showcase | Chartr – Talking Bus Stop |
| 11:15 – 11:25 | Transport Stack Walkthrough | Chartr Team |
| 11:25 – 11:40 | Open Discussion | Moderated |
| 11:40 – 11:45 | Closing Address | Prof. Pravesh Biyani |

## Editing

All content is in `index.html`. Search for the section you want to edit:

- **Partners:** Search for "JICA", "BCG" etc. — each partner has a `<div class="glass ...">` card
- **Agenda:** Search for a session title
- **Speakers:** Search for the speaker name inside `<strong>` tags
- **Event details:** Search for "12th June" or "10:00"
- **Google Form URL:** Search for `YOUR_GOOGLE_FORM_URL` and replace with your actual form embed link

### Google Form Setup

Create the form with these fields:

| # | Question | Type | Options |
|---|----------|------|---------|
| 1 | Full Name | Short text | — |
| 2 | Email Address | Short text | — |
| 3 | Organization / Institution | Short text | — |
| 4 | Designation / Role | Short text | — |
| 5 | Participant Category | Dropdown | Public Transport Operator, Government/Policy Body, Technology/Data Provider, Startup/Entrepreneur, Academic/Researcher, Think Tank/Non-profit, Consultant/Advisor, Media/Journalist, Other |
| 6 | How did you hear about this? | Dropdown | Email invitation, JICA, BCG, Chartr, IIIT Delhi, Transport Stack GitHub/Wiki, LinkedIn/Social media, Colleague/Word of mouth, Other |

For **two-column layout**, use Google Forms' column layout option (click a question → layout toggle) before grabbing the embed URL.

## Hosting on GitHub Pages

This page is 100% compatible:

1. Push the repo to GitHub
2. Go to Settings → Pages
3. Source: deploy from `main` branch, root folder
4. Or use `gh-pages` branch:

```bash
git subtree push --prefix rt1-poster origin gh-pages
```

## Design

- **Framework:** Tailwind CSS (CDN)
- **Fonts:** Inter + Orbitron (Google Fonts)
- **Icons:** Font Awesome 6
- **Original design by:** Gemini AI, adapted with corrected event data

For the original poster screenshot version and email template, see the `dist/` folder (build system deprecated).
