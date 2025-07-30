import React from "react";
import {
  FaPython, FaReact, FaHtml5, FaCss3, FaGitAlt,
  FaGithub, FaBootstrap, FaDocker, FaNpm,FaDatabase,
} from "react-icons/fa";
import {
  IoLogoJavascript,
} from "react-icons/io5";
import {
  SiDjango, SiExpress, SiPostman, SiMongodb, SiSqlite,
  SiTailwindcss, SiVite, SiNetlify, SiVercel, SiRender,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { ExpandedTabs } from "../components/Tabs"; // update path if neededimport { TextHoverEffect } from "../components/Text-hover";
import { TextHoverEffect } from "../components/Text-hover";

export default function SkillsTabs() {
  const tabs1 = [
    { title: "Python", icon: <FaPython />, activeClass: "text-sky-500" },
    { title: "JavaScript", icon: <IoLogoJavascript />, activeClass: "text-yellow-400" },
    { title: "HTML", icon: <FaHtml5 />, activeClass: "text-orange-600" },
    { title: "CSS", icon: <FaCss3 />, activeClass: "text-blue-600" },
    { title: "SQL", icon: <FaDatabase />, activeClass: "text-blue-700" },
  ];

  const tabs2 = [   
    { title: "React", icon: <FaReact />, activeClass: "text-cyan-400" },
    { title: "Tailwind CSS", icon: <SiTailwindcss />, activeClass: "text-sky-400" },
    { title: "Bootstrap", icon: <FaBootstrap />, activeClass: "text-purple-800" },
    { type: "separator" },
    { title: "Django", icon: <SiDjango />, activeClass: "text-green-900" },
    { title: "Express", icon: <SiExpress />, activeClass: "text-black" },
  ];

  const tabs3 = [
    { title: "MySQL", icon: <GrMysql />, activeClass: "text-blue-700" },
    { title: "MongoDB", icon: <SiMongodb />, activeClass: "text-green-700" },
    { title: "SQLite", icon: <SiSqlite />, activeClass: "text-sky-900" },
  ];

  const tabs4 = [
    { title: "Git", icon: <FaGitAlt />, activeClass: "text-orange-600" },
    { title: "GitHub", icon: <FaGithub />, activeClass: "text-gray-900" },
    { title: "Postman", icon: <SiPostman />, activeClass: "text-orange-500" },
    { title: "Docker", icon: <FaDocker />, activeClass: "text-sky-400" },
 ];

  const tabs5 = [
    { title: "npm", icon: <FaNpm />, activeClass: "text-rose-600" },
    { title: "Vite", icon: <SiVite />, activeClass: "text-indigo-500" },
    { title: "Netlify", icon: <SiNetlify />, activeClass: "text-teal-500" },
    { title: "Vercel", icon: <SiVercel />, activeClass: "text-black" },
    { title: "Render", icon: <SiRender />, activeClass: "text-indigo-500" },
  ];

  return (

    <div className='max-w-5xl mx-auto items-center justify-center
     '>
        <div className='bg-white flex items-center justify-center  h-30 m-10' >
          <TextHoverEffect text="Tech Stack"/>
        </div>

      <ExpandedTabs tabs={tabs1} className="m-5 "/>
      <ExpandedTabs tabs={tabs2} className="m-5"/>
      <ExpandedTabs tabs={tabs3} className="m-5"/>
      <ExpandedTabs tabs={tabs4} className="m-5"/>
      <ExpandedTabs tabs={tabs5} className="m-5"/>
    </div>
  );
}