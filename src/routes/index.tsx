import { createFileRoute } from "@tanstack/react-router";
import { InquiryProvider } from "@/components/astrella/inquiry";
import { CustomCursor } from "@/components/astrella/cursor";
import { Nav } from "@/components/astrella/nav";
import { Hero } from "@/components/astrella/hero";
import { Manifesto } from "@/components/astrella/manifesto";
import { Principles } from "@/components/astrella/principles";
import { Services } from "@/components/astrella/services";
import { Work } from "@/components/astrella/work";
import { Marquee } from "@/components/astrella/marquee";
import { Process } from "@/components/astrella/process";
import { WhoWeWorkWith } from "@/components/astrella/who-we-work-with";
import { About } from "@/components/astrella/about";
import { Closing } from "@/components/astrella/closing";
import { Footer } from "@/components/astrella/footer";

const SITE_URL = "https://astrellamarketing.com";
const TITLE = "Astrella Marketing — Boutique creative studio for sharper brands";
const DESCRIPTION =
  "Astrella is a boutique creative studio building considered websites, identity systems and digital experiences for brands that want a clearer point of view.";

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
          email: "hello@astrellamarketing.com",
          areaServed: "Worldwide",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Cape Town",
            addressCountry: "ZA",
          },
          knowsAbout: [
            "Website design",
            "Website development",
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
        <CustomCursor />
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <Manifesto />
          <Principles />
          <Work />
          <Services />
          <Marquee duration={64} />
          <Process />
          <WhoWeWorkWith />
          <About />
          <Closing />
        </main>
        <Footer />
      </div>
    </InquiryProvider>
  );
}
