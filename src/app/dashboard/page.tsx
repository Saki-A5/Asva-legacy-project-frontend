"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import OverviewTab from "./components/OverviewTab";
import DocumentsTab from "./components/DocumentsTab";
import LinksTab from "./components/LinksTab";
import InternshipsTab from "./components/IntershipsTab";
import CertificatesTab from "./components/CertificatesTab";
import JoinTeams from "./components/CommunityTeams";
import { Tab } from "@/app/join/components/types";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">

      <Sidebar
        active={activeTab}
        onSelect={setActiveTab}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="flex-1 p-6 overflow-y-auto">

        {activeTab === "overview" && <OverviewTab onNavigate={setActiveTab} />}
        {activeTab === "documents" && <DocumentsTab />}
        {activeTab === "links" && <LinksTab />}
        {activeTab === "internships" && <InternshipsTab />}
        {activeTab === "certificates" && <CertificatesTab />}
        {activeTab === "teams" && <JoinTeams />}

      </main>
    </div>
  );
}