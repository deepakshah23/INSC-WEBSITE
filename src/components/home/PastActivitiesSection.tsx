import React from "react";

const PastActivitiesSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-16 h-[1px] bg-red-500"></div>
            <h2 className="text-4xl font-bold">Our Few Past Activities</h2>
            <div className="w-16 h-[1px] bg-red-500"></div>
          </div>
          <p className="text-gray-600 mt-4">Check Our Gallery</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Row 1 */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800"
              alt="Educational Conference"
              className="w-full h-48 object-cover hover:scale-110 transition duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800"
              alt="Student Workshop"
              className="w-full h-48 object-cover hover:scale-110 transition duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800"
              alt="Award Ceremony"
              className="w-full h-48 object-cover hover:scale-110 transition duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800"
              alt="Board Meeting"
              className="w-full h-48 object-cover hover:scale-110 transition duration-300"
            />
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1531496681073-5c69f5fa63fa?auto=format&fit=crop&w=800"
              alt="Outdoor Activity"
              className="w-full h-48 object-cover hover:scale-110 transition duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800"
              alt="Seminar"
              className="w-full h-48 object-cover hover:scale-110 transition duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800"
              alt="Training Session"
              className="w-full h-48 object-cover hover:scale-110 transition duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800"
              alt="Certificate Distribution"
              className="w-full h-48 object-cover hover:scale-110 transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastActivitiesSection;
