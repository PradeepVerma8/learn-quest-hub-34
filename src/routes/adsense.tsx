import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/adsense")({
  head: () => ({
    meta: [
      { title: "Google AdSense — QuizMaster" },
      { name: "description", content: "Google AdSense information and ad placements for QuizMaster." },
      { property: "og:title", content: "Google AdSense — QuizMaster" },
      { property: "og:description", content: "Google AdSense information and ad placements for QuizMaster." },
    ],
  }),
  component: AdSensePage,
});

function AdSensePage() {
  return (
    <PageShell>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Google AdSense</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          This page is reserved for Google AdSense integration. Once your AdSense account
          is approved, ad units will appear in the slots below.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Ad Slot — Top Banner</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-32 items-center justify-center rounded border border-dashed text-sm text-muted-foreground">
              Google AdSense ad will appear here
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ad Slot — Sidebar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-32 items-center justify-center rounded border border-dashed text-sm text-muted-foreground">
              Google AdSense ad will appear here
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}