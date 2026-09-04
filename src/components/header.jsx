"use client";

import {useState} from "react";
import {Link} from "react-scroll";

const Header = () => {
  const [activeLinkId, setActiveLinkId] = useState(null);
  const handleSetActive = (to) => {
    setActiveLinkId(to);
  };
  const links = [
    {title: "intro", path: "intro"},
    {title: "projects", path: "projects"},
    {title: "about", path: "about"},
  ];
  return (
    <header className="fixed top-0 left-1/2 right-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between px-3 md:px-5 py-2 md:py-3 w-full max-w-screen-2xl bg-gray-200 rounded-full cursor-pointer">
      <a
        href="/"
        className="z-50"
        aria-label="Logo"
      >
        <h1 className="md:text-lg lg:text-xl px-4  py-2 lg:px-8 lg:py-3 rounded-full bg-black text-white">
          thecodermehedi
        </h1>
      </a>
      <nav className=" space-x-7 font-grotesk text-2xl sm:block">
        {links.map((link, index) => (
          <Link
            to={link.path}
            key={index}
            className="group relative hidden md:inline-block cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active-link"
            onSetActive={handleSetActive}
          >
            <span className="text-black">{link.title}</span>
            <span
              className={`absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-black duration-300 ease-in-out group-hover:w-full ${
                activeLinkId === link.path ? "w-full" : ""
              }`}
            />
          </Link>
        ))}
        <Link
          className="text-lg lg:text-xl px-4  py-2 lg:px-8  lg:py-3  rounded-full  bg-black text-white hover:rounded transition duration-500 ease-in-out cursor-pointer "
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
