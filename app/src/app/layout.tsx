import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scoreboard",
  description:
    "All sport competitions schedules and results in one place, choose which competitions you want to follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased h-screen w-screen`}>{children}</body>
    </html>
  );
}
