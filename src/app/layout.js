import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import {Toaster} from "react-hot-toast";

export const metadata = {
  title: "Mehedi Hasan | Full Stack Developer",
  description:
    "Passionate Full Stack Developer on a mission to become a 10x Developer.",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body
        className="font-generalsans bg-gray-200 text-black select-none"
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
