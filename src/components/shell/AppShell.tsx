"use client";

import * as React from "react";
import { Sidebar } from "./Sidebar";
import { TopPillBar } from "./TopPillBar";

const LS_SIDEBAR = "eic.sidebarCollapsed";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    try {
      const saved = window.localStorage.getItem(LS_SIDEBAR);
      if (saved != null) setIsCollapsed(saved === "1");
    } catch {
      // ignore
    }
  }, []);

  React.useEffect(() => {
    try {
      window.localStorage.setItem(LS_SIDEBAR, isCollapsed ? "1" : "0");
    } catch {
      // ignore
    }
  }, [isCollapsed]);

  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen">
        <Sidebar
          isCollapsed={isCollapsed}
          onCollapsedChange={setIsCollapsed}
          isDrawerOpen={isDrawerOpen}
          onDrawerOpenChange={setIsDrawerOpen}
        />
        <div className="min-w-0 flex-1">
          <TopPillBar
            onOpenMobileMenu={() => setIsDrawerOpen(true)}
          />
          <main className="px-5 pb-16 pt-24 md:px-8 lg:px-10">{children}</main>
        </div>
      </div>
    </div>
  );
}

