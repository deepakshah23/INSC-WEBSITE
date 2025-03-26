import React from "react";

const ContactSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-16 h-[1px] bg-red-500"></div>
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <div className="w-16 h-[1px] bg-red-500"></div>
          </div>
          <p className="text-gray-600 mt-4">We would love to hear from you!</p>
        </div>

        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded"
              rows={4} // Changed to use curly braces
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
