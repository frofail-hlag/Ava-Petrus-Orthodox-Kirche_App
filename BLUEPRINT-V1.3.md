# St. Petrus Hamburg App — Product Blueprint V1.3

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
New primary section introduced in V1.3.

- Videos
- Images
- Sermons / audio
- Learning content
- Featured / recommended

The current website's media page is sparse and contains older example events. Therefore V1.3 establishes the **product structure**, not a literal import of those legacy entries.

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

### V1.3 — Information architecture + website integration
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

## 8. Product decisions locked in V1.3

1. Sunday School is a separate app.
2. Main app uses **Home | Kirche | Spiritual | Medien | Community**.
3. Profile/settings are not a bottom-nav destination.
4. Contact belongs under Kirche, not as a top-level tab.
5. St. Petrus gets a dedicated patron page under Kirche.
6. Media becomes a first-class top-level section.
7. Website content is adapted into app UX instead of copied page-for-page.
8. German + Arabic are first-class languages; architecture remains English-ready.
9. V1.3 is still a frontend prototype — no production claims about live schedules, accounts or backend data.

## V1.3.1 refinement — St. Petrus + header actions

### St. Petrus content
The St. Petrus screen is expanded to cover the full set of factual themes currently presented on the church website's Petrus page: feast day, church dedication commemoration, Basilian Anaphora, name meaning, Alexandria/Baukalis, patriarchal succession, Diocletian persecution, the Meletian schism, Galerius' toleration edict, martyrdom under Maximinus Daia, writings, Eparthenos, associated martyrs, the later/legendary martyr acts, and the title "Siegel der Märtyrer". The page is bilingual (German/Arabic) and explicitly identifies the church website as the source.

### Header actions
The two top-right controls now have clear, functional meanings:
- **Bell:** Notifications. The red dot indicates unread/important notices in the prototype. It opens a dedicated notification screen.
- **Person:** Profile & Settings. It opens the language/profile screen. The previous placeholder dot has been replaced with a proper profile icon.

This keeps the bottom navigation focused on the five core product areas: Home | Kirche | Spiritual | Medien | Community.


## V1.3 Design Direction
- Home is now a premium editorial-style dashboard matching the approved visual reference.
- Full-bleed warm church hero with readable overlay, language switch, and functional notification/profile controls.
- Next Liturgy card overlaps the hero/body transition.
- Entdecken uses four rich cards: Kirche, Spiritualität, Medien, Community.
- Sonntagsschule remains a separate app but is promoted through a dark navy banner with the three existing group images and direct group navigation.
- Important production note: the current hero is an AI-generated visual placeholder; replace it with an approved church-owned/licensed photo of the actual Hamburg church before production.


## V1.3.1 Design Refinements
- Replaced the contaminated hero screenshot crop with a clean church-only image asset for the prototype.
- Tightened the hero height and top overlay so branding remains legible without baked-in text or controls.
- Added a compact “Heute in der Gemeinde” section to eliminate dead space and give the Home screen a useful daily layer.
- Sunday School remains a visually prominent but separate app experience.
- The current church image remains a prototype placeholder and should be replaced with a church-approved Hamburg photograph before production.


## V1.3.2 Design Finalization
- Use the cleaned church hero photo (`assets/church-hero-clean.jpg`) consistently for Home and internal page heroes.
- Remove the legacy SVG church hero from all active UI routes.
- Responsive layout target: iPhone portrait/landscape and iPad portrait/landscape.
- On tablet widths (>=700px), the app uses the full available viewport instead of a fixed 520px phone shell, with centered content containers up to ~1180px.
- Bottom navigation spans the full tablet viewport.
- Home hero, content grids, Sunday School banner, and internal pages scale into the larger canvas without creating large side gutters.
- This is the final visual pass before moving into content architecture, user roles, permissions, CMS/data model, and production workflows.


### V1.3.3 — Final navigation responsiveness
- iPhone bottom navigation preserved.
- iPad/tablet bottom navigation is full-viewport, evenly distributed, and no longer constrained to the 520px phone-width shell.
- This closes the current visual/responsive pass before product architecture work begins.
