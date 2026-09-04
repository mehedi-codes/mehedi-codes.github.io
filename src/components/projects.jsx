import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
const Projects = () => {
  const projects = [
    {
      title: "Lifeflow",
      description:
        "The LifeFlow Blood Donation Application is a user-friendly platform that facilitates blood donation activities. It connects donors with those in need, streamlining the donation process. It includes features for user registration, blood donation requests, donor management, content management, and role-based access control.",
      cover: "/lifeflow-ss.jpg",
      year: "2023",
      live: "https://lifeflowclient.web.app",
      client: "https://github.com/thecodermehedi/lifeflow-client",
      server: "https://github.com/thecodermehedi/lifeflow-server",
      stack: "MERN",
      css: "Tailwind",
    },
    {
      title: "HireHarbor",
      description:
        "HireHarbor is a comprehensive job-seeking website designed to provide an intuitive and visually appealing platform for users to discover and apply for various job opportunities. The platform caters to different job types, including On-Site, Remote, Hybrid, and Part-Time positions.",
      cover: "/hireharbor-ss.png",
      year: "2023",
      live: "https://hireharbor.vercel.app",
      client: "https://github.com/thecodermehedi/hireharbor-client",
      server: "https://github.com/thecodermehedi/hireharbor-server",
      stack: "MERN",
      css: "Tailwind",
    },
    {
      title: "Techventure",
      description:
        "Techventure is an innovative e-commerce platform specializing in technology and electronics, offering a user-friendly interface for users to explore, add, and manage their favorite tech products. The platform focuses on a seamless user experience, incorporating modern design principles and a range of features to enhance online shopping.",
      cover: "/techventure-ss.png",
      year: "2023",
      live: "https://techventure.vercel.app",
      client: "https://github.com/thecodermehedi/techventure-client",
      server: "https://github.com/thecodermehedi/techventure-server",
      stack: "MERN",
      css: "Tailwind",
    },
  ];

  return (
    <section className="py-10 md:py-20" id="projects">
      <SectionTitle title="Projects" />
      <div className="max-w-screen-2xl mx-auto w-full space-y-4 py-10">
        {projects.map((project, idx) => {
          return (
            <div
              key={idx}
              className="w-full py-5 lg:h-96 bg-white rounded-2xl flex items-center flex-col md:flex-row gap-4 md:gap-6 lg:gap-8"
            >
              <div className="w-full md:w-1/2 h-full rounded-2xl p-5 overflow-hidden ">
                <Image
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full rounded-2xl border border-gray-400"
                  width={530}
                  height={360}
                />
              </div>
              <div className="px-5 pt-5 space-y-4 w-full md:w-1/2 h-full">
                <h1 className="font-semibold text-3xl lg:text-4xl">
                  {project.title}
                </h1>
                <p className="text-xl md:text-2xl font-grotesk">
                  {project.description}
                </p>
                <p className="space-x-4 font-grotesk">
                  <span className="py-2 px-4 md:px-6 border border-black rounded-full font-medium">
                    {project.year}
                  </span>{" "}
                  <span className="py-2 px-4 md:px-6 border border-black rounded-full font-medium">
                    {project.stack}
                  </span>
                  <span className="py-2 px-4 md:px-6 border border-black rounded-full font-medium">
                    {project.css}
                  </span>
                </p>
                <div className="font-grotesk pt-2 flex flex-wrap gap-4">
                  <Link
                    href={project.live}
                    className="rounded-full py-2 md:py-3 px-4 md:px-6 lg:px-8 bg-black text-white hover:rounded transition duration-500 ease-in-out"
                  >
                    <p className="hidden lg:block">Live Preview</p>
                    <p className="lg:hidden block">Live</p>
                  </Link>
                  <Link
                    href={project.client}
                    className="rounded-full py-2 md:py-3 px-4 md:px-6 lg:px-8 bg-black text-white hover:rounded transition duration-500 ease-in-out"
                  >
                    <p className="hidden lg:block">Client Source</p>
                    <p className="lg:hidden block">Client</p>
                  </Link>
                  <Link
                    href={project.server}
                    className="rounded-full py-2 md:py-3 px-4 md:px-6 lg:px-8 bg-black text-white hover:rounded transition duration-500 ease-in-out"
                  >
                    <p className="hidden lg:block">Server Source</p>
                    <p className="lg:hidden block">Server</p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
