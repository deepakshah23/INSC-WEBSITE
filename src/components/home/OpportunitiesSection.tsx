import React, { useState } from "react";
import opportunities from "../../assets/lib/opportunitiesData";

type Opportunity = {
  title: string;
  description: string;
  image: string;
};

const OpportunitiesSection = () => {
  const [selectedCard, setSelectedCard] = useState<Opportunity | null>(null);

  return (
    <div
      className={`py-10 bg-gray-50 relative overflow-x-hidden ${
        selectedCard ? "overflow-hidden" : ""
      }`}
    >
      <div
        className={`mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
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

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {opportunities.map((opp, index) => (
            <div
              key={index}
              onClick={() => setSelectedCard(opp)}
              className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg w-full xs:w-[90%] sm:w-[48%] md:w-[45%] lg:w-[30%] xl:w-[23%] hover:scale-105 transition-transform duration-300"
            >
              <img
                src={opp.image}
                alt={opp.title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-bold mb-2 sm:mb-4">{opp.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {opp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 backdrop-blur-md p-4 sm:p-6 overflow-auto"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white w-full max-w-3xl rounded-lg shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="w-full max-h-[60vh] object-cover object-center"
            />
            <div className="p-4 sm:p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                {selectedCard.title}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg">
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
