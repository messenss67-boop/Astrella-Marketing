import founders from "@/assets/who-we-work-with/founders.webp";
import hospitality from "@/assets/who-we-work-with/hospitality.webp";
import property from "@/assets/who-we-work-with/property.webp";
import tradeServices from "@/assets/who-we-work-with/trade-services.webp";
import professionalServices from "@/assets/who-we-work-with/professional-services.webp";
import ecommerce from "@/assets/who-we-work-with/ecommerce.webp";
import { Reveal, RevealLines, SectionLabel } from "./reveal";
import { ArrowRight, MagneticButton } from "./magnetic";
import { useInquiry } from "./inquiry";

interface Industry {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const INDUSTRIES: Industry[] = [
  {
    number: "01",
    title: "Founders",
    description: "Ambitious founders building what’s next.",
    image: founders,
    alt: "A considered, dimly lit founder's workspace with a laptop and notebook",
  },
  {
    number: "02",
    title: "Hospitality",
    description: "Hotels, restaurants and experiences that move people.",
    image: hospitality,
    alt: "An intimate restaurant table set at dusk with a coastal view beyond",
  },
  {
    number: "03",
    title: "Property",
    description: "Real estate brands, developments and property experiences.",
    image: property,
    alt: "A modern home's terrace and infinity pool overlooking the coastline at sunset",
  },
  {
    number: "04",
    title: "Trade Services",
    description: "Trusted trade professionals for exceptional results.",
    image: tradeServices,
    alt: "A tradesperson's tools and plans laid out on a workbench",
  },
  {
    number: "05",
    title: "Professional Services",
    description: "Trusted professionals for exceptional results.",
    image: professionalServices,
    alt: "A considered private office with books, a lamp and a laptop",
  },
  {
    number: "06",
    title: "E-commerce",
    description: "Consumer brands ready to scale with intention.",
    image: ecommerce,
    alt: "A retail studio desk with a laptop showing an online storefront",
  },
];

/*
 * The supplied category photos have a title/description baked into their left
 * ~38% by the image generator. There's no clean version, and at this card's
 * wide aspect ratio object-fit: cover only ever crops top/bottom (never that
 * left text panel), so no crop angle hides it. This gradient stays anchored
 * to that same left zone at near-opaque strength — at every breakpoint — to
 * crush the baked text to an inconsequential dark texture underneath our own
 * real, accessible heading rendered on top of it.
 */
const TEXT_ZONE_OVERLAY =
  "linear-gradient(90deg, rgba(9,9,10,0.97) 0%, rgba(9,9,10,0.93) 34%, rgba(9,9,10,0.62) 50%, rgba(9,9,10,0.14) 66%, rgba(9,9,10,0.02) 100%)";
const MOBILE_ASSIST_OVERLAY =
  "linear-gradient(180deg, transparent 0%, transparent 40%, rgba(9,9,10,0.55) 100%)";

function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  const { open } = useInquiry();

  return (
    <Reveal delay={index * 80}>
      <button
        type="button"
        onClick={open}
        data-cursor="cta"
        aria-label={`Start a project — ${industry.title}`}
        className="who-card group relative isolate flex aspect-auto min-h-[220px] w-full flex-col justify-end overflow-hidden rounded-[6px] border border-line text-left transition-colors duration-500 md:aspect-[2.35/1] md:min-h-[188px]"
      >
        <img
          src={industry.image}
          alt={industry.alt}
          loading="lazy"
          decoding="async"
          width={1672}
          height={941}
          className="who-card-image absolute inset-0 h-full w-full object-cover transition-[transform,filter] duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
        />

        <span
          aria-hidden="true"
          className="absolute inset-0"
          style={{ backgroundImage: TEXT_ZONE_OVERLAY }}
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 sm:hidden"
          style={{ backgroundImage: MOBILE_ASSIST_OVERLAY }}
        />

        <span
          aria-hidden="true"
          className="who-card-arrow absolute right-5 top-5 text-lg text-ivory opacity-0 transition-[opacity,transform] duration-500"
        >
          ↗
        </span>

        <div className="absolute left-6 top-6 z-10 hidden items-center gap-2 rounded-sm px-1 py-0.5 backdrop-blur-[2px] sm:flex">
          <span className="text-[0.68rem] uppercase tracking-[0.22em] text-ivory-dim">
            {industry.number}
          </span>
          <span className="h-px w-8 bg-line-strong" />
        </div>

        <div className="relative z-10 max-w-[72%] p-6 backdrop-blur-[2px] sm:max-w-[56%] md:max-w-[52%]">
          <span className="mb-2 flex items-center gap-2 sm:hidden">
            <span className="text-[0.65rem] uppercase tracking-[0.22em] text-ivory-dim/80">
              {industry.number}
            </span>
            <span className="h-px w-6 bg-line-strong" />
          </span>
          <h3 className="who-card-title font-serif text-[clamp(1.75rem,8vw,2.375rem)] leading-[1.05] tracking-tight text-ivory transition-transform duration-500">
            {industry.title}
          </h3>
          <p className="mt-2 text-[0.82rem] leading-snug text-ivory-dim/85">
            {industry.description}
          </p>
        </div>
      </button>
    </Reveal>
  );
}

export function WhoWeWorkWith() {
  const { open } = useInquiry();

  return (
    <section className="shell py-24 sm:py-32 lg:py-36" aria-labelledby="fit-heading">
      <SectionLabel index="05" title="Who we work with" />

      <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-[36%_1fr] lg:gap-20">
        <div>
          <h2
            id="fit-heading"
            className="display max-w-[13ch] text-[clamp(2.625rem,12vw,4rem)] leading-[1.02] sm:text-[clamp(2.25rem,5.6vw,4.25rem)]"
          >
            <RevealLines lines={[<>A considered fit,</>, <>not an open door.</>]} />
          </h2>

          <Reveal delay={140} className="mt-8 max-w-sm space-y-4">
            <p className="text-base leading-relaxed text-muted-foreground">
              We take on a small number of projects at a time, and we do our best work with brands
              that already have a point of view.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              In practice, that tends to be businesses in these spaces — where design, strategy and
              execution can create real, measurable impact.
            </p>
          </Reveal>

          <Reveal delay={200} className="mt-9">
            <MagneticButton variant="ghost" onClick={open}>
              Work with us <ArrowRight />
            </MagneticButton>
          </Reveal>

          <Reveal delay={240} className="mt-12 border-l-2 border-line-strong pl-4">
            <p className="text-[0.68rem] uppercase leading-relaxed tracking-[0.18em] text-faint">
              Select partners.
              <br />
              Bigger outcomes.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {INDUSTRIES.map((industry, i) => (
            <IndustryCard key={industry.title} industry={industry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
