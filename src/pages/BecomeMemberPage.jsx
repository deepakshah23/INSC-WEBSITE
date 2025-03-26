const childImage = new URL("../assets/child.jpg", import.meta.url).href;
const advisoryImages = [
  new URL("../assets/1.jpg", import.meta.url).href,
  new URL("../assets/2.jpg", import.meta.url).href,
  new URL("../assets/3.jpg", import.meta.url).href,
  new URL("../assets/4.jpg", import.meta.url).href,
  new URL("../assets/5.jpg", import.meta.url).href,
  new URL("../assets/6.jpg", import.meta.url).href,
];
export default function BecomeMemberPage() {
  return (
    <div className="w-full">
    {/* Header Section */}
    <div 
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ 
        backgroundImage: `url(${childImage})`, 
        filter: "brightness(50%)"
      }} 
    >
      {/* Dark Gray Overlay */}
      <div className="absolute inset-0 bg-opacity-40"></div>
      
      <div className="relative text-center text-white p-6">
        <h1 className="text-4xl font-bold">Become a Member</h1>
        <p className="mt-2">
          If you are a teacher, student, parent, school, college or educational organisation
        </p>
      </div>
    </div>

    {/* Membership Fees Section */}
    <div className="py-12 px-6">
      <h2 className="text-center text-3xl font-semibold">Membership Fees</h2>
      <p className="text-center text-gray-600 mt-2 text-sm">
        All the membership plans are for life time. Additional to life membership Institutional Membership 
        will include 3 individual memberships with a recognition certificate for the institute.
      </p>

      {/* Membership Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
        {[
          { title: "Individual Membership", price: "INR 100/" },
          { title: "Student Membership (Upto 12th standard)", price: "INR 20/" },
          { title: "Student Membership (UG/ PG)", price: "INR 50/" },
          { title: "Institutional Membership (Upto 12th standard/ Urban area/ CBSE/ ICSE)", price: "INR 1000/" },
          { title: "Institutional Membership (Upto 12th standard/ Rural area/ State Board)", price: "INR 500/" },
          { title: "Institutional Membership (UG/ PG/ University)", price: "INR 2500/" },
        ].map((membership, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 mx-auto bg-red-100 text-red-500 rounded-full flex items-center justify-center text-2xl hover:bg-red-500 hover:text-white transition-all">
              ✓
            </div>
            <h3 className="text-lg font-semibold mt-4">{membership.title}</h3>
            <p className="text-gray-700 mt-2">{membership.price}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Why Choose Us Section */}
    <div className="relative w-full py-12 px-6 bg-gray-100 flex justify-center items-center">
      <div className="relative max-w-6xl w-full bg-white rounded-xl shadow-lg p-8">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 rounded-xl"
          style={{ backgroundImage: `url(${childImage})` }}
        ></div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Why <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">Choose Us</span>
            </h2>
            <p className="mt-4 text-gray-800 text-md leading-relaxed">
              Our network of resources includes <strong>Corporates, NGOs, Educational Service Providers, Government Bodies, Financial Bodies</strong>, and top universities. 
              We leverage <span className="bg-green-300 px-1">cutting-edge technology</span> to provide students and educators with the best opportunities to grow.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "Recognition Opportunities", icon: "🏆" },
              { title: "Financial Aid Opportunity", icon: "💰" },
              { title: "Career Exposure", icon: "📈" },
              { title: "International Exposure", icon: "🌍" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center transform hover:scale-105 transition-all"
              >
                <div className="text-4xl bg-red-100 text-red-500 w-16 h-16 flex items-center justify-center rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mt-4 text-gray-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Advisory Board Section */}
    <div className="py-12 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-6">Advisory Board</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {["Sunil Bhadauriya", "S Vishwanath Naik", "Gurjant Singh", "Vijaybhaskar Annapareddy", "Dr. Nitin Vyas", "Dr. Pankaj Kumar"].map((name, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src={advisoryImages[index]} alt={name} className="w-full h-56 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600 mt-2 text-sm">Position and Description</p>
          </div>
        ))}
      </div>
    </div>

    {/* Membership Form Section */}
    <div className="py-12 px-6">
      <h2 className="text-center text-3xl font-semibold">Membership Form</h2>
      <form className="max-w-lg mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Email *</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Name *</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Organisation Name *</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number *</label>
          <input type="tel" className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address of Organisation *</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Organisation Status *</label>
          <select className="w-full p-2 border border-gray-300 rounded" required>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  </div>
  );
}
