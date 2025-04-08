export default function SikshaGround() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          SHIKSHA ON GROUND
        </h2>

        <div className="mb-12  ">
          <img
            src="/donation/imageGround.png"
            alt="Students learning with tablets"
            className="w-full h-[70vh] object-cover rounded-lg "
          />
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Key Interventions Under Shiksha Na Ruke
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* First Row */}
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="donation/image1.png"
                  alt="Education"
                  className="w-16 h-16"
                />
              </div>
              <p className="text-gray-700">
                Primary and Secondary education for children
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="/donation/image2.png"
                  alt="Health"
                  className="w-16 h-16"
                />
              </div>
              <p className="text-gray-700">
                Regular health check-ups & nutrition support
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="donation/image3.png"
                  alt="Training"
                  className="w-16 h-16"
                />
              </div>
              <p className="text-gray-700">
                Training and capacity building of teachers
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="donation/image4.png"
                  alt="Vocational"
                  className="w-16 h-16"
                />
              </div>
              <p className="text-gray-700">
                Vocational Education & Skill Training
              </p>
            </div>

            {/* Second Row */}
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="donation/image5.png"
                  alt="Life Skills"
                  className="w-16 h-16"
                />
              </div>
              <p className="text-gray-700">
                Music, sports, life skills education to promote socio-emotional
                well being
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="donation/image6.png"
                  alt="STEM"
                  className="w-16 h-16"
                />
              </div>
              <p className="text-gray-700">
                Infrastructure development, STEM learning programmes with
                government schools
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="donation/image7.png"
                  alt="Digital Literacy"
                  className="w-16 h-16"
                />
              </div>
              <p className="text-gray-700">
                Digital literacy and learning access to rural & tribal children
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="donation/image8.png"
                  alt="Scholarship"
                  className="w-16 h-16"
                />
              </div>
              <p className="text-gray-700">
                Merit-based scholarships for girl children focused on holistic
                development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
