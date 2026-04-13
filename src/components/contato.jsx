import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import envelope from "../assets/envelope.svg";

const links = [
  {
    href: "https://github.com/luukz05",
    label: "GitHub",
    detail: "github.com/luukz05",
    icon: github,
  },
  {
    href: "https://linkedin.com/in/lucasvargasdev",
    label: "LinkedIn",
    detail: "linkedin.com/in/lucasvargasdev",
    icon: linkedin,
  },
  {
    href: "mailto:lucasvargasdev05@gmail.com",
    label: "Email",
    detail: "lucasvargasdev05@gmail.com",
    icon: envelope,
  },
];

const Contact = () => {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {links.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
          rel={
            item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"
          }
          className="group flex min-h-40 flex-col justify-between rounded-[30px] bg-[rgba(14,14,16,0.76)] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-200 hover:bg-[rgba(209,31,49,0.05)]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[rgba(255,255,255,0.02)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
            <img src={item.icon} alt={item.label} className="h-4 w-4 invert" />
          </div>
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-red-soft)]">
              {item.label}
            </p>
            <p className="mt-3 text-base text-[var(--color-text-mid)]">
              {item.detail}
            </p>
          </div>
        </a>
      ))}
    </section>
  );
};

export default Contact;
