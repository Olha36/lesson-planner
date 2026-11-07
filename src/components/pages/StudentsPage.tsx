import Btn from "@/app/ui/button/Button";
import SearchAppBar from "@/components/ui/search";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";

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

          <StudentsPage />
        </section>
      </main>
    </SidebarProvider>
  );
}
