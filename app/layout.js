import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {Toaster} from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Mehedi Hasan - Web Developer",
  description: "Passionate Learner on a mission to become a 10x developer.",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body
        className="font-gsans relative h-full w-full antialiased bg-white"
        suppressHydrationWarning={true}
      >
        <main className="relative flex flex-col min-h-screen selection:bg-black selection:text-white">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
