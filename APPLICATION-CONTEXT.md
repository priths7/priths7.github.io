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
| File/Folder | Description |
|-------------|-------------|
| `package.json` | Main Next.js app dependencies and scripts |
| `package-lock.json` | Locked npm dependency tree for the main app |
| `next.config.js` | Next.js configuration |
| `tailwind.config.js` | Tailwind content paths, theme extensions, and font family setup |
| `tsconfig.json` | TypeScript configuration |
| `postcss.config.js` | PostCSS/Tailwind pipeline configuration |
| `.eslintrc.json` | Next.js ESLint configuration |
| `vercel.json` | Vercel deployment configuration |
| `.env.local` | Local environment variables; do not commit secrets |
| `README.md` | Minimal project README |
| `APPLICATION-CONTEXT.md` | Living project context for future development sessions |
| `app/` | Next.js App Router routes and global layout/styles |
| `components/` | Reusable UI and animation components |
| `sections/` | Page-level sections grouped by route/domain |
| `public/` | Static image and SVG assets |
| `smtp-backend/` | Separate Express/Nodemailer contact service |

### App Router (`app/`)
| File/Folder | Description |
|-------------|-------------|
| `layout.tsx` | Root HTML/body wrapper and global metadata |
| `globals.css` | Global CSS imports and Tailwind layers |
| `page.tsx` | Homepage route; currently renders `Navbar` and `Header` |
| `Portfolio/page.tsx` | Portfolio/project showcase route |
| `Resume/page.tsx` | Resume route |
| `Contact/page.tsx` | Contact form route |

### Components (`components/`)
| Component | Description |
|-----------|-------------|
| `Navbar/Navbar.tsx` | Header navigation for Home, Portfolio, Resume, and Contact |
| `Cards/ProjectCard.tsx` | Animated flip card for project previews |
| `Cards/Pill.tsx` | Technology stack badge |
| `Cards/style.css` | 3D card utility classes |
| `Inputs/FormInput.tsx` | Ant Design-backed styled input/textarea wrapper |
| `TextAnimations/MatrixRain.tsx` | Fullscreen fixed Matrix rain canvas |
| `TextAnimations/Room.tsx` | 3D room composed of Matrix canvases |
| `TextAnimations/Wall.tsx` | Matrix wall background wrapper |
| `TextAnimations/TextScramble.tsx` | Scrambled rotating text animation |
| `TextAnimations/Room.css` | 3D room styling |

### Sections (`sections/`)
| Section | Description |
|---------|-------------|
| `Home/Header.tsx` | Main homepage hero |
| `Home/Certifications.tsx` | Certification section, currently not rendered on home |
| `Home/Contact.tsx` | Home contact section, currently not rendered on home |
| `Resume/Details.tsx` | About and skills summary |
| `Resume/Education.tsx` | Education details |
| `Resume/WorkEx.tsx` | Work experience details |

### Contact Backend (`smtp-backend/`)
| File | Description |
|------|-------------|
| `package.json` | Express, CORS, dotenv, Nodemailer dependencies and scripts |
| `server.js` | Contact API server |
| `.env` | Email credentials; do not commit secrets |
| `.gitignore` | Backend ignore rules |

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

## Planned Blog Architecture
* **Blog Index:** Add `app/blog/page.tsx` with a Matrix-themed but readable list of articles.
* **Blog Detail:** Add `app/blog/[slug]/page.tsx` for individual posts.
* **Content Source:** Prefer MDX or structured markdown files under `content/blog/` for authoring technical posts.
* **Optional Supabase CMS:** If dynamic publishing is required, Supabase can store post metadata and published article content. Static MDX remains the simpler first version.
* **Post Metadata:** Each post should include `title`, `slug`, `description`, `date`, `tags`, `readingTime`, and optionally `featured`.
* **Article UI:** Use a centered readable column, dark code blocks, green anchor accents, tag pills, and previous/next navigation.
* **Code UX:** Add syntax highlighting and copy-code affordances once MDX is introduced.
* **SEO:** Generate metadata per post, including title, description, Open Graph data, and canonical URL.

