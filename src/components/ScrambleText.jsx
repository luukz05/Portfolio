import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>[]{}=*+-_";

export default function ScrambleText({
  text,
  className,
  as: Tag = "span",
  trigger = "inView",
  duration = 650,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(text);
  const started = useRef(false);

  useEffect(() => {
    const go = trigger === "mount" || inView;
    if (!go || started.current) return;
    started.current = true;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(text);
      return;
    }

    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const revealed = Math.floor(p * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        if (i < revealed || text[i] === " ") out += text[i];
        else out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setDisplay(out);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(text);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, text, trigger, duration]);

  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  );
}
