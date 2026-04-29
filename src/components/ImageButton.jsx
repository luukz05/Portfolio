function ImageLinkButton({ href, src, alt = "Link", newTab = true }) {
  const isMailto = href.startsWith("mailto:");
  const isCopy = href.startsWith("copy:");

  const handleClick = (event) => {
    if (!isCopy) {
      return;
    }

    event.preventDefault();
    const textToCopy = href.replace("copy:", "");
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => alert("E-mail copiado para a área de transferência."))
      .catch(() => alert("Não foi possível copiar o e-mail."));
  };

  return (
    <a
      href={isCopy ? "#" : href}
      target={newTab && !isMailto && !isCopy ? "_blank" : "_self"}
      rel={newTab && !isMailto && !isCopy ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,255,255,0.03)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] transition duration-200 hover:bg-[linear-gradient(135deg,rgba(240,90,104,0.22),rgba(209,31,49,0.12))] hover:shadow-[inset_0_0_0_1px_rgba(240,90,104,0.22)]"
      aria-label={alt}
    >
      <img src={src} alt={alt} className="h-4 w-4 object-contain invert" />
    </a>
  );
}

export default ImageLinkButton;