---

## Optional Supabase Usage
| Use Case | Recommendation |
|----------|----------------|
| Blog posts | Start with MDX; move to Supabase only if browser-based publishing, drafts, or admin workflows are needed |
| Blog metadata | Good fit for Supabase tables if posts need filtering, search, or dynamic updates |
| Images and downloadable assets | Use Supabase Storage only when assets need remote uploads; otherwise keep stable portfolio assets in `public/` |
| Contact form submissions | Good fit if messages should be persisted before or after email delivery |
| Newsletter signups | Good fit with Row Level Security and server-side inserts |
| Analytics | Possible for privacy-friendly custom event tracking, but avoid overbuilding early |

**Current free-tier reference:** Supabase Free currently has a 500 MB database-size quota per project and 1 GB Storage quota. Do not assume 500 GB is available on the Free plan. Verify official Supabase limits before making storage-heavy architecture decisions.

---

## Suggested Blog Categories
| Category | Possible Content |
|----------|------------------|
| Full Stack | React, Next.js, Node.js, API design, database-backed features |
| Mobile | Android, Kotlin, React Native, mobile architecture |
| Cloud | Google Cloud, deployment, serverless, production lessons |
| Machine Learning | PyTorch, TensorFlow, image generation, recommendations, computer vision |
| Systems And Architecture | Case studies, performance, scaling, design decisions |
| Portfolio Builds | Posts explaining how this portfolio itself evolves |

---

## Content Model Direction
* **Projects:** Move project data out of JSX into a structured array or content file before adding project detail pages.
* **Case Studies:** Each major project should eventually have a detail page with problem, role, stack, architecture, challenges, and impact.
* **Resume Data:** Education, work experience, and skills can later be data-driven to reduce repeated JSX.
* **Blog Posts:** Blog content should not be hardcoded in route files once there are more than one or two posts.

---

## Critical Constraints
1. **Maintain Theme Continuity:** Any new blog or project-detail work must preserve the dark Matrix/cyber identity.
2. **Protect Readability:** Do not use high-motion backgrounds directly behind long article text.
3. **Asset Casing Matters:** Vercel/Linux deployments are case-sensitive. Match imports and image paths exactly, e.g. `Web_Code.svg` vs `Web_code.svg`.
4. **Do Not Commit Secrets:** Keep `.env.local` and `smtp-backend/.env` private.
5. **Contact Backend Boundary:** The main portfolio currently depends on a separately hosted backend endpoint for contact submissions.
6. **Avoid Heavy Homepage Bloat:** Keep the first screen focused on identity and clear calls to action.
7. **Mobile Responsiveness:** All new cards, blog lists, and article layouts must fit small screens without text overlap.
8. **Supabase Security:** If Supabase is added, all writes that should not be public must happen server-side or through strict Row Level Security policies. Never expose service-role keys to the browser.
9. **Free-Tier Awareness:** Supabase Free is suitable for portfolio-scale metadata and light storage, but not for large media archives.

---

## Known Polish Items
* `app/layout.tsx` metadata still uses the default create-next-app style description and should be updated.
* `app/page.tsx` imports unused `Certifications`, `Contact`, and `Image`.
* Homepage currently hides portfolio, certifications, and contact sections behind comments.
* Contact heading says `Fell free to get in touch`; it should be `Feel free to get in touch`.
* Several visible text strings should use professional capitalization, e.g. `Based in Chicago`, `Full Stack Developer`, and `Things I am good at`.
* `TextScramble.tsx` includes a mojibake character sequence in `characters`; replace with a clean ASCII character set.
* `Room.tsx` uses `if(typeof window !== undefined)`, which should be a string comparison if retained.
* `ProjectCard.tsx` receives a `delay` prop but does not currently use it.
* Some image paths use relative strings such as `./DeepS.png`; consider standardizing to `/DeepS.png` for public assets.

---

