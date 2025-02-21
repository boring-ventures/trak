"use client";

import { cn } from "@/lib/utils";
import { SearchProvider } from "@/context/search-context";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import SkipToMain from "@/components/skip-to-main";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayoutClient({ children }: DashboardLayoutProps) {
  return (
    <SearchProvider>
      <SidebarProvider defaultOpen={true}>
        <SkipToMain />
        <AppSidebar className="fixed inset-y-0 left-0 z-20" />
        <div
          id="content"
          className={cn(
            "ml-auto w-full max-w-full",
            "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]",
            "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]",
            "transition-[width] duration-200 ease-linear",
            "flex min-h-screen flex-col",
            "group-data-[scroll-locked=1]/body:h-full",
            "group-data-[scroll-locked=1]/body:has-[main.fixed-main]:min-h-screen"
          )}
        >
          {children}
        </div>
      </SidebarProvider>
    </SearchProvider>
  );
} 