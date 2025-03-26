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
    <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 pb-6">
    <div className="ml-8">
        <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
        <ul className="space-y-2">
          <li>Home</li>
          <li>Become a Member</li>
          <li>About</li>
          <li>Event +</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">OUR WORK</h3>
        <ul className="space-y-2">
          <li>Diploma Courses</li>
          <li>Honorary Doctorate</li>
          <li>Production Engineer</li>
          <li>Web Developer</li>
          <li>Data Analyst</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="text-center md:text-left mr-8">
        <p className="font-semibold">Indian School Consortium Foundation</p>
        <p>Crossing Republik Ghaziabad 201016, Uttar Pradesh, India</p>
        <p>Contact Us: Tel: +917905044451</p>
        <p>E-mail: Indianschoolconsortium@gmail.com</p>

        <div className="mt-4">
          <p className="font-semibold">Subscribe to Our Newsletter</p>
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 mt-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-gray-700 text-white px-3 py-2 rounded-lg outline-none w-60"
            />
            <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-500 cursor-pointer">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-start space-x-5 mt-6">
          <a href="#" className="text-white text-lg hover:bg-gray-200 hover:text-gray-800 p-2 rounded-full">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white text-lg hover:bg-gray-200 hover:text-gray-800 p-2 rounded-full">
            <BsTwitterX />
          </a>
          <a href="#" className="text-white text-lg hover:bg-gray-200 hover:text-gray-800 p-2 rounded-full">
            <FaYoutube />
          </a>
          <a href="#" className="text-white text-lg hover:bg-gray-200 hover:text-gray-800 p-2 rounded-full">
            <FaInstagram />
          </a>
          <a href="#" className="text-white text-lg hover:bg-gray-200 hover:text-gray-800 p-2 rounded-full">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-600 w-11/12 mx-auto my-6"></div>

    <div className="container mx-auto text-center mt-6 pt-2">
      <p className="text-sm">&copy; {new Date().getFullYear()} Indian School Consortium Foundation. All rights reserved.</p>
    </div>
</footer>

  
  
  

  );
};
export default Footer;
