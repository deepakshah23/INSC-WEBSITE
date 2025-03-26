import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920"
          alt="Education Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Providing Opportunities to Every Student
          </h1>
          <p className="text-xl mb-8">
            The main motto is that every opportunities should reach every
            student irrespective to their geographical location
          </p>
          <button className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition flex items-center">
            Explore Our Schools <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
