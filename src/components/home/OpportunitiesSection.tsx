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
              src="/img/blog/opp.jpg"
              alt="Scholarship Programs"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Scholarship Programs</h3>
              <p className="text-gray-600">
                Achieve your academic and financial goals with the Scholarship
                program of Indian School Consortium through our partners. We
                provide guidance and assistance in finding and applying for
                scholarships to students from all backgrounds.{" "}
              </p>
            </div>
          </div>

          {/* Certification Programs */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="/img/blog/opp2.jpg"
              alt="Certification Programs"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Certification Programs</h3>
              <p className="text-gray-600">
                Elevate your career prospects with the Certification Program of
                Indian School Consortium through our partners.
              </p>
            </div>
          </div>

          {/* Awareness Programs */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="/img/blog/opp3.jpg"
              alt="Awareness Programs"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Awareness Programs</h3>
              <p className="text-gray-600">
                Expand your horizons with informative sessions and workshops on
                various topics.
              </p>
            </div>
          </div>

          {/* Olympiads */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="/img/blog/opp4.jpg"
              alt="Olympiads"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Olympiads</h3>
              <p className="text-gray-600">
                Comprehensive support, resources, and training for national and
                international Olympiads.
              </p>
            </div>
          </div>

          {/* Financial Aid */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="/img/blog/opp5.jpg"
              alt="Financial Aid"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Financial Aid</h3>
              <p className="text-gray-600">
                Information and assistance on various financial aid options.
              </p>
            </div>
          </div>

          {/* Technical Trainings */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="/img/blog/opp6.jpg"
              alt="Technical Trainings"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Technical Trainings</h3>
              <p className="text-gray-600">
                Hands-on training and workshops in various fields of technology.
              </p>
            </div>
          </div>

          {/* Recognition Opportunities */}
          {/* <div className="flex justify-center gap-8"> */}
          {/* Recognition Opportunities */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="/img/blog/opp8.jpg"
              alt="Recognition Opportunities"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">
                Recognition Opportunities
              </h3>
              <p className="text-gray-600">
                Get recognition and affiliation from authorized bodies.
              </p>
            </div>
          </div>

          {/* College/University Admission */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="/img/blog/opp9.jpg"
              alt="College/University Admission"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">
                College/University Admission
              </h3>
              <p className="text-gray-600">
                Guidance and support for the college/university admission
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesSection;
