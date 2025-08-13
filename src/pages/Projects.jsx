"use client";
import React from "react";
import { StickyScroll } from "../components/StickyScroll";
import { TextHoverEffect } from "../components/Text-hover";

const content = [
  {
    title: "Popcorn",
    github: "https://github.com/jidhin01/popcorn",
    preview: "#",
    description:
      "A Python Django project showcasing the design and user interface for a movie ticket-booking website, focusing on intuitive navigation and visual appeal.",
    img: "/Popcorn.png",
  },
  {
    title: "Weathery",
    github: "https://github.com/jidhin01/weatherapp",
    preview: "#",
    description:
      "Developed a React.js weather app displaying real-time data (temperature, humidity, wind) from the OpenWeatherMap API based on user-entered locations, enhancing user experience with immediate feedback.",
    img: "/Weathery.png",
  },
  {
    title: "Connect",
    github: "https://github.com/jidhin01/connect",
    preview: "#",
    description:
      "Developed a user-friendly social media app with React.js, allowing users to create posts, interact with others through comments and likes, and connect seamlessly in real time, thereby improving engagement and community interaction.",
    img: "/connect.png",
  },
];

export function Projects() {
  return (
    <div className="w-full py-4">
      <div className="bg-white max-w-100 mx-auto m-10">
        <TextHoverEffect text="Projects" />
      </div>
      <StickyScroll content={content} />
    </div>
  );
}