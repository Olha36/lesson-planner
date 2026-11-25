export interface Student {
  id: string;
  name: string;
  email: string;
  level: string;
  age: number;
}

export const students: Student[] = [
  {
    id: "1",
    name: "Nika",
    email: "nika@example.com",
    level: "B2",
    age: 19,
  },
  {
    id: "2",
    name: "Elizabeth",
    email: "elizabeth@example.com",
    level: "B1",
    age: 20,
  },
];

export function getStudentById(id: string) {
  return students.find((student) => student.id === id);
}
