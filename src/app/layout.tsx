import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
