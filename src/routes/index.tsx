import { createFileRoute } from "@tanstack/react-router";
import { InquiryProvider } from "@/components/astrella/inquiry";

import { Nav } from "@/components/astrella/nav";
import { Hero } from "@/components/astrella/hero";

import { Services } from "@/components/astrella/services";
import { Work } from "@/components/astrella/work";

import { Process } from "@/components/astrella/process";
import { WhoWeWorkWith } from "@/components/astrella/who-we-work-with";
import { About } from "@/components/astrella/about";
import { Closing } from "@/components/astrella/closing";
import { Footer } from "@/components/astrella/footer";

import { FAQ } from "@/components/astrella/faq";

const SITE_URL = "https://astrellamarketing.com";
const TITLE = "Astrella Marketing | Web Design & Social Media Agency Cape Town";
const DESCRIPTION =
  "Astrella Marketing is an independent Cape Town agency providing website design, development and social media marketing for local businesses.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/astrella-logo.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/astrella-logo.png` },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Astrella Marketing",
          description: DESCRIPTION,
          url: SITE_URL,
          email: "sebastian@astrellamarketing.com",
          areaServed: "Worldwide",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Cape Town",
            addressCountry: "ZA",
          },
          knowsAbout: [
            "Website design",
            "Website development",
            "Social media management",
            "Brand identity",
            "Creative direction",
            "Digital strategy",
          ],
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <InquiryProvider>
      <div className="grain">
        <Nav />
        <a href="#main-content" className="v2-skip">
          Skip to content
        </a>
        <main id="main-content">
          <Hero />

          <Work />
          <Services />
          <Process />
          <WhoWeWorkWith />
          <About />
          <FAQ />
          <Closing />
        </main>
        <Footer />
      </div>
    </InquiryProvider>
  );
}
