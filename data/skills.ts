// Skill category taxonomy
// Maps raw stack strings (from data/projects.ts) → display category
// "All" is synthesized at runtime — do not add it here.

export type SkillCategory =
  | "All"
  | "Languages"
  | "Frontend"
  | "Backend & Cloud"
  | "ML & AI"
  | "Tools & Infra";

export const CATEGORY_ORDER: SkillCategory[] = [
  "All",
  "Languages",
  "Frontend",
  "Backend & Cloud",
  "ML & AI",
  "Tools & Infra",
];

/** Canonical display label for a raw stack string. Falls back to the raw string. */
export const SKILL_LABELS: Record<string, string> = {
  // Languages
  python: "Python",
  typescript: "TypeScript",
  javascript: "JavaScript",
  swift: "Swift",
  kotlin: "Kotlin",
  go: "Go",
  java: "Java",
  c: "C",
  "c++": "C++",
  rust: "Rust",
  sql: "SQL",
  bash: "Bash",
  "c#": "C#",

  // Frontend
  react: "React",
  "react native": "React Native",
  "next.js": "Next.js",
  nextjs: "Next.js",
  "framer motion": "Framer Motion",
  tailwindcss: "Tailwind CSS",
  tailwind: "Tailwind CSS",
  "ant design": "Ant Design",
  html: "HTML",
  css: "CSS",
  webgl: "WebGL",
  "canvas api": "Canvas API",
  electron: "Electron",
  "three.js": "Three.js",
  "jetpack compose": "Jetpack Compose",
  retrofit: "Retrofit",
  "android sdk": "Android SDK",
  lottie: "Lottie",
  axios: "Axios",
  "context api": "Context API",

  // Backend & Cloud
  "node.js": "Node.js",
  nodejs: "Node.js",
  express: "Express",
  fastapi: "FastAPI",
  flask: "Flask",
  django: "Django",
  supabase: "Supabase",
  firebase: "Firebase",
  postgresql: "PostgreSQL",
  postgres: "PostgreSQL",
  mysql: "MySQL",
  mongodb: "MongoDB",
  redis: "Redis",
  grpc: "gRPC",
  aws: "AWS",
  "aws s3": "AWS S3",
  "aws lambda": "AWS Lambda",
  "aws ec2": "AWS EC2",
  vercel: "Vercel",
  docker: "Docker",
  kubernetes: "Kubernetes",
  graphql: "GraphQL",
  "rest api": "REST API",
  prisma: "Prisma",
  nodemailer: "Nodemailer",
  gcp: "GCP",

  // ML & AI
  tensorflow: "TensorFlow",
  pytorch: "PyTorch",
  "scikit-learn": "scikit-learn",
  sklearn: "scikit-learn",
  opencv: "OpenCV",
  yolo: "YOLO",
  clip: "CLIP",
  numpy: "NumPy",
  pandas: "Pandas",
  cuda: "CUDA",
  "hugging face": "Hugging Face",
  "stable diffusion": "Stable Diffusion",
  openai: "OpenAI API",
  "openai api": "OpenAI API",
  langchain: "LangChain",
  "llama.cpp": "llama.cpp",

  // Tools & Infra
  git: "Git",
  github: "GitHub",
  "github actions": "GitHub Actions",
  jira: "Jira",
  figma: "Figma",
  postman: "Postman",
  jest: "Jest",
  vitest: "Vitest",
  webpack: "Webpack",
  vite: "Vite",
  eslint: "ESLint",
};

/** Maps a raw stack string to its SkillCategory. */
export const SKILL_CATEGORY_MAP: Record<string, SkillCategory> = {
  // Languages
  python: "Languages",
  typescript: "Languages",
  javascript: "Languages",
  swift: "Languages",
  kotlin: "Languages",
  go: "Languages",
  java: "Languages",
  c: "Languages",
  "c#": "Languages",
  "c++": "Languages",
  rust: "Languages",
  sql: "Languages",
  bash: "Languages",

  // Frontend
  react: "Frontend",
  "react native": "Frontend",
  "next.js": "Frontend",
  nextjs: "Frontend",
  "framer motion": "Frontend",
  tailwindcss: "Frontend",
  tailwind: "Frontend",
  "ant design": "Frontend",
  html: "Frontend",
  css: "Frontend",
  webgl: "Frontend",
  "canvas api": "Frontend",
  electron: "Frontend",
  "three.js": "Frontend",
  "jetpack compose": "Frontend",
  retrofit: "Frontend",
  "android sdk": "Frontend",
  lottie: "Frontend",
  axios: "Frontend",
  "context api": "Frontend",

  // Backend & Cloud
  "node.js": "Backend & Cloud",
  nodejs: "Backend & Cloud",
  express: "Backend & Cloud",
  fastapi: "Backend & Cloud",
  flask: "Backend & Cloud",
  django: "Backend & Cloud",
  supabase: "Backend & Cloud",
  firebase: "Backend & Cloud",
  postgresql: "Backend & Cloud",
  postgres: "Backend & Cloud",
  mysql: "Backend & Cloud",
  mongodb: "Backend & Cloud",
  redis: "Backend & Cloud",
  grpc: "Backend & Cloud",
  gcp: "Backend & Cloud",
  aws: "Backend & Cloud",
  "aws s3": "Backend & Cloud",
  "aws lambda": "Backend & Cloud",
  "aws ec2": "Backend & Cloud",
  vercel: "Backend & Cloud",
  docker: "Backend & Cloud",
  kubernetes: "Backend & Cloud",
  graphql: "Backend & Cloud",
  "rest api": "Backend & Cloud",
  prisma: "Backend & Cloud",
  nodemailer: "Backend & Cloud",


  // ML & AI
  tensorflow: "ML & AI",
  pytorch: "ML & AI",
  "scikit-learn": "ML & AI",
  sklearn: "ML & AI",
  opencv: "ML & AI",
  yolo: "ML & AI",
  clip: "ML & AI",
  numpy: "ML & AI",
  pandas: "ML & AI",
  cuda: "ML & AI",
  "hugging face": "ML & AI",
  "stable diffusion": "ML & AI",
  openai: "ML & AI",
  "openai api": "ML & AI",
  langchain: "ML & AI",
  "llama.cpp": "ML & AI",

  // Tools & Infra
  git: "Tools & Infra",
  github: "Tools & Infra",
  "github actions": "Tools & Infra",
  jira: "Tools & Infra",
  figma: "Tools & Infra",
  postman: "Tools & Infra",
  jest: "Tools & Infra",
  vitest: "Tools & Infra",
  webpack: "Tools & Infra",
  vite: "Tools & Infra",
  eslint: "Tools & Infra",
};

/**
 * Resolve a raw stack string to its category.
 * Matching is case-insensitive. Falls back to "Tools & Infra".
 */
export function resolveCategory(raw: string): SkillCategory {
  return SKILL_CATEGORY_MAP[raw.toLowerCase()] ?? "Tools & Infra";
}

/**
 * Resolve a raw stack string to its canonical display label.
 * Falls back to the raw string (title-cased).
 */
export function resolveLabel(raw: string): string {
  return (
    SKILL_LABELS[raw.toLowerCase()] ??
    raw
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
  );
}