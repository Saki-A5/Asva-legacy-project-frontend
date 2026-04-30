"use client";

import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Link2,
  Briefcase,
  Award,
  Users,
  LogOut,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Tab } from "@/app/join/components/types";
import { API_URL } from "@/lib/config";

const navItems: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "overview", label: "Overview", icon: <LayoutDashboard size={16} /> },
  { id: "documents", label: "Documents", icon: <FileText size={16} /> },
  { id: "links", label: "Links", icon: <Link2 size={16} /> },
  { id: "internships", label: "Internships", icon: <Briefcase size={16} /> },
  { id: "certificates", label: "Certificates", icon: <Award size={16} /> },
  { id: "teams", label: "Join Teams", icon: <Users size={16} /> },
];

export default function Sidebar({ active, onSelect, open, onClose }: any) {
  const router = useRouter();

  const handleLogout = async () => {
    const refreshToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("refresh_token="))
      ?.split("=")[1];

    const accessToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];

    try {
      await fetch(`${API_URL}/api/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        },
        body: JSON.stringify({ refresh: refreshToken }),
      });
    } catch {
      // even if the request fails, clear cookies and redirect
    }

    // clear cookies
    document.cookie = "access_token=; path=/; max-age=0";
    document.cookie = "refresh_token=; path=/; max-age=0";

    router.push("/login");
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-gray-900 flex flex-col z-40 transition-transform",
          open ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0 lg:static"
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 h-16 border-b border-white/10">
          <span className="text-white font-bold">ASVA</span>
          <button className="lg:hidden text-white" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <div className="flex-1 px-3 mt-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelect(item.id);
                onClose();
              }}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-xl text-sm",
                active === item.id
                  ? "bg-green-500 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              )}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="text-sm text-gray-400 hover:text-red-400 flex items-center gap-2 transition-colors"
          >
            <LogOut size={14} /> Logout
          </button>
        </div>
      </aside>
    </>
  );
}