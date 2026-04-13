import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";

const navLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#destaque", label: "Destaque" },
  { href: "#web", label: "Web" },
  { href: "#games", label: "Games" },
  { href: "#skill", label: "Skills" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  const toggleMenu = () => setMenuOpen((current) => !current);

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || "#hero");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveHash(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.15, 0.3, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("hashchange", updateHash);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[rgba(255,255,255,0.04)] bg-[rgba(7,7,8,0.58)] backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#hero"
          className="flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-text-strong)]"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-[var(--color-red)]" />
          Lucas Vargas
        </a>

        <button
          className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.06)] p-2 text-[var(--color-text-strong)] sm:hidden"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {menuOpen ? <VscChromeClose size={18} /> : <RxHamburgerMenu size={18} />}
        </button>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveHash(link.href)}
              className={`group relative pb-2 text-[0.68rem] uppercase tracking-[0.32em] transition-colors duration-200 ${
                activeHash === link.href
                  ? "text-[var(--color-text-strong)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-strong)]"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-px bg-[var(--color-red-soft)] transition-all duration-300 ${
                  activeHash === link.href
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                }`}
              />
            </a>
          ))}
          <a
            className="inline-flex min-h-10 items-center rounded-full bg-[rgba(209,31,49,0.12)] px-4 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-text-strong)] shadow-[inset_0_0_0_1px_rgba(209,31,49,0.22)] transition hover:bg-[rgba(209,31,49,0.18)]"
            href="https://drive.google.com/file/d/1x7XYtnQZpaOHbQfYpMlMhHPu6qjrgdgt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </nav>
      </div>

      {menuOpen ? (
        <div className="border-t border-[rgba(255,255,255,0.05)] bg-[rgba(10,10,12,0.96)] sm:hidden">
          <nav className="mx-auto flex w-full max-w-[1440px] flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full border px-4 py-3 text-sm uppercase tracking-[0.24em] transition ${
                  activeHash === link.href
                    ? "border-[rgba(209,31,49,0.2)] text-[var(--color-text-strong)]"
                    : "border-transparent text-[var(--color-text-muted)] hover:border-[rgba(255,255,255,0.06)] hover:text-[var(--color-text-strong)]"
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
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full border border-[rgba(209,31,49,0.26)] bg-[rgba(209,31,49,0.1)] px-4 text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-text-strong)]"
              href="https://drive.google.com/file/d/1x7XYtnQZpaOHbQfYpMlMhHPu6qjrgdgt/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Baixar CV
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
