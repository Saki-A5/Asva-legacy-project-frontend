"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./components/Sidebar";
import OverviewTab from "./components/OverviewTab";
import DocumentsTab from "./components/DocumentsTab";
import LinksTab from "./components/LinksTab";
import InternshipsTab from "./components/IntershipsTab";
import CertificatesTab from "./components/CertificatesTab";
import JoinTeams from "./components/CommunityTeams";
import { Tab } from "@/app/join/components/types";

export const dynamic = "force-dynamic";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabTitles: Record<Tab, string> = {
    overview: "Dashboard",
    documents: "Documents",
    links: "Links",
    internships: "Internships",
    certificates: "Certificates",
    teams: "Join Teams",
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        active={activeTab}
        onSelect={setActiveTab}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar — mobile only */}
        <header className="lg:hidden h-14 bg-white border-b border-gray-100 px-4 flex items-center gap-3 shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-600 hover:text-gray-900"
          >
            <Menu size={22} />
          </button>
          <h1 className="font-semibold text-gray-900 text-sm capitalize">
            {tabTitles[activeTab]}
          </h1>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          {activeTab === "overview" && <OverviewTab onNavigate={setActiveTab} />}
          {activeTab === "documents" && <DocumentsTab />}
          {activeTab === "links" && <LinksTab />}
          {activeTab === "internships" && <InternshipsTab />}
          {activeTab === "certificates" && <CertificatesTab />}
          {activeTab === "teams" && <JoinTeams />}
        </main>
      </div>
    </div>
  );
}