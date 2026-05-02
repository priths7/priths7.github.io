# Project: Prithvi Portfolio
**Objective:** A personal developer portfolio hosted at `https://priths7.vercel.app/` that presents Prithvi Chakravarthy's full-stack, mobile, cloud, and machine-learning work through a dark Matrix-inspired interface. The next major product direction is a blog section for technical writing and deeper project case studies while preserving the current theme.

---

## Tech Stack
* **Framework:** Next.js 14 App Router with React 18 and TypeScript
* **Styling:** Tailwind CSS with global Poppins font import
* **Animation:** Framer Motion for interactive project cards
* **Canvas Effects:** Custom Matrix rain and 3D room-style background components
* **UI Library:** Ant Design for the contact form controls
* **Backend Contact Service:** Express + Nodemailer in `smtp-backend/`
* **Optional Data Backend:** Supabase can be reused from the private journal setup if the portfolio needs dynamic data, storage, analytics, or a lightweight CMS
* **Deployment:** Vercel for the main portfolio and a separate Vercel-hosted SMTP/contact backend

---

## Current Architecture
* **App Router Pages:** Top-level routes live under `app/`: home, portfolio, resume, and contact.
* **Shared Navigation:** `components/Navbar/Navbar.tsx` renders the site-wide navigation and brand link.
* **Matrix Theme Layer:** `components/TextAnimations/MatrixRain.tsx`, `Room.tsx`, `Wall.tsx`, and related CSS create the dark cyber/terminal atmosphere.
* **Hero Experience:** `sections/Home/Header.tsx` renders the homepage hero with Prithvi's name and rotating scrambled role text.
* **Project Showcase:** `app/Portfolio/page.tsx` renders professional and personal projects through reusable `ProjectCard` components.
* **Project Cards:** `components/Cards/ProjectCard.tsx` uses Framer Motion to flip cards and reveal project descriptions.
* **Skills Pills:** `components/Cards/Pill.tsx` renders stack tags for each project card.
* **Resume Page:** `app/Resume/page.tsx` composes `Details`, `Education`, and `WorkEx` sections.
* **Contact Flow:** `app/Contact/page.tsx` submits form data to `https://smtp-backend-psi.vercel.app/api/contact`.
* **SMTP Backend:** `smtp-backend/server.js` exposes `/api/contact` and `/api/health`, validates required form fields, and sends email through Gmail SMTP using environment variables.
* **Static Assets:** Screenshots, icons, certificates, and portfolio imagery live in `public/`.
* **Supabase Direction:** Supabase is not currently wired into this portfolio, but it is a viable future backend for blog metadata, contact-message persistence, newsletter subscribers, lightweight analytics, or image/file storage.

---

## Theme And Design Direction
* **Core Visual Identity:** Black background, Matrix green accents, white text, developer-terminal feel, motion-heavy hero.
* **Typography:** Poppins is the primary UI font; monospace is used only inside Matrix effects.
* **Color Direction:** Keep the dominant palette dark with green highlights. Avoid introducing unrelated bright gradients or soft pastel sections.
* **UI Shape Language:** Existing project cards use rounded corners and photo/image backgrounds. New sections should feel consistent with this pattern.
* **Animation Guidance:** Motion should support the cyber/developer identity without making reading-heavy pages difficult.
* **Blog Readability Rule:** Blog article pages should reduce visual noise compared with the homepage. Prefer a subtle Matrix background or static dark layer behind a centered readable article column.

---

## Project Directory Structure

### Root Level
*(Standard Next.js configuration files, environment variables, and READMEs)*
* `APPLICATION-CONTEXT.md` | Living project context for future development sessions
* `app/` | Next.js App Router routes and global layout/styles
* `components/` | Reusable UI and animation components
* `sections/` | Page-level sections grouped by route/domain
* `public/` | Static image and SVG assets
* `smtp-backend/` | Separate Express/Nodemailer contact service

---

## Current Routes
| Route | Purpose | Notes |
|-------|---------|-------|
| `/` | Homepage hero | Currently only hero/nav are active |
| `/Portfolio` | Project showcase | Uses capitalized route folder |
| `/Resume` | Resume and skills | Uses Matrix wall background |
| `/Contact` | Contact form | Posts to external contact backend |

