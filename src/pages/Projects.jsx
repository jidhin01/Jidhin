"use client";
import React from "react";
import { StickyScroll } from "../components/StickyScroll";
import { TextHoverEffect } from "../components/Text-hover";

const content = [
  {
    title: "Popcorn",
    github: "https://github.com/jidhin01/popcorn",
    preview: "https://popcorn-a86t.onrender.com",
    description:
      "Developed a responsive movie ticket booking web app using Django, JavaScript, HTML, and CSS. Built secure user authentication and an admin dashboard for managing movies and ticket data. Demonstrates CRUD operations, intuitive UI, and end-to-end functionality.",
    img: "/Popcorn.png",
  },
  {
    title: "Connect",
    github: "https://github.com/jidhin01/connect",
    preview: "#",
    description:
      "Developed a scalable messaging application using React.js, featuring real-time chat and secure media sharing. Improved user engagement with interactive group conversations and instant notifications. Delivered an intuitive, responsive UI to enhance connectivity and user experience.",
    img: "/connect.png",
  },
  {
    title: "Weathery",
    github: "https://github.com/jidhin01/weatherapp",
    preview: "#",
    description:
      "Developed a React.js weather app displaying real-time data (temperature, humidity, wind) from the OpenWeatherMap API based on user-entered locations, enhancing user experience with immediate feedback.",
    img: "/Weathery.png",
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