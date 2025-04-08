import AdvisoryBoard from "../components/becomeMembers/AdvisoryBoard";
import WhyChooseUs from "../components/becomeMembers/WhyChooseUs";

const childImage = new URL("../assets/image.png", import.meta.url).href;

const memberShipData = [
  { title: "Individual Membership", price: "INR 100/" },
  {
    title: "Student Membership (Upto 12th standard)",
    price: "INR 20/",
  },
  { title: "Student Membership (UG/ PG)", price: "INR 50/" },
  {
    title:
      "Institutional Membership (Upto 12th standard/ Urban area/ CBSE/ ICSE)",
    price: "INR 1000/",
  },
  {
    title:
      "Institutional Membership (Upto 12th standard/ Rural area/ State Board)",
    price: "INR 500/",
  },
  {
    title: "Institutional Membership (UG/ PG/ University)",
    price: "INR 2500/",
  },
];
export default function BecomeMemberPage() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div
        className="relative w-full h-[75vh] flex items-center justify-center bg-cover bg-center bg-opacity-10"
        style={{
          backgroundImage: `url(${childImage})`,
        }}
      >
        {/* Dark Gray Overlay */}
        <div className="absolute inset-0 bg-gray-900/50"></div>

        <div className="relative text-center text-white px-6 pb-6 pt-10">
          <h1 className="text-4xl font-bold">Become a Member</h1>
          <p className="mt-2">
            If you are a teacher, student, parent, school, college or
            educational organisation
          </p>
        </div>
      </div>

      {/* Membership Fees Section */}
      <div className="py-12 px-6">
        <h2 className="text-center text-3xl font-semibold">Membership Fees</h2>
        <p className="text-center text-gray-600 mt-2 text-sm">
          All the membership plans are for life time. Additional to life
          membership Institutional Membership will include 3 individual
          memberships with a recognition certificate for the institute.
        </p>

        {/* Membership Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
          {memberShipData.map((membership, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-12 h-12 mx-auto bg-red-100 text-red-500 rounded-full flex items-center justify-center text-2xl hover:bg-red-500 hover:text-white transition-all">
                ✓
              </div>
              <h3 className="text-lg font-semibold mt-4">{membership.title}</h3>
              <p className="text-gray-700 mt-2">{membership.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section and membership form */}
      <div className="relative w-full py-12 px-4 sm:px-6 bg-gray-100 flex flex-col lg:flex-row justify-center items-center gap-12">
        {/* Membership Form Section */}
        <div className="w-full max-w-lg">
          <h2 className="text-center text-3xl font-semibold">
            Membership Form
          </h2>
          <form className="mt-8 bg-white p-6 rounded-lg shadow-md">
            {[
              { label: "Email", type: "email" },
              { label: "Name", type: "text" },
              { label: "Organisation Name", type: "text" },
              { label: "Phone Number", type: "tel" },
              { label: "Address of Organisation", type: "text" },
            ].map((field, index) => (
              <div className="mb-4" key={index}>
                <label className="block text-gray-700">{field.label} *</label>
                <input
                  type={field.type}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            ))}

            <div className="mb-4">
              <label className="block text-gray-700">
                Organisation Status *
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="UG">UG</option>
                <option value="PG">PG</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Why Choose Us Section */}
        <WhyChooseUs />
      </div>

      {/* Advisory Board Section */}
      <AdvisoryBoard />
    </div>
  );
}
