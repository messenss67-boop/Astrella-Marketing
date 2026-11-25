import founders from "@/assets/founders.webp";
export function About() {
  return (
    <section id="about" className="v2-about shell">
      <img
        src={founders}
        alt="The two founders of Astrella Marketing"
        width="1254"
        height="1254"
        loading="lazy"
      />
      <div>
        <div className="v2-eyebrow">The people behind the work</div>
        <h2>
          A small team.
          <br />
          <em>On your side.</em>
        </h2>
        <p>
          We’re an independent Cape Town marketing agency helping businesses build a stronger online
          presence. You work directly with the people designing your website and shaping your
          marketing.
        </p>
        <p>Fewer layers. Clear communication. A plan built around what your business needs next.</p>
        <div className="v2-founder">
          <strong>Sebastian Messens</strong>
          <span>Co-founder</span>
          <a href="mailto:sebastian@astrellamarketing.com">Email Sebastian ↗</a>
        </div>
      </div>
    </section>
  );
}
