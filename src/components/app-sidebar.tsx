import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Avatar from "../../public/avatar.png";

function LogoMark() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#a78bfa_0%,#7c3aed_48%,#ede9fe_100%)] shadow-[0_10px_30px_rgba(124,58,237,0.22)]">
      <svg viewBox="0 0 48 48" className="h-7 w-7 text-white" fill="none">
        <path
          d="M10 24c0-7.732 6.268-14 14-14s14 6.268 14 14"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M16 30c1.8-3.2 4.9-5 8-5s6.2 1.8 8 5"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function DashboardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
    >
      <path
        d="M4 11.5 12 4l8 7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 10.8V20h4.5v-5.4h2V20h4.5v-9.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StudentsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
    >
      <path d="M9.5 11.2a2.8 2.8 0 1 0-2.8-2.8 2.8 2.8 0 0 0 2.8 2.8Z" />
      <path d="M16.8 12a2.2 2.2 0 1 0-2.2-2.2 2.2 2.2 0 0 0 2.2 2.2Z" />
      <path
        d="M4.5 19.5c.6-3.2 2.9-5.1 5.5-5.1s4.9 1.9 5.5 5.1"
        strokeLinecap="round"
      />
      <path
        d="M13.8 19.5c.3-2.1 1.8-3.5 3.7-3.5 1.2 0 2.3.5 3.1 1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LessonsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
    >
      <path
        d="M7 4.5h10a2 2 0 0 1 2 2v10.8a1.7 1.7 0 0 1-1.7 1.7H8.5"
        strokeLinecap="round"
      />
      <path d="M5 6.2a1.7 1.7 0 0 1 1.7-1.7H7v14H6.7A1.7 1.7 0 0 1 5 16.8Z" />
      <path d="M10 8.5h6" strokeLinecap="round" />
      <path d="M10 12h4" strokeLinecap="round" />
    </svg>
  );
}

function ResourcesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
    >
      <path d="M6.5 5.5h8.8c1.2 0 2.2 1 2.2 2.2V19H8.7a2.2 2.2 0 0 1-2.2-2.2Z" />
      <path
        d="M14 5.5V11l2.6-1.7L19 11V5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TextbooksIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
    >
      <path d="M6 5.5h5.2c1.4 0 2.3.9 2.3 2.3V19H8.3A2.3 2.3 0 0 1 6 16.7Z" />
      <path d="M18 5.5h-5.2c-1.4 0-2.3.9-2.3 2.3V19h5.2a2.3 2.3 0 0 0 2.3-2.3Z" />
    </svg>
  );
}

function TemplatesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
    >
      <rect x="5" y="5" width="14" height="14" rx="2.5" />
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
    >
      <path d="M10.2 4.7h3.6l.5 2.1a6.6 6.6 0 0 1 1.6.9l2-.7 1.8 3.1-1.6 1.4c.1.3.1.7.1 1s0 .7-.1 1l1.6 1.4-1.8 3.1-2-.7c-.5.4-1 .7-1.6.9l-.5 2.1h-3.6l-.5-2.1a6.6 6.6 0 0 1-1.6-.9l-2 .7-1.8-3.1 1.6-1.4A6 6 0 0 1 5 12c0-.3 0-.7.1-1L3.5 9.6 5.3 6.5l2 .7c.5-.4 1-.7 1.6-.9Z" />
      <circle cx="12" cy="12" r="2.7" />
    </svg>
  );
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-4 flex-wrap">
          <LogoMark />
          <h2 className="text-xl font-semibold tracking-[-0.02em] text-[#111827]">
            AI Lesson Planner
          </h2>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenuItem active icon={<DashboardIcon />}>
              Dashboard
            </SidebarMenuItem>
            <SidebarMenuItem icon={<StudentsIcon />}>Students</SidebarMenuItem>
            <SidebarMenuItem icon={<LessonsIcon />}>Lessons</SidebarMenuItem>
            <SidebarMenuItem icon={<ResourcesIcon />}>
              Resources
            </SidebarMenuItem>
            <SidebarMenuItem icon={<TextbooksIcon />}>
              Textbooks
            </SidebarMenuItem>
            <SidebarMenuItem icon={<TemplatesIcon />}>
              Templates
            </SidebarMenuItem>
            <SidebarMenuItem icon={<SettingsIcon />}>Settings</SidebarMenuItem>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center justify-between rounded-[26px] bg-[#faf7ff] px-4 py-4 shadow-[0_1px_18px_rgba(107,95,240,0.05)]">
          <div className="flex min-w-0 items-center gap-3">
            <Image src={Avatar} alt="logo" width={50} height={50} />
            <div className="min-w-0">
              <div className="truncate text-[18px] font-semibold text-[#111827]">
                Olha K.
              </div>
              <div className="mt-1 text-[14px] font-medium text-[#8b94a9]">
                Teacher
              </div>
            </div>
          </div>

          <div className="flex h-10 w-10 items-center justify-center text-[#7f8599]">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.1"
            >
              <path
                d="m10 6 6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
