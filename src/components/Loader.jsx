import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onDone }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dur = reduce ? 250 : 1300;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      // ease-out so the count decelerates near 100
      const eased = 1 - Math.pow(1 - p, 2);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 320);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <motion.div
      className="loader"
      initial={{ y: 0 }}
      exit={{ y: "-101%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="loader-inner">
        <span className="loader-tag">// inicializando</span>
        <span className="loader-name">
          lucas vargas<span className="loader-dot">.</span>
        </span>
      </div>
      <span className="loader-count">{String(count).padStart(3, "0")}</span>
      <div className="loader-bar">
        <motion.div
          className="loader-bar-fill"
          style={{ scaleX: count / 100 }}
        />
      </div>
    </motion.div>
  );
}
