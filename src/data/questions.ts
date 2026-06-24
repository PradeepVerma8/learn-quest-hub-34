export interface Question {
  id: string;
  category: string; // slug
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
}

const linux: Question[] = [
  { id: "lx-1", category: "linux", question: "Which command displays the current working directory?", options: ["pwd", "cwd", "dir", "whereami"], correctIndex: 0, explanation: "`pwd` (print working directory) prints the absolute path of the current directory." },
  { id: "lx-2", category: "linux", question: "Which command is used to change file permissions?", options: ["chown", "chmod", "chperm", "perm"], correctIndex: 1, explanation: "`chmod` changes the mode (permissions) of a file or directory." },
  { id: "lx-3", category: "linux", question: "What does the command `ls -a` do?", options: ["Lists files alphabetically", "Lists all files including hidden", "Lists files with attributes", "Lists archived files"], correctIndex: 1, explanation: "`-a` shows entries starting with `.` (hidden files)." },
  { id: "lx-4", category: "linux", question: "Which file contains user account information?", options: ["/etc/shadow", "/etc/passwd", "/etc/users", "/etc/group"], correctIndex: 1, explanation: "`/etc/passwd` stores user account info; passwords are hashed in `/etc/shadow`." },
  { id: "lx-5", category: "linux", question: "Which command kills a process by PID?", options: ["stop", "end", "kill", "terminate"], correctIndex: 2, explanation: "`kill <PID>` sends SIGTERM by default to terminate a process." },
  { id: "lx-6", category: "linux", question: "What is the default shell in most modern Linux distros?", options: ["sh", "csh", "bash", "ksh"], correctIndex: 2, explanation: "Bash (Bourne Again SHell) is the default on most distributions." },
  { id: "lx-7", category: "linux", question: "Which command shows disk usage of a directory?", options: ["df", "du", "ls -s", "free"], correctIndex: 1, explanation: "`du` reports disk usage; `df` shows filesystem-level free space." },
  { id: "lx-8", category: "linux", question: "What does `grep` do?", options: ["Copies files", "Searches text using patterns", "Compresses files", "Renames files"], correctIndex: 1, explanation: "`grep` searches input for lines matching a regex pattern." },
  { id: "lx-9", category: "linux", question: "Which command shows currently logged-in users?", options: ["who", "whoami", "users -a", "logins"], correctIndex: 0, explanation: "`who` lists logged-in users; `whoami` prints only the current user." },
  { id: "lx-10", category: "linux", question: "Which signal does `kill -9` send?", options: ["SIGTERM", "SIGHUP", "SIGKILL", "SIGINT"], correctIndex: 2, explanation: "Signal 9 is SIGKILL, which cannot be caught or ignored." },
  { id: "lx-11", category: "linux", question: "What does `chmod 755 file` set?", options: ["rwxr-xr-x", "rwxrwxrwx", "rw-r--r--", "rwxr--r--"], correctIndex: 0, explanation: "7=rwx, 5=r-x, 5=r-x → owner full, group/others read+execute." },
  { id: "lx-12", category: "linux", question: "Which command schedules recurring jobs?", options: ["at", "cron", "schedule", "timer"], correctIndex: 1, explanation: "`cron` (via crontab) schedules recurring jobs; `at` is for one-time jobs." },
  { id: "lx-13", category: "linux", question: "Which directory holds system configuration files?", options: ["/var", "/etc", "/usr", "/opt"], correctIndex: 1, explanation: "`/etc` traditionally holds system-wide configuration files." },
  { id: "lx-14", category: "linux", question: "What does `tar -xzvf file.tar.gz` do?", options: ["Creates a gzipped archive", "Extracts a gzipped archive verbosely", "Lists archive contents", "Tests archive integrity"], correctIndex: 1, explanation: "x=extract, z=gzip, v=verbose, f=file." },
  { id: "lx-15", category: "linux", question: "Which command shows real-time process activity?", options: ["ps", "top", "jobs", "uptime"], correctIndex: 1, explanation: "`top` (and `htop`) shows live process activity and resource usage." },
  { id: "lx-16", category: "linux", question: "Which file lists mounted filesystems at boot?", options: ["/etc/mtab", "/etc/fstab", "/proc/mounts", "/etc/mounts"], correctIndex: 1, explanation: "`/etc/fstab` defines filesystems to mount at boot." },
  { id: "lx-17", category: "linux", question: "What is the symbolic link command?", options: ["ln -s", "link -s", "sym", "cp -s"], correctIndex: 0, explanation: "`ln -s target name` creates a symbolic link." },
  { id: "lx-18", category: "linux", question: "Which command displays the kernel version?", options: ["uname -r", "ver", "kernel", "uptime"], correctIndex: 0, explanation: "`uname -r` prints the kernel release." },
  { id: "lx-19", category: "linux", question: "Where are log files typically stored?", options: ["/etc/log", "/var/log", "/usr/log", "/sys/log"], correctIndex: 1, explanation: "`/var/log` is the standard location for system log files." },
  { id: "lx-20", category: "linux", question: "Which command changes file ownership?", options: ["chmod", "chown", "chgrp", "chuser"], correctIndex: 1, explanation: "`chown user:group file` changes the owner and group." },
  { id: "lx-21", category: "linux", question: "What does `>` do in shell?", options: ["Appends to a file", "Redirects output, overwriting", "Pipes to another command", "Reads input"], correctIndex: 1, explanation: "`>` redirects stdout to a file, overwriting it; `>>` appends." },
  { id: "lx-22", category: "linux", question: "Which command shows free and used memory?", options: ["mem", "free", "meminfo", "vmstat -m"], correctIndex: 1, explanation: "`free -h` shows memory in human-readable form." },
  { id: "lx-23", category: "linux", question: "Which package manager does Ubuntu use by default?", options: ["yum", "dnf", "apt", "pacman"], correctIndex: 2, explanation: "Ubuntu and Debian use `apt` (built on dpkg)." },
  { id: "lx-24", category: "linux", question: "What does the `&` at end of a command do?", options: ["Runs in background", "Runs as root", "Pipes output", "Logs the command"], correctIndex: 0, explanation: "Appending `&` runs the command as a background job." },
  { id: "lx-25", category: "linux", question: "Which command displays system uptime?", options: ["uptime", "load", "boot", "uname -t"], correctIndex: 0, explanation: "`uptime` shows time since boot, users, and load averages." },
];

