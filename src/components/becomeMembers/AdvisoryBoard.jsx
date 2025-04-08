const advisoryImages = [
  new URL("/members/1.jpg", import.meta.url).href,
  new URL("/members/2.jpg", import.meta.url).href,
  new URL("/members/3.jpg", import.meta.url).href,
  new URL("/members/4.jpg", import.meta.url).href,
  new URL("/members/5.jpg", import.meta.url).href,
  new URL("/members/6.jpg", import.meta.url).href,
];
export default function AdvisoryBoard() {
  return (
    <div className="py-12 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-6">Advisory Board</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[90%] mx-auto">
        {[
          "Sunil Bhadauriya",
          "S Vishwanath Naik",
          "Gurjant Singh",
          "Vijaybhaskar Annapareddy",
          "Dr. Nitin Vyas",
          "Dr. Pankaj Kumar",
        ].map((name, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <img
              src={advisoryImages[index]}
              alt={name}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Position and Description
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
