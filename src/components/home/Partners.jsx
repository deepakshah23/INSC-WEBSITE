import { motion } from "framer-motion";

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
  return (
    <div className="overflow-hidden w-full md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto pb-4 px-4">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="w-16 h-[1px] bg-red-500"></div>
          <h2 className="text-4xl font-bold">Partners</h2>
          <div className="w-16 h-[1px] bg-red-500"></div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-4 md:space-x-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          style={{ display: "flex", width: "max-content" }}
        >
          {[...partners, ...partners].map(
            (
              logo,
              i // Duplicate images for smooth looping
            ) => (
              <img
                key={i}
                src={logo}
                className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain p-2 bg-slate-100"
                alt={`Partner ${i + 1}`}
                onError={(e) => (e.target.style.display = "none")} // Hide broken images
              />
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
