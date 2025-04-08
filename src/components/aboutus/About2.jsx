import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Elevating Educational Excellence Across India",
    description:
      "The Indian School Consortium is an organization that brings together all schools in India. With a mission to provide quality education and a focus on holistic development, the consortium aims to foster a culture of excellence in every aspect of the educational experience.",
    additionalText: "",
    image: "/about/image1.png",
    imageAlt: "elevating1",
  },
  {
    title: "Elevating Educational Excellence Across India",
    description:
      "With a diverse range of member schools that cover various regions, cultures and academic specializations, the Indian School Consortium is a unique platform for students, teachers and educational leaders to come together and learn from each other. The consortium's programs and initiatives are designed to support continuous improvement and to provide the students with the best possible learning opportunities.",
    additionalText: "",
    image: "/about/image2.png",
    imageAlt: "elevating2",
  },
];

export default function About2() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <main className="bg-gray-50 w-full overflow-hidden ">
      <section className="min-h-[65vh] flex flex-col items-center pt-8 px-4 sm:px-6">
        <div className=" mx-auto w-[90%] ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                {slides[currentSlide].title}
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              {slides[currentSlide].additionalText && (
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {slides[currentSlide].additionalText}
                </p>
              )}
            </div>

            <div className="relative w-full flex justify-center">
              <img
                src={slides[currentSlide].image || "/placeholder.svg"}
                alt={slides[currentSlide].imageAlt}
                className="w-full max-w-[500px] h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 mt-6">
            <button
              onClick={previousSlide}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="Next slide"
            >
              <ArrowRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      <section className="min-h-[60vh] bg-gray-50 pt-5">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="flex gap-2 items-center">
                <div className="w-6 border-1 border-red-700 h-0 mt-2"></div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Our Mission
                </h2>
                <div className="w-6 border-1 border-red-700 h-0 mt-2"></div>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                The Indian School Consortium (INSC) is dedicated to transforming
                the landscape of education across India by fostering a
                collaborative and innovative educational environment.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our mission is to elevate the quality of education through the
                promotion of best practices, cutting-edge teaching
                methodologies, and the sharing of resources among member
                schools. We are committed to supporting the professional growth
                of educators by offering targeted training and development
                opportunities.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                In addition, the INSC emphasizes the importance of holistic
                student development, ensuring that academic achievement is
                complemented by social, emotional, and physical growth.
              </p>
            </div>
            <div className="relative w-full flex justify-center">
              <img
                src="/about/image3.png"
                alt="ERP History Illustration"
                className=" max-w-[90%] h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
