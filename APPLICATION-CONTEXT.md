# Project: Prithvi Portfolio
**Objective:** A personal developer portfolio hosted at `https://prithvic.dev/` that presents Prithvi Chakravarthy's full-stack, mobile, cloud, and machine-learning work through a dark Matrix-inspired interface. The next major product direction is a blog section for technical writing and deeper project case studies while preserving the current theme.

---

## Tech Stack
* **Framework:** Next.js 14 App Router with React 18 and TypeScript
* **Styling:** Tailwind CSS with global Poppins font import
* **Animation:** CSS 3D transforms for project-card flips; Framer Motion remains in use for the Resume skill visualizer
* **Canvas Effects:** Custom Matrix rain and 3D room-style background components
* **UI Library:** Ant Design for the contact form controls
* **Backend Contact Service:** Express + Nodemailer in the nested `smtp-backend/` service
* **Content Layer:** MDX files under `content/blog/` and `content/projects/` serve as the Git-based CMS for blog posts and supplementary project narratives. `data/projects.ts` remains the authoritative source for structured project metadata consumed by the Portfolio page and case study routes.
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
* **Project Cards:** `components/Cards/ProjectCard.tsx` uses CSS `rotateY` transforms for the flip interaction. The back face renders a "View Case Study →" button when a `slug` prop is passed, optional "Watch Demo" button, private-repo badge support, and a "Visit ↗" external link, with link clicks stopping card-flip propagation.
* **Case Study Pages:** `app/projects/[slug]/page.tsx` is a dynamic route rendering a full case study per project. Generates static params from `data/projects.ts` and page-level metadata. Layout: hero image, stack tags, overview, role, problem/solution (two-col), architecture highlights, challenges/impact (two-col), external link, and prev/next navigation. Uses a subtle scanline overlay and vignette — no high-motion background behind article text.
* **Skills Pills:** `components/Cards/Pill.tsx` renders stack tags for each project card. `components/Skills/SkillsVisual.tsx` derives categorized skill pills from `data/projects.ts` for the Resume route.
* **Resume Page:** `app/Resume/page.tsx` composes `Details`, `Education`, and `WorkEx` sections. `Education` is presented as a compact green-accented grid; `WorkEx` is presented as a Matrix-themed timeline.
* **Contact Flow:** `app/Contact/page.tsx` submits form data to `https://smtp-backend-psi.vercel.app/api/contact`.
* **SMTP Backend:** `smtp-backend/server.js` exposes `/api/contact` and `/api/health`, validates required form fields, and sends email through Office365 SMTP (`smtp.office365.com`) using `EMAIL_USER` and `APP_PASSWORD` environment variables. The current implementation sends contact submissions to `process.env.EMAIL_USER`.
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
* `data/projects.ts` | Single source of truth for all structured project metadata
* `content/blog/` | MDX blog posts (Git-based authoring — added in Phase 2.7)
* `content/projects/` | Optional MDX files for extended project narratives (added in Phase 2.7)
* `lib/mdx.ts` | MDX parsing utilities: `getAllPosts()`, `getPostBySlug()`, frontmatter extraction
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
| `/blog` | Blog index | Added in Phase 3; reads from `content/blog/` MDX |
| `/blog/[slug]` | Blog post detail | Added in Phase 3; MDX-rendered article |

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

### MDX Frontmatter Schema — `content/blog/*.mdx`
| Field | Type | Purpose |
|-------|------|---------|
| `title` | `string` | Post display title |
| `slug` | `string` | URL segment for `/blog/[slug]` |
| `date` | `string` | ISO date string for ordering |
| `tags` | `string[]` | Tag pills on blog index and post header |
| `summary` | `string` | Used on blog index cards |
| `published` | `boolean` | Draft/publish toggle; unpublished posts excluded from build |

### Current projects in `data/projects.ts`
**Professional (Designare Solutions tenure):** Deepstory, Stay Leisurely, Lyfsum
**Personal:** Image Generation Model, Similar Image Recommender, Image Description Generator, Motion Detection Graph, Private AI Journal OS, Space Invaders Game Engine, Distributed File Retrieval Engine

