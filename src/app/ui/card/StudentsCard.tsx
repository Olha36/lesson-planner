import Image, { StaticImageData } from "next/image";

type StudentsCardProps = {
  name: string;
  age: string | number;
  goal: string;
  avatar: StaticImageData;
};

const StudentsCard = ({ name, age, goal, avatar }: StudentsCardProps) => {
  return (
    <>
      <div className="shadow-xl max-w-[150px] p-4 flex gap-5 items-start justify-center">
        <div>
          <Image src={avatar} alt="image" />
        </div>
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p >{age}</p>
          <p className=" text-indigo-600">{goal}</p>
        </div>
      </div>
    </>
  );
};

export default StudentsCard;
