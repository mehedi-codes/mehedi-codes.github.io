"use client";
import {useState} from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import CurrentTime from "../CurrentTime";
import LottieMail from "../LottieMail";
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import {Button} from "../ui/button";
import {isValidEmail} from "@/lib/utils";
import toast from "react-hot-toast";
import {ReloadIcon} from "@radix-ui/react-icons";
const Contact = () => {
  const [btnLoading, setBtnLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    setBtnLoading(true);

    if (!name || typeof name !== "string") {
      return toast.error("Name is invalid. It should be a string.");
    }
    if (name.length < 3) {
      return toast.error(
        "Name is too short. It should have at least 3 characters."
      );
    }
    if (!email || typeof email !== "string") {
      return toast.error("Email is invalid. It should be a string.");
    }
    if (email.length < 3) {
      return toast.error(
        "Email is too short. It should have at least 3 characters."
      );
    }
    if (!isValidEmail(email)) {
      return toast.error(
        "Email format is invalid. Please enter a valid email address."
      );
    }
    if (!message || typeof message !== "string") {
      return toast.error("Message is invalid. It should be a string.");
    }
    if (message.length < 3) {
      return toast.error(
        "Message is too short. It should have at least 3 characters."
      );
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, message}),
      });
      if (response) {
        const data = await response.json();
        console.log(data);
        if (data.success) {
          toast.success("Message sent successfully!");
        }
        return response;
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
      throw new Error(error);
    } finally {
      form.reset();
      setBtnLoading(false);
    }
  };

  return (
    <section className="py-20">
      <div className="text-center">
        <SectionTitle
          title="contact"
          className="text-[#0E0E0C}]"
          svgFill="#0E0E0C"
        />
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-5xl mx-auto mt-10 font-grotesk">
          <Link
            href="mailto:iammehedihasan@protonmail.com"
            target="_blank"
            className="hidden lg:inline text-2xl border border-gray-400 rounded-full px-4 py-2 hover:bg-[#0E0E0C] hover:text-white transition duration-500 ease-in-out"
          >
            iammehedihasan@protonmail.com
          </Link>
          <Link
            href="tel:+8801706101847"
            target="_blank"
            className="hidden lg:inline text-2xl border border-gray-400 rounded-full px-4 py-2 hover:bg-[#0E0E0C] hover:text-white transition duration-500 ease-in-out"
          >
            +8801706101847
          </Link>
          <Link
            href="https://maps.app.goo.gl/fvM6UWpb61JPeZWFA"
            target="_blank"
            className="hidden lg:inline text-2xl border border-gray-400 rounded-full px-4 py-2 hover:bg-[#0E0E0C] hover:text-white transition duration-500 ease-in-out"
          >
            Dhaka, Bangladesh
          </Link>
          <CurrentTime />
        </div>
      </div>
      <MaxWidthWrapper className="p-10 border border-gray-400 rounded-2xl mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 overflow-hidden">
          <div className="h-96 mt-10 hidden lg:flex justify-center items-center mx-auto ">
            <LottieMail />
          </div>
          <form className="space-y-16 h-fit" onSubmit={handleSubmit}>
            <div className="grid w-full gap-1.5">
              <label
                htmlFor="name"
                className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-black transition-all"
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-lg"
                  autoComplete="on"
                  maxLength={200}
                  required
                />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-lg text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-2xl peer-focus:top-2 peer-focus:text-lg">
                  Your name
                </span>
              </label>
            </div>
            <div className="grid w-full gap-1.5">
              <label
                htmlFor="email"
                className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-black transition-all"
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-lg"
                  autoComplete="on"
                  maxLength={500}
                  required
                />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-lg text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-2xl peer-focus:top-2 peer-focus:text-lg">
                  Your email
                </span>
              </label>
            </div>
            <div className="grid w-full gap-1.5">
              <label
                htmlFor="message"
                className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-black transition-all "
              >
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Your message"
                  className="peer w-full border-none bg-transparent p-5 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-lg resize-none"
                  maxLength={5000}
                  required
                />
                <span className="absolute start-0 top-2 -translate-y-1/2 text-lg text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-2xl peer-focus:top-2 peer-focus:text-lg">
                  Your message
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="text-xl w-full  py-2  rounded-full bg-black text-white text-center flex justify-center items-center disabled:bg-opacity-80 disabled:cursor-not-allowed transition-all"
              disabled={btnLoading}
            >
              {btnLoading ? (
                <span>
                  <ReloadIcon className="mr-2 size-6 animate-spin inline" />{" "}
                  Please wait
                </span>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </form>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Contact;
