import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  contactInfo,
  ourWorkLinks,
  socialLinks,
  usefulLinks,
} from "../assets/lib/footerLink";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5 w-full">
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between  gap-8 pb-6">
        {/* Useful Links */}
        <div className="w-full md:w-1/3 text-center md:text-left px-16">
          <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2">
            {usefulLinks.map((link, index) => (
              <li key={index}>
                <a href={link.path} className="hover:text-yellow-600">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Work */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Our Work</h3>
          <ul className="space-y-2">
            {ourWorkLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  target="_blank"
                  className="hover:text-yellow-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <p className="font-semibold">{contactInfo.name}</p>
          <p>{contactInfo.address}</p>
          <p>Contact: {contactInfo.phone}</p>
          <p>Email: {contactInfo.email}</p>

          {/* Newsletter */}
          <div className="mt-4">
            <p className="font-semibold">Subscribe to Our Newsletter</p>
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-gray-700 text-white px-3 py-2 rounded-lg outline-none w-full sm:w-60"
              />
              <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-500 cursor-pointer">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            {socialLinks.map((social, index) => {
              const IconComponent =
                social.icon === "BsTwitterX"
                  ? BsTwitterX
                  : social.icon === "FaFacebookF"
                  ? FaFacebookF
                  : social.icon === "FaYoutube"
                  ? FaYoutube
                  : social.icon === "FaInstagram"
                  ? FaInstagram
                  : FaLinkedinIn;

              return (
                <a
                  key={index}
                  href={social.path}
                  className="text-white text-lg hover:text-yellow-600"
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 w-11/12 mx-auto my-6"></div>

      {/* Copyright */}
      <div className="w-full mx-auto text-center mt-6 pt-2">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Indian School Consortium Foundation.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
