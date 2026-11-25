import { useInquiry } from "./inquiry";
import { PROJECTS } from "@/data/work";
export function Hero() {
  const { open } = useInquiry();
  return (
    <section id="top" className="v2-hero shell">
      <div className="v2-eyebrow">Independent agency · Cape Town, South Africa</div>
      <h1>
        Built to look better.
        <br />
        <em>Designed to grow.</em>
      </h1>
      <div className="v2-hero-bottom">
        <p>
          Website design and social media marketing for local businesses. Help your customers find
          you, trust you and take the next step.
        </p>
        <div className="v2-actions">
          <button onClick={open} className="v2-button">
            Start your project ↗
          </button>
          <a href="#work" className="v2-text-link">
            Explore our work ↓
          </a>
        </div>
      </div>
      <a href="#work" className="v2-hero-image">
        <img
          src={PROJECTS[1]!.cover.src}
          alt="Solis concept website — an example of our approach to hospitality web design"
          width="1408"
          height="1008"
          fetchPriority="high"
        />
        <span>
          Design study / Solis<span>Explore the approach ↗</span>
        </span>
      </a>
      <div className="v2-trust">
        <p>Good work starts with a conversation.</p>
        <span>Direct access to the founders</span>
        <span>Websites + social media</span>
        <span>Built around your business</span>
      </div>
    </section>
  );
}
