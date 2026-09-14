import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";
import editorialCommerce1 from "@/assets/editorial-commerce-1.png";
import editorialCommerce2 from "@/assets/editorial-commerce-2.png";
import editorialCommerce3 from "@/assets/editorial-commerce-3.png";

export interface Project {
  id: string;
  index: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  year: string;
  summary: string;
  image: string;
  images?: string[];
  scope: string[];
  sections: { heading: string; body: string }[];
  placeholder: true;
}

export const PROJECTS: Project[] = [
  {
    id: "editorial-commerce",
    index: "01",
    title: "Editorial commerce",
    client: "Independent concept",
    industry: "Lifestyle retail",
    service: "Website design",
    year: "Concept",
    summary:
      "A storefront designed like a quiet editorial feature: slower pacing, clearer product stories and a path to purchase that never feels pushy.",
    image: editorialCommerce1,
    images: [editorialCommerce1, editorialCommerce2, editorialCommerce3],
    scope: ["Art direction", "UX/UI", "Development", "Performance"],
    sections: [
      {
        heading: "The challenge",
        body: "The brand had decent product range but no visual system strong enough to hold attention once people landed on the page. The site needed to feel more considered and less like a template.",
      },
      {
        heading: "The objective",
        body: "Create a digital storefront that felt premium and editorial while still making it easy to discover, compare and buy the products on offer.",
      },
      {
        heading: "The approach",
        body: "We built the system around storytelling and pacing: large imagery, tighter typography, calmer navigation and a visual rhythm that made the collection feel curated rather than crowded.",
      },
      {
        heading: "The result",
        body: "The concept prioritises clarity and atmosphere over noise, making the brand feel more premium without losing usability or conversion intent.",
      },
    ],
    placeholder: true,
  },
  {
    id: "social-system",
    index: "02",
    title: "Social system",
    client: "Independent concept",
    industry: "Hospitality",
    service: "Brand & content direction",
    year: "Concept",
    summary:
      "A content system built around structure, mood and repeatable execution so the brand could appear clearer and more distinct across multiple channels.",
    image: work02,
    scope: ["Strategy", "Content direction", "Creative system", "Campaign planning"],
    sections: [
      {
        heading: "The challenge",
        body: "The brand had a strong offer but the social output felt fragmented. Different formats, different tones and no consistent visual story meant the audience never saw a clear identity.",
      },
      {
        heading: "The objective",
        body: "Build a content system that could scale without sounding recycled and give the brand a more recognisable visual and editorial language.",
      },
      {
        heading: "The approach",
        body: "We reduced the noise and defined a repeatable structure: a few strong formats, a disciplined visual language and a content cadence designed for consistency rather than constant churn.",
      },
      {
        heading: "The result",
        body: "The outcome is a more coherent brand presence across digital touchpoints without sacrificing personality or campaign flexibility.",
      },
    ],
    placeholder: true,
  },
  {
    id: "studio-identity",
    index: "03",
    title: "Studio identity",
    client: "Independent concept",
    industry: "Architecture",
    service: "Brand identity & web",
    year: "Concept",
    summary:
      "A quiet, confident identity for a practice that wanted its work to do the talking, not its marketing collateral.",
    image: work03,
    scope: ["Brand direction", "Art direction", "UX/UI", "Development"],
    sections: [
      {
        heading: "The challenge",
        body: "The practice had strong projects but an online presence that did not reflect the quality of the work. The site felt generic and failed to hold the architectural discipline of the studio.",
      },
      {
        heading: "The objective",
        body: "Translate the studio&rsquo;s design language into a digital environment that felt calm, precise and materially rich, without resorting to cliché.",
      },
      {
        heading: "The approach",
        body: "The identity system leaned into restraint: typography, composition, material cues and a sparse but deliberate palette that gave each project room to breathe.",
      },
      {
        heading: "The result",
        body: "The concept communicates authority and clarity, making the studio feel more established and more deliberate in how it presents its work.",
      },
    ],
    placeholder: true,
  },
];
