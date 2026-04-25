# EIC Website

**Entrepreneurship & Innovation Cell, Mahindra University**.

---

## Overview

The website presents:

- Organization overview
- Events and archives
- Team and leadership structure
- Flagship event (**EntrepX**)
- Contact and idea submission flows


---

## Why this?

- Structured frontend architecture using **Next.js App Router**
- Clean separation of **content, layout, and components**
- Strong attention to **UI consistency and hierarchy**
- Real-world handling of **responsive layouts**
- Subtle but intentional **motion and visual systems**
- Use of **CSS/Tailwind for atmosphere**, avoiding heavy image hacks

---

## Key Features

### UI & Experience
- Fully responsive across desktop, tablet, and mobile
- Light / dark theme support
- Page-specific **aura / atmosphere systems**
- Full-bleed hero sections with editorial content framing
- Smooth motion and scroll-based reveal interactions

### Component System
Reusable components including:
- Hero sections
- Section headers
- Timeline / flow layouts
- Image sliders
- Navbar and footer systems

### Architecture
- Data-driven content using local TypeScript modules
- Clear separation between:
  - `components/`
  - `data/`
  - `app/`
  - `lib/`

---

## Pages

- `/` — Home
- `/events` — Events archive and storytelling
- `/team` — Leadership and structure
- `/entrepx` — Flagship event page
- `/contact` — Contact and submissions

---

## Tech Stack

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- Framer Motion
- Lucide React

---

## Project Structure

```text
src/
  app/
    page.tsx
    events/page.tsx
    team/page.tsx
    entrepx/page.tsx
    contact/page.tsx
  components/
    editorial/
    layout/
    motion/
    sections/
    shell/
    ui/
  data/
    events.ts
    entrepx.ts
    team.ts
    teamData.ts
  lib/
    nav.ts
    utils.ts
```

<img width="1709" height="946" alt="Screenshot 2026-04-24 at 4 56 04 PM" src="https://github.com/user-attachments/assets/2574e8c5-ab41-430e-b845-d922f5706219" />


##    

<img width="1710" height="947" alt="Screenshot 2026-04-24 at 4 57 15 PM" src="https://github.com/user-attachments/assets/c975d1ec-b7f1-40cb-a9d5-dd0f3041ac37" />

