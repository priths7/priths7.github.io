export interface CaseStudy {
  overview: string;
  role: string;
  problem: string;
  solution: string;
  architecture: {
    summary: string;
    highlights: string[];
  };
  challenges: string[];
  impact: string[];
}

export interface Project {
  slug: string;
  title: string;
  img: string;
  link: string;
  shortDesc: string;
  type: "professional" | "personal";
  stacks: string[];
  caseStudy: CaseStudy;
}

export const projects: Project[] = [
  // ─── Professional ────────────────────────────────────────────────────────────
  {
    slug: "deepstory",
    title: "Deepstory",
    img: "/DeepS.png",
    link: "https://deepstory.co/",
    shortDesc:
      "As a Full Stack Android developer, was responsible to design the architecture of the app for a social media app startup and develop it solely.",
    type: "professional",
    stacks: ["Android", "PostgreSQL", "NodeJs", "GCP"],
    caseStudy: {
      overview:
        "Deepstory is a social media platform built to let users share and discover rich, story-driven content. As the sole developer, I owned the full lifecycle — from initial architecture decisions to production deployment — for both the Android client and the backend infrastructure.",
      role: "Full Stack Android Developer (Sole Engineer) at Designare Solutions",
      problem:
        "The startup needed a production-ready social media Android application with no existing codebase or infrastructure. Every architectural decision — data modeling, API design, media handling, and deployment — had to be made from scratch under startup timelines, with a single engineer responsible for delivery.",
      solution:
        "I designed a layered Android architecture using MVVM with clean separation between the UI, domain, and data layers. The backend was built as a RESTful Node.js service backed by PostgreSQL, deployed on Google Cloud Platform for scalability. Media assets were handled through GCP Cloud Storage to keep the database lean and CDN-friendly.",
      architecture: {
        summary:
          "The system is composed of a native Android client communicating with a Node.js REST API, with PostgreSQL as the relational store and GCP Cloud Storage for media. All services run on GCP for unified infrastructure management.",
        highlights: [
          "MVVM architecture on Android with LiveData and ViewModel for reactive UI state",
          "RESTful Node.js API with JWT-based authentication and role-based access control",
          "PostgreSQL schema designed for social graph relationships (follows, likes, comments)",
          "GCP Cloud Storage for user-uploaded media with signed URL access",
          "Deployed on GCP Compute Engine with environment-based configuration",
          "Retrofit + OkHttp on Android for typed, interceptor-based HTTP communication",
        ],
      },
      challenges: [
        "Designing a scalable social graph schema in PostgreSQL without over-engineering for a startup's early user base",
        "Managing real-time feed personalization with limited infrastructure budget",
        "Sole ownership across Android, API, and DevOps required context-switching with no safety net",
        "Handling media upload flows on Android with background workers while keeping UX responsive",
      ],
      impact: [
        "Delivered a fully functional social media Android app from zero to production as a single engineer",
        "Architecture decisions allowed the team to onboard additional developers without major refactoring",
        "Established a reliable GCP-based deployment pipeline reused across subsequent projects",
      ],
    },
  },
  {
    slug: "stay-leisurely",
    title: "Stay Leisurely",
    img: "/Leisurely.png",
    link: "https://stayleisurely.com/",
    shortDesc:
      "Designed and developed a booking service management platform for a startup to book villas.",
    type: "professional",
    stacks: ["React", "PostgreSQL", "NodeJs", "GCP"],
    caseStudy: {
      overview:
        "Stay Leisurely is a villa booking platform built for a hospitality startup. I designed and developed the full-stack web application — from the guest-facing booking flow to the property management layer — enabling the business to accept and manage reservations end-to-end.",
      role: "Full Stack Developer at Designare Solutions",
      problem:
        "The client was managing villa reservations manually through phone calls and spreadsheets. They needed a polished customer-facing booking experience alongside an internal management interface to track availability, reservations, and guest communication — all within a tight delivery window.",
      solution:
        "Built a React web application for the guest-facing booking flow with a Node.js backend exposing a REST API. PostgreSQL handled relational reservation data with availability windows modeled carefully to prevent double-bookings. The platform was deployed on GCP for reliability and ease of scaling during peak seasons.",
      architecture: {
        summary:
          "A React SPA for the customer booking journey, backed by a Node.js API layer and PostgreSQL. GCP Cloud Run handled containerised backend deployment for cost-effective scaling.",
        highlights: [
          "React frontend with component-driven UI for property browsing, date selection, and checkout",
          "Availability engine in PostgreSQL preventing overlapping reservation windows via constraint-level validation",
          "Node.js REST API handling reservation lifecycle: create, confirm, cancel, and modify flows",
          "Email notification pipeline for booking confirmations and reminders using Nodemailer",
          "Admin dashboard for property managers to view and action upcoming reservations",
          "Deployed on GCP with environment-based config management and zero-downtime deployments",
        ],
      },
      challenges: [
        "Modeling villa availability accurately in PostgreSQL to prevent race conditions on simultaneous booking attempts",
        "Building an admin experience alongside the guest UI within a shared codebase without coupling concerns",
        "Handling payment and cancellation edge cases at the data layer without a dedicated payment microservice",
        "Ensuring mobile-first responsiveness for a booking flow that guests primarily access from phones",
      ],
      impact: [
        "Replaced a fully manual reservation process with a self-serve booking platform",
        "Reduced reservation errors and double-bookings to zero through database-level availability enforcement",
        "Enabled the client to scale villa listings independently through the admin management interface",
      ],
    },
  },
  {
    slug: "lyfsum",
    title: "Lyfsum",
    img: "/Lyfsum.png",
    link: "https://lyfsum.com/",
    shortDesc:
      "Designed and developed a robust appointment booking platform for patients for a healthcare startup, streamlining scheduling processes for medical appointments.",
    type: "professional",
    stacks: ["React", "PostgreSQL", "NodeJs", "GCP"],
    caseStudy: {
      overview:
        "Lyfsum is a healthcare appointment booking platform connecting patients with medical providers. I built the full-stack system — patient search and discovery, doctor availability, and appointment management — for a healthcare startup aiming to simplify how people access medical care.",
      role: "Full Stack Developer at Designare Solutions",
      problem:
        "Healthcare appointment scheduling is fragmented: patients call multiple clinics, face hold times, and still end up with inconvenient slots. The startup needed a unified platform where patients could search for providers by specialty, view real-time availability, and confirm bookings in a single flow — without requiring heavy infrastructure investment.",
      solution:
        "Built a React web app with provider search, filtering by specialty and location, and a calendar-based slot picker. The Node.js backend handled appointment state management (pending, confirmed, cancelled, completed) with PostgreSQL as the relational store. Provider availability was modeled as recurring and exception-based windows to support real clinical scheduling patterns.",
      architecture: {
        summary:
          "A React SPA for the patient-facing booking experience, a Node.js REST API for appointment and provider management, and PostgreSQL for relational healthcare data. Deployed on GCP with Cloud SQL for managed database infrastructure.",
        highlights: [
          "Provider search with specialty, location, and availability filters using parameterised SQL queries",
          "Slot availability engine supporting recurring schedules with override/exception windows",
          "Appointment state machine (requested → confirmed → completed / cancelled) enforced at the API layer",
          "Role-aware API: patients and providers have distinct access scopes via JWT claims",
          "Email and in-app notification system for appointment reminders and status updates",
          "PostgreSQL on GCP Cloud SQL for managed, HIPAA-considerate data storage",
        ],
      },
      challenges: [
        "Modeling provider availability windows that support recurring schedules, exceptions, and real-time slot blocking",
        "Preventing double-booking under concurrent appointment requests for the same slot",
        "Designing a data model that could accommodate multiple provider types without schema migrations per type",
        "Keeping the patient search experience fast with compound availability + specialty filtering",
      ],
      impact: [
        "Delivered a production-ready healthcare booking platform from design to deployment",
        "Eliminated phone-based scheduling friction for patients through a self-serve booking flow",
        "Supported multiple provider types and specialties under a unified data model with no schema rework",
      ],
    },
  },

  // ─── Personal ────────────────────────────────────────────────────────────────
  {
    slug: "image-generation-model",
    title: "Image Generation Model",
    img: "/generate.png",
    link: "https://github.com/priths7/ImageGenerationModel",
    shortDesc:
      "A stable diffusion model to generate images built on PyTorch.",
    type: "personal",
    stacks: ["PyTorch", "Python"],
    caseStudy: {
      overview:
        "A from-scratch implementation of a Stable Diffusion image generation model in PyTorch. The project explored the core components of latent diffusion — the VAE encoder/decoder, the U-Net denoising network, and the CLIP text conditioning pipeline — as a deep learning study in generative modelling.",
      role: "Sole Researcher & Engineer",
      problem:
        "Generative image models are often treated as black boxes via API. The goal was to understand the internals of Stable Diffusion by implementing and training the key components from the ground up rather than wrapping an existing pipeline — building intuition for latent spaces, diffusion schedules, and conditional generation.",
      solution:
        "Implemented the core Stable Diffusion pipeline in PyTorch: a Variational Autoencoder to project images into a compressed latent space, a U-Net with attention blocks for iterative denoising, and DDPM/DDIM noise schedulers. Text conditioning was applied via CLIP embeddings fed through cross-attention layers in the U-Net.",
      architecture: {
        summary:
          "A three-component pipeline: VAE for latent compression, a U-Net denoiser with cross-attention for text conditioning, and a noise scheduler controlling the forward and reverse diffusion process.",
        highlights: [
          "Variational Autoencoder (VAE) for encoding images into a 4-channel latent space and decoding generated latents back to pixel space",
          "U-Net architecture with ResNet blocks and multi-head cross-attention for conditioning on CLIP text embeddings",
          "DDPM noise scheduler implementing the forward diffusion process and learned reverse denoising",
          "DDIM sampling for faster inference with fewer denoising steps without retraining",
          "Text prompt conditioning via CLIP ViT embeddings injected through cross-attention at multiple U-Net resolutions",
          "Training loop with loss computed on predicted noise vs. actual noise added during forward diffusion",
        ],
      },
      challenges: [
        "Correctly implementing the KL-divergence regularisation term in the VAE loss without posterior collapse",
        "Aligning tensor dimensions across the U-Net's multi-resolution skip connections and cross-attention heads",
        "Managing GPU memory during training with large latent tensors and attention computation",
        "Reproducing the DDIM deterministic sampling path from the DDPM stochastic formulation",
      ],
      impact: [
        "Built a working end-to-end text-to-image generation pipeline from mathematical foundations",
        "Developed deep intuition for latent diffusion, attention mechanisms, and noise scheduling",
        "Published as an open-source reference implementation on GitHub",
      ],
    },
  },
  {
    slug: "similar-image-recommender",
    title: "Similar Image Recommender",
    img: "/similar.png",
    link: "https://github.com/priths7/Similar-Images-Recommender",
    shortDesc:
      "An image feature extraction engine that quantifies visual similarity between images using deep learning embeddings.",
    type: "personal",
    stacks: ["TensorFlow", "Python"],
    caseStudy: {
      overview:
        "A content-based image retrieval system that uses deep learning feature extraction to find and rank visually similar images from a reference dataset. Given a query image, the engine returns the most visually similar images ranked by embedding cosine similarity.",
      role: "Sole Researcher & Engineer",
      problem:
        "Traditional image search relies on metadata tags and filenames — not the visual content itself. The goal was to build a system that understands what an image looks like and can surface similar images based on visual features alone, without any manual labelling.",
      solution:
        "Used a pre-trained CNN (VGG16/ResNet) as a feature extractor, removing the classification head to expose the deep embedding layer. Images are encoded into high-dimensional feature vectors and similarity is computed using cosine distance. A nearest-neighbour search over the embedding index retrieves and ranks the most similar images.",
      architecture: {
        summary:
          "A TensorFlow feature extraction pipeline using a headless pre-trained CNN, a vector index of pre-computed embeddings, and cosine similarity ranking for query-time retrieval.",
        highlights: [
          "Pre-trained CNN backbone (VGG16/ResNet50) with the classification head removed to expose 2048-dim feature vectors",
          "Batch pre-computation of embeddings for the reference image dataset stored as a NumPy index",
          "Cosine similarity computed between query embedding and all reference vectors for ranked retrieval",
          "TensorFlow image preprocessing pipeline matching the training-time normalisation of the backbone",
          "Top-K retrieval with similarity scores returned alongside matched images",
          "Extensible design allowing backbone swap for domain-specific fine-tuning",
        ],
      },
      challenges: [
        "Choosing the right layer depth for feature extraction — too shallow loses semantic meaning, too deep overfits to ImageNet classes",
        "Normalising embeddings consistently between pre-computation and query time to avoid distance distortion",
        "Scaling the similarity search efficiently as the reference dataset grows beyond memory-resident size",
        "Evaluating retrieval quality without labelled ground-truth pairs",
      ],
      impact: [
        "Demonstrated content-based image retrieval without any manual labelling or metadata",
        "Achieved visually coherent similarity rankings across diverse image categories",
        "Open-sourced as an educational reference for embedding-based retrieval systems",
      ],
    },
  },
  {
    slug: "image-description-generator",
    title: "Image Description Generator",
    img: "/define.png",
    link: "https://github.com/priths7/Image-Description-Generator",
    shortDesc:
      "A TensorFlow-based image captioning model that generates natural language descriptions for a given input image.",
    type: "personal",
    stacks: ["TensorFlow", "Python"],
    caseStudy: {
      overview:
        "An image captioning system that generates natural language descriptions for arbitrary input images. The model uses a CNN encoder to extract visual features and an RNN decoder to autoregressively generate descriptive captions word-by-word.",
      role: "Sole Researcher & Engineer",
      problem:
        "Image captioning bridges computer vision and natural language processing — a model must simultaneously understand visual content and generate grammatically coherent descriptions. The project aimed to implement this encoder-decoder architecture from scratch to understand the cross-modal alignment between vision and language.",
      solution:
        "Built an encoder-decoder architecture: a pre-trained InceptionV3 CNN extracts spatial image features, which are fed as the initial hidden state into an LSTM decoder. The decoder generates captions token-by-token using a word embedding layer and an attention mechanism to focus on relevant image regions at each generation step.",
      architecture: {
        summary:
          "A CNN-RNN encoder-decoder: InceptionV3 encodes image features, a Bahdanau attention layer aligns visual regions to generation steps, and an LSTM decoder produces captions autoregressively.",
        highlights: [
          "InceptionV3 CNN encoder (pre-trained on ImageNet) with spatial feature maps extracted before the global pooling layer",
          "Bahdanau additive attention mechanism weighting image regions at each decoder timestep",
          "LSTM decoder with learned word embeddings generating tokens until the end-of-sequence token",
          "Teacher forcing during training with cross-entropy loss over the caption vocabulary",
          "BLEU score evaluation against reference captions on a held-out validation split",
          "Trained on MS-COCO dataset captions with vocabulary truncation for manageable embedding size",
        ],
      },
      challenges: [
        "Aligning CNN spatial features (H×W×C tensors) with the sequential LSTM hidden state interface",
        "Avoiding exposure bias where the model sees teacher-forced tokens during training but its own predictions at inference",
        "Managing vocabulary size vs. coverage tradeoff during preprocessing",
        "Stabilising LSTM training with long caption sequences using gradient clipping",
      ],
      impact: [
        "Produced a working image captioning pipeline from visual input to natural language output",
        "Demonstrated cross-modal encoder-decoder design and attention alignment in practice",
        "Published as an accessible open-source reference for image captioning with TensorFlow",
      ],
    },
  },
  {
    slug: "motion-detection-graph",
    title: "Motion Detection Graph",
    img: "/graph.png",
    link: "https://github.com/priths7/Motion_detection_graph",
    shortDesc:
      "A real-time motion detection tool that plots a time-series graph of face detection duration using Python and OpenCV.",
    type: "personal",
    stacks: ["OpenCV", "Python"],
    caseStudy: {
      overview:
        "A real-time face and motion detection tool that captures webcam frames, detects faces using OpenCV's Haar Cascade classifier, and plots an accumulating time-series graph showing the duration and frequency of detected presence over a session.",
      role: "Sole Engineer",
      problem:
        "Understanding how long a subject is present in a camera frame — and visualising that over time — has applications in attention tracking, occupancy monitoring, and basic behavioural analysis. The project explored building a lightweight, dependency-minimal tool for real-time presence logging using only Python and OpenCV.",
      solution:
        "A Python script captures webcam frames via OpenCV VideoCapture, applies Haar Cascade face detection on each frame, and logs detection timestamps. Matplotlib renders a live-updating time-series graph showing presence duration per time window, updated incrementally as new frames are processed.",
      architecture: {
        summary:
          "A single-process Python loop: OpenCV captures and processes frames, Haar Cascade classifies presence, and Matplotlib renders a continuously updated time-series plot.",
        highlights: [
          "OpenCV VideoCapture for real-time webcam frame acquisition at configurable frame rates",
          "Haar Cascade Classifier (frontal face) for lightweight, CPU-efficient face detection per frame",
          "Frame pre-processing pipeline: grayscale conversion and histogram equalisation for detection robustness",
          "Timestamp logging per detected frame, aggregated into fixed time-window bins",
          "Matplotlib FuncAnimation for live-updating time-series graph without blocking the capture loop",
          "Detection sensitivity configurable via scale factor and minimum neighbour parameters",
        ],
      },
      challenges: [
        "Preventing the Matplotlib update loop from blocking the OpenCV capture thread, requiring careful use of non-blocking draw calls",
        "Tuning Haar Cascade parameters to balance false positive rate vs. missed detections in varying lighting",
        "Maintaining a rolling time-series buffer without unbounded memory growth over long sessions",
        "Handling graceful shutdown of both the capture loop and the plot window simultaneously",
      ],
      impact: [
        "Built a fully functional real-time presence detection and visualisation tool with no heavy dependencies beyond OpenCV and Matplotlib",
        "Demonstrated practical application of classical computer vision for lightweight monitoring use cases",
        "Open-sourced as a beginner-accessible introduction to OpenCV and real-time data visualisation in Python",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}