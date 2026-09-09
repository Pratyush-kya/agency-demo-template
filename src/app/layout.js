import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Premium Website Demo",
  description: "Generated dynamically for our clients",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-900 text-slate-100">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
