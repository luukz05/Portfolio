const TechTag = ({ label }) => {
  return (
    <span className="inline-flex min-h-8 items-center rounded-full bg-[rgba(255,255,255,0.02)] px-3 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[var(--color-text-mid)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
      {label}
    </span>
  );
};

export default TechTag;
