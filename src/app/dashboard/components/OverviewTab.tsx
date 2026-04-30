"use client";

import { useEffect, useState } from "react";
import { ChevronRight, FileText, Link2, Briefcase, Award, Users } from "lucide-react";
import { authFetch } from "@/lib/api";
import { API_URL } from "@/lib/config";
import { Tab } from "@/app/join/components/types";
import { cn } from "@/lib/utils";

type Props = { onNavigate: (tab: Tab) => void };

export default function OverviewTab({ onNavigate }: Props) {
  const [counts, setCounts] = useState({ documents: 0, links: 0, internships: 0, certificates: 0 });
  const [recentDocs, setRecentDocs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [docsRes, linksRes, internRes, certsRes] = await Promise.all([
          authFetch(`${API_URL}/api/cms/documents`),
          authFetch(`${API_URL}/api/cms/links`),
          authFetch(`${API_URL}/api/cms/internships`),
          authFetch(`${API_URL}/api/cms/certificates`),
        ]);
        const [docs, links, internships, certs] = await Promise.all([
          docsRes.json(), linksRes.json(), internRes.json(), certsRes.json(),
        ]);
        setCounts({
          documents: docs.length,
          links: links.length,
          internships: internships.length,
          certificates: certs.length,
        });
        setRecentDocs(docs.slice(0, 3));
      } catch {
        // fail silently on overview
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const stats = [
    { label: "Documents", value: counts.documents, icon: <FileText size={18} />, tab: "documents" as Tab, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Links", value: counts.links, icon: <Link2 size={18} />, tab: "links" as Tab, color: "text-teal-500", bg: "bg-teal-50" },
    { label: "Internships", value: counts.internships, icon: <Briefcase size={18} />, tab: "internships" as Tab, color: "text-amber-500", bg: "bg-amber-50" },
    { label: "Certificates", value: counts.certificates, icon: <Award size={18} />, tab: "certificates" as Tab, color: "text-green-500", bg: "bg-green-50" },
    { label: "Teams", value: null, icon: <Users size={18} />, tab: "teams" as Tab, color: "text-purple-500", bg: "bg-purple-50" },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Welcome Card */}
      <div className="bg-gray-900 rounded-2xl px-8 py-7 flex items-center justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/10 blur-3xl rounded-full" />
        <div className="relative z-10">
          <p className="text-green-400 text-sm font-medium mb-1">Welcome back 👋</p>
          <h2 className="text-2xl font-bold text-white mb-1">ASVA Member Dashboard</h2>
          <p className="text-gray-400 text-sm">Access documents, opportunities, and ASVA updates.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-green-500/15 border border-green-500/20 rounded-full px-4 py-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-xs font-semibold">Active Member</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((s) => (
          <button
            key={s.label}
            onClick={() => onNavigate(s.tab)}
            className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 hover:border-green-200 hover:shadow-md transition-all text-left group"
          >
            <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center", s.bg, s.color)}>
              {s.icon}
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {loading ? "—" : s.value ?? "→"}
              </p>
              <p className="text-xs text-gray-500 font-medium">{s.label}</p>
            </div>
            <div className="flex items-center gap-1 text-green-500 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              View <ChevronRight size={12} />
            </div>
          </button>
        ))}
      </div>

      {/* Bottom grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Documents */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 text-sm">Recent Documents</h3>
            <button onClick={() => onNavigate("documents")} className="text-xs text-green-600 hover:underline font-medium">
              See all
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {loading && [1, 2, 3].map((i) => (
              <div key={i} className="h-10 bg-gray-100 rounded-xl animate-pulse" />
            ))}
            {!loading && recentDocs.length === 0 && (
              <p className="text-xs text-gray-400">No documents yet.</p>
            )}
            {recentDocs.map((doc) => (
              <div key={doc.id} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                  <FileText size={14} className="text-red-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{doc.title}</p>
                  <p className="text-xs text-gray-400">{new Date(doc.created_at).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Teams Highlight */}
        <div className="bg-gradient-to-r from-green-500/10 to-purple-500/10 border border-green-100 rounded-2xl p-6 flex flex-col justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Join an ASVA Team</h3>
            <p className="text-sm text-gray-600 mt-1">Software, Hardware, Creative, PR & more</p>
          </div>
          <button
            onClick={() => onNavigate("teams")}
            className="self-start bg-green-500 text-white text-sm px-5 py-2 rounded-xl hover:bg-green-600 transition"
          >
            Explore Teams
          </button>
        </div>
      </div>
    </div>
  );
}