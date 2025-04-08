import React from "react";
import About2 from "./about2";
import { aboutData } from "../../assets/lib/aboutData";

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-green-50">
        <div className="absolute inset-0 bg-[url('/img/image.png')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32 relative">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {aboutData.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {aboutData.description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white" />
      </div>

      {/* About2 Component */}
      <About2 />

      {/* Our Vision Section */}
      <div className=" py-10 bg-gray-50">
        <div className="w-[90%] mx-auto px-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text Content */}
            <div>
              <div className="flex gap-2 items-center">
                <div className="w-6 border-1 border-red-700 h-0 mb-4"></div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  {aboutData.visionTitle}
                </h2>
                <div className="w-6 border-1 border-red-700 h-0 mb-4"></div>
              </div>
              {aboutData.visionDescription.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Image Section */}
            <div className="relative flex justify-center md:justify-end">
              <div className="w-[70%] sm:w-3/4 md:w-full aspect-square rounded-full overflow-hidden h-[50vh] md:h-[50vh]">
                <img
                  src={aboutData.visionImage}
                  alt="Community work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-2 md:right-4 bg-white rounded-lg shadow-xl p-4 sm:p-6 max-w-xs">
                <p className="text-gray-600 text-sm sm:text-base italic">
                  "{aboutData.quote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
