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
  /**
   * Primary external link. Used on the case study page's "Visit" button and as
   * the fallback Visit link on the project card when repoStatus is not "private".
   * For projects whose only public presence is a YouTube demo, set this to the
   * YouTube URL and also populate `youtubeLink` so the card renders a dedicated
   * Watch Demo button.
   */
  link: string;
  shortDesc: string;
  type: "professional" | "personal";
  stacks: string[];
  caseStudy: CaseStudy;
  sourceNote?: string;
  linkLabel?: string;
  /**
   * Optional dedicated YouTube demo URL. When present, the project card renders
   * a separate "Watch Demo ▶" button alongside (or instead of) the Visit button.
   */
  youtubeLink?: string;
  /**
   * Visibility of the primary GitHub repository. When set to "private", the
   * project card replaces the clickable Visit/GitHub button with a non-interactive
   * "Private Repo 🔒" badge so visitors understand the code is not public.
   */
  repoStatus?: "public" | "private";
}

export const projects: Project[] = [
  // ─── Professional ────────────────────────────────────────────────────────────
  {
    slug: "deepstory",
    title: "Deepstory",
    img: "/deep_s.webp",
    link: "https://deepstory.co/",
    shortDesc:
      "As a Full Stack Android developer, I designed the architecture and solely developed a social media app startup, featuring custom recommendation algorithms and real-time media handling.",
    type: "professional",
    stacks: [
      "Android",
      "Kotlin",
      "Node.js",
      "PostgreSQL",
      "Typescript",
      "GCP",
      "Firebase",
      "RxJava",
      "Amplitude",
      "Postman", 
      "Tailwind",
      "Jetpack Compose",
      "Retrofit",
    ],
    caseStudy: {
      overview:
        "Deepstory is a social media platform built to let users share and discover rich, story-driven content. As the sole developer, I owned the full lifecycle — from initial architecture decisions to production deployment — integrating custom feed algorithms, robust media handling, and comprehensive user analytics.",
      role: "Full Stack Android Developer at Designare Solutions",
      problem:
        "The startup needed a production-ready social media Android application built from scratch. Beyond basic CRUD operations, the platform required a custom content recommendation engine, reliable background video uploads, and deep user behavioral tracking to guide business decisions—all delivered by a single engineer.",
      solution:
        "I designed a layered MVVM Android architecture using Kotlin and RxJava for reactive event handling (such as video upload progress). The backend was powered by a Node.js REST API and PostgreSQL, deployed on GCP. I implemented cron jobs to calculate per-video engagement metrics and drive a proprietary, weighted-scoring recommendation algorithm, while integrating Firebase and Amplitude for secure authentication, crash reporting, and behavioral analytics.",
      architecture: {
        summary:
          "A native Android client (Kotlin/MVVM) communicating with a Node.js REST API, backed by PostgreSQL for relational data and GCP Cloud Storage for media. Firebase and Amplitude handle auth and analytics, while RxJava manages asynchronous client events.",
        highlights: [
          "MVVM architecture on Android using Kotlin, LiveData, and ViewModel for reactive UI state",
          "RxJava implemented for publisher events and asynchronous tracking, specifically managing background video upload progress",
          "RESTful Node.js API handling core social features (likes, comments, video uploads) backed by PostgreSQL",
          "Maintained a centralized Postman workspace documenting the entire REST API ecosystem to ensure seamless integration and testing",
          "Custom cron jobs implemented to calculate per-video engagement counts (views, likes, comments)",
          "Proprietary, category-based recommendation engine utilizing a weighted scoring system to tailor user-specific feeds",
          "GCP Cloud Storage integration for scalable user-uploaded media management",
          "Firebase suite integrated for Authentication, Crashlytics, and core user tracking",
          "Amplitude integrated for deep behavioral analytics to capture and analyze user engagement patterns",
        ],
      },
      challenges: [
        "Designing a scalable social graph schema in PostgreSQL without over-engineering for a startup's early user base",
        "Engineering a proprietary, weighted recommendation algorithm and orchestrating cron jobs to process per-video metrics efficiently",
        "Handling heavy media upload flows on Android using RxJava and background workers while keeping the UX responsive",
        "Sole ownership across Android, API, DevOps, and analytics integration requiring intense context-switching",
      ],
      impact: [
        "Delivered a fully functional, data-driven social media Android app from zero to production as a single engineer",
        "Enabled tailored user experiences and targeted content delivery through the custom weighted-scoring recommendation engine",
        "Provided leadership with actionable user behavior insights via Amplitude and Firebase integration",
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
      "Redesigned and functionally overhauled an existing villa booking platform, delivering a cleaner UX, custom management tools, and seamless property synchronization.",
    type: "professional",
    stacks: [
      "React",
      "PostgreSQL",
      "Node.js",
      "GCP",
      "Typescript",
      "Firebase",
      "Guesty API",
      "Razorpay",
      "Postman",
      "Tailwind",
      "Axios",
      "Context API"
    ],
    caseStudy: {
      overview:
        "Stay Leisurely is a villa booking platform for a hospitality startup. I spearheaded the redesign and functional overhaul of their existing website, transforming it into a clean, highly customized full-stack web application. The revamped system features a modernized guest booking flow, a secure, role-based internal CMS, and intelligent integrations with the Guesty PMS.",
      role: "Full Stack Developer at Designare Solutions",
      problem:
        "The client had an existing website, but it was cluttered, functionally limited, and still required manual intervention (phone calls, spreadsheets) to manage actual reservations. They needed their platform modernized with a cleaner user experience, custom booking functionalities tailored to their workflow, and a robust, secure admin interface to manage inventory without double-booking.",
      solution:
        "Overhauled the existing website into a modern React application, focusing on a cleaner UI and frictionless guest-facing workflows utilizing Firebase for onboarding. To replace their manual processes, I built a highly customized Admin CMS featuring Role-Based Access Control (RBAC), ensuring that staff members only had authorization for specific, necessary modifications. I also engineered a Node.js synchronization backend: properties managed locally are handled via PostgreSQL, while external properties use automated cron jobs to sync pricing and availability with the Guesty API. Razorpay was integrated to handle secure payments seamlessly.",
      architecture: {
        summary:
          "A modernized React SPA replacing the legacy frontend, backed by a new Node.js API layer and PostgreSQL. GCP Cloud Run handled containerised backend deployment, with GCP securely storing property, user, and Razorpay transaction data.",
        highlights: [
          "Complete UI/UX redesign of the legacy website into a modern, component-driven React application",
          "Custom Admin CMS with granular Role-Based Access Control (RBAC) governing modifications to property listings, pricing, and availability",
          "Smart synchronization engine using a property-level sync flag to seamlessly toggle between local database management and external Guesty PMS management",
          "Maintained a centralized Postman workspace documenting the entire REST API ecosystem to ensure seamless integration and testing",
          "Automated Node.js cron jobs utilizing Guesty IDs to fetch and update property pricing and availability via optimized batch processing",
          "Razorpay payment gateway integration for secure, seamless checkout flows and transaction logging",
          "Firebase integration for secure and streamlined guest onboarding and authentication",
          "Deployed on GCP with environment-based config management and zero-downtime deployments",
        ],
      },
      challenges: [
        "Refactoring and modernizing the existing platform's UX/UI while introducing complex new backend functionality without disrupting the business",
        "Implementing a robust RBAC authorization matrix that flexibly accommodated the startup's internal team structure without overly restricting operations",
        "Designing an efficient batch-processing cron architecture to sync Guesty API data across multiple properties simultaneously",
        "Reconciling availability states dynamically based on the sync parameter to ensure the booking engine always queried the correct source of truth",
        "Handling Razorpay payment states reliably to ensure transaction records in GCP remained accurate even during network interruptions",
      ],
      impact: [
        "Transformed a functionally limited, existing website into a clean, automated, and high-converting self-serve booking platform",
        "Eliminated manual reservation tracking and double-bookings by establishing a strict single source of truth for every property",
        "Optimized system performance and API usage by implementing batched cron jobs for external inventory synchronization",
        "Empowered the client with a secure, custom CMS tailored specifically to their operational requirements and team roles",
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
    stacks: [
      "React",
      "PostgreSQL",
      "Node.js",
      "GCP",
      "TypeScript",
      "Firebase",
      "PhonePe",
      "WhatsApp API",
      "Postman",
      "Tailwind",
      "Axios",
      "Context API"
    ],
    caseStudy: {
      overview:
        "Lyfsum is a healthcare appointment booking platform connecting patients with medical providers. I built the full-stack system — patient search and discovery, doctor availability, payment processing, and appointment management — for a healthcare startup aiming to simplify how people access medical care.",
      role: "Full Stack Developer at Designare Solutions",
      problem:
        "Healthcare appointment scheduling is fragmented: patients call multiple clinics, face hold times, and still end up with inconvenient slots. The startup needed a unified platform where patients could search for providers by specialty, view real-time availability, and confirm bookings in a single flow — without requiring heavy infrastructure investment.",
      solution:
        "Built a React web app with provider search, filtering by specialty and location, and a calendar-based slot picker, utilizing Firebase for seamless user authentication. To reduce friction, I integrated a conversational booking flow and automated confirmations via WhatsApp using the Facebook API. The Node.js backend handled appointment state management with PostgreSQL, while PhonePe was integrated to securely process patient payments.",
      architecture: {
        summary:
          "A React SPA for the patient-facing web experience, Firebase for authentication, a Node.js REST API for appointment and provider management, and PostgreSQL on GCP Cloud SQL for relational healthcare data. Extended reach via WhatsApp Business API and handled financial transactions through PhonePe.",
        highlights: [
          "Provider search with specialty, location, and availability filters using parameterised SQL queries",
          "Firebase Authentication integration for secure and frictionless user onboarding",
          "Maintained a centralized Postman workspace documenting the entire REST API ecosystem to ensure seamless integration and testing",
          "WhatsApp Business API integration via Facebook for conversational booking and real-time confirmation notifications",
          "PhonePe payment gateway integration for secure transaction processing",
          "Slot availability engine supporting recurring schedules with override/exception windows",
          "Appointment state machine (requested → confirmed → completed / cancelled) enforced at the API layer",
          "Role-aware API: patients and providers have distinct access scopes via JWT claims",
          "PostgreSQL on GCP Cloud SQL for managed, HIPAA-considerate data storage",
        ],
      },
      challenges: [
        "Modeling provider availability windows that support recurring schedules, exceptions, and real-time slot blocking",
        "Synchronizing appointment states concurrently between the web app and the WhatsApp conversational flow",
        "Handling asynchronous payment webhooks from PhonePe reliably to prevent double-booking or dropped transactions",
        "Designing a data model that could accommodate multiple provider types without schema migrations per type",
      ],
      impact: [
        "Delivered a production-ready healthcare booking platform from design to deployment",
        "Increased patient accessibility and engagement by enabling frictionless booking and instant confirmations directly through WhatsApp",
        "Eliminated phone-based scheduling friction for patients through a self-serve web and chat booking flow",
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
    youtubeLink: "https://youtu.be/gPuQwNDYhDI",
    repoStatus: "private",
    shortDesc:
      "A C# arcade engine built with Azul, emphasizing pool-backed managers, scene states, collision visitors, timed commands, and reusable game-object systems.",
    type: "personal",
    stacks: ["C#", "Azul Engine", "IrrKlang", "Design Patterns"],
    caseStudy: {
      overview:
        "A playable Space Invaders clone developed in C# on top of the Azul game framework. The project was built as an architecture-focused real-time systems case study, with select/play/game-over scenes, credits, one- and two-player sessions, score tracking, waves, UFO events, destructible shields, animated aliens, and multiple bomb behaviors.",
      role: "Sole Engineer",
      problem:
        "A real-time arcade game has to update input, animation, collision, scoring, object removal, audio, and rendering every frame without turning the main loop into a tightly coupled script. Naive allocation and direct mutation during collision traversal can also create frame instability, garbage collection pressure, and hard-to-reproduce bugs.",
      solution:
        "Built a scene-driven engine around pool-backed manager classes, composite game-object trees, and event-style collision reactions. <strong>Visitor</strong> handles double-dispatch collision routing, <strong>Observer</strong> keeps reactions decoupled from detection, <strong>Command</strong> powers delayed events such as alien motion, bomb drops, UFO spawns, respawns, and scene changes, and <strong>Strategy</strong> gives bombs interchangeable fall behavior.",
      architecture: {
        summary:
          "The game runs through an Azul.Game lifecycle with centralized content loading, a SceneContext state machine, singleton resource managers, active/reserve object pools, sprite proxies, batched rendering, and a sorted timer-event list for scheduled gameplay commands.",
        highlights: [
          "SceneContext switches between Select, Play, and Game Over states while SessionManager preserves credits, active player, lives, high score, and one/two-player turn state.",
          "ManBase provides a reusable active/reserve-list template used by managers for textures, images, fonts, glyphs, sprites, collision pairs, game-object nodes, timers, sounds, and ghosted objects.",
          "Composite hierarchies model the AlienGrid, alien columns, shield grids, shield columns, walls, bumpers, missile group, bomb root, ship root, and UFO root as trees that can update and collide at multiple levels.",
          "ColPairMan registers collision pairs between object trees; ColRect performs rectangle intersection tests; Visitor resolves concrete runtime types; ColSubject then notifies focused observers for scoring, removal, sound, explosions, and state transitions.",
          "TimerEventMan stores Command objects on a sorted DLinkMan list and drives repeating alien animation, grid movement, randomized bomb drops, UFO spawning, delayed explosions, ship respawns, player swaps, and scene transitions.",
          "SpriteGameProxy, SpriteBoxProxy, SpriteGameBatch, TextureMan, and ImageMan share immutable sprite/image resources while allowing each live game object to maintain independent position and collision state.",
        ],
      },
      challenges: [
        "Preventing collision observers from mutating the same composite tree being traversed, solved with mark-for-death flags plus DelayedObjectMan for deferred removals.",
        "Keeping two-player state consistent across scene transitions, respawns, player swaps, credits, lives, scores, preserved alien grids, and preserved shield damage.",
        "Modeling destructible shields as many tiny bricks without hardcoding every interaction between missiles, bombs, aliens, columns, and shield roots.",
        "Coordinating timer events across scene entry/exit and pause-like transitions so scheduled commands do not fire at stale times.",
        "Preloading and routing IrrKlang sound sources through SoundMan so explosions, missile shots, UFO audio, and alien movement sounds remain responsive during frame updates.",
      ],
      impact: [
        "Delivered a complete playable arcade clone with attract/select flow, credits, one/two-player mode, scoring, lives, waves, UFOs, destructible shields, alien acceleration, and varied bomb patterns.",
        "Reduced per-frame allocation pressure through reusable managers, reserve lists, sprite proxies, and delayed object recycling, making runtime behavior more predictable for a real-time game loop.",
        "Produced an engineering design document and UML diagrams covering 14 applied patterns: Singleton, Object Pool, Factory, Observer, Flyweight, Proxy, Command, Iterator, State, Composite, Strategy, Visitor, Null Object, Adapter, and Template Method.",
      ],
    },
  },
  {
    slug: "private-ai-journal",
    title: "Private AI Journal OS",
    img: "/ai-journal.webp",
    link: "https://github.com/priths7",
    repoStatus: "private",
    shortDesc:
      "A privacy-first, local-offline AI journaling application with eventual cloud synchronization, capable of running local models for RAG.", //
    type: "personal",
    stacks: ["Rust", "Tauri", "React", "SQLite", "Hugging Face", "TypeScript"],
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
    link: "https://github.com/transcendental-software/csc-435-ea-priths7",
    repoStatus: "private",
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
    shortDesc: "A stable diffusion model to generate images built on PyTorch.",
    type: "personal",
    repoStatus: "public",
    stacks: ["PyTorch", "Python"],
    caseStudy: {
      overview:
        "A from-scratch implementation of a Stable Diffusion image generation inference pipeline in PyTorch. The project explored the core components of latent diffusion — the VAE encoder/decoder, the U-Net denoising network, and the CLIP text conditioning pipeline — as a deep learning study in generative modelling.",
      role: "Sole Researcher & Engineer",
      problem:
        "Generative image models are often treated as black boxes via API. The goal was to understand the internals of Stable Diffusion by implementing the key components for inference from the ground up rather than wrapping an existing pipeline — building intuition for latent spaces, diffusion schedules, and conditional generation.",
      solution:
        "Implemented the core Stable Diffusion inference pipeline in PyTorch: a Variational Autoencoder to project images into a compressed latent space and back, a U-Net with attention blocks for iterative denoising, and a DDPM noise scheduler. Text conditioning was applied via CLIP embeddings fed through cross-attention layers in the U-Net.",
      architecture: {
        summary:
          "A three-component pipeline: VAE for latent compression/decompression, a U-Net denoiser with cross-attention for text conditioning, and a noise scheduler controlling the reverse diffusion process.",
        highlights: [
          "Variational Autoencoder (VAE) for encoding images into a 4-channel latent space and decoding generated latents back to pixel space",
          "U-Net architecture with ResNet blocks and multi-head cross-attention for conditioning on CLIP text embeddings",
          "DDPM noise scheduler implementing the forward diffusion process (for image-to-image) and reverse denoising",
          "Text prompt conditioning via CLIP ViT embeddings injected through cross-attention at multiple U-Net resolutions",
          "Custom script to map and load standard pre-trained Stable Diffusion weights (v1-5) into the custom PyTorch architecture",
        ],
      },
      challenges: [
        "Aligning tensor dimensions across the U-Net's multi-resolution skip connections and cross-attention heads",
        "Mapping pre-trained Stable Diffusion weights accurately into custom implemented PyTorch classes and layers",
        "Managing memory efficiently during inference, implementing device offloading strategies across CPU, CUDA, and MPS",
        "Accurately reproducing the DDPM reverse process steps and variance calculations to denoise latents correctly",
      ],
      impact: [
        "Built a working end-to-end text-to-image and image-to-image generation inference pipeline from mathematical foundations",
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
      "An image feature extraction engine that quantifies visual similarity between images using deep learning embeddings and autoencoders.",
    type: "personal",
    repoStatus: "public",
    stacks: ["TensorFlow", "Python", "Keras"],
    caseStudy: {
      overview:
        "A content-based image retrieval system that uses deep learning feature extraction to find and rank visually similar images from a reference dataset. The engine explores two approaches: using a pre-trained VGG16 model and a custom Convolutional Autoencoder. Given a query image, it returns the most visually similar images ranked by Euclidean distance in the embedding space.",
      role: "Sole Researcher & Engineer",
      problem:
        "Traditional image search relies on metadata tags and filenames — not the visual content itself. The goal was to build a system that understands what an image looks like and can surface similar images based on visual features alone, without any manual labelling.",
      solution:
        "Implemented two feature extraction methods. The first uses a pre-trained VGG16 CNN as a feature extractor, removing the classification head to expose the 'fc1' embedding layer. The second trains a custom Convolutional Autoencoder to compress images into a 16-dimensional latent space. Images are encoded into feature vectors and similarity is computed using Euclidean distance. A nearest-neighbour search over the embedding index retrieves and ranks the most similar images.",
      architecture: {
        summary:
          "A TensorFlow/Keras feature extraction pipeline using both a headless pre-trained VGG16 model and a custom Autoencoder, a vector index of pre-computed embeddings, and Euclidean distance ranking for query-time retrieval.",
        highlights: [
          "Pre-trained VGG16 CNN backbone with the classification head removed to expose 4096-dim feature vectors from the 'fc1' layer.",
          "Custom Convolutional Autoencoder trained from scratch to compress images into a dense 16-dim latent space representation.",
          "Batch pre-computation of embeddings for the reference image dataset stored as a NumPy index/pickle file.",
          "Euclidean distance computed between query embedding and all reference vectors for ranked retrieval.",
          "TensorFlow image preprocessing pipeline matching the training-time normalisation.",
          "Top-K retrieval with distance scores returned alongside matched images.",
          "Evaluation includes comparing both Euclidean distance of visual features and text similarity of product categories.",
        ],
      },
      challenges: [
        "Choosing the right layer depth for feature extraction — too shallow loses semantic meaning, too deep overfits to ImageNet classes.",
        "Designing and training an effective Convolutional Autoencoder architecture to capture meaningful visual representations in a highly compressed latent space.",
        "Normalising embeddings consistently between pre-computation and query time to avoid distance distortion.",
        "Scaling the similarity search efficiently as the reference dataset grows.",
        "Evaluating retrieval quality without labelled ground-truth pairs, mitigated by checking category similarity.",
      ],
      impact: [
        "Demonstrated content-based image retrieval without any manual labelling or metadata.",
        "Compared performance between transfer learning (VGG16) and custom representation learning (Autoencoder).",
        "Achieved visually coherent similarity rankings across diverse image categories.",
        "Open-sourced as an educational reference for embedding-based retrieval systems.",
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
    repoStatus: "public",
    stacks: ["TensorFlow", "Python", "Jupyter Notebook"],
    caseStudy: {
      overview:
        "An image captioning system that generates natural language descriptions for arbitrary input images. The model uses a CNN encoder to extract visual features and an RNN decoder to to process text and autoregressively generate descriptive captions word-by-word.",
      role: "Sole Researcher & Engineer",
      problem:
        "Image captioning bridges computer vision and natural language processing — a model must simultaneously understand visual content and generate grammatically coherent descriptions. The project aimed to implement a multimodal architecture from scratch to understand the cross-modal alignment between vision and language.",
      solution:
        "Built a merge-model architecture: a pre-trained InceptionV3 CNN extracts global image features, while pre-trained GloVe embeddings represent text tokens. An LSTM processes the text sequences, and the visual and textual features are merged using an addition layer before dense layers predict the next token in the caption.",
      architecture: {
        summary:
          "A CNN-RNN merge model: InceptionV3 encodes global image features, pre-trained GloVe embeddings and an LSTM process the text, and their outputs are combined to predict the next word.",
        highlights: [
          "InceptionV3 CNN encoder (pre-trained on ImageNet) extracting 2048-dimensional global feature vectors",
          "Pre-trained 200-dimensional GloVe word embeddings (glove.6B.200d) utilized as non-trainable weights",
          "LSTM layer processing sequences of caption tokens",
          "Merge architecture adding dense projections of image features and LSTM outputs",
          "Greedy search implemented to generate final image descriptions token-by-token",
          "Trained on MS-COCO dataset captions using a custom data generator to yield batches progressively",
        ],
      },
      challenges: [
        "Combining global CNN features with sequential LSTM states via a merge architecture",
        "Integrating pre-trained GloVe embeddings efficiently into the embedding layer",
        "Managing large MS-COCO dataset size with a custom Python generator to avoid memory exhaustion",
        "Preprocessing sequence data to create multiple input-output pairs for next-token prediction",
      ],
      impact: [
        "Produced a working image captioning pipeline from visual input to natural language output",
        "Demonstrated a practical merge-based multimodal architecture for vision and language",
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
      "A real-time motion detection tool that captures video, logs activity intervals using OpenCV, and plots an interactive time-series graph using Bokeh and Pandas.",
    type: "personal",
    repoStatus: "public",
    stacks: ["OpenCV", "Python", "Pandas", "Bokeh"],
    caseStudy: {
      overview:
        "A motion detection tool that captures webcam frames, detects movement by comparing frames against a static background using OpenCV, and plots an interactive time-series graph showing the duration and frequency of detected presence over a session.",
      role: "Sole Engineer",
      problem:
        "Understanding how long a subject is present in a camera frame — and visualising that over time — has applications in attention tracking, occupancy monitoring, and basic behavioural analysis. The project explored building a lightweight tool for logging motion intervals and visualizing the data clearly.",
      solution:
        "A Python script captures webcam frames via OpenCV VideoCapture, applies background subtraction and contour detection to identify motion, and logs the start and end timestamps of each motion event. The data is processed using Pandas and an interactive HTML time-series graph is generated using Bokeh to visualize the presence duration.",
      architecture: {
        summary:
          "A Python loop captures and processes frames with OpenCV to log motion events, while a separate data processing phase uses Pandas to format the timestamps and Bokeh to render an interactive HTML plot.",
        highlights: [
          "OpenCV VideoCapture for real-time webcam frame acquisition at configurable frame rates",
          "Background subtraction using frame differencing and Gaussian blur to reduce noise and detection artifacts",
          "Frame pre-processing pipeline: grayscale conversion and histogram equalisation for detection robustness",
          "Timestamp logging for the start and end of continuous motion events, exported to a CSV file",
          "Data manipulation and formatting using Pandas DataFrames",
          "Interactive time-series graphing using Bokeh with hover tools to display precise event timings",
          "Detection sensitivity configurable via minimum contour area thresholds",
        ],
      },
      challenges: [
        "Handling sudden lighting changes that could trigger false positive motion events",
        "Tuning the Gaussian blur and contour area thresholds to filter out background noise while reliably detecting subjects",
        "Ensuring the start and end timestamps of motion events are correctly paired and appended to the dataset, especially during rapid entry and exit",
        "Formatting datetime objects correctly so that the Bokeh figure can accurately plot the start and end times on a continuous x-axis",
      ],
      impact: [
        "Built a fully functional motion detection and visualization tool using standard Python data science and computer vision libraries",
        "Demonstrated practical application of classical computer vision for security and monitoring use cases",
        "Created an interactive, exportable HTML graph that allows users to easily analyze motion data post-capture",
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
