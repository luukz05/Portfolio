import React from "react";

function ImageLinkButton({ href, src, alt = "Link", newTab = true }) {
  const isMailto = href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={newTab && !isMailto ? "_blank" : "_self"}
      rel={newTab && !isMailto ? "noopener noreferrer" : undefined}
      className="inline-block p-2 rounded-full hover:scale-110 transition-transform duration-200"
    >
      <img src={src} alt={alt} className="w-15 h-15 object-contain invert" />
    </a>
  );
}

export default ImageLinkButton;
