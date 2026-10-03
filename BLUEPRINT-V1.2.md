# St. Petrus Hamburg App — Product Blueprint V1.2

## 1. Product architecture

### App 1 — Main Church App
Primary audience: entire church community.

**Bottom navigation:**
1. Home
2. Kirche
3. Spiritual
4. Medien
5. Community

**Profile / settings:** top-right, intentionally not a primary navigation tab.

### App 2 — Sunday School App
A separate product for students, parents, servants and administrators.
The main app contains only a strong entry point / preview so users can discover it without mixing Sunday School into the main navigation.

---

## 2. Main App information architecture

### Home
- Welcome / church identity
- Next liturgy / important date
- Quick access to the five pillars
- Current announcements
- Sunday School entry with the three age-group cards
- Personalized content later

### Kirche
The website's four major information areas are absorbed into the app rather than copied 1:1.

**Core destinations:**
- Gottesdienste / Liturgien
- Veranstaltungen
- Über unsere Kirche
- Heiliger Markus
- Unser Kirchenpatron — St. Petrus I. von Alexandria
- Papst Tawadros II
- Unsere Priester
- Kontakt & Anfahrt

**Content principle:** long website text becomes short, readable mobile sections, timelines, facts and visual cards.

### Spiritualität
- Bible
- One-year Bible reading plan
- Agpeya in German + Arabic
- Coptic calendar / Synaxar
- Favorites

Future candidates:
- Daily verse
- Daily saint
- Prayer reminders
- Personal spiritual journey

### Medien
New primary section introduced in V1.2.

- Videos
- Images
- Sermons / audio
- Learning content
- Featured / recommended

The current website's media page is sparse and contains older example events. Therefore V1.2 establishes the **product structure**, not a literal import of those legacy entries.

### Community
- Housing support
- Jobs
- Education
- General help
- New in Hamburg?
- Community events

Community features need moderation, permissions and clear responsibility before production launch.

---

## 3. Website → App mapping

| Website area | App destination | Treatment |
|---|---|---|
| Kirche | Kirche → Über unsere Kirche | Rewrite for mobile, bilingual |
| Kopten / history | Kirche → Über unsere Kirche | Timeline / concise sections |
| Markus | Kirche → Heiliger Markus | Dedicated saint/history page |
| Petrus | Kirche → Unser Kirchenpatron | Dedicated patron page |
| Papst Tawadros II | Kirche → Papst Tawadros II | Profile, church-approved content |
| Medien | Medien | Rebuild as real media library |
| Kontakt | Kirche → Kontakt & Anfahrt | Contact, priest, monastery/bishop, directions |
| Deutsch / العربية | Global language layer | German + Arabic now; English-ready architecture later |

---

## 4. Design system

### Visual identity
- Deep navy
- Gold accents
- Warm cream background
- White content cards
- Coptic/church-inspired visual language
- Cross / church identity instead of generic app branding

### UX principles
- Mobile-first
- Card-based, not form-like
- One clear action per card
- Progressive disclosure for long information
- Arabic RTL support
- No unnecessary navigation duplication
- Real content should feel curated, not copied from the website

---

## 5. Data / CMS direction

The next architectural step is a small content model so church administrators can manage:
- liturgies
- events
- announcements
- sermons
- videos
- images
- saints / calendar entries
- Bible / Agpeya content references
- priests / church contacts
- Sunday School content separately

The frontend should consume this content rather than hard-code it.

---

## 6. Roles

### Main app
- Guest
- Registered member
- Content editor
- Church administrator

### Sunday School app
- Student
- Parent
- Servant / teacher
- Sunday School administrator

Permissions should be defined before attendance, private messages or child-related data are implemented.

---

## 7. Roadmap

### V1.0 — Concept
Brand, bilingual direction, core modules.

### V1.1 — Design prototype
Faithful visual prototype, clickable Sunday School groups, app identity.

### V1.2 — Information architecture + website integration
**Current release.** Adds the five-tab navigation and maps the website's four main information areas into the app.

### V1.3 — Content model + real church content
Approved bilingual content, structured CMS model, real schedules and media.

### V1.4 — Accounts + personalization
Profiles, favorites, notification preferences, personalized Home.

### V2 — Production platform
Backend, CMS, authentication, notifications, moderation, analytics, app-store packaging.

### Parallel product — Sunday School App
Separate product design and data model, connected to the same platform/account layer where appropriate.

---

## 8. Product decisions locked in V1.2

1. Sunday School is a separate app.
2. Main app uses **Home | Kirche | Spiritual | Medien | Community**.
3. Profile/settings are not a bottom-nav destination.
4. Contact belongs under Kirche, not as a top-level tab.
5. St. Petrus gets a dedicated patron page under Kirche.
6. Media becomes a first-class top-level section.
7. Website content is adapted into app UX instead of copied page-for-page.
8. German + Arabic are first-class languages; architecture remains English-ready.
9. V1.2 is still a frontend prototype — no production claims about live schedules, accounts or backend data.
