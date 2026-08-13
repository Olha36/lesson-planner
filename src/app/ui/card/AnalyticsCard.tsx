type AnalyticsCardProps = {
  subtitle: string;
  title: string;
  description: string;
};

const AnalyticsCard = ({
  subtitle,
  title,
  description,
}: AnalyticsCardProps) => {
  return (
    <>
      <div className="shadow-xl max-w-[150px] p-5">
        <p>{subtitle}</p>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default AnalyticsCard;