---

## Content Model Direction
* **Projects:** ✅ Project data is now fully extracted to `data/projects.ts`. Do not re-inline project data into JSX.
* **Case Studies:** ✅ All seven projects have full case study content. Adding new projects means adding a new entry to `data/projects.ts` — the Portfolio page and `/projects/[slug]` route update automatically.
* **Resume Data:** Education, work experience, and skills can later be data-driven to reduce repeated JSX. All three major professional projects belong under the single Designare Solutions tenure. The summary should position Prithvi generally as a Master's student in Computer Science without over-specializing.
* **Blog Posts:** MDX files under `content/blog/` are the authoring surface. Adding a new post means creating a new `.mdx` file and pushing — Vercel redeploys automatically. Never hardcode post content inside route files.
* **Authoring Workflow (Git-as-CMS):** New project → add entry to `data/projects.ts`. New blog post → create `content/blog/[slug].mdx` with frontmatter and push. No admin panel, no external CMS dependency, no additional infra cost.

---

## Critical Constraints
1. **Maintain Theme Continuity:** Any new blog or project-detail work must preserve the dark Matrix/cyber identity.
2. **Protect Readability:** Do not use high-motion backgrounds directly behind long article text. Use the scanline + vignette pattern established in the case study page.
3. **Asset Casing Matters:** Vercel/Linux deployments are case-sensitive. Match imports and image paths exactly.
4. **Do Not Commit Secrets:** Keep `.env.local` and `smtp-backend/.env` private.
5. **Contact Backend Boundary:** The main portfolio currently depends on a separately hosted backend endpoint for contact submissions. The frontend endpoint is hardcoded in `app/Contact/page.tsx`.
6. **Nested SMTP Repo:** `smtp-backend/` is a nested Git repository with its own dependencies and deployment lifecycle; root-level Git commands may not report its changes.
7. **Avoid Heavy Homepage Bloat:** Keep the first screen focused on identity and clear calls to action.
8. **Mobile Responsiveness:** All new cards, blog lists, and article layouts must fit small screens without text overlap.
9. **Single Source of Truth:** All structured project metadata lives in `data/projects.ts`. Blog and supplementary narrative content lives in `content/`. Never duplicate across both.
10. **Canvas Performance Architecture:** `MatrixRain.tsx` must rely on a strictly hard-paced Game Loop. Use pure `requestAnimationFrame` timestamps (no `performance.now()`), pre-calculated color batching (no `rgba` alpha-blending overhead), and Dynamic Delta Clamping to protect against Negative Delta Drift and Tab-Switch stutters.
11. **MDX Build-Time Only:** All MDX content is read at build time via `lib/mdx.ts`. Do not fetch MDX at runtime or from an external endpoint. `published: false` posts must be filtered before `generateStaticParams`.

---

## Current Project Status

### Completed
* Next.js App Router project structure is in place.
* Shared navigation exists for Home, Portfolio, Resume, and Contact.
* Portfolio page displays professional and personal projects.
* Resume page composes details, an interactive skill visualizer, a green-accented education grid, and a Matrix-themed work-experience timeline.
* Contact page submits messages to the deployed SMTP backend.
* Phase 2.5 Resume Enhancements: interactive skill visualizer, categorized tabs, and themed Education/WorkEx layouts are implemented.
* Phase 1 Polish: Metadata updated, typos fixed, public asset casing standardized, and copy tightened.
* **Phase 2: Case Studies** — fully complete:
  * `data/projects.ts` created as the single source of truth.
  * `app/Portfolio/page.tsx` refactored to be fully data-driven.
  * `components/Cards/ProjectCard.tsx` updated with dynamic case study links.
  * `app/projects/[slug]/page.tsx` dynamic route built.

