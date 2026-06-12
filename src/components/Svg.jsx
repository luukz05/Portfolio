export const Plus = ({ size = 10, className }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 10 10"
    fill="none"
    aria-hidden="true"
  >
    <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export const ArrowDown = ({ className }) => (
  <svg
    className={className}
    width="14"
    height="34"
    viewBox="0 0 14 34"
    fill="none"
    aria-hidden="true"
  >
    <path d="M7 0v30M1 24l6 8 6-8" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export const ArrowUpRight = ({ className }) => (
  <svg
    className={className}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2 10L10 2M4 2h6v6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="square"
    />
  </svg>
);

// Decorative dot-grid used behind the hero (drawn as an SVG pattern).
export const DotGrid = ({ className }) => (
  <svg className={className} width="100%" height="100%" aria-hidden="true">
    <defs>
      <pattern
        id="dotgrid"
        x="0"
        y="0"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="1" cy="1" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dotgrid)" />
  </svg>
);

export const Grain = () => (
  <svg className="grain" aria-hidden="true">
    <filter id="grain-noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.82"
        numOctaves="2"
        stitchTiles="stitch"
      />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#grain-noise)" />
  </svg>
);
