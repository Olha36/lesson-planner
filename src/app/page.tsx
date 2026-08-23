import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Btn from "./ui/button/Button";
import AnalyticsCard from "./ui/card/AnalyticsCard";

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
      </main>
    </SidebarProvider>
  );
}
