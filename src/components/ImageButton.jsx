import React from "react";

function ImageLinkButton({ href, src, alt = "Link", newTab = true }) {
  const isMailto = href.startsWith("mailto:");
  const isCopy = href.startsWith("copy:");

  const handleClick = (e) => {
    if (isCopy) {
      e.preventDefault();
      const textToCopy = href.replace("copy:", "");
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => alert("Email copiado para a área de transferência!"))
        .catch(() => alert("Erro ao copiar o email."));
    }
  };

  return (
    <a
      href={isCopy ? "#" : href}
      target={newTab && !isMailto && !isCopy ? "_blank" : "_self"}
      rel={newTab && !isMailto && !isCopy ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      className="inline-block p-2 rounded-full hover:scale-110 transition-transform duration-200"
    >
      <img src={src} alt={alt} className="w-15 h-15 object-contain invert" />
    </a>
  );
}

export default ImageLinkButton;
