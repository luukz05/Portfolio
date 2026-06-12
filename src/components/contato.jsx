import { motion } from "framer-motion";
import { fadeUp, staggerFast, viewportCard } from "../lib/motion";

const links = [
  {
    key: "github",
    href: "https://github.com/luukz05",
    display: "github.com/luukz05",
  },
  {
    key: "linkedin",
    href: "https://linkedin.com/in/lucasvargasdev",
    display: "/in/lucasvargasdev",
  },
  {
    key: "email",
    href: "mailto:lucasvargasdev05@gmail.com",
    display: "lucasvargasdev05@gmail.com",
  },
];

const Contact = () => {
  return (
    <motion.div
      variants={staggerFast}
      initial="hidden"
      whileInView="show"
      viewport={viewportCard}
    >
      {links.map((item) => {
        const isMail = item.href.startsWith("mailto:");
        return (
          <motion.a
            key={item.key}
            href={item.href}
            target={isMail ? "_self" : "_blank"}
            rel={isMail ? undefined : "noopener noreferrer"}
            className="contact-row"
            variants={fadeUp}
            data-cursor="link"
          >
            <span className="contact-key">{item.key}</span>
            <span className="contact-val">{item.display}</span>
            <span className="contact-arrow">↗</span>
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Contact;
