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
                src="/img/team/team1.jpg"
                alt="Amit"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Anil Sharma</h3>
            <p className="text-gray-600 italic mb-2">President</p>
            <div>
              <p
                className="text-black italic mb-2"
                style={{ fontSize: "14px" }}
              >
                (National Secretary-Human Rights)
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
              <img
                src="/img/team/team9.jpeg"
                alt="Nitin"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Sanjay Aggarwal</h3>
            <p className="text-gray-600 italic mb-2">
              National Committee Member
            </p>
            <div>
              <p
                className="text-black italic mb-2"
                style={{ fontSize: "14px" }}
              >
               Founder (Sanvin Education)
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
              <img
                src="/img/team/team2.jpg"
                alt="Palvi"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Dr. Ankit Sharma</h3>
            <p className="text-gray-600 italic mb-2">
              National Committee Member
            </p>
            <div>
              <p
                className="text-black italic mb-2"
                style={{ fontSize: "14px" }}
              >
                Director (Employment Express)
              </p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
              <img
                src="/img/team/team3.jpg"
                alt="Team Member 1"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Adv. Aman Jindal</h3>
            <p className="text-gray-600 italic mb-2">
              National Committee Member
            </p>
            <div>
              <p
                className="text-black italic mb-2"
                style={{ fontSize: "14px" }}
              >
                Legal(Adv-Delhi High Court)
              </p>
            </div>
          </div>

          {/* Team Member 5 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
              <img
                src="/img/team/team5.jpg"
                alt="Ishika Yadav"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Ishika Yadav</h3>
            <p className="text-gray-600 italic mb-2">
              National Committee Member
            </p>
            <div>
              <p
                className="text-black italic mb-2"
                style={{ fontSize: "14px" }}
              >
                IT Manager
              </p>
            </div>
          </div>

          {/* Team Member 6 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
              <img
                src="/img/team/nitin.jpg"
                alt="Nitin Vaish"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Nitin Vaish</h3>
            <p className="text-gray-600 italic mb-2">
              National Committee Member
            </p>
            <div>
              <p
                className="text-black italic mb-2"
                style={{ fontSize: "14px" }}
              >
                (Ginni Devi Public School Sitapur)
              </p>
            </div>
          </div>

          {/* Team Member 7 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
              <img
                src="/img/team/amit.jpg"
                alt="Amit Yadav"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Amit Yadav</h3>
            <p className="text-gray-600 italic mb-2">
              National Committee Member
            </p>
            <div>
              <p
                className="text-black italic mb-2"
                style={{ fontSize: "14px" }}
              >
                (CEO-TPS Empire services Pvt Ltd.)
              </p>
            </div>
          </div>

          {/* Team Member 8 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
              <img
                src="/img/team/team4.jpg"
                alt="Krishna Sharma"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Krishna Sharma</h3>
            <p className="text-gray-600 italic mb-2">
              National Committee Member
            </p>
            <div>
              <p
                className="text-black italic mb-2"
                style={{ fontSize: "14px" }}
              >
                Director(DIGIGENER8)
              </p>
            </div>
          </div>

          {/* Team Member 9 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
              <img
                src="/img/team/Palvi1.jpg"
                alt="Palvi Bali"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Palvi Bali</h3>
            <p className="text-gray-600 italic mb-2">
              National Committee Member
            </p>
            <div>
              <p
                className="text-black italic mb-2"
                style={{ fontSize: "14px" }}
              >
                Education Collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
