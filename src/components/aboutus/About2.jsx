import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// const slides = [
//   {
//     title: "Our Mission",
//     description: " kkkkk",
//     additionalText:
//       "In addition, the INSC emphasizes the importance of holistic student development, ensuring that academic achievement is complemented by social, emotional, and physical growth. By advocating for progressive education policies and addressing systemic challenges, we strive to create a more equitable and effective education system that prepares students for the future.",
//     image: "http://indianschoolconsortium.com/assets/img/mis.jpg",
//     imageAlt: "Our Mission",
//   },
//   {
//     title: "Our Mission",
//     description:
//       "The Indian School Consortium (INSC) is dedicated to transforming the landscape of education across India by fostering a collaborative and innovative educational environment. Our mission is to elevate the quality of education through the promotion of best practices, cutting-edge teaching methodologies, and the sharing of resources among member schools. We are committed to supporting the professional growth of educators by offering targeted training and development opportunities.",
//     additionalText: "jjjj",
//     image: "",
//     imageAlt: "Our Mission",
//   },
//   //   {
//   //     title: "Smart Integration",
//   //     description:
//   //       "Experience seamless data flow across departments with our intelligent ERP integration services, featuring automated workflows and advanced analytics.",
//   //     additionalText:
//   //       "From supply chain management to customer relationship management, our ERP solutions ensure every aspect of your business works in perfect harmony.",
//   //     image: "/outsourcing/erp.webp",
//   //     imageAlt: "ERP Types Illustration",
//   //   },
//   //   {
//   //     title: "24/7 Support",
//   //     description:
//   //       "Get uninterrupted assistance from our certified ERP specialists who understand both technical requirements and business processes.",
//   //     additionalText:
//   //       "We provide comprehensive training, maintenance, and troubleshooting to ensure your ERP system operates at peak efficiency around the clock.",
//   //     image: "/outsourcing/erp.webp",
//   //     imageAlt: "ERP Support",
//   //   },
// ];

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
      {/* Page Heading */}
      <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-42"
          >
            <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-clip-text  bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900">
              About US
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-7xl mx-auto">
              The Indian School Consortium is an organization that brings
              together all schools in India. With a mission to provide quality
              education and a focus on holistic development, the consortium aims
              to foster a culture of excellence in every aspect of the
              educational experience. With a diverse range of member schools
              that cover various regions, cultures and academic specializations,
              the Indian School Consortium is a unique platform for students,
              teachers and educational leaders to come together and learn from
              each other. The consortium's programs and initiatives are designed
              to support continuous improvement and to provide the students with
              the best possible learning opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Slider Section */}
      {/* <section className="min-h-[80vh] flex items-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
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

            <div className="space-y-8">
              <div className="relative h-[300px] w-full">
                <img
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt={slides[currentSlide].imageAlt}
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={previousSlide}
                  className="text-blue-600 hover:text-blue-800"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="text-blue-600 hover:text-blue-800"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* History Section */}
      <section className="min-h-[80vh] bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
