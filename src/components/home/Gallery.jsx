import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = Array.from(
    { length: 8 },
    (_, i) => `./gallery/gg${i + 1}.jpg`
  );

  return (
    <div className=" bg-gray-50 py-10">
      {/* <section className="min-h-[30vh] flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="max-w-5xl mx-auto text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900">
            Our Few Past Activities
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Check Our Gallery
          </p>
        </div>
      </section> */}
      <div className="text-center ">
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="w-16 h-[1px] bg-red-500"></div>
          <h2 className="text-4xl font-bold">Our Few Past Activities</h2>
          <div className="w-16 h-[1px] bg-red-500"></div>
        </div>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Check Our Gallery
        </p>
      </div>

      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 w-full">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                  <span className="bg-white px-4 py-2 rounded-full text-gray-800 font-semibold text-sm shadow-md">
                    Click to View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-3xl w-full bg-white rounded-xl overflow-hidden shadow-lg">
              <button
                className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-gray-900 z-10 bg-white border rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                onClick={() => setSelectedImage(null)}
              >
                <RxCross2 />
              </button>
              <div className="relative w-full h-auto max-h-[75vh] flex justify-center items-center p-4">
                <img
                  src={selectedImage}
                  alt="Enlarged gallery image"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
