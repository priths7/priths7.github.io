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
* **App Router Pages:** Top-level routes live under `app/`: home, portfolio, resume, contact, and projects (dynamic).
* **Shared Navigation:** `components/Navbar/Navbar.tsx` renders the site-wide navigation and brand link.
* **Matrix Theme Layer:** `components/TextAnimations/MatrixRain.tsx`, `Room.tsx`, `Wall.tsx`, and related CSS create the dark cyber/terminal atmosphere.
* **Hero Experience:** `sections/Home/Header.tsx` renders the homepage hero with Prithvi's name and rotating scrambled role text.
* **Project Data Source:** `data/projects.ts` is the single source of truth for all project metadata and case study content. Exports a typed `Project[]` array plus `getProjectBySlug()` and `getAdjacentProjects()` helpers.
* **Project Showcase:** `app/Portfolio/page.tsx` is now data-driven, filtering from `data/projects.ts` into professional and personal sections.
* **Project Cards:** `components/Cards/ProjectCard.tsx` uses Framer Motion to flip cards. The back face now renders a "View Case Study →" button (when a `slug` prop is passed) and a "Visit ↗" external link, both with `e.stopPropagation()` to prevent flip interference.
* **Case Study Pages:** `app/projects/[slug]/page.tsx` is a dynamic route rendering a full case study per project. Generates static params from `data/projects.ts` and page-level metadata. Layout: hero image, stack tags, overview, role, problem/solution (two-col), architecture highlights, challenges/impact (two-col), external link, and prev/next navigation. Uses a subtle scanline overlay and vignette — no high-motion background behind article text.
* **Skills Pills:** `components/Cards/Pill.tsx` renders stack tags for each project card.
* **Resume Page:** `app/Resume/page.tsx` composes `Details`, `Education`, and `WorkEx` sections.
* **Contact Flow:** `app/Contact/page.tsx` submits form data to `https://smtp-backend-psi.vercel.app/api/contact`.
* **SMTP Backend:** `smtp-backend/server.js` exposes `/api/contact` and `/api/health`, validates required form fields, and sends email through Gmail SMTP using environment variables.
* **Static Assets:** Screenshots, icons, certificates, and portfolio imagery live in `public/`.
* **Supabase Direction:** Supabase is not currently wired into this portfolio, but it is a viable future backend for blog metadata, contact-message persistence, newsletter subscribers, lightweight analytics, or image/file storage.

---

## Theme And Design Direction
* **Core Visual Identity:** Black background, Matrix green accents, white text, developer-terminal feel, motion-heavy hero.
* **Typography:** Poppins is the primary UI font; monospace is used only inside Matrix effects and for subtle case study labels/tags.
* **Color Direction:** Keep the dominant palette dark with green highlights. Avoid introducing unrelated bright gradients or soft pastel sections.
* **UI Shape Language:** Existing project cards use rounded corners and photo/image backgrounds. New sections should feel consistent with this pattern.
* **Animation Guidance:** Motion should support the cyber/developer identity without making reading-heavy pages difficult.
* **Case Study & Blog Readability Rule:** Article and case study pages reduce visual noise vs the homepage. Scanline + vignette overlays replace high-motion Matrix rain behind long-form readable text. Centered max-w-3xl column with generous spacing.

---

## Project Directory Structure

### Root Level
*(Standard Next.js configuration files, environment variables, and READMEs)*
* `APPLICATION-CONTEXT.md` | Living project context for future development sessions
* `data/projects.ts` | Single source of truth for all project and case study data
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
| `/Portfolio` | Project showcase | Data-driven from `data/projects.ts` |
| `/Resume` | Resume and skills | Uses Matrix wall background |
| `/Contact` | Contact form | Posts to external contact backend |
| `/projects/[slug]` | Case study detail pages | Statically generated from `data/projects.ts` |

**Future route preference:** Prefer lowercase routes for new pages such as `/blog` and `/blog/[slug]`. Existing capitalized routes can remain until a routing cleanup pass.

---

## Data Model — `data/projects.ts`

### `Project` interface
| Field | Type | Purpose |
|-------|------|---------|
| `slug` | `string` | URL segment for `/projects/[slug]` |
| `title` | `string` | Display name |
| `img` | `string` | Public image path (case-sensitive) |
| `link` | `string` | Live URL or GitHub repo |
| `shortDesc` | `string` | Used on Portfolio cards |
| `type` | `"professional" \| "personal"` | Controls section grouping on Portfolio page |
| `stacks` | `string[]` | Stack pills on cards and case study |
| `caseStudy` | `CaseStudy` | Full case study content object |

### `CaseStudy` interface
| Field | Type |
|-------|------|
| `overview` | `string` |
| `role` | `string` |
| `problem` | `string` |
| `solution` | `string` |
| `architecture.summary` | `string` |
| `architecture.highlights` | `string[]` |
| `challenges` | `string[]` |
| `impact` | `string[]` |

### Current projects in `data/projects.ts`
**Professional (Designare Solutions tenure):** Deepstory, Stay Leisurely, Lyfsum
**Personal:** Image Generation Model, Similar Image Recommender, Image Description Generator, Motion Detection Graph, Private AI Journal OS, Space Invaders Game Engine, Distributed File Retrieval Engine

---

## Planned Blog & Project Architecture
* **Blog Index:** Add `app/blog/page.tsx` with a Matrix-themed but readable list of articles.
* **Blog Detail:** Add `app/blog/[slug]/page.tsx` for individual posts.
* **Content Source:** Prefer MDX or structured markdown files under `content/blog/` for authoring technical posts.
* **Article UI:** Follow the same case study pattern — centered readable column, dark code blocks, green anchor accents, tag pills, and previous/next navigation.

---

