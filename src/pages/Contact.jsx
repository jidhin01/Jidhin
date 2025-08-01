import React from "react";
import { FaSquareXTwitter, FaStackOverflow, FaGithub, FaLinkedin } from "react-icons/fa6";
import { FlipLink } from "../components/Fliplink";
import { ContactFormExample } from "../components/Email";

// Social Icons Component
const Icons = {
  linkedin: () => (
    <FaLinkedin className="text-black group-hover:fill-sky-600 transition-all duration-500 ease-in-out" size={86} />
  ),
  github: () => (
    <FaGithub className="text-black group-hover:fill-gray-950 transition-all duration-500 ease-in-out" size={86} />
  ),
  StackOverflow: () => (
    <FaStackOverflow className="text-black group-hover:fill-orange-500 transition-all duration-500 ease-in-out" size={86} />
  ),
  Twitter: () => (
    <FaSquareXTwitter className="text-black group-hover:fill-gray-950 transition-all duration-500 ease-in-out" size={86} />
  ),
};

// Contact Section Component
export function Contact() {
  return (
    <div id="Contact" className="flex flex-col md:flex-row justify-center items-start gap-10 px-4 py-12 max-w-6xl mx-auto">
      
      {/* Left: Contact Form */}
      <div className="w-full md:w-1/2">
        <ContactFormExample />
      </div>

      {/* Right: Social Links */}
      
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <section className="grid place-content-center gap-6 py-8 text-black">
          <div className="group flex flex-col sm:flex-row items-center justify-center gap-4">
            <Icons.linkedin />
            <FlipLink href="https://www.linkedin.com/in/jidhin-t/">Linkedin</FlipLink>
          </div>
          <div className="group flex flex-col sm:flex-row items-center justify-center gap-4">
            <FlipLink href="https://github.com/jidhin01">Github</FlipLink>
            <Icons.github />
          </div>
          <div className="group flex flex-col sm:flex-row items-center justify-center gap-4">
            <Icons.StackOverflow />
            <FlipLink href="https://stackoverflow.com/users/27804742/jidhin">Stack</FlipLink>
          </div>
          <div className="group flex flex-col sm:flex-row items-center justify-center gap-4">
            <FlipLink href="https://x.com/Jidhin01">Twitter</FlipLink>
            <Icons.Twitter />
          </div>
        </section>
      </div>
    </div>
  );
}