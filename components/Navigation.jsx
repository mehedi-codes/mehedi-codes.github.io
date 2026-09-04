"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {TextAlignRightIcon} from "@radix-ui/react-icons";

const Navigation = ({dotWhite = false}) => {
  const navLinks = [
    {title: "intro", path: "/"},
    {title: "projects", path: "/projects"},
    {title: "blogs", path: "/blogs"},
    {title: "about", path: "/about"},
    {title: "contact", path: "/contact"},
  ];
  const pathname = usePathname();
  return (
    <>
      <div className="font-grotesk space-x-7 hidden md:flex flex-row items-center text-2xl">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              href={link.path}
              key={link.title}
              className="flex flex-col items-center justify-center group"
            >
              {link.title}
              {isActive ? (
                <div
                  className={`size-[6px] ${
                    dotWhite ? "bg-white" : "bg-black"
                  } rounded-full transition ease-in-out duration-300`}
                />
              ) : (
                <div
                  className={`size-[6px] ${
                    dotWhite ? "group-hover:bg-white" : "group-hover:bg-black"
                  } rounded-full transition ease-in-out duration-300`}
                />
              )}
            </Link>
          );
        })}
      </div>
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <TextAlignRightIcon width={30} height={50} />
          </SheetTrigger>
          <SheetContent className="bg-[#0E0E0C] border-none outline-none text-[#D1D1C7] text-2xl">
            <div className="flex flex-col items-center justify-center text-lg space-y-7 h-full">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    href={link.path}
                    key={link.title}
                    className="flex items-center gap-2 justify-center group"
                  >
                    {isActive ? (
                      <div className="size-[6px] bg-white rounded-full transition ease-in-out duration-300" />
                    ) : (
                      <div className="size-[6px] group-hover:bg-white rounded-full transition ease-in-out duration-300" />
                    )}
                    <SheetClose>{link.title}</SheetClose>
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navigation;
