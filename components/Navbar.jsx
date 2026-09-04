"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import {usePathname} from "next/navigation";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  const pathname = usePathname();
  const isRoot = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show !== isScrolled) setIsScrolled(show);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <nav
      className={`${isRoot ? "hidden" : "block"} ${
        isScrolled ? "backdrop-blur-md bg-opacity-50 bg-white" : ""
      } sticky top-0 z-50`}
    >
      <MaxWidthWrapper className="md:py-5 flex justify-between items-center border-b">
        <Link href="/" aria-label="Logo" className="text-2xl lg:font-grotesk">
          <h1>&copy; thecodermehedi</h1>
        </Link>
        <Navigation />
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
