import { ArrowUpRight } from "lucide-react";
import { KITE_AND_KEY, kiteScreens } from "@/data/work";
export function FeaturedWork({ onOpen }: { onOpen: () => void }) {
  return (
    <article className="kite-feature" aria-labelledby="kite-feature-heading">
      <div className="kite-copy">
        <p className="v2-eyebrow">Hospitality · Website development</p>
        <h3 id="kite-feature-heading">
          Kite <i>&amp;</i> Key
        </h3>
        <p>
          We built Kite &amp; Key’s website around two journeys: finding a stay on the Blouberg
          coast and getting a property ready to host.
        </p>
        <div className="featured-actions">
          <a
            className="v2-button"
            href={KITE_AND_KEY.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit live website <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <button className="v2-text-link" onClick={onOpen}>
            View case study
          </button>
        </div>
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
    </article>
  );
}
