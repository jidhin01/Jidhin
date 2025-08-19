import React from 'react';
import { WordRotate } from '../components/WordRoutat';
import { Link } from 'react-scroll'; 
import { IconDownload } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { GridBackground } from '../components/Gridbg';

const Herosection = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <GridBackground />
      <div className="min-h-[70%] max-h-[90%] md:max-w-[60%] bg-white backdrop-blur-lg border border-white/20 shadow-xl shadow-gray-500 rounded-3xl relative z-50 flex flex-col flex-1 overflow-hidden">
        <div className="flex flex-col items-center justify-center text-center px-4 flex-1">
          
          {/* Headline & Rotating Words — now responsive */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-center">
            <WordRotate
              className="text-3xl sm:text-4xl font-bold bg-amber-300 text-black"
              words={["Hello ", "नमस्ते", "നമസ്കാരം", "Hola", "Ciao","مرحبًا","Olá"]}
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-black">
              I'm Jidhin,
            </h1>
          </div>

          {/* Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
            className="text-neutral-500 text-base sm:text-lg mt-4 max-w-lg mx-auto"
          >
            A full-stack developer who loves turning creative visions into functional realities on the web. Dive into my portfolio to see the projects I've poured my energy and expertise into.
          </motion.p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-50}
              className="text-neutral-500 font-semibold text-base sm:text-lg hover:text-black focus:outline-none transition duration-300"
            >
              Contact me
            </Link>

            <a
              href="/Jidhin T.pdf"
              download="jidhin T.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 font-semibold text-base sm:text-lg hover:text-black focus:outline-none transition duration-300 flex items-center gap-2"
            >
              <IconDownload />My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;