import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ASVA — Building Leaders. Driving Impact.",
  description: "The official association representing students, advancing academic excellence, leadership, and meaningful campus engagement.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-black min-h-screen antialiased font-sans">
        {children}
      </body>
    </html>
  );
}