import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — QuizMaster" },
      { name: "description", content: "Terms and conditions governing the use of QuizMaster." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageShell>
      <article className="max-w-3xl space-y-4 text-muted-foreground">
        <h1 className="text-3xl font-bold text-foreground">Terms & Conditions</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          Welcome to QuizMaster. By accessing this website, you accept these terms and
          conditions in full. Do not continue to use QuizMaster if you do not agree to all
          of the terms and conditions stated on this page.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">License to Use</h2>
        <p>
          Unless otherwise stated, QuizMaster and/or its licensors own the intellectual
          property rights for all material on the site. All intellectual property rights
          are reserved. You may access the content for personal, non-commercial use.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Restrictions</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Republishing material without written consent</li>
          <li>Selling, renting, or sub-licensing material</li>
          <li>Reproducing, duplicating or copying material for commercial purposes</li>
          <li>Redistributing content unless expressly permitted</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground mt-6">User Content</h2>
        <p>
          Any feedback or suggestions submitted to QuizMaster may be used to improve the
          service without obligation of compensation.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">No Warranties</h2>
        <p>
          The content on this website is provided "as is" without warranties of any kind.
          QuizMaster does not guarantee the accuracy or completeness of any information.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Changes to Terms</h2>
        <p>
          We reserve the right to revise these terms at any time. By continuing to use the
          site, you agree to be bound by the current version of these terms.
        </p>
      </article>
    </PageShell>
  );
}