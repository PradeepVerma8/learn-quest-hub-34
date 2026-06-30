import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — QuizMaster" },
      { name: "description", content: "Learn about QuizMaster, our mission and what we offer." },
      { property: "og:title", content: "About Us — QuizMaster" },
      { property: "og:description", content: "Learn about QuizMaster, our mission and what we offer." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <article className="prose prose-slate max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-muted-foreground mb-4">
          Welcome to <strong>QuizMaster</strong> — a free online platform dedicated to helping
          students, job seekers, and IT professionals prepare for exams and interviews
          through high-quality multiple-choice questions.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Our Mission</h2>
        <p className="text-muted-foreground mb-4">
          Our mission is to make quality learning resources accessible to everyone. We curate
          practice questions across Linux, AWS, Networking, Windows Server, DevOps, Computer
          Science, Government Exams, and more — all in one place, completely free.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">What We Offer</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Topic-wise MCQ practice across multiple categories</li>
          <li>Detailed answer explanations for every question</li>
          <li>Timed quiz mode for self-assessment</li>
          <li>Regularly updated content based on real interview and exam patterns</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Our Team</h2>
        <p className="text-muted-foreground">
          QuizMaster is built and maintained by a small team of educators and IT
          professionals who believe learning should be free, accessible, and effective.
        </p>
      </article>
    </PageShell>
  );
}