**Future route preference:** Prefer lowercase routes for new pages such as `/blog`, `/blog/[slug]`, and `/projects/[slug]`. Existing capitalized routes can remain until a routing cleanup pass.

---

## Planned Blog & Project Architecture
* **Case Studies:** Add `/projects/[slug]/page.tsx` for individual project deep-dives.
* **Blog Index:** Add `app/blog/page.tsx` with a Matrix-themed but readable list of articles.
* **Blog Detail:** Add `app/blog/[slug]/page.tsx` for individual posts.
* **Content Source:** Prefer MDX or structured markdown files under `content/blog/` and `content/projects/` for authoring technical posts and case studies.
* **Article UI:** Use a centered readable column, dark code blocks, green anchor accents, tag pills, and previous/next navigation.

---

## Content Model Direction
* **Projects:** Move project data out of JSX into a structured array or content file before adding project detail pages.
* **Case Studies:** Each major project should eventually have a detail page with problem, role, stack, architecture, challenges, and impact.
* **Resume Data:** Education, work experience, and skills can later be data-driven to reduce repeated JSX. All three major professional projects belong under the single Designare Solutions tenure. The summary should position Prithvi generally as a Master's student in Computer Science without over-specializing.
* **Blog Posts:** Blog content should not be hardcoded in route files once there are more than one or two posts.

---

## Critical Constraints
1. **Maintain Theme Continuity:** Any new blog or project-detail work must preserve the dark Matrix/cyber identity.
2. **Protect Readability:** Do not use high-motion backgrounds directly behind long article text.
3. **Asset Casing Matters:** Vercel/Linux deployments are case-sensitive. Match imports and image paths exactly.
4. **Do Not Commit Secrets:** Keep `.env.local` and `smtp-backend/.env` private.
5. **Contact Backend Boundary:** The main portfolio currently depends on a separately hosted backend endpoint for contact submissions.
6. **Avoid Heavy Homepage Bloat:** Keep the first screen focused on identity and clear calls to action.
7. **Mobile Responsiveness:** All new cards, blog lists, and article layouts must fit small screens without text overlap.

---

## Current Project Status

### Completed
* Next.js App Router project structure is in place.
* Shared navigation exists for Home, Portfolio, Resume, and Contact.
* Portfolio page displays professional and personal projects.
* Resume page composes details, education, and work experience sections (ensuring general CS focus and correct Designare tenure).
* Contact page submits messages to the deployed SMTP backend.
* Phase 1 Polish: Metadata updated, typos fixed, public asset casing standardized, and copy tightened.

### In Progress
* Phase 3: Case Studies (Moving project data out of JSX, building dynamic `/projects/[slug]` routes).
* Blog section planning (Phase 2).

### Not Started
* `/blog` route and Markdown/MDX content pipeline.
* Open Graph/social sharing image setup.
* Stronger SEO metadata for all pages.

---

## Development Roadmap

**Phase 2: Case Studies (Moved Up for Immediate ROI)**
* Move existing portfolio project data into a structured source (e.g., a `data/projects.ts` file).
* Add `/projects/[slug]` dynamic routes.
* Draft the first major case studies (e.g., detailing architecture, design patterns, and challenges).
* Link existing project cards on the `/Portfolio` page to these new detail pages.

**Phase 3: Blog Foundation**
* Add `/blog` and `/blog/[slug]` routes.
* Add `content/blog/` with first markdown or MDX posts.
* Build a reusable blog card component.

**Phase 4: SEO And Sharing**
* Add better site metadata and page-level metadata.
* Add Open Graph image support.
* Add sitemap and robots configuration.

**Phase 5: Reliability And UX**
* Improve contact form validation and loading/error states.
* Add accessibility checks for animation, focus states, and color contrast.

---

## Session Guidance For Future AI Assistants
* Read this file before making architectural changes.
* Preserve the Matrix-inspired brand unless the user explicitly asks for a redesign.
* Prefer small, theme-consistent improvements over broad visual rewrites.
* Use existing components and section organization before introducing new patterns.
* Keep blog and project content data-driven where possible.
* Do not read or expose environment variable values.
* When adding frontend UI, verify mobile behavior and avoid text overlap.
