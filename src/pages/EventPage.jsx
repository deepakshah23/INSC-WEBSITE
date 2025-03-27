import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const EventPage = () => {
  return (
    <div>
      <div className="relative w-full h-[80vh] flex items-center justify-center bg-gradient-to-r from-slate-900 to-blue-950">
        <div className="absolute inset-0">
          <img
            src="event.png"
            alt="Program and Events"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative text-center text-white ">
          <h1 className="text-6xl font-bold">Program and Events</h1>
          <p className="text-lg mt-2">Get Consortium Connected.</p>
        </div>
      </div>

      {/* Upcoming Event Section */}
      <div className="w-full flex flex-col items-center justify-center px-6 py-12 bg-white">
        {/* Animated Text Section */}
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

        {/* Upcoming Event Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mt-6 mb-4 text-center"
        >
          <span className="border-b-4 border-red-500 pb-1">Upcoming Event</span>
        </motion.h2>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
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
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="font-bold mt-2">{event.title}</h3>
              <p className="italic">Upcoming</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Programs Section (Added After Awards) */}
      <div className="w-full flex flex-col items-center justify-center px-6 py-12 ">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mt-6 mb-4 text-center">
          <span className="border-b-4 border-red-500 pb-1">
            Featured Programs
          </span>
        </h2>

        {/* Program Content */}
        <div className="flex flex-col md:flex-row items-center max-w-5xl">
          {/* Program Image */}
          <img
            src="img\events\featured-program.jpg" // Replace with the correct image path
            alt="Featured Programs"
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />

          {/* Program Text */}
          <div className="md:ml-8 mt-4 md:mt-0 text-center md:text-left">
            <h3 className="text-xl font-bold">ORIENTATION PROGRAM.</h3>
            <p className="text-gray-700 mt-2">
              Students, alumni, school, and corporate partners all point to our
              annual Orientation Program & Career Forum (affectionately called
              "The OP") as one of the most powerful, impactful aspects of The
              Consortium experience. It's an intense, hands-on opportunity for
              students to get real career development advice from the best
              educational institutions and corporations in the country.
              Corporate partners tell us the students at the OP are the best of
              the best, providing an unparalleled diversity recruiting
              opportunity.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center px-6 py-12 bg-white">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="w-full max-w-[1300px]" // Slightly increased max width
        >
          <SwiperSlide>
            <img
              src="img/events/1.1.png" // Ensure correct path
              alt="Quote 1"
              className="w-full h-auto max-h-[550px] object-contain rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="img/events/2.2.png" // Ensure correct path
              alt="Quote 2"
              className="w-full h-auto max-h-[550px] object-contain rounded-lg shadow-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default EventPage;
