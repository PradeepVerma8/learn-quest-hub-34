import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Mail, MessageSquare, Globe } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — QuizMaster" },
      { name: "description", content: "Get in touch with the QuizMaster team for queries, feedback or partnership." },
      { property: "og:title", content: "Contact Us — QuizMaster" },
      { property: "og:description", content: "Get in touch with the QuizMaster team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground mb-6">
          We'd love to hear from you. Whether you have a question about our content,
          spotted an error in a question, or want to suggest a new topic — reach out.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <div className="rounded-lg border bg-card p-5">
            <Mail className="h-5 w-5 text-primary mb-2" />
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-muted-foreground">support@quizmaster.example</p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <MessageSquare className="h-5 w-5 text-primary mb-2" />
            <h3 className="font-semibold">Feedback</h3>
            <p className="text-sm text-muted-foreground">feedback@quizmaster.example</p>
          </div>
          <div className="rounded-lg border bg-card p-5 sm:col-span-2">
            <Globe className="h-5 w-5 text-primary mb-2" />
            <h3 className="font-semibold">Response Time</h3>
            <p className="text-sm text-muted-foreground">
              We usually respond within 2–3 business days.
            </p>
          </div>
        </div>

        <form className="space-y-4 rounded-lg border bg-card p-6">
          <div>
            <label className="text-sm font-medium" htmlFor="name">Name</label>
            <input id="name" className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="email">Email</label>
            <input id="email" type="email" className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="message">Message</label>
            <textarea id="message" rows={5} className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="How can we help?" />
          </div>
          <button type="button" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Send Message
          </button>
        </form>
      </div>
    </PageShell>
  );
}