import Image, { StaticImageData } from "next/image";


type StudentsCardProps = {
  unitName: string;
  studentName: string;
  level: string;
  avatar: StaticImageData;
  grammarTopic: string;
};

const RecentLessons = ({
  unitName,
  studentName,
  level,
  avatar,
  grammarTopic,
}: StudentsCardProps) => {
  return (
    <div className="recent-lessons">
      <article className="recent-lesson-row">
        <Image
          src={avatar}
          alt={`${studentName} avatar`}
          className="recent-lesson-avatar"
        />
        <div className="recent-lesson-copy">
          <h3 className="truncate">{unitName}</h3>
          <div className="recent-lesson-meta">
            <span>{studentName}</span><span aria-hidden="true">·</span><span>{level}</span><span aria-hidden="true">·</span><span>{grammarTopic}</span>
          </div>
        </div>
        <time className="recent-lesson-date">13.08.2026</time>
        <span className="recent-lesson-duration">60 min</span>
      </article>
    </div>
  );
};
export default RecentLessons;
