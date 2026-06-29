export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  group: string;
}

export interface Group {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const groups: Group[] = [
  {
    slug: "it",
    name: "Information Technology",
    description: "Linux, AWS, DevOps, Networking, Containers and more.",
    icon: "💻",
  },
  {
    slug: "government",
    name: "Government Category",
    description: "Government exams, current affairs, GK and job preparation.",
    icon: "🏛️",
  },
  {
    slug: "vlog",
    name: "Vlog Category",
    description: "Travel, lifestyle, food, technology and daily vlogs.",
    icon: "🎥",
  },
  {
    slug: "computer-science",
    name: "Computer Science & Programming",
    description: "Programming languages, DSA, DBMS, OS and core CS subjects.",
    icon: "🖥️",
  },
  {
    slug: "interview",
    name: "Interview",
    description: "Interview questions and placement preparation.",
    icon: "💼",
  },
  {
    slug: "engineering-gate",
    name: "Engineering & GATE",
    description: "Engineering subjects and GATE exam preparation.",
    icon: "🎓",
  },
];

export const categories: Category[] = [
  // ================= IT =================
  {
    slug: "linux",
    name: "Linux",
    description: "Linux commands, admin and shell scripting",
    icon: "🐧",
    group: "it",
  },
  {
    slug: "aws",
    name: "AWS Cloud",
    description: "EC2, S3, IAM and VPC",
    icon: "☁️",
    group: "it",
  },
  {
    slug: "networking",
    name: "Networking",
    description: "TCP/IP, DNS, DHCP, Routing and Switching",
    icon: "🌐",
    group: "it",
  },
  {
    slug: "windows-server",
    name: "Windows Server",
    description: "Windows Server administration",
    icon: "🪟",
    group: "it",
  },
  {
    slug: "devops",
    name: "DevOps",
    description: "CI/CD and automation",
    icon: "🔧",
    group: "it",
  },
  {
    slug: "docker",
    name: "Docker",
    description: "Containers and images",
    icon: "🐳",
    group: "it",
  },
  {
    slug: "kubernetes",
    name: "Kubernetes",
    description: "Pods and deployments",
    icon: "⎈",
    group: "it",
  },
  {
    slug: "active-directory",
    name: "Active Directory",
    description: "AD and Group Policy",
    icon: "🗂️",
    group: "it",
  },

  // ================= Government =================
  {
    slug: "current-affairs",
    name: "Current Affairs",
    description: "Daily and monthly current affairs",
    icon: "📰",
    group: "government",
  },
  {
    slug: "general-knowledge",
    name: "General Knowledge",
    description: "History, Geography and Science",
    icon: "📚",
    group: "government",
  },
  {
    slug: "reasoning",
    name: "Reasoning",
    description: "Logical reasoning questions",
    icon: "🧠",
    group: "government",
  },
  {
    slug: "quantitative-aptitude",
    name: "Quantitative Aptitude",
    description: "Math and aptitude",
    icon: "➗",
    group: "government",
  },
  {
    slug: "english",
    name: "English",
    description: "Grammar and comprehension",
    icon: "✍️",
    group: "government",
  },

  // ================= Vlog =================
  {
    slug: "travel-vlog",
    name: "Travel Vlog",
    description: "Travel and adventure videos",
    icon: "✈️",
    group: "vlog",
  },
  {
    slug: "daily-vlog",
    name: "Daily Vlog",
    description: "Daily life and routine vlogs",
    icon: "📹",
    group: "vlog",
  },
  {
    slug: "food-vlog",
    name: "Food Vlog",
    description: "Food and cooking videos",
    icon: "🍔",
    group: "vlog",
  },
  {
    slug: "tech-vlog",
    name: "Tech Vlog",
    description: "Technology and gadgets",
    icon: "💻",
    group: "vlog",
  },

  // ================= Computer Science =================
  {
    slug: "c-programming",
    name: "C Programming",
    description: "C language concepts and MCQs",
    icon: "🔤",
    group: "computer-science",
  },
  {
    slug: "cpp",
    name: "C++",
    description: "Object oriented programming in C++",
    icon: "➕",
    group: "computer-science",
  },
  {
    slug: "java",
    name: "Java",
    description: "Java programming concepts",
    icon: "☕",
    group: "computer-science",
  },
  {
    slug: "python",
    name: "Python",
    description: "Python programming and scripting",
    icon: "🐍",
    group: "computer-science",
  },
  {
    slug: "data-structures",
    name: "Data Structures",
    description: "Arrays, stacks, queues and trees",
    icon: "📊",
    group: "computer-science",
  },
  {
    slug: "dbms",
    name: "DBMS",
    description: "Database Management System",
    icon: "🗄️",
    group: "computer-science",
  },
  {
    slug: "operating-system",
    name: "Operating System",
    description: "OS concepts and scheduling",
    icon: "💾",
    group: "computer-science",
  },
  {
    slug: "computer-networks",
    name: "Computer Networks",
    description: "OSI Model, TCP/IP and Network Fundamentals",
    icon: "🔗",
    group: "computer-science",
  },

  // ================= Interview =================
  {
    slug: "interview-desktop-support",
    name: "Desktop Support Interview",
    description: "Desktop support engineer interview Q&A",
    icon: "🖥️",
    group: "interview",
  },
  {
    slug: "interview-active-directory",
    name: "Active Directory Interview",
    description: "AD, GPO and domain interview Q&A",
    icon: "🗂️",
    group: "interview",
  },
  {
    slug: "interview-office365",
    name: "Office 365 Interview",
    description: "M365, Exchange Online and Teams Q&A",
    icon: "📧",
    group: "interview",
  },
  {
    slug: "interview-networking",
    name: "Networking Interview",
    description: "Networking troubleshooting interview Q&A",
    icon: "🌐",
    group: "interview",
  },
  {
    slug: "interview-windows-server",
    name: "Windows Server Interview",
    description: "Windows Server admin interview Q&A",
    icon: "🪟",
    group: "interview",
  },
  {
    slug: "interview-linux",
    name: "Linux Interview",
    description: "Linux admin interview Q&A",
    icon: "🐧",
    group: "interview",
  },
  {
    slug: "interview-cloud",
    name: "Cloud Interview",
    description: "AWS / Azure / GCP interview Q&A",
    icon: "☁️",
    group: "interview",
  },

  // ================= Engineering & GATE =================
  {
    slug: "gate-computer-networks",
    name: "GATE Computer Networks",
    description: "GATE level Computer Networks MCQs",
    icon: "🔗",
    group: "engineering-gate",
  },
  {
    slug: "gate-operating-system",
    name: "GATE Operating Systems",
    description: "OS scheduling, memory and concurrency",
    icon: "💾",
    group: "engineering-gate",
  },
  {
    slug: "gate-dbms",
    name: "GATE DBMS",
    description: "Relational model, SQL and normalization",
    icon: "🗄️",
    group: "engineering-gate",
  },
  {
    slug: "gate-data-structures",
    name: "GATE Data Structures",
    description: "Arrays, trees, graphs and complexity",
    icon: "📊",
    group: "engineering-gate",
  },
  {
    slug: "gate-oops",
    name: "GATE OOPs",
    description: "Object oriented programming concepts",
    icon: "🧩",
    group: "engineering-gate",
  },
  {
    slug: "gate-software-engineering",
    name: "GATE Software Engineering",
    description: "SDLC, models and testing",
    icon: "🛠️",
    group: "engineering-gate",
  },
  {
    slug: "gate-aptitude",
    name: "GATE Aptitude",
    description: "Quantitative and logical aptitude",
    icon: "➗",
    group: "engineering-gate",
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getGroup = (slug: string) =>
  groups.find((g) => g.slug === slug);

export const categoriesByGroup = (slug: string) =>
  categories.filter((c) => c.group === slug);