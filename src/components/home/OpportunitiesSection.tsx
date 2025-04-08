import React from "react";
import opportunities from "../../assets/lib/opportunitiesData";

const OpportunitiesSection = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto  max-w-[95%]">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-16 h-[1px] bg-red-500"></div>
            <h2 className="text-4xl font-bold">Opportunities</h2>
            <div className="w-16 h-[1px] bg-red-500"></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {opportunities.map((opp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg w-full sm:w-[48%] lg:w-[32%] xl:w-[23%]"
            >
              <img
                src={opp.image}
                alt={opp.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{opp.title}</h3>
                <p className="text-gray-600">{opp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesSection;
