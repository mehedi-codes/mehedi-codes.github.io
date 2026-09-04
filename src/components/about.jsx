import Link from "next/link";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
export default function About() {
  return (
    <section className=" py-5 md:py-10 lg:py-20" id="about">
      <SectionTitle title={"about me"} />
      <div className="w-full py-4 md:py-6 lg:py-8 xl:py-12 2xl:py-24 text-black my-5">
        <div className="max-w-screen-2xl mx-auto grid gap-4 md:gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-12 2xl:gap-16 px-4 md:px-6 lg:px-8">
          <div>
            <Image
              alt="About Image"
              className="aspect-video w-full overflow-hidden rounded-xl object-cover"
              height="650"
              src="/portfolio_out.jpg"
              width="365"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
              A brief intro, who am I?
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-grotesk">
              I&#39;m Mehedi Hasan, a full stack developer who recently
              graduated with a diploma in Computer Science and Technology.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-grotesk">
              I specialize in mern stack technology and use tailwind to build
              modern and functional websites.
            </p>
            <div className="pt-5">
              <Link
                className="text-lg lg:text-xl px-4  py-2 lg:px-8  lg:py-3  rounded-full  bg-black text-white hover:rounded transition duration-500 ease-in-out"
                href="#contact"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
