export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  { slug: "linux", name: "Linux", description: "Linux commands, admin, shell scripting", icon: "🐧" },
  { slug: "aws", name: "AWS Cloud", description: "EC2, S3, IAM, VPC and core AWS services", icon: "☁️" },
  { slug: "networking", name: "Networking", description: "TCP/IP, routing, switching, OSI model", icon: "🌐" },
  { slug: "windows-server", name: "Windows Server", description: "Windows Server administration", icon: "🪟" },
  { slug: "devops", name: "DevOps", description: "CI/CD, automation, IaC", icon: "🔧" },
  { slug: "docker", name: "Docker", description: "Containers, images, compose", icon: "🐳" },
  { slug: "kubernetes", name: "Kubernetes", description: "Pods, services, deployments", icon: "⎈" },
  { slug: "active-directory", name: "Active Directory", description: "AD, GPO, domain services", icon: "🗂️" },
  { slug: "interview", name: "Interview Questions", description: "Common IT interview MCQs", icon: "💼" },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);