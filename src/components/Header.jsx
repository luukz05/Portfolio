import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../assets/logo.png";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-offblack/98 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Logo ou Nome */}
        <div className="flex items-center gap-2">
          <img src={logo} className="h-12" />
          {/* <a href="#hero" className="font-black text-white text-lg">
            Lucas Vargas
          </a> */}
        </div>

        {/* Botão Hamburguer */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {menuOpen ? <VscChromeClose /> : <RxHamburgerMenu />}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden sm:flex gap-6 items-center">
          <a
            href="#hero"
            className="font-black text-white text-sm sm:text-base"
          >
            Início
          </a>
          <a
            href="#sobre"
            className="font-black text-white text-sm sm:text-base"
          >
            Sobre Mim
          </a>
          <a
            className="font-black text-ch1 animate-pulse text-sm sm:text-base"
            href="#destaque"
          >
            Destaque
          </a>
          <a href="#web" className="font-black text-white text-sm sm:text-base">
            Web
          </a>
          <a
            href="#games"
            className="font-black text-white text-sm sm:text-base"
          >
            Games
          </a>
          <a
            href="#skill"
            className="font-black text-white text-sm sm:text-base"
          >
            Habilidades
          </a>
          <a
            className="font-black text-white bg-ch2 px-3 py-2 rounded-md text-sm sm:text-base"
            href="https://drive.google.com/file/d/1eLlh3X8jOk83n1Jwb_vIb1S4mHQeiDks/view?usp=sharing"
            target="_blank"
          >
            Baixar CV
          </a>
        </nav>
      </div>

      {/* Menu Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden  flex flex-col gap-4 px-4 py-3 bg-offblack/60">
          <a
            href="#hero"
            className="font-black text-white hover:bg-ch4 px-3 py-2 rounded-md"
            onClick={toggleMenu}
          >
            Início
          </a>
          <a
            href="#sobre"
            className="font-black text-white  hover:bg-ch4 px-3 py-2 rounded-md"
            onClick={toggleMenu}
          >
            Sobre Mim
          </a>
          <a
            className="font-black text-ch1 animate-pulse  hover:bg-ch4 px-3 py-2 rounded-md"
            href="#destaque"
            onClick={toggleMenu}
          >
            Destaque
          </a>
          <a
            href="#web"
            className="font-black text-white  hover:bg-ch4 px-3 py-2 rounded-md"
            onClick={toggleMenu}
          >
            Web
          </a>
          <a
            href="#games"
            className="font-black text-white  hover:bg-ch4 px-3 py-2 rounded-md"
            onClick={toggleMenu}
          >
            Games
          </a>
          <a
            href="#skill"
            className="font-black text-white  hover:bg-ch4 px-3 py-2 rounded-md"
            onClick={toggleMenu}
          >
            Habilidades
          </a>
          <a
            className="font-black text-white bg-ch2 px-3 py-2 rounded-md"
            href="https://drive.google.com/file/d/1eLlh3X8jOk83n1Jwb_vIb1S4mHQeiDks/view?usp=sharing"
            target="_blank"
          >
            Baixar CV
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
