import { Logo } from "./logo";
export function Footer() {
  return (
    <footer className="shell v2-footer">
      <div>
        <a href="/#top" aria-label="Astrella Marketing home">
          <Logo />
        </a>
        <p>
          Website design & social media marketing.
          <br />
          Cape Town, South Africa.
        </p>
      </div>
      <nav aria-label="Footer">
        <a href="/#work">Work</a>
        <a href="/#services">Services</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </nav>
      <div>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <p>© {new Date().getFullYear()} Astrella Marketing</p>
      </div>
    </footer>
  );
}
