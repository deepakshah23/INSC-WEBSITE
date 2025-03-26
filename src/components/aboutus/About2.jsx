import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Elevating Educational Excellence Across India",
    description:
      "The Indian School Consortium is an organization that brings together all schools in India. With a mission to provide quality education and a focus on holistic development, the consortium aims to foster a culture of excellence in every aspect of the educational experience.",
    additionalText: "",
    image: "http://indianschoolconsortium.com/assets/img/bg12.jpg",
    imageAlt: "elevating1",
  },
  {
    title: "Elevating Educational Excellence Across India",
    description:
      "With a diverse range of member schools that cover various regions, cultures and academic specializations, the Indian School Consortium is a unique platform for students, teachers and educational leaders to come together and learn from each other. The consortium's programs and initiatives are designed to support continuous improvement and to provide the students with the best possible learning opportunities.",
    additionalText: "",
    image: "http://indianschoolconsortium.com/assets/img/Schools-NEP-2020.jpg",
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
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Slider Section */}
      <section className="min-h-[80vh] flex items-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[90%]  mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-gray-900">
                {slides[currentSlide].title}
              </h1>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {slides[currentSlide].description}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {slides[currentSlide].additionalText}
                </p>
              </div>
            </div>

            <div className="space-y-10">
              <div className="relative h-[380px] w-full">
                <img
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt={slides[currentSlide].imageAlt}
                  className="object-contain rounded-lg "
                  priority
                />
              </div>
              <div className="flex justify-center items-center gap-4 pt-3">
                <button
                  onClick={previousSlide}
                  className="text-gray-500 hover:text-gray-500"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="text-gray-500 hover:text-gray-500"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="min-h-[80vh] bg-gray-50 pt-5">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  The Indian School Consortium (INSC) is dedicated to
                  transforming the landscape of education across India by
                  fostering a collaborative and innovative educational
                  environment.
                </p>
                <p>
                  Our mission is to elevate the quality of education through the
                  promotion of best practices, cutting-edge teaching
                  methodologies, and the sharing of resources among member
                  schools. We are committed to supporting the professional
                  growth of educators by offering targeted training and
                  development opportunities.
                </p>
                <p>
                  In addition, the INSC emphasizes the importance of holistic
                  student development, ensuring that academic achievement is
                  complemented by social, emotional, and physical growth. By
                  advocating for progressive education policies and addressing
                  systemic challenges, we strive to create a more equitable and
                  effective education system that prepares students for the
                  future.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] w-full">
              <img
                src="http://indianschoolconsortium.com/assets/img/mis.jpg"
                alt="ERP History Illustration"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
