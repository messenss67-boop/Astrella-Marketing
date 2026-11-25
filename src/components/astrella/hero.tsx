import { useInquiry } from "./inquiry";
import { KITE_AND_KEY, kiteScreens } from "@/data/work";
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
      <section className="kite-feature" aria-labelledby="kite-feature-heading">
        <div className="kite-copy">
          <p className="kite-kicker">Featured client website</p>
          <h2 id="kite-feature-heading">
            Kite <i>&amp;</i> Key
          </h2>
          <p>
            A coastal home for Blouberg’s short stays. Built for the people who own them and the
            guests who book them.
          </p>
          <a
            className="kite-visit"
            href={KITE_AND_KEY.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit live website <span aria-hidden="true">↗</span>
          </a>
        </div>
        <figure className="kite-screens">
          <div className="kite-browser">
            <div className="kite-bar">
              <i aria-hidden="true" />
              kiteandkey.co.za
            </div>
            <img
              src={kiteScreens.desktop.src}
              alt={kiteScreens.desktop.alt}
              width={1440}
              height={900}
              fetchPriority="high"
            />
          </div>
          <img
            className="kite-phone"
            src={kiteScreens.mobile.src}
            alt={kiteScreens.mobile.alt}
            width={390}
            height={844}
          />
        </figure>
      </section>
      <div className="v2-trust">
        <p>Good work starts with a conversation.</p>
        <span>Direct access to the founders</span>
        <span>Websites + social media</span>
        <span>Built around your business</span>
      </div>
    </section>
  );
}
