import React, { useState } from "react";
import opportunities from "../../assets/lib/opportunitiesData";

// Define the type for each opportunity
type Opportunity = {
  title: string;
  description: string;
  image: string;
};

const OpportunitiesSection = () => {
  const [selectedCard, setSelectedCard] = useState<Opportunity | null>(null);

  return (
    <div
      className={`py-10 bg-gray-50 relative ${
        selectedCard ? "overflow-hidden" : ""
      }`}
    >
      <div
        className={`container mx-auto max-w-[95%] transition-all duration-300 ${
          selectedCard ? "blur-sm" : ""
        }`}
      >
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
              onClick={() => setSelectedCard(opp)}
              className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg w-full sm:w-[48%] lg:w-[32%] xl:w-[23%] hover:scale-105 transition-transform duration-300"
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

      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 backdrop-blur-md p-6"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white max-w-3xl w-full rounded-lg shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="w-full h-96 object-cover object-center"
            />
            <div className="p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">{selectedCard.title}</h3>
              <p className="text-gray-700 text-lg">
                {selectedCard.description}
              </p>
              <button
                onClick={() => setSelectedCard(null)}
                className="mt-6 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpportunitiesSection;
