import React, { useState, useEffect } from "react";
import SikshaGround from "../components/donation/SikshaGround";
import LeftContent from "../components/donation/LeftContent";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

const DonatePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "3000",
    dob: "",
    phone: "",
    country: "India",
    state: "",
    city: "",
    address: "",
    pinCode: "",
    panNo: "",
    agreeToContact: false,
  });

  const [showDonorForm, setShowDonorForm] = useState(false);

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDonateClick = (e) => {
    e.preventDefault();
    setShowDonorForm(true);
  };

  const handleBack = () => {
    setShowDonorForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Initialize Razorpay payment
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      amount: parseInt(formData.amount) * 100,
      currency: "INR",
      name: "INSC Foundation",
      description: "Donation for Education",
      handler: function (response) {
        alert(
          "Payment Successful! Payment ID: " + response.razorpay_payment_id
        );
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: "#22C55E",
      },
    };

    try {
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      alert("Something went wrong! Please try again later.");
      console.error(err);
    }
  };

  // Donor Information Form Component
  const DonorForm = () => (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-2xl font-semibold text-center text-gray-600 mb-6">
        SUPPORT THE CAUSE
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Full name"
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
              required
            />
          </div>
          <div>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="DOB"
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
              required
            />
          </div>
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md text-gray-600">
              +91
            </span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone"
              className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-r-md focus:outline-none focus:ring-1 focus:ring-gray-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
            required
          >
            <option value="India">India</option>
          </select>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
            required
          >
            <option value="">--Select State--</option>
            {indianStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
            required
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            placeholder="Pin Code"
            className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
            required
          />
          <input
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
            placeholder="Pan No.*"
            className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
            required
          />
        </div>

        <div className="space-y-4">
          <div className="text-xs text-gray-600 text-center">
            *YOUR CONTRIBUTIONS ARE ELIGIBLE FOR UPTO 50% TAX BENEFIT UNDER
            <br />
            SECTION 80G AS INSC FOUNDATION IS REGISTERED AS NON PROFIT
            ORGANIZATION*
            <br />
            <span className="font-medium">
              PAN: AACTS123GHSD | REG NUMBER: AACTS8497GF20220
            </span>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="agreeToContact"
              checked={formData.agreeToContact}
              onChange={handleChange}
              className="mt-1 mr-2"
              required
            />
            <label className="text-sm text-gray-600">
              You agree that INSC Foundation can reach out to you through
              Whatsapp/email/SMS/Phone to provide information of your donation,
              campaigns, 80G receipt etc.
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={handleBack}
            className="w-full px-4 py-2 border border-gray-500 text-gray-500 rounded-md hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className=" bg-gray-50 w-full">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[500px] overflow-hidden">
          <img
            src="../donation/heroImage.png"
            alt="Happy students running in school uniforms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Make a Difference Today
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                Your support helps provide quality education and better
                opportunities for children in need
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Your support is crucial in ensuring education for all!
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Information */}
            <LeftContent />
            {/* Right Column - Donation Box */}
            {!showDonorForm ? (
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-800">
                <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                  SUPPORT THE CAUSE
                </h3>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                      />
                    </div>
                  </div>

                  <div className="w-full bg-gray-500 text-white py-3 rounded-md font-semibold text-center">
                    MAKE A DIFFERENCE
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <label className="flex items-center justify-center">
                      <input
                        type="radio"
                        name="amount"
                        value="500"
                        checked={formData.amount === "500"}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span
                        className={`px-4 py-2 rounded-full w-full text-center cursor-pointer ${
                          formData.amount === "500"
                            ? "bg-gray-500 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        ₹500
                      </span>
                    </label>
                    <label className="flex items-center justify-center">
                      <input
                        type="radio"
                        name="amount"
                        value="3000"
                        checked={formData.amount === "3000"}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span
                        className={`px-4 py-2 rounded-full w-full text-center cursor-pointer ${
                          formData.amount === "3000"
                            ? "bg-gray-500 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        ₹3000
                      </span>
                    </label>
                    <label className="flex items-center justify-center">
                      <input
                        type="radio"
                        name="amount"
                        value="6000"
                        checked={formData.amount === "6000"}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span
                        className={`px-4 py-2 rounded-full w-full text-center cursor-pointer ${
                          formData.amount === "6000"
                            ? "bg-gray-500 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        ₹6000
                      </span>
                    </label>
                    <label className="flex items-center justify-center">
                      <input
                        type="radio"
                        name="amount"
                        value="12000"
                        checked={formData.amount === "12000"}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span
                        className={`px-4 py-2 rounded-full w-full text-center cursor-pointer ${
                          formData.amount === "12000"
                            ? "bg-gray-500 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        ₹12000
                      </span>
                    </label>
                  </div>

                  <div className="text-center space-y-4">
                    <p className="font-medium">
                      YOUR DONATION WILL HELP FOR THE EDUCATION
                    </p>
                    <p className="font-medium">OF 1 CHILD FOR 6 MONTHS</p>

                    <div className="flex justify-center space-x-2">
                      <img
                        src="child.png"
                        alt="Children icons"
                        className="h-8"
                      />
                    </div>

                    <div className="text-2xl font-bold text-gray-600">
                      ₹{formData.amount}
                    </div>

                    <button
                      onClick={handleDonateClick}
                      className="w-full bg-gray-500 text-white py-3 rounded-md font-semibold hover:bg-gray-600 transition-colors"
                    >
                      DONATE NOW
                    </button>

                    <div className="text-xs text-gray-600 text-center mt-4">
                      YOUR CONTRIBUTIONS ARE ELIGIBLE FOR UPTO 50% TAX BENEFIT
                      <br />
                      UNDER SECTION 80G AS INSC FOUNDATION IS REGISTERED AS
                      <br />
                      NON PROFIT ORGANIZATION*
                      <br />
                      <span className="font-medium">
                        PAN: AACTS7597Q | REG NUMBER: AACTS7597QF20210
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <DonorForm />
            )}
          </div>
        </div>
      </div>

      {/* Shiksha On Ground Section */}
      <SikshaGround />
    </div>
  );
};

export default DonatePage;
