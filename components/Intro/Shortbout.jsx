import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import SectionTitle from "../SectionTitle";
const Shortbout = () => {
  return (
    <section className=" w-full bg-[#0E0E0C] text-white py-20">
      <SectionTitle title="About Me" className="text-white" svgFill="#FFFFFF" />
      <MaxWidthWrapper className="text-center p-10 space-y-8 rounded-2xl mt-10   border">
        <p className="text-2xl lg:text-5xl font-grotesk  max-w-7xl mx-auto text-[#D1D1C7]">
          I am an independent web developer, blogger and open-source enthusiast
          based in Dhaka, Bangladesh.
        </p>
        <p className="text-2xl lg:text-5xl font-grotesk  max-w-7xl mx-auto text-[#D1D1C7]">
          I specialize in developing creative, user-friendly, responsive and
          minimalistic websites and web applications using modern technologies.
        </p>
      </MaxWidthWrapper>
      <div className="text-center mt-10">
        <Link
          href="/about"
          className="border border-[#D1D1C7] rounded-full px-4 py-2  lg:px-8 lg:py-3 group text-lg lg:text-xl transition duration-500 ease-in-out hover:bg-[#D1D1C7] hover:text-black"
        >
          <span className="mr-2">Learn More</span>
        </Link>
      </div>
    </section>
  );
};

export default Shortbout;
