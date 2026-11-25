import Btn from "@/app/ui/button/Button";
import { AppSidebar } from "../app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import SearchAppBar from "../ui/search";
import StudentsCard from "@/app/ui/card/StudentsCard";
import { Box, Link } from "@mui/material";
import studentAvatar from "../../../public/avatar.png";
import MultipleSelect from "../ui/dropdown";
import BasicDatePicker from "../ui/basicDatePicker";
import SortSelect from "../ui/sortBy";

import {students} from "@/data/student";

export default function StudentsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex min-h-svh flex-1 flex-col gap-6 bg-[var(--color-background-light)] p-6">
        <div className="flex items-center justify-between">
          <SidebarTrigger />
        </div>

        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold">My Students</h2>
            <div className="flex items-center gap-4">
              <Btn text="+ Add New Student"></Btn>
              <SearchAppBar
                placeholderText="Search students by name"
                width="500px"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 my-10 w-full">
            <MultipleSelect />

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <h3>Last Lesson</h3>
                <BasicDatePicker />
              </div>

              <SortSelect />
            </div>
          </div>

          {students.map((student) => (
            <Link key={student.id} href={`/students/${student.id}`}>
              <Box className="grid grid-cols-4 gap-4 mt-5">
                <StudentsCard
                  name="Anna"
                  age="16 years old"
                  goal="speaking English"
                  avatar={studentAvatar}
                  lastLesson="Last lesson: 2 days ago"
                />
                <StudentsCard
                  name="Anna"
                  age="16 years old"
                  goal="speaking English"
                  avatar={studentAvatar}
                  lastLesson="Last lesson: 2 days ago"
                />
                <StudentsCard
                  name="Anna"
                  age="16 years old"
                  goal="speaking English"
                  avatar={studentAvatar}
                  lastLesson="Last lesson: 2 days ago"
                />
                <StudentsCard
                  name="Anna"
                  age="16 years old"
                  goal="speaking English"
                  avatar={studentAvatar}
                  lastLesson="Last lesson: 2 days ago"
                />
              </Box>
            </Link>
          ))}
        </section>
      </main>
    </SidebarProvider>
  );
}
