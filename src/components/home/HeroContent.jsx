"use client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const heroContent = [
  {
    title: "EMPOWERING FUTURES",
    subtitle: "Education is the key to unlock the world",
    buttonText: "Join the Mission",
    url: "/become-member",
    background: "/hero1.png",
  },
  {
    title: "BUILDING BRIGHTER MINDS",
    subtitle: "Together, we create opportunities for every child",
    buttonText: "Become a Volunteer",
    url: "/contact",
    background: "/hero2.png",
  },
  {
    title: "LEARN. INSPIRE. TRANSFORM.",
    subtitle: "Changing lives through education and care",
    buttonText: "Support Us",
    url: "/donate",
    background: "/hero3.png",
  },
];

const HeroContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === heroContent.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroContent.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center text-white overflow-hidden pt-24 px-4 sm:px-6 md:px-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${heroContent[currentIndex].background})`,
          zIndex: -2,
        }}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/70 to-blue-900/40 z-[-1]" />

      {/* Content */}
      <div
        key={currentIndex}
        className="relative max-w-3xl w-full text-left z-10 animate-fade-in pb-20 sm:pb-24"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase mb-4 drop-shadow-lg leading-tight">
          {heroContent[currentIndex].title}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-light tracking-wide mb-8 drop-shadow-md max-w-[90%]">
          {heroContent[currentIndex].subtitle}
        </p>
        <button
          onClick={() => navigate(heroContent[currentIndex].url)}
          className="bg-amber-400 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-amber-500 hover:scale-105 transition-all duration-300 flex items-center justify-center"
        >
          {heroContent[currentIndex].buttonText} <ArrowRight className="ml-2" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {heroContent.map((_, index) => (
          <span
            key={index}
            role="button"
            aria-label={`Go to slide ${index + 1}`}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setCurrentIndex(index)}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex
                ? "bg-slate-400 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Arrows (hidden on small screens) */}
      <div className="hidden sm:block absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer text-white z-10">
        <ChevronLeft size={36} onClick={goToPrev} />
      </div>
      <div className="hidden sm:block absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-white z-10">
        <ChevronRight size={36} onClick={goToNext} />
      </div>
    </section>
  );
};

export default HeroContent;
