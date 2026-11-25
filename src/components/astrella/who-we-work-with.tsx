const industries = [
  [
    "Trades & construction",
    "Make your services clear, show completed work and give customers an easy way to request a quote.",
  ],
  [
    "Hospitality",
    "Put menus, rooms and reservations within reach, with a website that captures the experience.",
  ],
  [
    "Wellness & aesthetics",
    "Explain treatments clearly and help people feel informed before they enquire about an appointment.",
  ],
  [
    "Property",
    "Give listings the space they deserve and make contacting the right agent straightforward.",
  ],
  [
    "Professional services",
    "Show your expertise in plain language, so prospective clients know who can help.",
  ],
  [
    "Growing local businesses",
    "Bring your website and social presence together, with a clear next step for every visitor.",
  ],
];
export function WhoWeWorkWith() {
  return (
    <section className="v2-industries shell">
      <div className="v2-eyebrow">Who we help</div>
      <h2>
        Local businesses.
        <br />
        <em>Real ambition.</em>
      </h2>
      <div className="v2-industry-grid">
        {industries.map(([title, copy]) => (
          <div key={title}>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
