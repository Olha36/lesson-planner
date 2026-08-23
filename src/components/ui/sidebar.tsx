"use client";

import * as React from "react";

type SidebarContextValue = {
  open: boolean;
  toggle: () => void;
};

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }

  return context;
}

type SidebarProviderProps = {
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export function SidebarProvider({
  children,
  defaultOpen = true,
}: SidebarProviderProps) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <SidebarContext.Provider
      value={React.useMemo(
        () => ({
          open,
          toggle: () => setOpen((current) => !current),
        }),
        [open]
      )}
    >
      <div className="flex min-h-svh w-full bg-white text-[var(--color-text-primary)]">
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

type SidebarProps = {
  children: React.ReactNode;
  className?: string;
};

export function Sidebar({ children, className = "" }: SidebarProps) {
  const { open } = useSidebar();

  return (
    <aside
      className={[
        "flex h-svh shrink-0 flex-col bg-white",
        "border-r border-black/5 shadow-[0_0_0_1px_rgba(0,0,0,0.02)]",
        "transition-[width] duration-300 ease-in-out",
        open ? "w-[290px]" : "w-[100px]",
        className,
      ].join(" ")}
    >
      {children}
    </aside>
  );
}

export function SidebarHeader({ children }: { children?: React.ReactNode }) {
  return <div className="px-6 pb-5 pt-8">{children}</div>;
}

export function SidebarContent({ children }: { children?: React.ReactNode }) {
  return <div className="flex-1 overflow-y-auto px-4">{children}</div>;
}

export function SidebarFooter({ children }: { children?: React.ReactNode }) {
  return <div className="px-4 pb-6 pt-6">{children}</div>;
}

export function SidebarGroup({ children }: { children?: React.ReactNode }) {
  return <section className="space-y-1">{children}</section>;
}

export function SidebarGroupLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-3 pb-2 pt-1 text-xs font-medium text-transparent">{children}</div>;
}

export function SidebarGroupContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="space-y-2">{children}</div>;
}

type SidebarMenuItemProps = {
  children: React.ReactNode;
  active?: boolean;
  icon?: React.ReactNode;
};

export function SidebarMenuItem({
  children,
  active = false,
  icon,
}: SidebarMenuItemProps) {
  return (
    <div
      className={[
        "group relative flex h-[56px] items-center rounded-2xl px-4 text-[17px] font-medium",
        "transition-colors duration-200",
        active
          ? "bg-[#f6efff] text-[#6b5ff0] shadow-[inset_0_0_0_1px_rgba(111,95,240,0.05)]"
          : "text-[#4f5568] hover:bg-black/[0.02]",
      ].join(" ")}
    >
      <span
        className={[
          "mr-4 flex h-6 w-6 shrink-0 items-center justify-center",
          active ? "text-[#6b5ff0]" : "text-[#7f8599]",
        ].join(" ")}
      >
        {icon}
      </span>
      <span className="truncate">{children}</span>
      {active ? (
        <span className="absolute right-3 top-1/2 h-5 w-1 -translate-y-1/2 rounded-full bg-[#6b5ff0]" />
      ) : null}
    </div>
  );
}

export function SidebarTrigger({
  className = "",
}: {
  className?: string;
}) {
  const { open, toggle } = useSidebar();

  return (
    <button
      type="button"
      aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
      aria-pressed={open}
      onClick={toggle}
      className={[
        "inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[#4f5568]",
        "shadow-sm transition hover:bg-black/[0.02]",
        className,
      ].join(" ")}
    >
      <span className="text-base leading-none">{open ? "←" : "→"}</span>
      <span className="hidden sm:inline">Toggle sidebar</span>
    </button>
  );
}
