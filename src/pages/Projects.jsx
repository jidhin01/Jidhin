import React from "react";
import { HoverEffect } from "../components/Hover-effect";
import { TextHoverEffect } from "../components/Text-hover";

export function Projects() {
  return (
    <div className="m-4 sm:m-6 md:m-10">
      <div className="bg-white max-w-100 mx-auto  m-10">
        <TextHoverEffect text="Projects" />
      </div>

      <div className="max-w-5xl mx-auto bg-cyan-800 shadow-2xl rounded-4xl px-4 sm:px-6 md:px-8 mt-10 mb-20">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Popcorn",
    description:
      "A Python Django project showcasing the design and user interface for a movie ticket-booking website, focusing on intuitive navigation and visual appeal.",
    link: "https://github.com/jidhin01/popcorn",
  },
  {
    title: "Weathery",
    description:
      "Developed a React.js weather app displaying real-time data (temperature, humidity, wind) from the OpenWeatherMap API based on user-entered locations, enhancing user experience with immediate feedback.",
    link: "https://github.com/jidhin01/weatherapp",
  },
  {
    title: "Connect",
    description:
      "Developed a user-friendly social media app with React.js, allowing users to create posts, interact with others through comments and likes, and connect seamlessly in real time, thereby improving engagement and community interaction.",
    link: "https://github.com/jidhin01/connect",
  },
];