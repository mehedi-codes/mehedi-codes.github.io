"use client";

import Link from "next/link";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import {useEffect, useState} from "react";
import SectionTitle from "./SectionTitle";
import {useForm, ValidationError} from "@formspree/react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
const Contact = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const [currentTime, setCurrentTime] = useState("");
  const [state, handleSubmit] = useForm("xyyqrvew");
  useEffect(() => {
    const updateTime = () => {
      const time = dayjs().tz("Asia/Dhaka").format("hh:mm:ss A");
      setCurrentTime(time);
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Thank you for reaching out!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [state.succeeded]);

  return (
    <section className="py-5 md:py-10 lg:py-20 px-5" id="contact">
      <SectionTitle title={"contact"} />
      <div className="max-w-screen-2xl mx-auto p-10 my-20 border border-gray-400 rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="space-y-16">
            <div className="grid w-full gap-1.5">
              <label
                htmlFor="name"
                className="relative block overflow-hidden border-b border-gray-300 bg-transparent pt-3 focus-within:border-black transition-all"
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-lg"
                  required
                />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-lg text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-2xl peer-focus:top-2 peer-focus:text-lg">
                  Your name
                </span>
              </label>
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="grid w-full gap-1.5">
              <label
                htmlFor="email"
                className="relative block overflow-hidden border-b border-gray-300 bg-transparent pt-3 focus-within:border-black transition-all"
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-lg"
                  required
                />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-lg text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-2xl peer-focus:top-2 peer-focus:text-lg">
                  Your email
                </span>
              </label>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="grid w-full gap-1.5">
              <label
                htmlFor="message"
                className="relative block overflow-hidden border-b border-gray-300 bg-transparent pt-3 focus-within:border-black transition-all "
              >
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Your message"
                  className="peer w-full border-none bg-transparent p-5 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-lg resize-none"
                  required
                />
                <span className="absolute start-0 top-2 -translate-y-1/2 text-lg text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-2xl peer-focus:top-2 peer-focus:text-lg">
                  Your message
                </span>
              </label>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              className="text-lg lg:text-xl  py-2 w-full  lg:py-3  rounded-full  bg-black text-white hover:rounded transition duration-500 ease-in-out"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </form>
          <div className=" mt-20 lg:mt-0 space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl pb-2">
                Contact Details
              </h2>
              <Link
                href={"mailto:thecodermehedi@gmail.com"}
                className="text-base font-semibold tracking-tight sm:text-xl lg:text-2xl font-grotesk text-gray-700 flex items-center gap-1 hover:text-black "
              >
                thecodermehedi@gmail.com
              </Link>
              <Link
                href={"mailto:iammehedihasan@protonmail.com"}
                className="text-base font-semibold tracking-tight sm:text-xl lg:text-2xl font-grotesk text-gray-700 flex items-center gap-1 hover:text-black"
              >
                iammehedihasan@protonmail.com
              </Link>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl pb-2">
                My Digital Spaces
              </h2>
              <Link
                href={"https://github.com/thecodermehedi"}
                className="text-lg font-semibold tracking-tight sm:text-xl xl:text-2xl font-grotesk text-gray-700  hover:text-black flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  />
                </svg>
                <span>Github</span>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/thecodermehedi"}
                className="text-lg font-semibold tracking-tight sm:text-xl xl:text-2xl font-grotesk text-gray-700 flex items-center gap-1 hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  />
                </svg>
                <span>LinkedIn</span>
              </Link>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl pb-2">
                Location
              </h2>
              <h3 className="text-lg font-semibold tracking-tight sm:text-xl xl:text-2xl text-gray-700 flex gap-1 items-center">
                <span> Dhaka, Bangladesh</span>
              </h3>
              <h3 className="text-lg font-semibold tracking-tight sm:text-xl xl:text-2xl text-gray-700 flex gap-1 items-center">
                <span> {currentTime} </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

{
  /* <SectionTitle title={"contact"} /> */
}
