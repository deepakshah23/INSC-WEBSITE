import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const statsData = [
  {
    value: 10000,
    label: "Clients",
  },
  {
    value: 25000,
    label: "Happy Students",
  },
  {
    value: 20,
    label: "Collaborations",
  },
  {
    value: 450,
    label: "Partners",
  },
];

function AnimatedCounter({ value, className }) {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const duration = 2000;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);
      const easedProgress = easeOutQuart(progress);

      setDisplayValue(Math.floor(easedProgress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value]);

  const formattedValue = displayValue
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div ref={counterRef} className={className}>
      {formattedValue}
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full text-white py-14 md:py-16 overflow-hidden "
    >
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover z-0 "
        style={{
          backgroundImage: 'url("/img/aboutus.jpg")',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 "></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl  mb-2  py-2 font-se">
            You Always Get the Best Guidance
          </h2>
          <div className="w-16 h-[2px] bg-yellow-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center justify-center backdrop-blur-sm bg-gray-800/20 rounded-lg p-4 border border-gray-700/30">
                <AnimatedCounter
                  value={stat.value}
                  className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-3"
                />
                <div className="h-[2px] w-8 bg-yellow-500 mb-3"></div>
                <p className="text-[20px] md:text-xs text-gray-100 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
