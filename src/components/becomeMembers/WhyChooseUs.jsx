const childImage = new URL("../assets/image.png", import.meta.url).href;
export default function WhyChooseUs() {
  return (
    <div className="relative w-full max-w-4xl rounded-xl shadow-lg p-6 sm:p-8 bg-gray-900/20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 rounded-xl"
        style={{ backgroundImage: `url(${childImage})` }}
      ></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Choose Us
            </span>
          </h2>
          <p className="mt-4 text-gray-800 text-md leading-relaxed">
            Our network of resources includes{" "}
            <strong>
              Corporates, NGOs, Educational Service Providers, Government
              Bodies, Financial Bodies
            </strong>
            , and top universities. We leverage{" "}
            <span className="px-1">cutting-edge technology</span> to provide
            students and educators with the best opportunities to grow.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {[
            { title: "Recognition Opportunities", icon: "🏆" },
            { title: "Financial Aid Opportunity", icon: "💰" },
            { title: "Career Exposure", icon: "📈" },
            { title: "International Exposure", icon: "🌍" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center transform hover:scale-105 transition-all"
            >
              <div className="text-3xl sm:text-4xl bg-red-100 text-red-500 w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center rounded-full">
                {item.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold mt-3 sm:mt-4 text-gray-900">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
