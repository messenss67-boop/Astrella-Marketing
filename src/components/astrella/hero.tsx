import { ArrowUpRight } from "lucide-react";
import { useInquiry } from "./inquiry";

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
            Start your project <ArrowUpRight size={18} aria-hidden="true" />
          </button>
          <a href="#work" className="v2-text-link">
            Explore our work ↓
          </a>
        </div>
      </div>
    </section>
  );
}