## Content Model Direction
* **Projects:** ✅ Project data is now fully extracted to `data/projects.ts`. Do not re-inline project data into JSX.
* **Case Studies:** ✅ All seven projects have full case study content. Adding new projects means adding a new entry to `data/projects.ts` — the Portfolio page and `/projects/[slug]` route update automatically.
* **Resume Data:** Education, work experience, and skills can later be data-driven to reduce repeated JSX. All three major professional projects belong under the single Designare Solutions tenure. The summary should position Prithvi generally as a Master's student in Computer Science without over-specializing.
* **Blog Posts:** Blog content should not be hardcoded in route files once there are more than one or two posts.

---

## Critical Constraints
1. **Maintain Theme Continuity:** Any new blog or project-detail work must preserve the dark Matrix/cyber identity.
2. **Protect Readability:** Do not use high-motion backgrounds directly behind long article text. Use the scanline + vignette pattern established in the case study page.
3. **Asset Casing Matters:** Vercel/Linux deployments are case-sensitive. Match imports and image paths exactly.
4. **Do Not Commit Secrets:** Keep `.env.local` and `smtp-backend/.env` private.
5. **Contact Backend Boundary:** The main portfolio currently depends on a separately hosted backend endpoint for contact submissions.
6. **Avoid Heavy Homepage Bloat:** Keep the first screen focused on identity and clear calls to action.
7. **Mobile Responsiveness:** All new cards, blog lists, and article layouts must fit small screens without text overlap.
8. **Single Source of Truth:** All project data lives in `data/projects.ts`. Never duplicate project metadata into route files or JSX.
9. **Canvas Performance Architecture:** `MatrixRain.tsx` must rely on a strictly hard-paced Game Loop. Use pure `requestAnimationFrame` timestamps (no `performance.now()`), pre-calculated color batching (no `rgba` alpha-blending overhead), and Dynamic Delta Clamping to protect against Negative Delta Drift and Tab-Switch stutters.

---

## Current Project Status

### Completed
* Next.js App Router project structure is in place.
* Shared navigation exists for Home, Portfolio, Resume, and Contact.
* Portfolio page displays professional and personal projects.
* Resume page composes details, education, and work experience sections (ensuring general CS focus and correct Designare tenure).
* Contact page submits messages to the deployed SMTP backend.
* Phase 1 Polish: Metadata updated, typos fixed, public asset casing standardized, and copy tightened.
* **Phase 2: Case Studies** — fully complete:
  * `data/projects.ts` created as the single source of truth.
  * `app/Portfolio/page.tsx` refactored to be fully data-driven.
  * `components/Cards/ProjectCard.tsx` updated with dynamic case study links.
  * `app/projects/[slug]/page.tsx` dynamic route built.

### In Progress
* **Pre-Phase 3: Matrix Performance Polish:** Resolving persistent tab-switch stutter and edge-case V-Sync drift within the `MatrixRain.tsx` canvas. This is a critical minor step before introducing heavier blog content to ensure global shell performance remains butter-smooth.

### Not Started
* Phase 3: Blog Foundation.
* `/blog` route and Markdown/MDX content pipeline.
* Open Graph/social sharing image setup.
* Stronger SEO metadata for all pages.

---

## Development Roadmap

**Pre-Phase 3: Canvas Performance Polish**
* Finalize the rendering loop architecture in `MatrixRain.tsx`.
* Track down and eliminate the persistent rapid tab-switch stutter.
* Ensure the Dynamic Delta Clamp handles all `dt` overflow cleanly without leaving chaotic accumulator remainders.

**Phase 3: Blog Foundation**
* Add `/blog` and `/blog/[slug]` routes.
* Add `content/blog/` with first markdown or MDX posts.
* Build a reusable `BlogCard` component consistent with the existing card shape language.
* Follow the case study readability pattern for article pages (scanline/vignette, no Matrix rain behind text).

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
* **All project data lives in `data/projects.ts`.** Do not re-inline project data into page files.
* When adding a new project, add it to `data/projects.ts` only — Portfolio and case study routes update automatically.
* The case study page (`app/projects/[slug]/page.tsx`) is the established template for long-form readable pages. Reuse its layout pattern.
* Keep blog and project content data-driven where possible.

---

## Session Notes

### 2026-05-02 17:34 -05:00
* Shared shell/layout work:
  * Added `components/AppShell.tsx` as the client-side shared application shell.
  * `app/layout.tsx` now renders `AppShell` around all page content, keeping `Navbar` shared across pages.
* Background behavior:
  * `AppShell` uses `usePathname()` to render `Wall` only on non-home routes.
  * Home route (`/`) intentionally does not render `Wall`; it uses the `Room` animation as the full-page background.
  * `components/TextAnimations/MatrixRain.tsx` canvas uses a fixed, pointer-events-none background layer.

### Recent Updates (MatrixRain Optimization Saga)
* Extensive debugging on `MatrixRain.tsx` to optimize performance alongside 3D CSS flips.
* **Major Changes Made:**
  * Replaced `setInterval` with native `requestAnimationFrame` + Timestep Accumulator.
  * Shifted from alpha-blending `rgba` trails to a high-performance **Solid Clear + Color Batching** approach to alleviate massive GPU overhead.
  * Removed `performance.now()` in favor of a pure RAF timestamp to fix "Negative Delta Drift" when utilizing the `visibilitychange` API.
  * Implemented a **Dynamic Delta Clamp** (`if (dt > frameInterval) dt = frameInterval`) to catch huge `dt` jumps from tab sleeping.
* **Current Blockers:** A micro-stutter still persists on rapid tab switches despite the dynamic clamp logic. The rendering loop requires further analysis to prevent the engine from freezing on rapid context swaps. This logic is being treated as a **Pre-Phase 3** blocking step.