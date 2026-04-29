import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { fadeUp, scaleIn, staggerFast, viewportCard } from "../lib/motion";

const links = [
  {
    href: "https://github.com/luukz05",
    label: "GitHub",
    detail: "Projetos, código e histórico técnico.",
    cta: "Abrir perfil",
    icon: FaGithub,
  },
  {
    href: "https://linkedin.com/in/lucasvargasdev",
    label: "LinkedIn",
    detail: "Experiência, networking e contato profissional.",
    cta: "Ver perfil",
    icon: FaLinkedinIn,
  },
  {
    href: "mailto:lucasvargasdev05@gmail.com",
    label: "Email",
    detail: "Canal mais direto para propostas e conversas.",
    cta: "Enviar e-mail",
    icon: HiOutlineMail,
  },
];

const Contact = () => {
  return (
    <motion.section
      className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3"
      variants={staggerFast}
      initial="hidden"
      whileInView="show"
      viewport={viewportCard}
    >
      {links.map((item) => (
        <motion.a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
          rel={
            item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"
          }
          className="group flex min-h-40 h-full flex-col rounded-[30px] bg-[rgba(14,14,16,0.76)] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-200 hover:bg-[linear-gradient(135deg,rgba(240,90,104,0.1),rgba(209,31,49,0.05))] hover:shadow-[inset_0_0_0_1px_rgba(240,90,104,0.14)] sm:p-6"
          variants={fadeUp}
          whileHover={{ y: -4 }}
        >
          <div className="flex flex-1 flex-col">
            <div className="flex items-start gap-4">
              <motion.div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-[linear-gradient(135deg,rgba(240,90,104,0.18),rgba(209,31,49,0.08))] shadow-[inset_0_0_0_1px_rgba(240,90,104,0.18)] transition duration-200 group-hover:bg-[linear-gradient(135deg,rgba(240,90,104,0.26),rgba(209,31,49,0.14))] sm:h-16 sm:w-16"
                variants={scaleIn}
              >
                <item.icon
                  aria-hidden="true"
                  className="text-[1.5rem] text-[var(--color-text-strong)] sm:text-[1.8rem]"
                />
              </motion.div>
              <div className="min-w-0">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-red-soft)]">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-text-mid)] sm:leading-7">
                  {item.detail}
                </p>
              </div>
            </div>
            <p className="mt-auto pt-6 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-red-muted)] sm:text-[0.72rem] sm:tracking-[0.28em]">
              {item.cta}
            </p>
          </div>
        </motion.a>
      ))}
    </motion.section>
  );
};

export default Contact;