const aws: Question[] = [
  { id: "aw-1", category: "aws", question: "What does S3 stand for?", options: ["Simple Storage Service", "Secure Storage System", "Scalable Storage Solution", "Server Storage Service"], correctIndex: 0, explanation: "Amazon S3 = Simple Storage Service — object storage." },
  { id: "aw-2", category: "aws", question: "Which service provides virtual servers in AWS?", options: ["S3", "EC2", "Lambda", "RDS"], correctIndex: 1, explanation: "EC2 (Elastic Compute Cloud) provides resizable virtual servers." },
  { id: "aw-3", category: "aws", question: "What is the maximum size of a single object in S3?", options: ["5 GB", "5 TB", "100 GB", "1 TB"], correctIndex: 1, explanation: "S3 object max size is 5 TB; single PUT max is 5 GB, larger uses multipart." },
  { id: "aw-4", category: "aws", question: "Which AWS service is serverless compute?", options: ["EC2", "ECS", "Lambda", "EKS"], correctIndex: 2, explanation: "AWS Lambda runs code without provisioning servers." },
  { id: "aw-5", category: "aws", question: "Which service is a managed relational database?", options: ["DynamoDB", "RDS", "Redshift", "S3"], correctIndex: 1, explanation: "Amazon RDS manages relational DBs (MySQL, PostgreSQL, etc.)." },
  { id: "aw-6", category: "aws", question: "IAM stands for?", options: ["Internet Access Manager", "Identity and Access Management", "Internal Auth Module", "Instance Access Manager"], correctIndex: 1, explanation: "IAM controls AWS authentication and authorization." },
  { id: "aw-7", category: "aws", question: "Which service provides a Content Delivery Network?", options: ["Route 53", "CloudFront", "CloudWatch", "Direct Connect"], correctIndex: 1, explanation: "Amazon CloudFront is AWS's global CDN." },
  { id: "aw-8", category: "aws", question: "Which service provides DNS in AWS?", options: ["Route 53", "VPC", "CloudFront", "API Gateway"], correctIndex: 0, explanation: "Route 53 is AWS's scalable DNS service." },
  { id: "aw-9", category: "aws", question: "What is a VPC?", options: ["Virtual Public Cloud", "Virtual Private Cloud", "Verified Public Channel", "Virtual Processing Center"], correctIndex: 1, explanation: "VPC = Virtual Private Cloud, a logically isolated network in AWS." },
  { id: "aw-10", category: "aws", question: "Which DB is a managed NoSQL service?", options: ["RDS", "Aurora", "DynamoDB", "Redshift"], correctIndex: 2, explanation: "DynamoDB is AWS's managed key-value and document NoSQL DB." },
  { id: "aw-11", category: "aws", question: "Which storage class is cheapest for archival?", options: ["S3 Standard", "S3 Glacier Deep Archive", "S3 IA", "S3 One Zone-IA"], correctIndex: 1, explanation: "Glacier Deep Archive is the lowest-cost S3 tier for long-term archival." },
  { id: "aw-12", category: "aws", question: "Which service monitors AWS resources?", options: ["CloudTrail", "CloudWatch", "Config", "Inspector"], correctIndex: 1, explanation: "CloudWatch monitors metrics/logs; CloudTrail records API calls." },
  { id: "aw-13", category: "aws", question: "What does an EBS volume provide?", options: ["Object storage", "Block storage for EC2", "Shared file system", "Backup snapshots only"], correctIndex: 1, explanation: "EBS provides persistent block storage attachable to EC2 instances." },
  { id: "aw-14", category: "aws", question: "Which service records all API calls in your account?", options: ["CloudWatch", "CloudTrail", "Config", "GuardDuty"], correctIndex: 1, explanation: "CloudTrail logs all AWS API activity for auditing." },
  { id: "aw-15", category: "aws", question: "Which service is used for managed Kubernetes?", options: ["ECS", "EKS", "Fargate", "Beanstalk"], correctIndex: 1, explanation: "EKS = Elastic Kubernetes Service." },
  { id: "aw-16", category: "aws", question: "Default region scope of an S3 bucket name is?", options: ["Account", "Region", "Globally unique", "AZ"], correctIndex: 2, explanation: "S3 bucket names must be globally unique across all AWS accounts." },
  { id: "aw-17", category: "aws", question: "Which AWS service queues messages between services?", options: ["SNS", "SQS", "Kinesis", "MQ"], correctIndex: 1, explanation: "SQS (Simple Queue Service) provides managed message queues." },
  { id: "aw-18", category: "aws", question: "SNS is best described as?", options: ["Queue", "Pub/Sub notification service", "Log aggregator", "Streaming platform"], correctIndex: 1, explanation: "SNS is a pub/sub messaging and notification service." },
  { id: "aw-19", category: "aws", question: "Which service provides infrastructure as code?", options: ["CloudFormation", "CloudWatch", "OpsWorks", "Systems Manager"], correctIndex: 0, explanation: "CloudFormation defines AWS infra via JSON/YAML templates." },
  { id: "aw-20", category: "aws", question: "Which load balancer operates at Layer 7?", options: ["NLB", "CLB", "ALB", "GLB"], correctIndex: 2, explanation: "Application Load Balancer (ALB) works at the HTTP/HTTPS layer (L7)." },
  { id: "aw-21", category: "aws", question: "What does AZ stand for?", options: ["Availability Zone", "Access Zone", "Auto Zone", "Authorization Zone"], correctIndex: 0, explanation: "AZ = Availability Zone — isolated data centers within a region." },
  { id: "aw-22", category: "aws", question: "Which service is used for object versioning?", options: ["EBS", "S3", "Glacier", "EFS"], correctIndex: 1, explanation: "S3 supports object versioning to preserve every version of an object." },
  { id: "aw-23", category: "aws", question: "Which service is a managed data warehouse?", options: ["RDS", "Aurora", "Redshift", "Athena"], correctIndex: 2, explanation: "Amazon Redshift is the managed petabyte-scale data warehouse." },
  { id: "aw-24", category: "aws", question: "Which IAM entity is best for granting EC2 access to S3?", options: ["IAM user", "IAM group", "IAM role", "Access key"], correctIndex: 2, explanation: "Attach an IAM role to the EC2 instance — no static credentials." },
  { id: "aw-25", category: "aws", question: "Which service provides DDoS protection?", options: ["WAF", "Shield", "GuardDuty", "Inspector"], correctIndex: 1, explanation: "AWS Shield provides managed DDoS protection; Shield Advanced adds extra." },
];

export const allQuestions: Question[] = [...linux, ...aws];

export const questionsByCategory = (slug: string) =>
  allQuestions.filter((q) => q.category === slug);

export const getQuestion = (id: string) => allQuestions.find((q) => q.id === id);

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}