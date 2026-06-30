import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — QuizMaster" },
      { name: "description", content: "Privacy Policy for QuizMaster — how we collect, use and protect your data." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell>
      <article className="max-w-3xl space-y-4 text-muted-foreground">
        <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          At QuizMaster, accessible from this website, one of our main priorities is the
          privacy of our visitors. This Privacy Policy document outlines the types of
          information that is collected and recorded and how we use it.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Information We Collect</h2>
        <p>
          QuizMaster does not require account creation to access practice questions. We may
          collect anonymous usage data such as pages visited, browser type, device, and
          approximate location to improve the service.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Cookies & Web Beacons</h2>
        <p>
          Like any other website, QuizMaster uses cookies to store information including
          visitors' preferences and the pages they accessed. This information is used to
          optimize user experience.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Google AdSense & Advertising</h2>
        <p>
          Third-party vendors, including Google, may use cookies to serve ads based on a
          user's prior visits to our website. Google's use of advertising cookies enables it
          and its partners to serve ads to users based on their visit to our site and/or
          other sites on the Internet. Users may opt out of personalized advertising by
          visiting <a className="text-primary underline" href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer">Google Ads Settings</a>.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Third Party Privacy Policies</h2>
        <p>
          QuizMaster's Privacy Policy does not apply to other advertisers or websites. We
          advise consulting the respective Privacy Policies of these third-party ad servers
          for more detailed information.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Children's Information</h2>
        <p>
          QuizMaster does not knowingly collect any Personal Identifiable Information from
          children under the age of 13.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Consent</h2>
        <p>By using our website, you hereby consent to our Privacy Policy.</p>
      </article>
    </PageShell>
  );
}