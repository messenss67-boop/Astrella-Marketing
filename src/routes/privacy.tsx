import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/astrella/cursor";
import { Footer } from "@/components/astrella/footer";
import { InquiryProvider } from "@/components/astrella/inquiry";
import { Nav } from "@/components/astrella/nav";
import { Star } from "@/components/astrella/star";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Astrella Marketing" },
      {
        name: "description",
        content:
          "Astrella Marketing privacy policy describing how personal data is handled, stored and protected.",
      },
    ],
  }),
});

function PrivacyPage() {
  return (
    <InquiryProvider>
      <div className="grain">
        <CustomCursor />
        <Nav />
        <main className="shell pb-24 pt-32 sm:pt-40">
          <div className="max-w-4xl pt-12">
            <p className="label-xs text-lavender">Privacy policy</p>
            <h1 className="display mt-6 text-[clamp(3rem,7vw,6rem)]">Clear data handling.</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Astrella Marketing respects the privacy of the people who contact us. This page sets
              out how we handle personal information, contact enquiries and website data.
            </p>
          </div>

          <div className="mt-16 space-y-10 text-base leading-relaxed text-muted-foreground">
            <section className="border-t border-line pt-8">
              <div className="flex items-center gap-3">
                <Star className="h-2.5 w-2.5 text-lavender" />
                <h2 className="font-serif text-3xl text-ivory">What information we collect</h2>
              </div>
              <p className="mt-4 max-w-3xl">
                When you get in touch through the website or email, we may collect your name, email
                address, company name, website URL and any message details you share. We only
                collect what is necessary to understand the enquiry and respond appropriately.
              </p>
            </section>

            <section className="border-t border-line pt-8">
              <div className="flex items-center gap-3">
                <Star className="h-2.5 w-2.5 text-lavender" />
                <h2 className="font-serif text-3xl text-ivory">How we use it</h2>
              </div>
              <p className="mt-4 max-w-3xl">
                We use the information you provide to respond to your enquiry, assess fit for a
                project, discuss scope and timing, and maintain a professional record of our
                conversations. We do not use your personal details to create marketing profiles or
                sell them to third parties.
              </p>
            </section>

            <section className="border-t border-line pt-8">
              <div className="flex items-center gap-3">
                <Star className="h-2.5 w-2.5 text-lavender" />
                <h2 className="font-serif text-3xl text-ivory">Storage and security</h2>
              </div>
              <p className="mt-4 max-w-3xl">
                We keep enquiry data in secure, access-controlled systems and only retain it as long
                as needed to manage the client relationship or legal obligations. We take reasonable
                steps to protect information from unauthorised access, loss or misuse.
              </p>
            </section>

            <section className="border-t border-line pt-8">
              <div className="flex items-center gap-3">
                <Star className="h-2.5 w-2.5 text-lavender" />
                <h2 className="font-serif text-3xl text-ivory">Your rights</h2>
              </div>
              <p className="mt-4 max-w-3xl">
                You may ask to review, update or delete the personal data we hold about you, subject
                to legal or operational requirements. If you would like to do so, contact us at
                hello@astrellamarketing.com.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </InquiryProvider>
  );
}
