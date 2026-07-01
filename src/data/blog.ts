export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "code"; lang?: string; code: string };

export interface BlogFAQ {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string; // ISO date
  readingMinutes: number;
  tags: string[];
  cover: {
    gradient: string; // CSS gradient string
    emoji: string;
  };
  toc?: boolean;
  content: BlogBlock[];
  conclusion?: string;
  faqs?: BlogFAQ[];
  relatedSlugs?: string[];
}

export const BLOG_CATEGORIES = [
  "Artificial Intelligence",
  "AI Tools",
  "Cloud Computing",
  "Machine Learning",
  "Student Guides",
  "Learning Path",
  "Careers",
  "Comparisons",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-artificial-intelligence-beginners-guide",
    title: "What is Artificial Intelligence? A Beginner's Guide",
    description:
      "A friendly, jargon-free introduction to Artificial Intelligence — what it is, how it works, real world examples, and how to start learning it.",
    category: "Artificial Intelligence",
    author: "QuizMaster Editorial",
    date: "2026-06-24",
    readingMinutes: 8,
    tags: ["AI", "Beginners", "Guide", "Machine Learning"],
    cover: { gradient: "linear-gradient(135deg,#6366f1,#22d3ee)", emoji: "🤖" },
    toc: true,
    content: [
      { type: "p", text: "Artificial Intelligence (AI) is no longer science fiction. It powers your search results, unlocks your phone, recommends the next video you watch, and even helps doctors read medical scans. But what exactly is AI, and why is everyone talking about it in 2026?" },
      { type: "h2", text: "What is Artificial Intelligence?" },
      { type: "p", text: "Artificial Intelligence is the branch of computer science that builds systems capable of performing tasks that normally require human intelligence — understanding language, recognising images, making decisions, and learning from experience." },
      { type: "quote", text: "AI is whatever hasn't been done yet.", cite: "Larry Tesler" },
      { type: "h2", text: "How does AI actually work?" },
      { type: "p", text: "Modern AI systems learn from data. Instead of being explicitly programmed with rules, they discover patterns from millions of examples. This approach is called machine learning, and deep learning is a powerful subset that uses neural networks." },
      { type: "h3", text: "The three main types of AI" },
      { type: "ul", items: [
        "Narrow AI — designed for one specific task (e.g. spam detection, face unlock).",
        "General AI — hypothetical human-level intelligence across any task.",
        "Super AI — an intelligence that surpasses humans; still theoretical.",
      ] },
      { type: "h2", text: "Real world examples you use every day" },
      { type: "ul", items: [
        "Voice assistants like Siri, Alexa and Google Assistant",
        "Recommendation engines on YouTube, Netflix and Amazon",
        "Fraud detection in your banking app",
        "Auto-translate features and smart replies in Gmail",
      ] },
      { type: "h2", text: "Where should you start learning AI?" },
      { type: "p", text: "Start with the fundamentals: basic Python, a little linear algebra and statistics, and one hands-on course. Build small projects — a movie recommender, a spam classifier, a chatbot — before diving into large models." },
    ],
    conclusion:
      "AI is a toolbox, not magic. Once you understand the core ideas — data, models, and predictions — the rest is practice. Pick one small project this week and build it end-to-end.",
    faqs: [
      { q: "Do I need advanced math to learn AI?", a: "You need comfort with high-school math and basic statistics to get started. Deeper math becomes useful only when you research new models." },
      { q: "Is AI going to replace programmers?", a: "AI accelerates programmers rather than replacing them. Engineers who use AI tools well will outperform those who don't." },
      { q: "What is the best language to learn AI in?", a: "Python — it has the richest ecosystem of AI libraries such as PyTorch, TensorFlow and scikit-learn." },
    ],
    relatedSlugs: [
      "ai-vs-ml-vs-deep-learning-explained",
      "how-to-start-learning-ai-from-scratch",
      "top-10-ai-tools-productivity-2026",
    ],
  },
  {
    slug: "top-10-ai-tools-productivity-2026",
    title: "Top 10 AI Tools That Can Boost Your Productivity in 2026",
    description:
      "The 10 most useful AI tools of 2026 for writing, coding, design, research and daily productivity — with tips on when to use each.",
    category: "AI Tools",
    author: "QuizMaster Editorial",
    date: "2026-06-25",
    readingMinutes: 7,
    tags: ["AI Tools", "Productivity", "2026", "Workflow"],
    cover: { gradient: "linear-gradient(135deg,#f59e0b,#ef4444)", emoji: "⚡" },
    toc: true,
    content: [
      { type: "p", text: "AI tools have moved from novelty to necessity. Used well, they save hours every day. Here are the ten we reach for most often in 2026." },
      { type: "h2", text: "1. ChatGPT — the everyday thinking partner" },
      { type: "p", text: "Great for drafting, summarising, brainstorming and rewriting. Use custom instructions to shape its tone for your work." },
      { type: "h2", text: "2. Claude — for long-form writing and analysis" },
      { type: "p", text: "Excellent at reading large documents and producing clear structured answers. A favourite for research and policy work." },
      { type: "h2", text: "3. Gemini — deeply integrated into Google Workspace" },
      { type: "p", text: "Best when your work lives in Docs, Sheets and Gmail. Handles multi-modal input very well." },
      { type: "h2", text: "4. GitHub Copilot — autocomplete for developers" },
      { type: "p", text: "Suggests code as you type inside your editor. Works across most popular languages and frameworks." },
      { type: "h2", text: "5. Notion AI — knowledge and notes" },
      { type: "p", text: "Summarises pages, drafts docs and answers questions from your own workspace." },
      { type: "h2", text: "6. Perplexity — an AI search engine with citations" },
      { type: "p", text: "When you want an answer and the sources behind it. Better than a chatbot for research." },
      { type: "h2", text: "7. Midjourney / DALL·E — image generation" },
      { type: "p", text: "Create hero images, thumbnails and mood boards in seconds." },
      { type: "h2", text: "8. Descript — audio and video editing" },
      { type: "p", text: "Edit podcasts and videos by editing text. AI removes filler words and generates transcripts." },
      { type: "h2", text: "9. Grammarly — writing polish" },
      { type: "p", text: "Still the most reliable grammar and tone assistant across every browser and app." },
      { type: "h2", text: "10. Zapier / Make — AI-powered automations" },
      { type: "p", text: "Chain AI into your daily tools: auto-summarise new emails, tag support tickets, draft replies." },
    ],
    conclusion:
      "Pick two or three tools, learn them deeply, and integrate them into your daily workflow. Depth beats collecting subscriptions.",
    faqs: [
      { q: "Which AI tool should I start with?", a: "Start with ChatGPT or Claude — they solve the widest range of tasks with the least setup." },
      { q: "Are free tiers enough?", a: "For most personal use, yes. Paid tiers unlock faster responses, longer context and better models." },
    ],
    relatedSlugs: [
      "best-free-ai-tools-for-students",
      "chatgpt-vs-gemini-vs-claude-comparison",
      "what-is-artificial-intelligence-beginners-guide",
    ],
  },
  {
    slug: "how-ai-is-transforming-cloud-computing",
    title: "How AI is Transforming Cloud Computing",
    description:
      "From smarter autoscaling to AI-native services, learn how artificial intelligence is reshaping AWS, Azure and Google Cloud in 2026.",
    category: "Cloud Computing",
    author: "QuizMaster Editorial",
    date: "2026-06-26",
    readingMinutes: 8,
    tags: ["AI", "Cloud", "AWS", "Azure", "GCP"],
    cover: { gradient: "linear-gradient(135deg,#0ea5e9,#8b5cf6)", emoji: "☁️" },
    toc: true,
    content: [
      { type: "p", text: "Cloud and AI grew up together. The cloud gave AI the compute it needed to scale; AI is now returning the favour by making the cloud itself more intelligent." },
      { type: "h2", text: "AI-native cloud services" },
      { type: "p", text: "Every major provider now ships managed AI: Amazon Bedrock, Azure OpenAI Service, and Google Vertex AI. You can call state-of-the-art models with a single API call — no GPUs to manage." },
      { type: "h2", text: "Smarter operations and cost control" },
      { type: "ul", items: [
        "Predictive autoscaling that warms capacity before traffic arrives",
        "AI-driven anomaly detection in logs and metrics",
        "Automatic right-sizing recommendations that cut idle spend",
        "Chat-based cloud consoles for querying your infrastructure",
      ] },
      { type: "h2", text: "Security and compliance" },
      { type: "p", text: "AI models now scan IAM policies, spot risky permissions, and flag unusual login patterns in real time — reducing mean time to detect from days to minutes." },
      { type: "h2", text: "What this means for engineers" },
      { type: "p", text: "Cloud engineers are becoming AI-cloud engineers: comfortable with prompt design, vector databases, model deployment and traditional infrastructure. Learning both stacks is the fastest way to stay valuable." },
      { type: "code", lang: "bash", code: "# Deploy a small LLM endpoint on AWS Bedrock\naws bedrock-runtime invoke-model \\\n  --model-id anthropic.claude-3-sonnet-20240229-v1:0 \\\n  --body '{\"prompt\":\"Hello\"}' out.json" },
    ],
    conclusion:
      "The cloud isn't just where AI runs — it's being rebuilt around AI. The engineers who understand both will lead the next decade of infrastructure.",
    faqs: [
      { q: "Do I need to know AI to work with the cloud?", a: "Not yet, but fluency with managed AI services is quickly becoming a hiring signal for cloud roles." },
      { q: "Which cloud is best for AI workloads?", a: "AWS has the widest model catalogue, Azure has the deepest OpenAI integration, and GCP leads in custom silicon (TPUs)." },
    ],
    relatedSlugs: [
      "future-of-ai-in-it-careers",
      "what-is-artificial-intelligence-beginners-guide",
    ],
  },
  {
    slug: "ai-vs-ml-vs-deep-learning-explained",
    title: "AI vs Machine Learning vs Deep Learning — Explained Simply",
    description:
      "AI, ML and Deep Learning are often used interchangeably. Here's a simple, visual explanation of how they relate, with real examples.",
    category: "Machine Learning",
    author: "QuizMaster Editorial",
    date: "2026-06-27",
    readingMinutes: 6,
    tags: ["AI", "ML", "Deep Learning", "Concepts"],
    cover: { gradient: "linear-gradient(135deg,#10b981,#06b6d4)", emoji: "🧠" },
    toc: true,
    content: [
      { type: "p", text: "Think of AI, ML and Deep Learning as three nested circles. AI is the biggest circle. Machine Learning sits inside it. Deep Learning sits inside Machine Learning." },
      { type: "h2", text: "Artificial Intelligence (the outer circle)" },
      { type: "p", text: "Any technique that lets a machine mimic human intelligence — rule-based expert systems, search algorithms, game bots, and machine learning models all count." },
      { type: "h2", text: "Machine Learning (the middle circle)" },
      { type: "p", text: "Systems that learn patterns from data instead of following hand-written rules. Common examples: spam filters, credit scoring, and recommendation engines." },
      { type: "h2", text: "Deep Learning (the inner circle)" },
      { type: "p", text: "Machine learning with multi-layered neural networks. It powers image recognition, speech-to-text, and large language models like ChatGPT." },
      { type: "h3", text: "A quick side-by-side" },
      { type: "ul", items: [
        "AI — the goal (make machines smart)",
        "ML — an approach (learn from data)",
        "Deep Learning — a technique (deep neural networks)",
      ] },
    ],
    conclusion: "Every deep learning system is machine learning. Every machine learning system is AI. But not every AI system uses machine learning.",
    faqs: [
      { q: "Is ChatGPT AI or ML?", a: "Both. It is an AI product built on deep learning, which is a specialisation of machine learning." },
      { q: "Do I need deep learning for every ML problem?", a: "No. Classical ML often beats deep learning on small tabular datasets and is much cheaper to run." },
    ],
    relatedSlugs: [
      "what-is-artificial-intelligence-beginners-guide",
      "how-to-start-learning-ai-from-scratch",
    ],
  },
  {
    slug: "best-free-ai-tools-for-students",
    title: "Best Free AI Tools Every Student Should Know",
    description:
      "A curated list of the best free AI tools for students in 2026 — for research, writing, coding, note-taking and exam prep.",
    category: "Student Guides",
    author: "QuizMaster Editorial",
    date: "2026-06-28",
    readingMinutes: 6,
    tags: ["AI", "Students", "Free Tools", "Study"],
    cover: { gradient: "linear-gradient(135deg,#ec4899,#f97316)", emoji: "🎓" },
    toc: true,
    content: [
      { type: "p", text: "You don't need a paid subscription to get real value from AI. These free tools can help you study smarter, write faster and understand tough concepts." },
      { type: "h2", text: "Research and reading" },
      { type: "ul", items: [
        "Perplexity — cited answers to research questions",
        "Elicit — finds and summarises research papers",
        "Consensus — surfaces evidence from peer-reviewed studies",
      ] },
      { type: "h2", text: "Writing and editing" },
      { type: "ul", items: [
        "ChatGPT free tier — brainstorming, outlines, rewriting",
        "Grammarly free — grammar and clarity fixes",
        "QuillBot — paraphrasing and summarising",
      ] },
      { type: "h2", text: "Coding and math" },
      { type: "ul", items: [
        "GitHub Copilot for Students — free with GitHub education pack",
        "Wolfram Alpha — step-by-step math solutions",
        "Phind — code-focused AI search",
      ] },
      { type: "h2", text: "Note-taking and revision" },
      { type: "ul", items: [
        "NotebookLM — chat with your own PDFs and notes",
        "Otter.ai — transcribe lectures in real time",
        "Anki + AI generators — auto-build flashcards from notes",
      ] },
    ],
    conclusion: "Pick one tool per workflow (research, writing, coding, revision) and use it consistently for a semester. That's how AI actually improves grades.",
    faqs: [
      { q: "Is using AI for homework cheating?", a: "Using AI to understand a concept is fine; submitting AI-written work as your own is not. Always follow your institution's policy." },
      { q: "Are free AI tools safe with private notes?", a: "Read the privacy policy. Prefer tools that offer 'do not train on my data' toggles for anything sensitive." },
    ],
    relatedSlugs: [
      "top-10-ai-tools-productivity-2026",
      "how-to-start-learning-ai-from-scratch",
    ],
  },
  {
    slug: "how-to-start-learning-ai-from-scratch",
    title: "How to Start Learning AI from Scratch",
    description:
      "A step-by-step 90-day roadmap to learn Artificial Intelligence from zero — with free courses, projects and milestones.",
    category: "Learning Path",
    author: "QuizMaster Editorial",
    date: "2026-06-29",
    readingMinutes: 9,
    tags: ["AI", "Roadmap", "Learning", "Python"],
    cover: { gradient: "linear-gradient(135deg,#8b5cf6,#ec4899)", emoji: "🚀" },
    toc: true,
    content: [
      { type: "p", text: "You don't need a PhD to start learning AI. You need a plan and consistency. Here is a realistic 90-day roadmap that has worked for thousands of self-taught engineers." },
      { type: "h2", text: "Days 1–30: Foundations" },
      { type: "ul", items: [
        "Python basics — syntax, functions, files, virtual environments",
        "NumPy and pandas — arrays, dataframes, cleaning data",
        "Statistics essentials — mean, variance, distributions, probability",
        "Linear algebra intuitions — vectors, matrices, dot products",
      ] },
      { type: "h2", text: "Days 31–60: Machine Learning" },
      { type: "ul", items: [
        "Andrew Ng's Machine Learning Specialization (Coursera)",
        "scikit-learn — train your first regression and classification models",
        "Evaluation — train/test split, cross-validation, metrics",
        "Build project #1: predict house prices on a public dataset",
      ] },
      { type: "h2", text: "Days 61–90: Deep Learning and LLMs" },
      { type: "ul", items: [
        "PyTorch basics — tensors, autograd, training loop",
        "Convolutional and transformer architectures at a high level",
        "Hugging Face — fine-tune a small model on your own dataset",
        "Build project #2: an AI app you can demo (chatbot, summariser, image tagger)",
      ] },
      { type: "h2", text: "Habits that separate learners from finishers" },
      { type: "ol", items: [
        "Ship a small project every 2 weeks — done beats perfect.",
        "Write about what you learn — a public blog cements understanding.",
        "Join one community (Discord, Kaggle, local meetup) and stay active.",
      ] },
    ],
    conclusion: "In 90 focused days you can go from zero to a working AI portfolio. The trick is not the resources — it's finishing what you start.",
    faqs: [
      { q: "How many hours per day do I need?", a: "One to two focused hours daily is enough to complete this roadmap in three months." },
      { q: "Do I need a powerful computer?", a: "No. Google Colab and Kaggle Notebooks give you free GPUs in the browser." },
    ],
    relatedSlugs: [
      "what-is-artificial-intelligence-beginners-guide",
      "future-of-ai-in-it-careers",
      "ai-vs-ml-vs-deep-learning-explained",
    ],
  },
  {
    slug: "future-of-ai-in-it-careers",
    title: "Future of Artificial Intelligence in IT Careers",
    description:
      "How AI is reshaping IT jobs — the roles that will grow, the skills that matter, and how to future-proof your career in 2026 and beyond.",
    category: "Careers",
    author: "QuizMaster Editorial",
    date: "2026-06-30",
    readingMinutes: 7,
    tags: ["AI", "Careers", "IT", "Future"],
    cover: { gradient: "linear-gradient(135deg,#1e40af,#0ea5e9)", emoji: "💼" },
    toc: true,
    content: [
      { type: "p", text: "AI won't erase IT jobs, but it will rewrite most of them. The good news: engineers who learn to collaborate with AI will be more valuable than ever." },
      { type: "h2", text: "Roles that will grow" },
      { type: "ul", items: [
        "AI / ML engineers building production models",
        "Prompt and LLM application engineers",
        "Data engineers powering AI pipelines",
        "AI security and governance specialists",
        "MLOps and platform engineers",
      ] },
      { type: "h2", text: "Skills that will matter" },
      { type: "ul", items: [
        "Working knowledge of at least one AI framework (PyTorch or TensorFlow)",
        "Cloud fundamentals (AWS, Azure or GCP)",
        "Data literacy — SQL, pandas, basic statistics",
        "System design for AI — vector stores, retrieval, evaluation",
        "Communication — explaining AI trade-offs to non-technical stakeholders",
      ] },
      { type: "h2", text: "How to future-proof your career" },
      { type: "ol", items: [
        "Automate a repetitive part of your current job with AI this quarter.",
        "Publish one AI project or write-up publicly this year.",
        "Learn one adjacent skill (data, cloud or security) every 6 months.",
      ] },
    ],
    conclusion: "AI rewards curiosity. Engineers who keep shipping small AI-powered improvements will always find work.",
    faqs: [
      { q: "Will AI replace software engineers?", a: "No. It will raise the bar for what one engineer can build — and increase demand for great ones." },
      { q: "Is it too late to switch into AI?", a: "It's the earliest days of AI-native applications. Switching now still puts you ahead of most of the industry." },
    ],
    relatedSlugs: [
      "how-to-start-learning-ai-from-scratch",
      "how-ai-is-transforming-cloud-computing",
    ],
  },
  {
    slug: "chatgpt-vs-gemini-vs-claude-comparison",
    title: "ChatGPT vs Gemini vs Claude — Complete Comparison",
    description:
      "A hands-on 2026 comparison of ChatGPT, Google Gemini and Anthropic Claude — strengths, weaknesses, pricing and which to pick for your workflow.",
    category: "Comparisons",
    author: "QuizMaster Editorial",
    date: "2026-07-01",
    readingMinutes: 8,
    tags: ["ChatGPT", "Gemini", "Claude", "Comparison"],
    cover: { gradient: "linear-gradient(135deg,#0f766e,#a855f7)", emoji: "⚔️" },
    toc: true,
    content: [
      { type: "p", text: "Three assistants dominate the market in 2026: ChatGPT (OpenAI), Gemini (Google) and Claude (Anthropic). All three are excellent, but they shine in different situations." },
      { type: "h2", text: "ChatGPT — the all-rounder" },
      { type: "p", text: "The most feature-complete assistant. Best-in-class ecosystem: custom GPTs, code interpreter, voice mode, image generation, and a huge plugin marketplace." },
      { type: "h2", text: "Gemini — best if you live in Google" },
      { type: "p", text: "Seamless inside Gmail, Docs, Sheets and Drive. Handles large multi-modal inputs (long PDFs, videos) very well and connects natively to your Google account." },
      { type: "h2", text: "Claude — best for long-form and reasoning" },
      { type: "p", text: "Reads huge documents at once and produces exceptionally clear structured writing. Popular with researchers, lawyers and policy teams." },
      { type: "h2", text: "Which one should you pick?" },
      { type: "ul", items: [
        "Building products or want the widest tooling — ChatGPT",
        "Your work lives in Google Workspace — Gemini",
        "You write long documents or need careful reasoning — Claude",
        "Serious users often subscribe to two and switch based on task",
      ] },
      { type: "h3", text: "Pricing snapshot (2026)" },
      { type: "p", text: "All three offer solid free tiers and roughly $20/month paid plans. API pricing per million tokens varies month to month — always check the current rate before committing at scale." },
    ],
    conclusion: "There is no single winner — each model leads in a different lane. Try all three on a real task from your week; the best one for you is the one you actually keep using.",
    faqs: [
      { q: "Can I use more than one AI assistant?", a: "Yes, and many power users do. Free tiers alone cover most personal use." },
      { q: "Which one is the smartest?", a: "Rankings change every few months. Focus on which one fits your workflow — that matters more than benchmark scores." },
    ],
    relatedSlugs: [
      "top-10-ai-tools-productivity-2026",
      "best-free-ai-tools-for-students",
    ],
  },
];

export const getBlogPost = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);

export const getRelatedPosts = (post: BlogPost, limit = 3) => {
  const bySlug = new Map(blogPosts.map((p) => [p.slug, p]));
  const related = (post.relatedSlugs ?? [])
    .map((s) => bySlug.get(s))
    .filter((p): p is BlogPost => Boolean(p) && p!.slug !== post.slug);
  if (related.length >= limit) return related.slice(0, limit);
  const extras = blogPosts.filter(
    (p) => p.slug !== post.slug && !related.includes(p),
  );
  return [...related, ...extras].slice(0, limit);
};

export const slugifyHeading = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");