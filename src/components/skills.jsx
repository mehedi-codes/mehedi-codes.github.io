import Image from "next/image";
import SectionTitle from "./SectionTitle";

const skills = () => {
  const skillArray = [
    "js",
    "html",
    "css",
    "tailwind",
    "react",
    "express",
    "nodejs",
    "mongodb",
    "markdown",
    "vercel",
    "firebase",
    "git",
    "github",
    "vscode",
  ];
  return (
    <section className="py-5 md:py-10 lg:py-20">
      <SectionTitle title="Skills" />
      <div className="max-w-screen-2xl mx-auto w-full mt-10">
        <div className="flex flex-wrap justify-center items-center gap-11">
          {skillArray.map((skill, index) => {
            return (
              <Image
                key={index}
                className="w-12 h-12 m-2"
                width={48}
                height={48}
                src={`https://skillicons.dev/icons?i=${skill}&theme=light`}
                alt={skill}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default skills;
