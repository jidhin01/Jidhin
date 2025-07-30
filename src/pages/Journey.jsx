import React from "react";
import { Timeline } from "../components/Timeline";

export function Journey() {
  const data = [
    {
      title: "Aug 2024 - Feb 2024",
      content: (
        <div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-6 sm:space-y-10">
            <div
              className="border border-neutral-700 hover:border-neutral-600 p-5 sm:p-6 rounded-[18px] shadow-lg
                         transform transition duration-300 hover:scale-[1.02] hover:shadow-xl "
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-500 mb-2">Python Full Stack Internship Program</h3>
              <p className="text-base sm:text-lg font-semibold text-neutral-500 mb-1">
                 Technovalley Software India Private Limited
              </p>
              {/* <ul className="list-disc list-inside text-sm sm:text-base text-neutral-500 space-y-2 mt-4">
               <li>Built responsive user interfaces with HTML, CSS, and JavaScript.</li>
                <li>Assisted in integrating frontend components with backend services.</li>
                <li>Participated in code reviews and debugging sessions.</li>
              </ul> */}
            </div>
        </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021-2024",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-6 sm:space-y-10">
            <div
              className="border border-neutral-700 hover:border-neutral-600 p-5 sm:p-6 rounded-[18px] shadow-lg
                         transform transition duration-300 hover:scale-[1.02] hover:shadow-xl "
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-500 mb-2">Bachelor of Computer Application (BCA)</h3>
              {/* <p className="text-base sm:text-lg font-semibold text-neutral-500 mb-1">
                 Safa College of Arts and Science
              </p> */}
              <p className="text-base sm:text-lg font-semibold text-neutral-500 mb-1">
                University of Calicut      
                        </p>
              {/* <ul className="list-disc list-inside text-sm sm:text-base text-neutral-500 space-y-2 mt-4">
               <li>Built responsive user interfaces with HTML, CSS, and JavaScript.</li>
                <li>Assisted in integrating frontend components with backend services.</li>
                <li>Participated in code reviews and debugging sessions.</li>
              </ul> */}
            </div>
        </div>
          </div>
        </div>
      ),
    },
    
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
