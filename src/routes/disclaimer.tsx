import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — QuizMaster" },
      { name: "description", content: "Disclaimer for QuizMaster website content and external links." },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <PageShell>
      <article className="max-w-3xl space-y-4 text-muted-foreground">
        <h1 className="text-3xl font-bold text-foreground">Disclaimer</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <p>
          The information provided by QuizMaster is for general educational and
          informational purposes only. All information on the site is provided in good
          faith; however we make no representation or warranty of any kind regarding the
          accuracy, adequacy, validity, reliability, or completeness of any information.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">External Links Disclaimer</h2>
        <p>
          The site may contain links to other websites or content belonging to third
          parties. We do not investigate or monitor such external links for accuracy or
          completeness.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Professional Disclaimer</h2>
        <p>
          The site cannot and does not contain professional advice. The educational
          information is provided for general purposes only and is not a substitute for
          professional advice. Always consult a qualified professional for specific
          guidance.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Advertising Disclaimer</h2>
        <p>
          QuizMaster may display advertisements served by third-party networks such as
          Google AdSense. We are not responsible for the content of these advertisements.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Errors & Omissions</h2>
        <p>
          While we strive to keep the information up to date and correct, we make no
          warranties about the completeness or accuracy of MCQs and explanations. If you
          spot an error, please <a href="/contact" className="text-primary underline">contact us</a>.
        </p>
      </article>
    </PageShell>
  );
}