import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";

const cvUrl =
  "https://drive.google.com/file/d/1Pb6rasJ_9lM06mRlQuH7X3gPqeVRn0R7/view?usp=sharing";

const navLinks = [
  { href: "#sobre", label: "sobre" },
  { href: "#destaque", label: "destaque" },
  { href: "#web", label: "trabalho" },
  { href: "#skill", label: "habilidades" },
  { href: "#contato", label: "contato" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  const toggleMenu = () => setMenuOpen((current) => !current);

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash || "#hero");
    updateHash();
    window.addEventListener("hashchange", updateHash);

    const sections = [{ href: "#hero" }, ...navLinks]
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveHash(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.3, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener("hashchange", updateHash);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--color-border)] bg-[rgba(10,9,8,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1000px,calc(100%-3rem))] items-center justify-between py-4">
        <a
          href="#hero"
          className="text-[0.92rem] font-medium tracking-[-0.01em] text-[var(--color-text-strong)]"
          onClick={() => setActiveHash("#hero")}
        >
          lucas vargas
          <span className="text-[var(--color-red)]">.</span>
        </a>

        <button
          className="text-[var(--color-text-mid)] lg:hidden"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {menuOpen ? <VscChromeClose size={18} /> : <RxHamburgerMenu size={18} />}
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveHash(link.href)}
              data-cursor="link"
              className={`text-[0.82rem] transition-colors duration-200 ${
                activeHash === link.href
                  ? "text-[var(--color-text-strong)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-strong)]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            className="text-[0.82rem] text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-red-soft)]"
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
          >
            currículo ↗
          </a>
        </nav>
      </div>

      {menuOpen ? (
        <div className="border-t border-[var(--color-border)] bg-[rgba(10,9,8,0.97)] backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex w-[min(1000px,calc(100%-2.25rem))] flex-col py-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`border-b border-[var(--color-border)] py-3.5 text-[0.9rem] transition ${
                  activeHash === link.href
                    ? "text-[var(--color-text-strong)]"
                    : "text-[var(--color-text-muted)]"
                }`}
                onClick={() => {
                  setActiveHash(link.href);
                  toggleMenu();
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              className="py-3.5 text-[0.9rem] text-[var(--color-red-soft)]"
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              currículo ↗
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
