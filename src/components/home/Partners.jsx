import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const partners = [
  "./img/clients/client1.png",
  "./img/clients/client2.png",
  "./img/clients/client3.png",
  "./img/clients/client4.png",
  "./img/clients/client5.png",
  "./img/clients/client6.jpg",
  "./img/clients/client7.png",
  "./img/clients/client8.jpg",
  "./img/clients/client9.png",
  "./img/clients/client10.png",
  "./img/clients/client11.jpeg",
];

const Partners = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  // Function to start the scrolling animation
  const startAnimation = () => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        duration: 60,
        ease: "linear",
      },
    });
  };

  // Function to stop the scrolling animation
  const stopAnimation = () => {
    controls.stop();
  };

  // Start animation on component mount (helps on mobile)
  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="overflow-hidden w-full md:w-[95%] mx-auto pb-6">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="w-16 h-[1px] bg-red-500"></div>
          <h2 className="text-4xl font-bold">Partners</h2>
          <div className="w-16 h-[1px] bg-red-500"></div>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => {
          setIsHovered(true);
          stopAnimation();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          startAnimation();
        }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={controls}
          initial={false}
        >
          {[...partners, ...partners].map((logo, i) => (
            <div key={i} className="flex-shrink-0 p-2">
              <img
                src={logo}
                alt={`Partner ${i + 1}`}
                className="w-32 h-32 md:w-40 md:h-40 object-contain bg-white rounded shadow"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
