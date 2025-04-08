import React from "react";
import teamMembers from "../../assets/lib/teamMemberData";

const TeamSection = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="w-full mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-16 h-[1px] bg-red-500"></div>
            <h2 className="text-4xl font-bold">Team</h2>
            <div className="w-16 h-[1px] bg-red-500"></div>
          </div>
        </div>

        {/* Updated flex settings */}
        <div className="flex flex-wrap justify-evenly gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 max-w-[300px]"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-gray-600 italic mb-1">{member.role}</p>
              <p className="text-black italic text-sm">{member.extra}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
