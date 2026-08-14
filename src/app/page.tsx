import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex min-h-svh flex-1 flex-col gap-6 p-6">
        <div className="flex items-center justify-between">
          <SidebarTrigger />
        </div>

        <section className="rounded-3xl border border-[var(--color-divider)] bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold">Lesson Planner</h1>
          <p className="mt-3 max-w-2xl text-[var(--color-text-secondary)]">
            This is a working shadcn-style sidebar shell. You can replace the
            menu items with your own navigation now that the provider and
            trigger are connected.
          </p>
        </section>
      </main>
    </SidebarProvider>
  );
}
