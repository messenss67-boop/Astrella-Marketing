import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/astrella/cursor";
import { Footer } from "@/components/astrella/footer";
import { InquiryProvider } from "@/components/astrella/inquiry";
import { Nav } from "@/components/astrella/nav";
import { Star } from "@/components/astrella/star";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Astrella Marketing" },
      {
        name: "description",
        content: "Astrella Marketing terms and conditions for website use and project engagement.",
      },
    ],
    links: [{ rel: "canonical", href: "https://astrellamarketing.com/terms" }],
  }),
});

function TermsPage() {
  return (
    <InquiryProvider>
      <div className="grain">
        <CustomCursor />
        <Nav />
        <main className="shell pb-24 pt-32 sm:pt-40">
          <div className="max-w-4xl pt-12">
            <p className="label-xs text-lavender">Terms & conditions</p>
            <h1 className="display mt-6 text-[clamp(3rem,7vw,6rem)]">Thoughtful working terms.</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              These terms cover the use of this website and the general framework for enquiries and
              project engagement with Astrella Marketing.
            </p>
          </div>

          <div className="mt-16 space-y-10 text-base leading-relaxed text-muted-foreground">
            <section className="border-t border-line pt-8">
              <div className="flex items-center gap-3">
                <Star className="h-2.5 w-2.5 text-lavender" />
                <h2 className="font-serif text-3xl text-ivory">Project enquiries</h2>
              </div>
              <p className="mt-4 max-w-3xl">
                Enquiries submitted through the website or by email are received for review.
                Astrella may respond to discuss scope, fit, timeline and deliverables. Any project
                engagement is subject to a separate written agreement.
              </p>
            </section>

            <section className="border-t border-line pt-8">
              <div className="flex items-center gap-3">
                <Star className="h-2.5 w-2.5 text-lavender" />
                <h2 className="font-serif text-3xl text-ivory">Website content</h2>
              </div>
              <p className="mt-4 max-w-3xl">
                All content on this website, including text, images, layouts and brand materials, is
                owned by Astrella Marketing unless otherwise stated. It may be viewed, shared and
                linked to for informational purposes, but may not be reproduced or used without
                written permission.
              </p>
            </section>

            <section className="border-t border-line pt-8">
              <div className="flex items-center gap-3">
                <Star className="h-2.5 w-2.5 text-lavender" />
                <h2 className="font-serif text-3xl text-ivory">Liability</h2>
              </div>
              <p className="mt-4 max-w-3xl">
                Astrella Marketing aims to provide accurate and useful information on this website.
                We do not accept liability for indirect, incidental or consequential losses arising
                from use of the site or the information available on it.
              </p>
            </section>

            <section className="border-t border-line pt-8">
              <div className="flex items-center gap-3">
                <Star className="h-2.5 w-2.5 text-lavender" />
                <h2 className="font-serif text-3xl text-ivory">Changes</h2>
              </div>
              <p className="mt-4 max-w-3xl">
                We may update these terms and the privacy policy from time to time. Continued use of
                the website after changes are published constitutes acceptance of those updated
                terms.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </InquiryProvider>
  );
}
