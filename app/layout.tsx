import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIC Workbench",
  description: "Personal multi-model AI router and workbench",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
