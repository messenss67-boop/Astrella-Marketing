const stages = [
  ["Listen", "We learn about your business, customers and what you want to improve."],
  ["Plan", "Together, we agree on the scope, content, responsibilities and schedule."],
  ["Create", "We design and build, sharing progress with you and making room for feedback."],
  [
    "Launch & learn",
    "We test the details before launch, then discuss what support and improvements come next.",
  ],
];
export function Process() {
  return (
    <section id="process" className="shell py-20 sm:py-28">
      <div className="v2-eyebrow">How we work</div>
      <h2 className="display mt-6 text-5xl sm:text-7xl">A clear path forward.</h2>
      <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map(([title, copy], i) => (
          <li key={title} className="border-t border-line pt-6">
            <span className="label-xs">0{i + 1}</span>
            <h3 className="mt-5 font-serif text-3xl">{title}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
