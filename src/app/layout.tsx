import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
export const metadata: Metadata = {
  title: "Trynser | Architecting Decisions. Engineering Data.",
  description: "Premium data engineering portfolio showcasing advanced ETL pipelines and interactive visualizations.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark h-full">
      <body className={`${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground h-full`}>
        {children}
      </body>
    </html>
  );
}
