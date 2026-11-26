export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  duration: string;
}

interface Goal {
  title: string;
  progress: number;
}

export interface Notes {
  id: string;
  description: string;
  date: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  level: string;
  age: number;
  lessons: Lesson[];
  goals: Goal[];
  notes?: Notes[];
}

export const students: Student[] = [
  {
    id: "1",
    name: "Nika",
    email: "nika@example.com",
    level: "B2",
    age: 19,
    goals: [
      { title: "Improve speaking fluency", progress: 80 },
      { title: "Learn new vocabulary", progress: 70 },
      { title: "Master Present Perfect", progress: 60 },
      { title: "Improve confidence", progress: 75 },
    ],
    lessons: [
      {
        id: "1",
        title: "Life Changes",
        subtitle: "Present Perfect · Speaking focus",
        date: "13.08.2026",
        duration: "60 min",
      },
      {
        id: "2",
        title: "Technology in Our Life",
        subtitle: "Past Simple / Present Perfect",
        date: "12.08.2026",
        duration: "60 min",
      },
      {
        id: "3",
        title: "Travel Experiences",
        subtitle: "Present Simple",
        date: "10.08.2026",
        duration: "45 min",
      },
    ],
    notes: [
      {
        id: "note-1",
        description:
          "Needs more speaking practice. Shy at the beginning of the lesson.",
        date: "13.08.2026",
      },
      {
        id: "note-2",
        description: "Great progress with Present Perfect!",
        date: "12.08.2026",
      },
      {
        id: "note-3",
        description: "Struggles with irregular verbs.",
        date: "10.08.2026",
      },
    ],
  },
  {
    id: "2",
    name: "Elizabeth",
    email: "elizabeth@example.com",
    level: "B1",
    age: 20,
    goals: [
      { title: "Improve speaking fluency", progress: 80 },
      { title: "Learn new vocabulary", progress: 70 },
      { title: "Master Present Perfect", progress: 60 },
      { title: "Improve confidence", progress: 75 },
    ],
    lessons: [],
    notes: [
      {
        id: "note-1",
        description:
          "Needs more speaking practice. Shy at the beginning of the lesson.",
        date: "13.08.2026",
      },
      {
        id: "note-2",
        description: "Great progress with Present Perfect!",
        date: "12.08.2026",
      },
      {
        id: "note-3",
        description: "Struggles with irregular verbs.",
        date: "10.08.2026",
      },
    ],
  },
];

interface Goal {
  title: string;
  progress: number;
}

export function getStudentById(id: string) {
  return students.find((student) => student.id === id);
}