### In Progress
* **Pre-Phase 3: Matrix Performance Polish:** Resolving persistent tab-switch stutter and edge-case V-Sync drift within the `MatrixRain.tsx` canvas. This is a critical minor step before introducing heavier blog content to ensure global shell performance remains butter-smooth.
* **Contact Backend Migration Check:** `smtp-backend/server.js` has been changed to Office365 SMTP, but deployed Vercel environment variables and redeployment status must be verified if contact mail still routes to Gmail.

### Not Started
* Phase 2.7: Git-as-CMS Foundation.
* Phase 3: Blog Foundation.
* Open Graph/social sharing image setup.
* Stronger SEO metadata for all pages.

---

## Development Roadmap

**Pre-Phase 3: Canvas Performance Polish**
* Finalize the rendering loop architecture in `MatrixRain.tsx`.
* Track down and eliminate the persistent rapid tab-switch stutter.
* Ensure the Dynamic Delta Clamp handles all `dt` overflow cleanly without leaving chaotic accumulator remainders.

---

**Phase 2.7: Git-as-CMS Foundation** *(Bridge — must complete before Phase 3)*

*Why this phase exists:* Phase 3 introduces the `/blog` route and MDX posts. Without a content layer in place first, the blog route would have no files to read and `generateStaticParams` would return an empty array. This phase establishes the directory structure, parsing utilities, and frontmatter schema that Phase 3 and all future content work will depend on. It is deliberately scoped to infrastructure only — no UI changes, no new routes.

**Goals:**
* Establish `content/blog/` and `content/projects/` as the canonical content directories.
* Write `lib/mdx.ts` with `getAllPosts()`, `getPostBySlug()`, and frontmatter extraction using `gray-matter` and `next-mdx-remote` (or `mdx-bundler`).
* Define and document the MDX frontmatter schema (title, slug, date, tags, summary, published).
* Add `.mdx` linting / type-checking to prevent malformed frontmatter from silently breaking the build.
* Author the first draft blog post or project narrative as an MDX file to validate the pipeline end-to-end.
* Update `.gitignore` and Vercel ignore rules if needed (`.mdx` files should always be tracked).
* No new routes, no new UI — this phase is purely the content infrastructure layer that Phase 3 builds on top of.

---

**Phase 3: Blog Foundation**
* Add `/blog` and `/blog/[slug]` routes, powered by `lib/mdx.ts` from Phase 2.7.
* Build a reusable `BlogCard` component consistent with the existing card shape language.
* Follow the case study readability pattern for article pages (scanline/vignette, no Matrix rain behind text).
* Support tag filtering on the blog index.
* Wire previous/next navigation between posts.

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
* **All structured project data lives in `data/projects.ts`.** Do not re-inline project data into page files.
* **All blog and supplementary narrative content lives in `content/`.** Do not hardcode post content in route files.
* When adding a new project, add it to `data/projects.ts` only — Portfolio and case study routes update automatically.
* When adding a new blog post, create a new MDX file in `content/blog/` with the correct frontmatter schema — the `/blog` index and `/blog/[slug]` routes update automatically.
* The case study page (`app/projects/[slug]/page.tsx`) is the established template for long-form readable pages. Reuse its layout pattern for blog posts.
* `lib/mdx.ts` is the single point of entry for all MDX parsing. Do not write ad-hoc frontmatter parsing in route files.

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

### 2026-05-15 — CMS Strategy Decision
* Evaluated headless CMS options (Sanity, Contentful, Strapi via DigitalOcean credits from GitHub Student Developer Pack).
* **Decision: Git-as-CMS.** MDX files under `content/blog/` and `content/projects/` will serve as the authoring surface. Rationale: zero infra cost, version-controlled history, push-to-deploy workflow via Vercel, no external service dependency, and the existing case study architecture already demonstrates the pattern. `data/projects.ts` continues to own structured project metadata; MDX owns prose and long-form narrative content.
* Phase 2.7 added to roadmap as a bridge phase before Phase 3 to establish the content infrastructure layer cleanly.