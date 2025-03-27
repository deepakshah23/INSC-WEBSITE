export const menuItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/aboutus" },
  { name: "Event +", link: "/events" },
  { name: "Become a Member", link: "/become-member" },
  {
    name: "Product & Services",
    isDropdown: true,
    subMenu: [
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
  { name: "Diploma Courses", link: "https://employmentexpress.org/" },
  { name: "Contact Us", link: "/contactus" },
];
export default menuItems;
