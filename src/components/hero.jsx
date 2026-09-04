import Link from "next/link";

const hero = () => {
  return (
    <section className="mx-auto mt-[80px]  container overflow-hidden px-2" id="intro">
      <div className="flex flex-col justify-center items-center text-center h-[30rem] lg:h-[48rem]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold">
          Mehedi is a fullstack <br /> developer based in Bangladesh.
        </h1>
        <p className="font-grotesk my-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          He transforms conceptual visions into interactive realities.
        </p>
        <Link
          href="/resume.pdf"
          className="text-lg lg:text-xl px-4  py-2 lg:px-8  lg:py-3  rounded-full  bg-black text-white hover:rounded transition duration-500 ease-in-out cursor-pointer flex items-center"
          download
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-5 h-5 md:w-6 md:h-6 mr-2"
            viewBox="0 0 36 36"
          >
            <path
              fill="currentColor"
              d="M31 31H5a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2Z"
              className="clr-i-outline clr-i-outline-path-1"
            />
            <path
              fill="currentColor"
              d="m18 29.48l10.61-10.61a1 1 0 0 0-1.41-1.41L19 25.65V5a1 1 0 0 0-2 0v20.65l-8.19-8.19a1 1 0 1 0-1.41 1.41Z"
              className="clr-i-outline clr-i-outline-path-2"
            />
            <path fill="none" d="M0 0h36v36H0z" />
          </svg>
          <span>Resume</span>
        </Link>
      </div>
    </section>
  );
};

export default hero;
