"use client";

import Image, { StaticImageData } from "next/image";

type StudentsCardProps = {
  name: string;
  age: string | number;
  goal: string;
  avatar: StaticImageData;
  lastLesson: string;
  viewProfile?: string;
};

const StudentsCard = ({
  name,
  age,
  goal,
  avatar,
  lastLesson,
}: StudentsCardProps) => {
  return (
    <article className=" bg-white p-4 shadow-xl">
      <div className="flex items-start gap-4 rounded-2xl">
        <Image
          src={avatar}
          alt={`${name} avatar`}
          className="h-12 w-12 object-cover"
        />
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold">{name}</h3>
          <p className="text-sm text-[var(--color-text-secondary)] my-2">
            {age}
          </p>
          <div className="bg-[#a187ec4f] rounded-5px p-1">
            <p className="mt-1 text-sm font-medium text-[var(--color-primary-purple)]">
              {goal}
            </p>
          </div>

          <p className="text-sm text-[var(--color-text-secondary)] my-2">
            {lastLesson}
          </p>
        </div>
      </div>

      <button className="bg-[#f7f6fb] w-full p-2 cursor-pointer">
        View Profile
      </button>
    </article>
  );
};

export default StudentsCard;
