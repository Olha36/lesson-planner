type AnalyticsCardProps = {
  subtitle: string;
  title: string;
  description: string;
  className?: string;
};

const AnalyticsCard = ({
  subtitle,
  title,
  description,
  className = "",
}: AnalyticsCardProps) => {
  return (
    <article
      className={[
        "flex h-[160px] w-full flex-col justify-between overflow-hidden rounded-xl",
        "border border-black/5 bg-white p-5 shadow-xl",
        className,
      ].join(" ")}
    >
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
        {subtitle}
      </p>
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--color-text-primary)]">
          {title}
        </h2>
        <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
          {description}
        </p>
      </div>
    </article>
  );
};

export default AnalyticsCard;
