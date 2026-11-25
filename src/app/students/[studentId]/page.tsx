import { notFound } from "next/navigation";
import { getStudentById } from "@/data/student";

interface StudentPageProps {
  params: Promise<{
    studentId: string;
  }>;
}

export default async function StudentPage({ params }: StudentPageProps) {
  const { studentId } = await params;

  const student = getStudentById(studentId);

  if (!student) {
    notFound();
  }

  return (
    <main>
      <h1>{student.name}</h1>
      <p>Email: {student.email}</p>
      <p>Level: {student.level}</p>
      <p>Age: {student.age}</p>
    </main>
  );
}
