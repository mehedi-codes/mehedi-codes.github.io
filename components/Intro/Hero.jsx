import Image from "next/image";
import me from "@/public/images/me.png";
import Link from "next/link";
import Navigation from "../Navigation";
import {
  ArrowBottomLeftIcon,
  ArrowBottomRightIcon,
  ChatBubbleIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";
import ms from "@/public/images/mscroll.svg";
const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden bg-[#999D9E]">
      <Image
        src={me}
        alt="profile_picture"
        quality={100}
        placeholder="blur"
        className="object-contain object-center bg-cover bg-center h-screen w-full overflow-hidden"
      />
      <div className="bg-black absolute top-0 w-full h-full bg-opacity-5"></div>
      <nav className="absolute top-0 w-full inset-x-0">
        <div className="md:py-5 flex justify-between items-center px-2.5 md:px-5 lg:px-10 ">
          <Link href="/" aria-label="Logo" className="text-2xl lg:font-grotesk">
            <h1>&copy; thecodermehedi</h1>
          </Link>
          <Navigation dotWhite={true} />
        </div>
      </nav>
      <div className="hidden xl:flex absolute left-64 top-56 text-white text-3xl flex-col items-end gap-4 justify-end font-grotesk p-5 text-right font-normal">
        <ArrowBottomLeftIcon
          width={35}
          height={35}
          className="hidden xl:block"
        />
        <div className="space-y-2 mr-5 mt-10 text-4xl">
          <p>Mehedi Hasan</p>
        </div>
        <div className="flex gap-4 mr-5">
          <Link
            href="https://github.com/thecodermehedi"
            target="_blank"
            className="rounded-full hover:bg-white hover:bg-opacity-20   text-white p-2"
            title="Github"
          >
            <GitHubLogoIcon width={30} height={30} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/thecodermehedi"
            target="_blank"
            className="rounded-full  hover:bg-white hover:bg-opacity-20  text-white p-2"
            title="LinkedIn"
          >
            <LinkedInLogoIcon width={30} height={30} />
          </Link>
        </div>
      </div>
      <div className="hidden xl:flex absolute right-64 top-56 text-white text-3xl flex-col items-start gap-4 justify-start font-grotesk p-5 text-left font-normal">
        <ArrowBottomRightIcon
          width={35}
          height={35}
          className="hidden xl:block"
        />
        <div className="space-y-2 ml-5 mt-10 text-4xl">
          <p>Web Developer</p>
        </div>
        <div className="flex gap-4 ml-5">
          <Link
            href="https://drive.google.com/uc?id=1maFPdRtGHFzoYXagjAQErQObrntBRUwK"
            className="rounded-full p-2 hover:bg-white hover:bg-opacity-20 inline"
            title="Resume"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              >
                <path
                  strokeDasharray="2 4"
                  strokeDashoffset="6"
                  d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    repeatCount="indefinite"
                    values="6;0"
                  />
                </path>
                <path
                  strokeDasharray="30"
                  strokeDashoffset="30"
                  d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.1s"
                    dur="0.3s"
                    values="30;0"
                  />
                </path>
                <path strokeDasharray="10" strokeDashoffset="10" d="M12 8v7.5">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.5s"
                    dur="0.2s"
                    values="10;0"
                  />
                </path>
                <path
                  strokeDasharray="6"
                  strokeDashoffset="6"
                  d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.7s"
                    dur="0.2s"
                    values="6;0"
                  />
                </path>
              </g>
            </svg>
          </Link>
          <Link
            href="mailto:iammehedihasan@protonmail.com"
            target="_blank"
            className="rounded-full p-3 hover:bg-white hover:bg-opacity-30"
            title="Email"
          >
            <ChatBubbleIcon width={30} height={30} />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-24 text-center text-white block xl:hidden space-y-2 w-full">
        <h1 className="text-2xl">Mehedi Hasan</h1>
        <h2 className="text-xl">Web Developer</h2>
        <div className="flex justify-center items-center">
          <Link
            href="https://github.com/thecodermehedi"
            target="_blank"
            className="rounded-full hover:bg-white hover:bg-opacity-20   text-white p-2"
            title="Github"
          >
            <GitHubLogoIcon width={30} height={30} />
          </Link>
          <Link
            href="https://drive.google.com/uc?id=1maFPdRtGHFzoYXagjAQErQObrntBRUwK"
            className="rounded-full p-2 hover:bg-white hover:bg-opacity-20 inline"
            title="Resume"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              >
                <path
                  strokeDasharray="2 4"
                  strokeDashoffset="6"
                  d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    repeatCount="indefinite"
                    values="6;0"
                  />
                </path>
                <path
                  strokeDasharray="30"
                  strokeDashoffset="30"
                  d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.1s"
                    dur="0.3s"
                    values="30;0"
                  />
                </path>
                <path strokeDasharray="10" strokeDashoffset="10" d="M12 8v7.5">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.5s"
                    dur="0.2s"
                    values="10;0"
                  />
                </path>
                <path
                  strokeDasharray="6"
                  strokeDashoffset="6"
                  d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.7s"
                    dur="0.2s"
                    values="6;0"
                  />
                </path>
              </g>
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/thecodermehedi"
            target="_blank"
            className="rounded-full  hover:bg-white hover:bg-opacity-20  text-white p-2"
            title="LinkedIn"
          >
            <LinkedInLogoIcon width={30} height={30} />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-6 flex justify-center items-center w-full">
        <Image src={ms} alt="mscroll" quality={100} className="" />
      </div>
    </div>
  );
};

export default Hero;
