export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
  featured: boolean
  category: string
  features?: string[]
  challenges?: string
}

export const projects: Project[] = [
  {
    slug: "revenue-intel",
    name: "Revenue Intel",
    tagline: "Lifecycle Analytics",
    description: "AI-powered revenue intelligence platform for SaaS businesses with multi-model predictive analytics, real-time Claude AI insights across every dashboard, Monte Carlo scenario simulation, and customer-level natural language Q&A.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "DuckDB", "XGBoost", "Claude Sonnet", "SHAP", "scikit-learn", "SciPy", "Recharts"],
    liveUrl: "https://revenue-intel.vercel.app",
    githubUrl: "https://github.com/NateDevIO/revenue-intel-saas",
    image: "/projects/revenue-intel-ss.png",
    featured: true,
    category: "Data Science",
    features: [
      "Real-time Claude Sonnet insights on 5 dashboards — executive briefings, risk analysis, funnel coaching, scenario guidance, and revenue narratives with natural language customer Q&A",
      "Multi-model predictive stack: XGBoost churn prediction with SHAP explainability, Logistic Regression for expansion propensity, and Random Forest deal scoring",
      "Monte Carlo simulation engine with triangular distributions and confidence intervals for what-if scenario planning across churn, conversion, expansion, and pricing levers",
      "Weighted multi-factor health scoring (Usage 35%, Engagement 25%, Sentiment 20%, Financial 20%) with component-level drill-down and intervention triggers",
      "Full-stack architecture with FastAPI serving ML models, DuckDB for high-performance OLAP analytics, and SaaS industry benchmarking against median NRR, LTV:CAC, and CAC payback"
    ],
    challenges: "The project addressed complex challenges including orchestrating real-time Claude AI insights across five analytical dashboards with context-aware prompts tailored to each page's data, building a multi-model ML pipeline spanning XGBoost churn prediction, Logistic Regression expansion scoring, and Random Forest deal probability, implementing a Monte Carlo simulation engine with 1000+ iterations and triangular distributions for robust revenue forecasting with confidence intervals, designing a weighted health scoring system that synthesizes usage telemetry, engagement signals, NPS sentiment, and financial indicators into actionable risk tiers, and building a performant OLAP analytics pipeline with DuckDB for real-time aggregation across large SaaS datasets."
  },
  {
    slug: "readmit-risk",
    name: "ReadmitRisk",
    tagline: "Hospital Readmission Prevention Platform",
    description: "A full-stack care management platform that identifies high-risk patients and prioritizes post-discharge interventions to reduce preventable hospital readmissions.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Python", "scikit-learn", "Pandas", "Google BigQuery", "Recharts"],
    liveUrl: "https://readmit-risk.vercel.app",
    githubUrl: "https://github.com/NateDevIO/readmit-risk",
    image: "/projects/readmit-risk-ss.png",
    featured: true,
    category: "Data Science",
    features: [
      "Multi-source ML pipeline processing 280K+ patient records from MIMIC-IV (ICU), UCI Diabetes, and CMS HRRP datasets",
      "Gradient Boosting classifier with SMOTE oversampling to handle severe class imbalance (8.8% → 50% positive class)",
      "61-feature clinical model with demographic normalization and comprehensive feature importance analysis",
      "Interactive care management dashboard with risk stratification tiers (60%, 70%, 80% thresholds) and cost estimation",
      "Real-time data visualizations using Recharts with ROC-AUC curves, precision-recall metrics, and intervention tracking"
    ],
    challenges: "The project tackled significant ML challenges including handling severe class imbalance in readmission data using SMOTE oversampling, extracting and processing 211K ICU admissions from Google BigQuery with PhysioNet credentials, engineering 61 clinical features from raw MIMIC-IV data while maintaining HIPAA-compliant practices, implementing configurable probability thresholds for different risk tolerance levels, integrating multiple heterogeneous data sources (MIMIC-IV, UCI, CMS) with different schemas and feature sets, and building an intuitive care management interface that translates complex ML outputs into actionable clinical insights with cost-benefit analysis."
  },
  {
    slug: "intel-deck",
    name: "Intel Deck",
    tagline: "AI Battlecard Generator",
    description: "AI-powered competitive intelligence tool that transforms competitor websites into structured battlecards for sales teams.",
    tech: ["React 19", "Vite", "Tailwind CSS", "Claude API", "Jina AI", "Vercel", "Lucide React"],
    liveUrl: "https://intel-deck.vercel.app",
    githubUrl: "https://github.com/NateDevIO/intel-deck",
    image: "/projects/intel-deck-ss.png",
    featured: true,
    category: "AI/ML",
    features: [
      "Dual-source URL fetching with intelligent fallback between Jina AI Reader and Browserless.io for comprehensive data extraction",
      "Multi-dimensional pricing intelligence supporting complex B2B models with seat types and billing periods",
      "AI-powered SWOT analysis and sales talking points generated via Claude API for competitive positioning",
      "Trend detection and change monitoring that compares re-analyses to identify pricing changes and feature updates",
      "Multi-format export system (Markdown, Slack, JSON, PDF) with shareable links and batch URL analysis"
    ],
    challenges: "The project tackled several complex technical challenges including securing API keys through Vercel serverless proxy functions, implementing robust JSON parsing with regex fallback for AI responses, converting raw HTML to clean analyzable text while preserving structure, managing sequential batch processing with individual error handling per URL, and creating a flexible pricing schema that handles varying B2B pricing models across different competitors."
  },
  {
    slug: "doodledream",
    name: "DoodleDream",
    tagline: "Color your imagination",
    description: "An interactive AI-powered coloring book app that lets users color pre-made templates or generate custom coloring pages from text prompts using DALL-E 3.",
    tech: ["React 19", "TypeScript", "Vite", "Node.js", "Express", "OpenAI API", "Firebase", "HTML5 Canvas"],
    liveUrl: "https://doodle-dreaming.web.app",
    githubUrl: "https://github.com/NateDevIO/color-book",
    image: "/projects/doodledream-ss.png",
    featured: false,
    category: "AI/ML",
    features: [
      "Hybrid asset strategy combining 10 instant-loading preset templates with unlimited DALL-E 3 AI generation",
      "Advanced HTML5 Canvas drawing with high-DPI display support and line art preservation layer",
      "Production-grade flood fill algorithm using stack-based approach to prevent stack overflow",
      "Comprehensive responsive design with adaptive UI for desktop, tablet, and mobile with landscape optimization",
      "Secure backend with rate limiting, CORS protection, input validation, and environment-based configuration"
    ],
    challenges: "The project solved complex technical challenges including high-DPI display rendering with Device Pixel Ratio tracking and coordinate mapping, image processing to convert AI-generated images into proper line-art coloring pages with white pixel thresholding, unified touch and mouse coordinate mapping across different event systems, drawing tool interaction with line preservation requiring strategic overlay compositing, memory-efficient undo system with sliding window history, cross-origin image loading with CORS headers, and prompt engineering for DALL-E 3 to generate proper black-and-white line art instead of colored images."
  },
  {
    slug: "cinematch",
    name: "CineMatch",
    tagline: "Your AI-Powered Movie Recommendation Engine",
    description: "A movie recommendation system using content-based filtering and machine learning to suggest films based on user preferences.",
    tech: ["HTML5", "CSS3", "JavaScript", "TF-IDF", "Cosine Similarity", "TMDB API", "GitHub Actions", "Vercel"],
    liveUrl: "https://cinematch-js.vercel.app",
    githubUrl: "https://github.com/NateDevIO/cinematch",
    image: "/projects/cinematch-ss.png",
    featured: false,
    category: "Data Science",
    features: [
      "Dual-stack implementation with both Python (Streamlit) and vanilla JavaScript versions of the recommendation engine",
      "Sophisticated weighted content-based filtering using TF-IDF (40%), genre overlap (30%), director match (15%), and cast overlap (15%)",
      "Production-grade database with 4,500+ movies aggregated from seven TMDB endpoints with automated weekly updates via GitHub Actions",
      "Explainable AI with detailed recommendations showing why each movie was suggested with matching factors",
      "Persistent watchlist with browser localStorage for saving favorite recommendations across sessions"
    ],
    challenges: "Major technical challenges included implementing TF-IDF vectorization in vanilla JavaScript without ML libraries using custom tokenization and IDF calculation, optimizing large database loading performance for 3MB JSON with asynchronous initialization and lazy rendering, cross-platform TMDB API integration with rate limiting and multi-endpoint strategy for comprehensive coverage, generating human-readable recommendation explanations with proper attribution to selected movies, creating a responsive type-ahead search interface for 4,500+ movies with efficient filtering and result limiting, and automating data freshness with GitHub Actions including smart change detection to avoid spam commits."
  },
  {
    slug: "macrometer",
    name: "MacroMeter",
    tagline: "Track your nutrition goals with natural language meal entry",
    description: "A nutrition tracking web application with natural language meal entry, powered by Firebase.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase", "Firebase Functions", "USDA FoodData Central API"],
    liveUrl: "https://macrosfood.web.app",
    githubUrl: "https://github.com/NateDevIO/MacroMeter",
    image: "/projects/macrometer-ss.png",
    featured: false,
    category: "Web Development",
    features: [
      "Natural language meal parsing with smart quantity recognition using regex pattern matching for complex meal inputs",
      "Real-time Firebase Cloud Functions backend serving as serverless proxy to USDA FoodData Central API with 500k+ foods",
      "Offline-first architecture with localStorage persistence for daily meals, goals, favorites, and 30-day rolling history",
      "Customizable daily goals with real-time progress dashboard featuring color-coded visual feedback",
      "Complete meal management system with favorites, history tracking, and CSV export for data portability"
    ],
    challenges: "The project tackled complex challenges including natural language parsing ambiguity with sequential USDA database searches and partial success handling, API rate limiting mitigation through sequential processing with 300ms delays and exponential backoff retry logic, nutrition data normalization across different USDA database versions using fallback field matching, cross-domain API access via Firebase Cloud Functions CORS proxy, localStorage data synchronization across multiple buckets with date-based separation for daily resets, and portion quantity calculations with proper handling of fractional amounts and natural language quantities."
  },
  {
    slug: "stratus-update",
    name: "Stratus Update",
    tagline: "Weather forecasting made elegant",
    description: "A modern weather dashboard built with vanilla JavaScript that features city search, geolocation, 3-day forecasts, animated weather icons, and dark/light themes, with a secure Firebase backend proxy for API calls.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase", "Firebase Functions", "OpenWeatherMap API", "CSS Grid"],
    liveUrl: "https://stratus-update.web.app",
    githubUrl: "https://github.com/NateDevIO/stratus-update",
    image: "/projects/stratus-update-ss.png",
    featured: false,
    category: "Web Development",
    features: [
      "Dual deployment architecture with proxy mode for production security and direct mode for local development",
      "Context-aware dynamic backgrounds with 8+ weather-based UI themes featuring animated effects (rain, snow, lightning)",
      "Intelligent autocomplete search with 300ms debouncing, keyboard navigation, and query highlighting",
      "Persistent recent searches with localStorage and intelligent deduplication based on coordinates",
      "Comprehensive error handling with user-friendly messaging and context-aware retry options"
    ],
    challenges: "The project addressed several technical challenges including API key security through Firebase Cloud Functions reverse proxy with CORS handling, dynamic background rendering across both dark and light themes using CSS custom properties and class switching, real-time temperature unit conversion between Fahrenheit and Celsius using centralized formatting, timezone-aware date formatting with client-side offset calculations, efficient 3-day forecast extraction from 40 data points using Map-based deduplication, modular architecture with ES modules requiring no build tools, and loading state management with coordinated visual feedback across parallel API calls."
  },
  {
    slug: "doodletrace",
    name: "DoodleTrace",
    tagline: "Trace Your Way to Amazing!",
    description: "A fun, interactive tracing app designed for kids to practice writing letters and numbers. Trace over dashed guides with your finger or mouse to build handwriting skills.",
    tech: ["React 19", "TypeScript", "Vite", "Lucide React", "Firebase", "ESLint"],
    liveUrl: "https://doodle-trace.web.app",
    githubUrl: "https://github.com/NateDevIO/doodle-trace",
    image: "/projects/doodletrace-ss.png",
    featured: false,
    category: "Web Development",
    features: [
      "High-fidelity HTML5 Canvas drawing with Device Pixel Ratio handling for crisp strokes on all screens",
      "Comprehensive mobile-first responsive design with three distinct layouts for portrait, landscape, and desktop",
      "Intuitive looping navigation across three practice modes (ABC, abc, 123) with automatic mode switching",
      "Child-friendly visual design with Comic Neue font, vibrant accessible colors, and SVG dashed letter guides",
      "Robust error handling with React ErrorBoundary for graceful failure recovery"
    ],
    challenges: "The project addressed several technical challenges including canvas coordinate mapping across different device pixel ratios with dual-coordinate systems, preserving canvas content during responsive resizing using data URL serialization, unified touch and mouse event handling with polymorphic detection, landscape mode layout adaptation for limited vertical space, maintaining 1:1 aspect ratio for canvas while remaining responsive, implementing imperative canvas operations (clear, save) within React's declarative model using useImperativeHandle, and preventing unwanted scroll behavior on touch devices with touch-action CSS and preventDefault."
  },
  {
    slug: "catculator",
    name: "Catculator",
    tagline: "The cutest scientific calculator on the web.",
    description: "A whimsical cat-themed scientific calculator web app featuring an adorable feline interface with paw-pad buttons. Available as a static web app (HTML/JS) and Python Streamlit app.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Streamlit"],
    liveUrl: "https://the-catculator.vercel.app",
    githubUrl: "https://github.com/NateDevIO/calculator-py",
    image: "/projects/catculator-ss.png",
    featured: false,
    category: "Web Development",
    features: [
      "Whimsical cat-themed UI with functional buttons overlaid directly on cat illustration using precise CSS positioning",
      "Dynamic cat emoji reactions based on calculation results (error, large numbers, negative, meme numbers)",
      "Responsive design using CSS Container Queries for proportional scaling across all devices",
      "Comprehensive scientific calculator with trigonometric, logarithmic, power operations, and mathematical constants",
      "Polished animations including floating decorations, pulsing display, and custom paw-shaped cursor"
    ],
    challenges: "Key technical challenges included maintaining perfect UI element alignment over a background image while scaling responsively using percentage-based positioning and aspect-ratio locking, handling JavaScript's floating-point precision issues with rounding functions, managing calculator state across consecutive operations with proper operator chaining, creating realistic 3D paw-pad buttons with layered CSS gradients and shadows, and implementing custom SVG cursors with proper browser compatibility."
  }
]

export const featuredProjects = projects.filter(p => p.featured)
export const allCategories = [...new Set(projects.map(p => p.category))]
