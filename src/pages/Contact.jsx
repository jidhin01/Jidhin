import React from "react"
import { SparklesIcon } from "lucide-react"
import { FlipLink } from "../components/Fliplink"
import { FaSquareXTwitter,FaStackOverflow,FaGithub,FaLinkedin } from "react-icons/fa6";
import { div } from "framer-motion/client";
import { ContactFormExample } from "../components/Email";

// Icons component
const Icons = {
  linkedin: () => (
        <FaLinkedin className="text-black  group-hover:fill-sky-600  transition-all duration-500 ease-in-out" size={86} />

  ),
  github: () => (
        <FaGithub className="text-black  group-hover:fill-gray-950 transition-all ease-in-out duration-500" size={86} />

  ),
  StackOverflow: () => (
        <FaStackOverflow className="text-black  group-hover:fill-orange-500 transition-all ease-in-out duration-500" size={86} />

  ),
  Twitter: () => (
        <FaSquareXTwitter className="text-black  group-hover:fill- transition-all ease-in-out duration-500" size={86} />

  ),
}

// Component
export function Contact() {
  return (
<div 
      id="Contact"

className="flex justify-center gap-4 flex-wrap md:flex-nowrap">
  {/* Left: Contact Form */}
  <div className="w-full md:w-1/2">
    <ContactFormExample />
  </div>

  {/* Right: Section */}
        <article className="z-50 mt-20 flex flex-col items-center justify-center">
          
        </article>

        <section className="h-full">
          <section className="grid place-content-center gap-2 px-8 py-24 text-black">
            <div className="group flex items-center justify-center gap-4">
              <Icons.linkedin />
              <FlipLink href="https://www.linkedin.com/in/jidhin-t/">Linkedin</FlipLink>
            </div>
            <div className="group flex items-center justify-center gap-4">
              <FlipLink href="https://github.com/jidhin01">Github</FlipLink>
              <Icons.github />
            </div>
            <div className="group flex items-center justify-center gap-4">
              <Icons.StackOverflow />
              <FlipLink href="https://stackoverflow.com/users/27804742/jidhin">Stack</FlipLink>
            </div>
            <div className="group flex items-center justify-center gap-4">
              <FlipLink href="https://x.com/Jidhin01">Twitter</FlipLink>
              <Icons.Twitter />
            </div>
          </section>
        </section>
      </div>
  )
}