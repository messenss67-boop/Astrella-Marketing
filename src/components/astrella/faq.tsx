const answers = [
  [
    "How much does a website cost?",
    "The cost depends on the pages, features, content and support you need. Tell us about your business and we’ll discuss the scope before preparing a quote.",
  ],
  [
    "How long does a website take?",
    "Timing depends on the scope and how ready your content is. We’ll agree on a schedule with you before work starts.",
  ],
  [
    "Can you redesign my existing website?",
    "Yes. We can review what works, what is getting in the way and whether a redesign or a more focused update makes sense.",
  ],
  [
    "Will my website work on mobile?",
    "Mobile layouts are part of the design and development process, with navigation, content and contact options considered for smaller screens.",
  ],
  [
    "Do you offer social media management?",
    "Yes. We can help with planning, content direction and social media management. We’ll agree which platforms and activities suit your business.",
  ],
  [
    "Can you help my business appear on Google?",
    "We can help with the technical and content foundations of search visibility. Rankings depend on competition and many other factors; we do not guarantee a search position.",
  ],
  [
    "Who owns the finished website?",
    "Ownership, hosting and any third-party licences should be confirmed in your project agreement before work begins.",
  ],
  [
    "Can you help after launch?",
    "Tell us what support you need. We can discuss updates, maintenance and ongoing improvements as part of your scope.",
  ],
  [
    "Do you work with small businesses?",
    "Yes. We work with local businesses, including trades, hospitality, wellness and professional services.",
  ],
  [
    "Do you only work in Cape Town?",
    "We’re based in Cape Town and can collaborate remotely. Get in touch to discuss your project wherever you are based.",
  ],
];
export function FAQ() {
  return (
    <section id="faq" className="v2-faq shell">
      <div>
        <div className="v2-eyebrow">A few useful answers</div>
        <h2>
          Before we
          <br />
          <em>get started.</em>
        </h2>
      </div>
      <div>
        {answers.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
