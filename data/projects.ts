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
    img: "/deep_s.webp",
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
    img: "/leisurely.webp",
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
    img: "/lyfsum.webp",
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
    slug: "space-invaders-engine",
    title: "Space Invaders Game Engine",
    img: "/space-invaders.png", 
    link: "https://youtu.be/gPuQwNDYhDI",
    shortDesc:
      "A real-time Space Invaders engine built in C# focusing on strictly enforced SOLID principles and zero-allocation runtime memory management.",
    type: "personal",
    stacks: ["C#", "Azul Engine", "Design Patterns"],
    caseStudy: {
      overview:
        "A Space Invaders game clone developed in C# using the Azul game engine framework. The project functions as an intensive architectural exercise, focusing on the strict application of SOLID principles and over a dozen Gang of Four design patterns to produce a highly performant, real-time interactive application.",
      role: "Sole Engineer",
      problem:
        "In real-time game development, frequent heap allocation leads to severe performance pauses caused by Garbage Collection. Furthermore, hardcoding logic like collision reactions or animation updates directly into the game loop creates massive coupling and violates the Open/Closed Principle.",
      solution:
        "Implemented an extensive Object Pooling system backed by reserve lists to make runtime memory allocation rare and predictable. Decoupled the collision detection math from the resulting game reactions by chaining the <strong>Visitor</strong> and <strong>Observer</strong> patterns, and encapsulated delayed actions using the <strong>Command</strong> pattern.",
      architecture: {
        summary:
          "A scene-driven game loop utilizing a centralized state-machine for transitions, with resource handling managed entirely by Singleton managers backed by pre-allocated object pools.",
        highlights: [
          "ManBase universal pool template reduces boilerplate for maintaining active and reserve linked-lists across all resource managers.",
          "Proxy and Flyweight patterns drastically reduce GPU memory overload by sharing immutable sprite resources among hundreds of game objects.",
          "Command pattern combined with a priority queue (via DLinkMan) encapsulates time-delayed requests like alien animations and bomb dropping.",
          "Composite tree structure manages hierarchical game objects, allowing group operations (like AlienGrid movement) to recursively propagate to leaf nodes.",
          "Null Object pattern provides do-nothing default behaviors, safely eliminating hundreds of avoidable conditional branches and null reference checks per frame.",
        ],
      },
      challenges: [
        "Adapting the IrrKlang audio library's API to the engine using the Adapter pattern to prevent latency issues and ensure proper resource management.",
        "Managing the complexities of double dispatch in the Visitor pattern to resolve the specific runtime types of colliding objects (e.g., Missile vs. AlienGrid).",
        "Resolving physics tunneling issues where high-velocity missiles skipped collision checks with shield bricks due to fixed-size bounding boxes.",
      ],
      impact: [
        "Achieved near-zero runtime allocation, eliminating frame drops caused by garbage collection spikes.",
        "Proved that the rigorous, systematic integration of multiple design patterns (such as combining Observer with Command) directly manages system complexity and results in a robust, extensible architecture.",
      ],
    },
  },
  {
    slug: "private-ai-journal",
    title: "Private AI Journal OS",
    img: "/ai-journal.webp", 
    link: "https://github.com/priths7",
    shortDesc:
      "A privacy-first, local-offline AI journaling application with eventual cloud synchronization, capable of running local models for RAG.", //
    type: "personal",
    stacks: ["Rust", "Tauri", "React", "SQLite", "Hugging Face"],
    caseStudy: {
      overview:
        "A privacy-first, local-offline AI journaling application built on a local-first architecture based on the model of an operating system. It utilizes a hybrid RAG (Retrieval-Augmented Generation) pipeline, seamlessly merging encrypted journal memory with local workspace context.",
      role: "Sole Engineer",
      problem:
        "Standard AI-assisted writing tools rely on cloud APIs, compromising the privacy of highly personal journal data. Furthermore, relying purely on quantized local models introduces hardware constraints, where querying extensive historical data triggers out-of-memory (OOM) failures or context truncation.",
      solution:
        "Engineered a desktop application using <strong>Tauri</strong> and <strong>Rust</strong>. Implemented a RAG pipeline utilizing a local <code>all-MiniLM-L6-v2</code> model via the <code>candle</code> framework to pre-calculate semantic relevance and inject only mathematically relevant text chunks into the prompt. A background Rust thread intercepts prompts to redact sensitive PII tokens locally before transmitting heavy generation tasks to the Groq cloud API.",
      architecture: {
        summary:
          "A Tauri-based desktop architecture utilizing a unified encrypted SQLite vault for storage, and a standalone background daemon for asynchronous workspace file ingestion.",
        highlights: [
          "Rust kernel manages memory safety and hardware-accelerated machine learning inference.",
          "Data is stored in a locally compiled SQLite database (vault.db), encrypted at rest using a Master Password via magic_crypt.",
          "Local PII redaction using the candle framework executed entirely on-device before cloud transmission.",
          "Zero-knowledge cloud keys ensure third-party credentials (like Supabase and Groq keys) are dynamically AES-encrypted, leaving no hardcoded secrets in the binary.",
          "Standalone Rust daemon handles workspace file discovery, semantic chunking, and pure-Rust vector indexing without blocking the main UI thread.",
          "Custom hybrid synchronization push/pulls encrypted ciphertext to a Supabase PostgreSQL remote target without decrypting data in transit.",
        ],
      },
      challenges: [
        "Preventing main-thread deadlocks during resource-intensive operations, requiring delegation to the tokio async runtime.",
        "Managing Supabase Free Tier constraints, specifically the 500 MB database limit which is heavily consumed by pgvector embeddings.",
        "Assembling budget-aware contexts to merge journal text and workspace text cleanly without blowing out the LLM context window.",
      ],
      impact: [
        "Delivered a fully private AI journaling tool that enforces a zero-trust, local-first security model.",
        "Successfully orchestrated a zero-C-dependency hybrid retrieval system using raw BLOB storage in standard rusqlite.",
      ],
    },
  },
  {
    slug: "distributed-file-retrieval",
    title: "Distributed File Retrieval Engine",
    img: "/file-engine.webp", 
    link: "https://github.com/priths7",
    shortDesc:
      "A distributed system for retrieving file paths and term frequencies across multiple nodes.",
    type: "personal",
    stacks: ["gRPC", "ZeroMQ", "Java"],
    caseStudy: {
      overview:
        "A high-performance distributed file retrieval engine designed to query and return file paths and term frequencies across a network of nodes, prioritizing low-latency communication and high concurrency.",
      role: "Sole Engineer",
      problem:
        "Querying file metadata and term frequencies across distributed nodes traditionally introduces severe communication bottlenecks. A basic server-reply architecture blocks under high concurrency, drastically increasing latency during concurrent retrieval requests.",
      solution:
        "Built a distributed engine that evolved from a standard server-reply model to a highly concurrent <strong>Router-Dealer communication pattern</strong>. Utilized <strong>gRPC</strong> for structured remote procedure calls and <strong>ZeroMQ</strong> for asynchronous message queuing.",
      architecture: {
        summary:
          "A distributed node network utilizing gRPC for strict service definitions and ZeroMQ for high-throughput messaging, orchestrated via a Router-Dealer topology.",
        highlights: [
          "Implementation of the ZeroMQ Router-Dealer pattern to handle asynchronous, non-blocking requests",
          "gRPC integration for strongly typed, cross-service communication and payload serialization",
          "Distributed querying of file paths and term frequencies with aggregated result compilation",
          "Optimized for low-latency network communication and high concurrent node scaling",
        ],
      },
      challenges: [
        "Migrating the initial server-reply architecture to a Router-Dealer pattern without dropping in-flight requests",
        "Handling network partitions and node timeouts during term frequency aggregation",
        "Ensuring thread safety and memory efficiency when parsing large file directories concurrently",
      ],
      impact: [
        "Successfully implemented a robust distributed systems architecture capable of non-blocking parallel execution",
        "Deepened foundational knowledge of low-level network protocols and message queue orchestration",
      ],
    },
  },
  {
    slug: "image-generation-model",
    title: "Image Generation Model",
    img: "/generate.webp",
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
    img: "/similar.webp",
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
    img: "/define.webp",
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
    img: "/graph.webp",
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