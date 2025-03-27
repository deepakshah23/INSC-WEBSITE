import React from "react";
import opportunities from "../../assets/lib/opportunitiesData";

const OpportunitiesSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[95%]">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-16 h-[1px] bg-red-500"></div>
            <h2 className="text-4xl font-bold">Opportunities</h2>
            <div className="w-16 h-[1px] bg-red-500"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((opp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
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
