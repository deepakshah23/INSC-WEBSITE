import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = Array.from(
    { length: 8 },
    (_, i) => `./gallery/gg${i + 1}.jpg`
  );

  return (
    <div className="min-h-screen bg-gray-100 ">
      <section className="min-h-[30vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-clip-text  bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900">
            Our Few Past Activities
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Check Our Gallery
          </p>
        </div>
      </section>

      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 pb-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-[200px]">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={index < 4}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
            <div className="relative max-w-2xl w-full bg-white rounded-xl overflow-hidden">
              <button
                className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-gray-900 z-10 bg-white border  rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                onClick={() => setSelectedImage(null)}
              >
                <RxCross2 />
              </button>
              <div className="relative h-[73vh] p-4">
                <img
                  src={selectedImage}
                  alt="Enlarged gallery image"
                  fill
                  className="object-contain"
                  sizes="100vw"
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
