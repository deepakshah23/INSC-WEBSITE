import React from "react";

const TeamSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-16 h-[1px] bg-red-500"></div>
            <h2 className="text-4xl font-bold">Team</h2>
            <div className="w-16 h-[1px] bg-red-500"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1580518337843-f959e992563b?auto=format&fit=crop&w=500&q=80"
                alt="Anil Sharma"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Anil Sharma</h3>
            <p className="text-gray-600 italic mb-2">President</p>
            <p className="text-sm text-blue-900 font-medium">
              National Secretary-Human Rights
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80"
                alt="Sanjay Aggarwal"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Sanjay Aggarwal</h3>
            <p className="text-gray-600 italic mb-2">
              National Committee Member
            </p>
            <p className="text-sm text-blue-900 font-medium">
              Founder (Sanvin Education)
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80"
                alt="Dr. Ankit Sharma"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Dr. Ankit Sharma</h3>
            <p className="text-gray-600 italic mb-2">
              National Committee Member
            </p>
            <p className="text-sm text-blue-900 font-medium">
              Director (Employment Express)
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=500&q=80"
                alt="Adv. Aman Jindal"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Adv. Aman Jindal</h3>
            <p className="text-gray-600 italic mb-2">Legal Advisor</p>
            <p className="text-sm text-blue-900 font-medium">
              Supreme Court of India
            </p>
          </div>

          {/* Team Member 5 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
                alt="Priya Sharma"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Priya Sharma</h3>
            <p className="text-gray-600 italic mb-2">Executive Director</p>
            <p className="text-sm text-blue-900 font-medium">
              Academic Affairs
            </p>
          </div>

          {/* Team Member 6 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
                alt="Krishna Sharma"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Krishna Sharma</h3>
            <p className="text-gray-600 italic mb-2">Technology Director</p>
            <p className="text-sm text-blue-900 font-medium">
              Digital Initiatives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
