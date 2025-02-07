"use client";

const Newsletter = () => {
  return (
    <section className="relative py-16 text-center px-4">
      {/* Background Text */}
      <h2 className="absolute inset-0 mt-14 text-[50px] sm:text-[100px] font-bold text-gray-200 -z-10 opacity-20 leading-none">
        Newsletter
      </h2>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold">Subscribe Our Newsletter</h3>
        <p className="text-white mt-2 text-sm sm:text-base">
          Get the latest information and promo offers directly
        </p>

        {/* Form Section */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-2 sm:gap-0">
          <input
            type="email"
            placeholder="Input email address"
            className="border border-gray-400 px-4 py-2 w-full sm:w-80 rounded-md sm:rounded-l-md focus:outline-none"
          />
          <button className="bg-black text-white px-6 py-2 rounded-md sm:rounded-r-md font-semibold hover:bg-gray-800 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
