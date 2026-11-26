import kiteDesktop from "@/assets/kite-key-desktop.webp";
import kiteDetail from "@/assets/kite-key-detail.webp";
import kiteMobile from "@/assets/kite-key-mobile.webp";
import lilianDesktop from "@/assets/lilian-azevedo-desktop.webp";
import lilianMobile from "@/assets/lilian-azevedo-mobile.webp";
import lilianDetail from "@/assets/lilian-azevedo-detail.webp";
import seaDesktop from "@/assets/sea-breeze-eta-desktop.webp";
import seaMobile from "@/assets/sea-breeze-eta-mobile.webp";
import seaDetail from "@/assets/sea-breeze-eta-detail.webp";

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
  year?: string;
  summary: string;
  cover: ProjectImage;
  mobile: ProjectImage;
  gallery: ProjectImage[];
  scope: string[];
  sections: { heading: string; body: string }[];
  liveUrl: string;
}

export const kiteScreens = {
  desktop: {
    src: kiteDesktop,
    alt: "Kite & Key’s desktop homepage with Table Mountain across the bay and a yellow kite above the beach",
    label: "Desktop homepage",
  },
  detail: {
    src: kiteDetail,
    alt: "Ocean Bliss accommodation listing with a photo gallery, amenities and booking link",
    label: "Accommodation and booking",
  },
  mobile: {
    src: kiteMobile,
    alt: "The property estimate and booking options on the Kite & Key mobile homepage",
    label: "Mobile homepage",
  },
};
export const KITE_AND_KEY: Project = {
  id: "kite-and-key",
  index: "01",
  title: "Kite and Key",
  client: "Kite and Key",
  industry: "Short-stay hospitality",
  service: "Website development",
  type: "Client website",
  summary:
    "A Blouberg property management website built for two visitors: owners looking for an estimate and guests looking for a place on the coast.",
  liveUrl: "https://kiteandkey.co.za/",
  mobile: kiteScreens.mobile,
  cover: kiteScreens.desktop,
  gallery: [kiteScreens.detail, kiteScreens.desktop, kiteScreens.mobile],
  scope: ["Website development"],
  sections: [
    {
      heading: "From the coast to the property",
      body: "The homepage opens on Blouberg’s coastline, with separate paths to a property estimate and a stay. Guests can browse the Ocean Bliss photo gallery, check amenities and continue to Airbnb to book.",
    },
  ],
};

const lilianPhone = {
  src: lilianMobile,
  alt: "Lilian Azevedo’s mobile homepage with a featured coastal property",
  label: "Mobile homepage",
};
const seaPhone = {
  src: seaMobile,
  alt: "Sea Breeze’s mobile homepage on the Bloubergstrand coast",
  label: "Mobile homepage",
};

export const PROJECTS: Project[] = [
  KITE_AND_KEY,
  {
    id: "lilian-azevedo",
    index: "02",
    title: "Lilian Azevedo Inc",
    client: "Lilian Azevedo Inc Attorneys",
    industry: "Property & law",
    service: "Website development",
    type: "Client website",
    liveUrl: "https://lilian-azevedo.vercel.app/",
    summary:
      "One Cape Town practice handles both the sale and the transfer. The website brings its property listings and conveyancing services together, from the first viewing to the final signature.",
    cover: {
      src: lilianDesktop,
      alt: "Lilian Azevedo homepage featuring a Bloubergstrand property and links to properties and legal services",
      label: "Desktop homepage",
    },
    mobile: lilianPhone,
    gallery: [
      {
        src: lilianDetail,
        alt: "Introduction to the firm’s property law, conveyancing and notarial services above its listings",
        label: "Property and legal services",
      },
      lilianPhone,
    ],
    scope: ["Website development"],
    sections: [
      {
        heading: "Two reasons to visit one practice",
        body: "Buyers can search by area and explore available homes. Owners and sellers can find the firm’s legal services, learn about the stages of transfer and contact the team.",
      },
    ],
  },
  {
    id: "sea-breeze",
    index: "03",
    title: "Sea Breeze",
    client: "Sea Breeze Accommodation",
    industry: "Coastal accommodation",
    service: "Website development",
    type: "Client website",
    liveUrl: "https://sea-breeze-eta.vercel.app/",
    summary:
      "A family-run collection of stays in Bloubergstrand. Guests can compare a guest-house room, a beachfront apartment or a holiday home before choosing where to book.",
    cover: {
      src: seaDesktop,
      alt: "Sea Breeze homepage showing the shoreline and three accommodation options",
      label: "Desktop homepage",
    },
    mobile: seaPhone,
    gallery: [
      {
        src: seaDetail,
        alt: "Sea Breeze accommodation cards with room photography, occupancy and nightly rates",
        label: "Choosing a stay",
      },
      seaPhone,
    ],
    scope: ["Website development"],
    sections: [
      {
        heading: "From the shoreline to a room",
        body: "Coastal photography sets the scene. Room images, guest capacity and rates help visitors narrow their choice, then the booking link takes them through to dates and guests.",
      },
    ],
  },
];
