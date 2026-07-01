import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageShell } from "@/components/PageShell";
import { Mail, MessageSquare, Globe, Loader2 } from "lucide-react";
import { toast } from "sonner";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqgpddb";

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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!name || name.length > 100) {
      setErrorMsg("Please enter your name (max 100 chars).");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!message || message.length > 2000) {
      setErrorMsg("Please enter a message (max 2000 chars).");
      return;
    }
    setErrorMsg("");

    const payload = {
      "Full Name": name,
      "Email Address": email,
      "Phone Number": String(fd.get("phone") ?? ""),
      Subject: String(fd.get("subject") ?? ""),
      Message: message,
      "Current Page URL": typeof window !== "undefined" ? window.location.href : "",
      "Submission Date & Time": new Date().toISOString(),
    };

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      toast.success("Message sent! We'll get back to you soon.");
      form.reset();
    } catch (err) {
      setStatus("error");
      toast.error("Failed to send message. Please try again.");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed.");
    }
  }

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

        <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border bg-card p-6" noValidate>
          <div>
            <label className="text-sm font-medium" htmlFor="name">Name</label>
            <input id="name" name="name" required maxLength={100} className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required maxLength={255} className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="you@example.com" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium" htmlFor="phone">Phone (optional)</label>
              <input id="phone" name="phone" type="tel" maxLength={30} className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="+1 555 123 4567" />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="subject">Subject (optional)</label>
              <input id="subject" name="subject" maxLength={150} className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="What is this about?" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required maxLength={2000} className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" placeholder="How can we help?" />
          </div>
          {status === "success" && (
            <p className="text-sm font-medium text-green-600">Thanks! Your message has been sent.</p>
          )}
          {status === "error" && errorMsg && (
            <p className="text-sm font-medium text-destructive">{errorMsg}</p>
          )}
          {status !== "error" && errorMsg && (
            <p className="text-sm font-medium text-destructive">{errorMsg}</p>
          )}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
          >
            {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </PageShell>
  );
}