## Architecture Decision Log (ADL)
* **Matrix Theme As Brand:** The Matrix/cyber background is a defining part of the portfolio identity and should guide future UI additions.
* **Reusable Section Pattern:** Page-specific UI lives in `sections/`; reusable UI primitives live in `components/`.
* **Project Cards Before Project Pages:** Current portfolio uses card-level previews. Future work should extend this into route-based case studies rather than replacing the card system outright.
* **Separate Contact Service:** Email sending is handled by a separate Express/Nodemailer backend instead of a Next.js API route.
* **Framer Motion For Interactive Cards:** Project card flipping is powered by Framer Motion and should remain the preferred animation approach for similar interactions.
* **Ant Design Is Limited To Forms:** Ant Design is currently used for contact form inputs/buttons. Avoid spreading a conflicting component visual language across the whole site unless there is a deliberate design pass.
* **Blog Should Be Content-Driven:** Technical writing should be stored as markdown/MDX content so posts are easy to add without editing route JSX every time.
* **Supabase As Optional, Not Default:** Use Supabase when dynamic data, persistence, search, admin editing, or uploads are needed. Keep static portfolio/blog content in MDX until those needs are real.
* **Lowercase Routes For New Work:** New sections should use lowercase route folders even though existing routes are capitalized.

---

## Current Project Status

### Completed
* Next.js App Router project structure is in place.
* Homepage hero with Matrix room animation and scrambled text is implemented.
* Shared navigation exists for Home, Portfolio, Resume, and Contact.
* Portfolio page displays professional and personal projects.
* Reusable animated `ProjectCard` and `Pill` components exist.
* Resume page composes details, education, and work experience sections.
* Contact page submits messages to the deployed SMTP backend.
* Express/Nodemailer backend exists with contact and health endpoints.
* Main project is configured for Vercel deployment.

### In Progress
* Portfolio polish and content expansion.
* Blog section planning.
* Supabase evaluation for optional dynamic blog/contact features.
* Professional copy cleanup.

### Not Started
* `/blog` route.
* Markdown/MDX content pipeline.
* Individual blog post pages.
* Individual project case-study pages.
* Open Graph/social sharing image setup.
* Stronger SEO metadata for all pages.
* Automated tests or visual regression checks.

---

## Development Roadmap

**Phase 1: Portfolio Polish**
* Update metadata in `app/layout.tsx`.
* Fix copy, capitalization, and typo issues.
* Standardize public asset paths and casing.
* Add homepage calls to action: View Projects, Read Blog, Download Resume, Contact.
* Remove unused imports and dead comments where appropriate.

**Phase 2: Blog Foundation**
* Add `/blog` and `/blog/[slug]` routes.
* Add `content/blog/` with first markdown or MDX posts.
* Build a reusable blog card component.
* Add post metadata parsing and reading time.
* Add syntax highlighting for code-heavy posts.
* Decide whether the first blog version stays static MDX or uses Supabase for post metadata.

**Phase 3: Case Studies**
* Move project data into a structured source.
* Add `/projects/[slug]` pages for major projects.
* Expand each project with role, architecture, impact, screenshots, and links.
* Link project cards to detail pages when available.

**Phase 4: SEO And Sharing**
* Add better site metadata and page-level metadata.
* Add Open Graph image support.
* Add sitemap and robots configuration if not already generated by the framework.
* Add canonical URLs for blog posts and project pages.

**Phase 5: Reliability And UX**
* Improve contact form validation and loading/error states.
* Consider moving contact handling into a Next.js route or documenting the external backend contract clearly.
* Add accessibility checks for animation, focus states, and color contrast.
* Add basic lint/build verification to the regular workflow.

---

## Session Guidance For Future AI Assistants
* Read this file before making architectural changes.
* Preserve the Matrix-inspired brand unless the user explicitly asks for a redesign.
* Prefer small, theme-consistent improvements over broad visual rewrites.
* Use existing components and section organization before introducing new patterns.
* Keep blog and project content data-driven where possible.
* Do not read or expose environment variable values.
* When adding frontend UI, verify mobile behavior and avoid text overlap.
