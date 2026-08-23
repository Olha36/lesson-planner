import Image, { StaticImageData } from "next/image";

type StudentsCardProps = {
  name: string;
  age: string | number;
  goal: string;
  avatar: StaticImageData;
};

const StudentsCard = ({ name, age, goal, avatar }: StudentsCardProps) => {
  return (
    <article className="flex max-w-[240px] items-start gap-4 rounded-2xl bg-white p-4 shadow-xl">
      <Image
        src={avatar}
        alt={`${name} avatar`}
        className="h-12 w-12 rounded-full object-cover"
      />
      <div className="min-w-0">
        <h3 className="truncate text-lg font-semibold">{name}</h3>
        <p className="text-sm text-[var(--color-text-secondary)]">{age}</p>
        <p className="mt-1 text-sm font-medium text-indigo-600">{goal}</p>
      </div>
    </article>
  );
};

export default StudentsCard;
