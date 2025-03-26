import React from "react";

const OpportunitiesSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-16 h-[1px] bg-red-500"></div>
            <h2 className="text-4xl font-bold">Opportunities</h2>
            <div className="w-16 h-[1px] bg-red-500"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Scholarship Programs */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800"
              alt="Scholarship Programs"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Scholarship Programs</h3>
              <p className="text-gray-600">
                Achieve your academic and financial goals with the Scholarship
                program of Indian School Consortium through our partners. We
                provide guidance and assistance in finding and applying for
                scholarships to students from all backgrounds.
              </p>
            </div>
          </div>

          {/* Certification Programs */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800"
              alt="Certification Programs"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Certification Programs</h3>
              <p className="text-gray-600">
                Elevate your career prospects with the Certification Program of
                Indian School Consortium through our partners. We provide expert
                guidance and training for students and educators to obtain
                industry-recognized certifications.
              </p>
            </div>
          </div>

          {/* Awareness Programs */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800"
              alt="Awareness Programs"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Awareness Programs</h3>
              <p className="text-gray-600">
                Expand your horizons with the Awareness Program of Indian School
                Consortium through our partners. We provide informative sessions
                and workshops on a variety of topics to help students and
                educators stay informed and up-to-date on the latest trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesSection;
