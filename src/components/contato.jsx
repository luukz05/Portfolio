import React from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import envelope from "../assets/envelope.svg";

const Contact = () => {
  return (
    <section
      id="contato"
      className="flex flex-col items-center justify-center py-20 px-6 text-offwhite max-w-7xl mx-auto"
    >
      {/* Título */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-ch1 text-center">
        Entre em Contato
      </h2>

      <p className="text-base sm:text-lg mb-8 text-center max-w-xl">
        Ficou interessado? Me chama nas redes ou envie um e-mail!
      </p>

      {/* Redes */}
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {/* GitHub */}
        <a
          href="https://github.com/luukz05"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-ch2 hover:bg-ch3 transition px-5 py-3 rounded-xl shadow-lg"
        >
          <img src={github} alt="GitHub" className="h-6 invert" />
          <span className="font-bold text-base sm:text-lg">GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/lucasvargasdev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-ch2 hover:bg-ch3 transition px-5 py-3 rounded-xl shadow-lg"
        >
          <img src={linkedin} alt="LinkedIn" className="h-6 invert" />
          <span className="font-bold text-base sm:text-lg">LinkedIn</span>
        </a>

        {/* E-mail */}
        <a
          href="mailto:lucasvargasdev05@gmail.com"
          className="flex items-center gap-3 bg-ch2 hover:bg-ch3 transition px-5 py-3 rounded-xl shadow-lg"
        >
          <img src={envelope} alt="E-mail" className="h-6 invert" />
          <span className="font-bold text-base sm:text-lg">
            lucasvargasdev05@gmail.com
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
