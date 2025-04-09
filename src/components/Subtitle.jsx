import { useEffect, useState } from "react";

export default function DigitingEffect() {
  const fullText = "Deesenvolvedor Fullstack"; // <- CONFERE AQUI
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <p className="text-off text-4xl font-mono">
      {displayedText}
      <span className="animate-blinking-cursor">|</span>
    </p>
  );
}
