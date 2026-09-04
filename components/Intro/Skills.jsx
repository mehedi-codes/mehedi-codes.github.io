import MaxWidthWrapper from "../MaxWidthWrapper";
import SectionTitle from "../SectionTitle";
const Skills = () => {
  const skillArray = [
    {
      cat: "frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "NextJS",
        "TailwindCSS",
        "SCSS",
      ],
    },
    {cat: "backend", skills: ["NodeJS", "Express", "Mongoose"]},
    {cat: "database", skills: ["MongoDB Atlas"]},
    {
      cat: "hosting",
      skills: [
        "Vercel",
        "Render",
        "Firebase Hosting",
        "Netlify",
        "GitHub Pages",
      ],
    },
    {
      cat: "tools",
      skills: [
        "git",
        "vite",
        "pnpm",
        "vscode",
        "figma",
        "postman",
        "linux",
        "markdown",
      ],
    },
    {cat: "libraries", skills: ["daisyUI", "shadcn/ui", "Tanstack Query"]},
  ];

  return (
    <section>
      <MaxWidthWrapper className="py-20">
        <SectionTitle
          title={"Technical Skills"}
          className={"text-[#0E0E0C] text-center"}
          svgFill="#0E0E0C"
        />
        {skillArray.map((skill, idx) => (
          <div
            key={idx}
            className=" mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24 py-5 border rounded-2xl lg:border-y"
          >
            <div className="space-y-6">
              <div className="space-y-3  lg:space-y-10  flex flex-col items-center justify-center h-full border-b lg:border-r ">
                <h3 className="text-heading-3 text-3xl md:text-5xl lg:text-7xl font-semibold leading-tight">
                  {skill.cat}
                </h3>
              </div>
            </div>
            <div className="leading-[2.3rem] text-[#8c8c73] md:leading-[2.5rem]  text-center lg:text-left lg:leading-[3.4rem] flex flex-col items-start justify-center">
              {skill.skills.map((skill, idx) => (
                <p
                  key={idx}
                  className="text-3xl md:text-5xl lg:text-7xl w-full font-extrabold capitalize"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        ))}
      </MaxWidthWrapper>
    </section>
  );
};

export default Skills;
