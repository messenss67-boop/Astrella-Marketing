import { useInquiry } from "./inquiry";
export function Closing() {
  const { open } = useInquiry();
  return (
    <section id="contact" className="v2-contact shell">
      <div className="v2-eyebrow">Let’s talk</div>
      <h2>
        Your next chapter
        <br />
        <em>starts here.</em>
      </h2>
      <div className="v2-contact-bottom">
        <p>
          A new website? A stronger social presence? Tell us what you have in mind. We reply within
          two working days.
        </p>
        <button onClick={open} className="v2-button">
          Start your project ↗
        </button>
      </div>
      <div className="v2-contact-links">
        <a href="mailto:hello@astrellamarketing.com">hello@astrellamarketing.com ↗</a>
        <a href="tel:+27823051165">082 305 1165 ↗</a>
      </div>
    </section>
  );
}
