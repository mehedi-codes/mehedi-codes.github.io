import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import SectionTitle from "../SectionTitle";
import pj from "@/public/images/projects/1.webp";
import pj2 from "@/public/images/projects/2.webp";
import pj3 from "@/public/images/projects/3.webp";
import Link from "next/link";
const Projects = () => {
  const projArray = [
    {
      name: "LifeFlow",
      link: "https://lifeflowclient.web.app",
      bg_image: pj,
      image: pj,
      year: "2024",
      tech: [
        "MERN ∘ ",
        "TailwindCSS ∘ ",
        "AOS ∘ ",
        "Tanstack Query ∘ ",
        "SwiperJS ∘ ",
        "EmailJS ∘ ",
        "Firebase ∘ ",
        "Stripe",
      ],
    },
    {
      name: "HireHarbor",
      link: "https://hireharbor.vercel.app",
      bg_image: pj2,
      image: pj2,
      year: "2024",
      tech: [
        "MERN ∘ ",
        "TailwindCSS ∘ ",
        "DaisyUI ∘ ",
        "Firebase ∘ ",
        "React Datepicker",
      ],
    },
    {
      name: "Techventure",
      link: "https://techventure.vercel.app",
      bg_image: pj3,
      image: pj3,
      year: "2024",
      tech: ["MERN ∘ ", "TailwindCSS ∘ ", "DaisyUI ∘ ", "Firebase"],
    },
  ];
  return (
    <section className="bg-[#0E0E0C] text-white min-h-screen py-20">
      <SectionTitle title="Projects" className="text-white" svgFill="#FFFFFF" />
      <MaxWidthWrapper>
        {projArray?.map((proj, index) => {
          return (
            <div key={index} className="mb-20">
              <Link
                href={proj.link}
                target="_blank"
                className="mt-10 block group lg:mx-20 overflow-hidden hover:rounded-[2rem] transition-all duration-500 ease-in-out relative h-full"
              >
                <Image
                  src={proj.bg_image}
                  alt="pj1"
                  className="transition-all duration-500 ease-in-out group-hover:scale-110 bg-cover"
                  placeholder="blur"
                  quality={100}
                />
                {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center invisible group-hover:visible">
                  <p className="text-3xl font-semibold text-center ">
                    View Project
                  </p>
                </div> */}
              </Link>
              <div className="my-10 hidden lg:mx-20 lg:flex flex-col  xl:flex-row gap-4 items-start xl:items-center justify-start">
                <p className="rounded-full py-2 lg:py-3 px-4 lg:px-8 border border-white mr-4 lg:text-xl">
                  {proj.year}
                </p>
                <div className="rounded-full border border-white hidden lg:flex items-center py-3 px-8 justify-between">
                  {proj.tech?.map((tech, index) => {
                    return (
                      <p key={index} className=" xl:text-xl mx-1">
                        {tech}
                      </p>
                    );
                  })}
                </div>
              </div>
              <h1 className="lg:ml-20 text-3xl xl:text-4xl font-semibold hidden lg:block">
                {proj.name}
              </h1>
              <div className="flex lg:hidden justify-between items-center">
                <h1 className="text-xl font-semibold mt-5">{proj.name}</h1>
                <div className="flex items-center gap-1">
                  <p className="rounded-full px-4 border border-white mt-5">
                    {proj.year}
                  </p>
                  <p className="rounded-full px-4 border border-white mt-5">
                    {proj.tech[0].split(" ")[0]}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="border border-[#D1D1C7] rounded-full px-4 lg:px-8 py-2  lg:py-3 group  text-lg lg:text-xl transition duration-500 ease-in-out hover:bg-[#D1D1C7] hover:text-black"
          >
            More Projects
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Projects;
