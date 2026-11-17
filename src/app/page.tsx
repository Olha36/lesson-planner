import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import DashboardPage from "@/components/pages/Dashboard";

export default function Home() {
  return (
    <SidebarProvider>
      {/* <AppSidebar /> */}

      <main className="flex min-h-svh flex-1 flex-col gap-6 bg-[var(--color-background-light)] p-6">
        <DashboardPage />
      </main>
    </SidebarProvider>
  );
}
