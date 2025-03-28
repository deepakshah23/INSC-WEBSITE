import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const EventPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-gradient-to-r from-slate-900 to-blue-950">
        <div className="absolute inset-0">
          <img
            src="event.png"
            alt="Program and Events"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Program and Events</h1>
          <p className="text-lg mt-2">Get Consortium Connected.</p>
        </div>
      </div>

      {/* Upcoming Event Section */}
      <div className="w-full flex flex-col items-center justify-center py-12 bg-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl"
        >
          <p className="text-lg font-semibold">
            We encourage individuals considering an MBA to explore all of their
            options when it comes to schools and finances. We hold several
            virtual events throughout the year that provide an opportunity for
            anyone to learn more about our mission, common application process,
            and fellowship opportunity.
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mt-6 mb-4 text-center"
        >
          <span className="border-b-4 border-red-500 pb-1">Upcoming Event</span>
        </motion.h2>

        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 w-full max-w-6xl px-4">
          {[
            { img: "img/events/jobfair.jpg", title: "Jobfairs" },
            { img: "img/events/conference.jpg", title: "Conference" },
            { img: "img/events/award.jpg", title: "Awards" },
          ].map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="font-bold mt-2 text-lg">{event.title}</h3>
              <p className="italic text-sm">Upcoming</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Programs Section */}
      <div className="w-full flex flex-col items-center py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-4 text-center">
          <span className="border-b-4 border-red-500 pb-1">
            Featured Programs
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center max-w-5xl w-full">
          <img
            src="img/events/featured-program.jpg"
            alt="Featured Programs"
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />
          <div className="md:ml-8 mt-4 md:mt-0 text-center md:text-left">
            <h3 className="text-xl font-bold">ORIENTATION PROGRAM.</h3>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              Students, alumni, school, and corporate partners all point to our
              annual Orientation Program & Career Forum (affectionately called
              "The OP") as one of the most powerful, impactful aspects of The
              Consortium experience...
            </p>
          </div>
        </div>
      </div>

      {/* Swiper Section */}
      <div className="w-full flex justify-center items-center px-4 py-12 bg-white">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="w-full max-w-5xl"
        >
          {["img/events/1.1.png", "img/events/2.2.png"].map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto max-h-80 object-contain rounded-lg shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EventPage;
