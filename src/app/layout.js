import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "JobDesk - Job Management System",
  description: "Professional job posting and management platform",
  keywords: "jobs, recruitment, hiring, job portal",
  authors: [{ name: "JobDesk Team" }],
  openGraph: {
    title: "JobDesk - Job Management System",
    description: "Professional job posting and management platform",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}