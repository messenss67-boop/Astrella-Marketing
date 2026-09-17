import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import editorialCommerce1 from "@/assets/editorial-commerce-1.webp";
import editorialCommerce2 from "@/assets/editorial-commerce-2.webp";
import editorialCommerce3 from "@/assets/editorial-commerce-3.webp";
import socialMediaMarketing1 from "@/assets/social-media-marketing-1.webp";
import socialMediaMarketing2 from "@/assets/social-media-marketing-2.webp";
import socialMediaMarketing3 from "@/assets/social-media-marketing-3.webp";

export interface ProjectImage {
  src: string;
  alt: string;
  /** What this frame shows — e.g. "Website — desktop", "Social — Instagram profile". */
  label: string;
  /**
   * CSS object-position for the narrow/portrait crop used below the sm breakpoint
   * (the homepage carousel is much tighter there) — defaults to "center".
   */
  focus?: string;
  /** CSS object-position for the wider crop used at sm and up — defaults to "center". */
  focusWide?: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  /** Project type — the deliverable format, distinct from the service line. */
  type: string;
  year: string;
  summary: string;
  cover: ProjectImage;
  gallery: ProjectImage[];
  scope: string[];
  sections: { heading: string; body: string }[];
  placeholder: true;
}

export const PROJECTS: Project[] = [
  {
    id: "aurea",
    index: "01",
    title: "Aurea",
    client: "Independent concept",
    industry: "Lifestyle & wellness",
    service: "Website design & social system",
    type: "Concept — website & content system",
    year: "Concept",
    summary:
      "A lifestyle brand built around slower living: a considered website paired with a social presence that carries the same calm, editorial tone.",
    cover: {
      src: editorialCommerce1,
      alt: "Aurea website homepage displayed on a laptop",
      label: "Website — desktop",
    },
    gallery: [
      {
        src: editorialCommerce1,
        alt: "Aurea website homepage displayed on a laptop",
        label: "Website — desktop",
      },
      {
        src: work01,
        alt: "Close-up of the Aurea website's editorial imagery and layout",
        label: "Website — editorial detail",
      },
      {
        src: socialMediaMarketing3,
        alt: "Aurea Instagram profile grid displayed on a phone",
        label: "Social — Instagram profile",
      },
    ],
    scope: ["Art direction", "UX/UI", "Development", "Content direction"],
    sections: [
      {
        heading: "The challenge",
        body: "The idea needed a digital home that felt as considered as the lifestyle it was selling, and a social presence to match, without tipping into the soft, generic visual language most wellness brands default to.",
      },
      {
        heading: "The approach",
        body: "We built a quiet, editorial system: warm neutrals, restrained typography and imagery that does the talking, carried consistently from the website through to the Instagram grid.",
      },
      {
        heading: "The outcome",
        body: "The concept reads as a single considered brand across every surface, with a tone distinct enough to stand apart in a crowded lifestyle category.",
      },
    ],
    placeholder: true,
  },
  {
    id: "solis",
    index: "02",
    title: "Solis",
    client: "Independent concept",
    industry: "Property & hospitality",
    service: "Website design",
    type: "Concept — website & digital presence",
    year: "Concept",
    summary:
      "A spaces-and-hospitality brand positioned around one idea — people, spaces, possibility — carried through a calm, image-led website.",
    cover: {
      src: editorialCommerce2,
      alt: "Solis website homepage displayed on a laptop",
      label: "Website — desktop",
      focus: "70% 42%",
    },
    gallery: [
      {
        src: editorialCommerce2,
        alt: "Solis website homepage displayed on a laptop",
        label: "Website — desktop",
        focus: "70% 42%",
      },
      {
        src: socialMediaMarketing2,
        alt: "Solis Instagram profile grid displayed on a phone",
        label: "Social — Instagram profile",
      },
    ],
    scope: ["UX/UI", "Art direction", "Development", "Performance"],
    sections: [
      {
        heading: "The challenge",
        body: "The brand needed a website that could hold large, atmospheric photography without slowing down or losing structure underneath it.",
      },
      {
        heading: "The approach",
        body: "We built a grid-driven layout that lets the photography lead, with a restrained navigation and type system that stays out of the way.",
      },
      {
        heading: "The outcome",
        body: "The result feels closer to an editorial feature than a typical property site: considered pacing, clear structure, still fast.",
      },
    ],
    placeholder: true,
  },
  {
    id: "aura",
    index: "03",
    title: "Aura",
    client: "Independent concept",
    industry: "Wellness & lifestyle retail",
    service: "Brand identity & content direction",
    type: "Concept — brand identity & social system",
    year: "Concept",
    summary:
      "A wellness brand identity built for shelf and screen alike: packaging, print collateral and a social system that all read as one considered idea.",
    cover: {
      src: editorialCommerce3,
      alt: "Aura brand identity applied to packaging, cards and print collateral",
      label: "Brand identity — packaging",
    },
    gallery: [
      {
        src: editorialCommerce3,
        alt: "Aura brand identity applied to packaging, cards and print collateral",
        label: "Brand identity — packaging",
      },
      {
        src: socialMediaMarketing1,
        alt: "Aura Instagram profile grid displayed on a phone",
        label: "Social — Instagram profile",
      },
      {
        src: work02,
        alt: "Moody black-and-white editorial content grid displayed on a phone",
        label: "Social — content grid",
      },
    ],
    scope: ["Brand direction", "Packaging", "Content direction", "Campaign design"],
    sections: [
      {
        heading: "The challenge",
        body: "The brand needed an identity confident enough to hold its own on a shelf, and flexible enough to carry across packaging, print and social.",
      },
      {
        heading: "The approach",
        body: "We built a dark, tactile identity system: quiet typography, a restrained mark and materials chosen to feel premium in the hand and on screen.",
      },
      {
        heading: "The outcome",
        body: "The system holds together across every touchpoint, giving the brand a distinct, recognisable presence without relying on a loud palette.",
      },
    ],
    placeholder: true,
  },
];
