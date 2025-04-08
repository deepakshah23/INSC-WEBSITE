export const menuItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Events", link: "/events" },
  { name: "Become a Member", link: "/become-member" },

  {
    name: "Product & Services",
    isDropdown: true,
    subMenu: [
      { name: "Diploma Courses", link: "https://employmentexpress.org/" },
      {
        name: "Honorary Doctorate",
        link: "http://hondoc.indianschoolconsortium.com/",
      },
      {
        name: "Production Engineer",
        link: "http://mechtech.employmentexpress.net/",
      },
      { name: "Web Developer", link: "http://webdev.employmentexpress.net/" },
      { name: "Data Analyst", link: "http://daboot.employmentexpress.net/" },
    ],
  },

  { name: "Contact Us", link: "/contact" },
  { name: "Donate Us", link: "/donate" },
];
export default menuItems;
