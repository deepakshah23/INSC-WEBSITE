import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5">
      {/* Footer Grid Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-600 pb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">ABOUT US</h3>
          <ul className="space-y-2">
            <li>About Smile</li>
            <li>Impact</li>
            <li>Reach & Presence</li>
            <li>Smilestones</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">OUR WORK</h3>
          <ul className="space-y-2">
            <li>Education</li>
            <li>Health</li>
            <li>Livelihood</li>
            <li>Women Empowerment</li>
            <li>Disaster Response</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">CAMPAIGNS</h3>
          <ul className="space-y-2">
            <li>Shiksha Na Ruke</li>
            <li>Health Cannot Wait</li>
            <li>She Can Fly</li>
            <li>Swabhiman</li>
            <li>Tayyari Kal Ki</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">GET INVOLVED</h3>
          <ul className="space-y-2">
            <li>Individual Support</li>
            <li>Corporate Partnerships</li>
            <li>Volunteer</li>
            <li>School Partnerships</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">RESOURCE CENTRE</h3>
          <ul className="space-y-2">
            <li>Annual Report</li>
            <li>Newsletter</li>
            <li>Stories of Change</li>
            <li>The Smile Blog</li>
            <li>Films</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto text-center mt-8">
        <p className="font-semibold">Indian School Consortium Foundation</p>
        <p>Crossing Republik Ghaziabad 201016, Uttar Pradesh, India</p>
        <p>
          Contact Us: Tel: +917905044451 | E-mail:
          Indianschoolconsortium@gmail.com
        </p>
      </div>

      {/* Newsletter Subscription & Social Media Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-end justify-center gap-20 space-y-8 md:space-y-0 mt-8 ">
        {/* Newsletter Subscription */}
        <div className=" md:ml-8">
          <p className="font-semibold">Subscribe to Our Newsletter</p>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-2">
            {/* <input
              type="text"
              placeholder="Name"
              className="bg-gray-700 text-white px-4 py-2 rounded-lg outline-none"
            /> */}
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-gray-700 text-white px-4 py-2 rounded-lg outline-none"
            />
            <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-500 cursor-pointer">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-6 md:text-center md:mr-8 items-baseline  px-4">
          <a
            href="#"
            className="text-white text-xl hover:bg-gray-200 hover:text-gray-800 p-2 rounded-full"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-white text-xl hover:bg-gray-200 hover:text-gray-800 p-2 rounded-full"
          >
            <BsTwitterX />
          </a>
          <a
            href="#"
            className="text-white text-xl hover:bg-gray-200 hover:text-gray-800 p-2 rounded-full"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="text-white text-xl hover:bg-gray-200 hover:text-gray-800 p-2 rounded-full"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-white text-xl hover:bg-gray-200 hover:text-gray-800 p-2 rounded-full"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
