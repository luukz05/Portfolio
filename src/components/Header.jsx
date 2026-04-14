import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import { fadeUp, scaleIn, staggerFast } from "../lib/motion";

const navLinks = [
  { href: "#hero", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#destaque", label: "Destaque" },
  { href: "#web", label: "Projetos web" },
  { href: "#games", label: "Projetos de jogos" },
  { href: "#skill", label: "Habilidades" },
  { href: "#contato", label: "Contato" },
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
    <motion.header
      className="fixed top-0 z-50 w-full border-b border-[rgba(255,255,255,0.04)] bg-[rgba(7,7,8,0.58)] backdrop-blur-2xl"
      variants={fadeUp}
      initial="hidden"
      animate="show"
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-4 lg:px-8">
        <motion.a
          href="#hero"
          className="flex items-center text-[0.78rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-text-strong)]"
          variants={fadeUp}
        >
          Lucas Vargas
        </motion.a>

        <button
          className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.06)] p-2 text-[var(--color-text-strong)] lg:hidden"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {menuOpen ? <VscChromeClose size={18} /> : <RxHamburgerMenu size={18} />}
        </button>

        <motion.nav
          className="hidden items-center gap-5 xl:gap-8 lg:flex"
          variants={staggerFast}
          initial="hidden"
          animate="show"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={() => setActiveHash(link.href)}
              variants={fadeUp}
              className={`group relative pb-2 text-[0.62rem] uppercase tracking-[0.24em] transition-colors duration-200 xl:text-[0.68rem] xl:tracking-[0.32em] ${
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
            </motion.a>
          ))}
          <motion.a
            className="inline-flex min-h-10 items-center rounded-full bg-[linear-gradient(135deg,rgba(240,90,104,0.2),rgba(209,31,49,0.12))] px-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-text-strong)] shadow-[inset_0_0_0_1px_var(--color-red-border-soft)] transition hover:bg-[linear-gradient(135deg,rgba(240,90,104,0.28),rgba(209,31,49,0.18))] xl:px-4 xl:text-[0.68rem] xl:tracking-[0.32em]"
            href="https://drive.google.com/file/d/1x7XYtnQZpaOHbQfYpMlMhHPu6qjrgdgt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            variants={scaleIn}
          >
            Baixar currículo
          </motion.a>
        </motion.nav>
      </div>

      {menuOpen ? (
        <div className="border-t border-[rgba(255,255,255,0.05)] bg-[rgba(10,10,12,0.96)] lg:hidden">
          <nav className="mx-auto flex w-full max-w-[1440px] flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full border px-4 py-3 text-sm uppercase tracking-[0.24em] transition ${
                  activeHash === link.href
                    ? "border-[var(--color-red-border-soft)] text-[var(--color-text-strong)]"
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
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-red-border-soft)] bg-[linear-gradient(135deg,rgba(240,90,104,0.18),rgba(209,31,49,0.1))] px-4 text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-text-strong)]"
              href="https://drive.google.com/file/d/1x7XYtnQZpaOHbQfYpMlMhHPu6qjrgdgt/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Baixar currículo
            </a>
          </nav>
        </div>
      ) : null}
    </motion.header>
  );
};

export default Header;
