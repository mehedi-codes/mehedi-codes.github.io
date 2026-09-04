"use client";
import {DoubleArrowUpIcon} from "@radix-ui/react-icons";
const ButtonToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={handleScrollToTop}
      className="font-medium group uppercase flex items-center lg:gap-2 border border-white rounded-full lg:border-transparent lg:hover:border-white p-2"
    >
      <span className="hidden lg:inline">back to top</span>{" "}
      <DoubleArrowUpIcon className="size-5 " />
    </button>
  );
};

export default ButtonToTop;
