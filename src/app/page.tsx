import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Btn from "./ui/button/Button";
import AnalyticsCard from "./ui/card/AnalyticsCard";
import StudentsCard from "./ui/card/StudentsCard";
import studentAvatar from "../../public/avatar.png";
import { Box } from "@mui/material";
import Link from "next/link";
import RecentLessons from "./ui/recentLessons/RecentLessons";
import QuickActions from "./ui/quickActions/QuickActions";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex min-h-svh flex-1 flex-col gap-6 bg-[var(--color-background-light)] p-6">
        <div className="flex items-center justify-between">
          <SidebarTrigger />
        </div>

        <section className="flex  items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold">Welcome back, Olha!👋</h2>
            <p className="mt-3 max-w-2xl text-[var(--color-text-secondary)]">
              Create engaging lessons with AI
            </p>
          </div>
          <div>
            <Btn text="+ New Lesson" />
          </div>
        </section>

        <section className="grid gap-4 grid-cols-4">
          <AnalyticsCard
            subtitle="students"
            title="12"
            description="active students"
          />
          <AnalyticsCard
            subtitle="lessons"
            title="48"
            description="created lessons"
          />
          <AnalyticsCard
            subtitle="this week"
            title="4"
            description="lessons planned"
          />
          <AnalyticsCard
            subtitle="time saved"
            title="18h"
            description="this month"
          />
        </section>

        <section>
          <div className="flex flex-row gap-4 justify-between">
            <h3 className="mb-2">Your students</h3>
            <Link
              href="/students"
              className="text-sm text-[var(--color-primary-purple)]"
            >
              See all
            </Link>
          </div>

          <Box className="grid grid-cols-4 gap-4">
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
        </section>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(250px,1fr)]">
          <section className="min-w-0">
            <h2 className="mb-3 text-base font-semibold">Recent Lessons</h2>
            <RecentLessons
              unitName="Life Changes"
              studentName="Anna"
              level="B1"
              avatar={studentAvatar}
              grammarTopic="Present Simple"
            />
            <RecentLessons
              unitName="Technology in our life"
              studentName="Christian"
              level="B2"
              avatar={studentAvatar}
              grammarTopic="Present Perfect"
            />
            <RecentLessons
              unitName="Travel Experiences"
              studentName="Nika"
              level="B2+"
              avatar={studentAvatar}
              grammarTopic="Modals"
            />

            <Btn text="See all lessons" fullWidth={true} className="mt-3" />
          </section>

          <section className="min-w-0">
            <QuickActions />
          </section>
        </div>
      </main>
    </SidebarProvider>
  );
}
