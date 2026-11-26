import { notFound } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { getStudentById } from "@/data/student";
import StudentHeader from "./components/StudentHeader";
import StudentTabs from "./components/StudentTabs";
import StudentOverview from "./components/StudentOverview";
import LessonsTab from "@/app/components/lessonsTab/LessonsTab";
import ProgressTab from "@/app/components/progressTab/ProgressTab";
import StudentsNotes from "@/app/components/studentsNotes/StudentsNotes";

interface StudentPageProps {
  params: Promise<{
    studentId: string;
  }>;
  searchParams: Promise<{
    tab?: string;
  }>;
}

const validTabs = ["overview", "lessons", "progress", "notes"] as const;

type StudentTab = (typeof validTabs)[number];

export default async function StudentPage({
  params,
  searchParams,
}: StudentPageProps) {
  const { studentId } = await params;
  const { tab } = await searchParams;

  const student = getStudentById(studentId);

  if (!student) {
    notFound();
  }

  const activeTab: StudentTab = validTabs.includes(tab as StudentTab)
    ? (tab as StudentTab)
    : "overview";

  return (
    <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
      <StudentHeader
        studentId={studentId}
        name={student.name}
        level={student.level}
        age={student.age}
      />

      <StudentTabs studentId={studentId} activeTab={activeTab} />

      {activeTab === "overview" && (
        <StudentOverview
          name={student.name}
          level={student.level}
          age={student.age}
          focus="Speaking"
          goal="Fluency"
          weakness="Grammar"
          notes="Needs more speaking practice. Shy at the beginning of the lesson."
          goals={[
            { title: "Improve speaking fluency", progress: 80 },
            { title: "Learn new vocabulary", progress: 70 },
            { title: "Master Present Perfect", progress: 60 },
            { title: "Improve confidence", progress: 75 },
          ]}
          lessons={[
            {
              title: "Life Changes",
              subtitle: "Present Perfect · Speaking focus",
              date: "13.08.2026",
              duration: "60 min",
            },
            {
              title: "Technology in Our Life",
              subtitle: "Past Simple / Present Perfect",
              date: "12.08.2026",
              duration: "60 min",
            },
            {
              title: "Travel Experiences",
              subtitle: "Present Simple",
              date: "10.08.2026",
              duration: "45 min",
            },
          ]}
        />
      )}

      {activeTab === "lessons" && <LessonsTab lessons={student.lessons} />}

      {activeTab === "progress" && (
        <ProgressTab
          overallProgress={75}
          monthlyProgress={[
            { month: "Aug", progress: 42 },
            { month: "Sep", progress: 65 },
            { month: "Oct", progress: 75 },
          ]}
        />
      )}

      {activeTab === "notes" &&
        (student.notes?.length ? (
          <StudentsNotes notes={student.notes} />
        ) : (
          <TabPlaceholder
            title="Notes"
            description="No notes yet. Add your first note to keep track of your student's progress."
          />
        ))}
    </Box>
  );
}

function TabPlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Box className="py-8">
      <Typography variant="h5" className="font-semibold mb-2">
        {title}
      </Typography>

      <Typography color="text.secondary">{description}</Typography>
    </Box>
  );
}
