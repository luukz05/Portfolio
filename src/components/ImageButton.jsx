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
      .then(() => alert("Email copiado para a area de transferencia."))
      .catch(() => alert("Nao foi possivel copiar o email."));
  };

  return (
    <a
      href={isCopy ? "#" : href}
      target={newTab && !isMailto && !isCopy ? "_blank" : "_self"}
      rel={newTab && !isMailto && !isCopy ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-bg-elevated)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] transition duration-200 hover:bg-[rgba(209,31,49,0.12)]"
      aria-label={alt}
    >
      <img src={src} alt={alt} className="h-4 w-4 object-contain invert" />
    </a>
  );
}

export default ImageLinkButton;
