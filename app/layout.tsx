import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/components/Layout";

export const metadata: Metadata = {
  // Sets the professional identity in the browser tab
  title: "Jason Daohog", 
  description: "Full-stack cloud and systems engineer specializing in high-reliability infrastructure and the Zero-Gap philosophy.",
  
  // Explicitly linking the latte icon
  icons: {
    icon: "/icon.svg", 
    apple: "/apple-icon.png", // Optional: if you have a mobile home screen icon
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-blue-500/30">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}