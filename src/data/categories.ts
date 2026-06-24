export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  group: string; // group slug
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
];

export const categories: Category[] = [
  { slug: "linux", name: "Linux", description: "Linux commands, admin, shell scripting", icon: "🐧", group: "it" },
  { slug: "aws", name: "AWS Cloud", description: "EC2, S3, IAM, VPC and core AWS services", icon: "☁️", group: "it" },
  { slug: "networking", name: "Networking", description: "TCP/IP, routing, switching, OSI model", icon: "🌐", group: "it" },
  { slug: "windows-server", name: "Windows Server", description: "Windows Server administration", icon: "🪟", group: "it" },
  { slug: "devops", name: "DevOps", description: "CI/CD, automation, IaC", icon: "🔧", group: "it" },
  { slug: "docker", name: "Docker", description: "Containers, images, compose", icon: "🐳", group: "it" },
  { slug: "kubernetes", name: "Kubernetes", description: "Pods, services, deployments", icon: "⎈", group: "it" },
  { slug: "active-directory", name: "Active Directory", description: "AD, GPO, domain services", icon: "🗂️", group: "it" },
  { slug: "interview", name: "Interview Questions", description: "Common IT interview MCQs", icon: "💼", group: "it" },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getGroup = (slug: string) => groups.find((g) => g.slug === slug);
export const categoriesByGroup = (slug: string) =>
  categories.filter((c) => c.group === slug);