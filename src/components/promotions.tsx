"use client";

import Image from "next/image";

const Promotions = () => {
  // Function to copy the promo code
  const copyPromoCode = () => {
    navigator.clipboard.writeText("DINEWEEKENDSALE");
    alert("Promo code copied!");
  };

  return (
    <section className="py-12 px-6 lg:px-16">
      {/* Section Title */}
      <div className="text-center mb-8">
        <p className="text-blue-600 font-semibold uppercase text-sm">Promotions</p>
        <h2 className="text-3xl font-bold">Our Promotions Events</h2>
      </div>

      {/* Responsive Promotions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Left Side (Big Boxes) */}
        <div className="space-y-6 sm:col-span-2">
          {/* Discount Box 1 */}
          <div className="bg-gray-200 flex flex-col sm:flex-row justify-between items-center p-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl text-gray-950 font-bold">GET UP TO 60%</h3>
              <p className="text-gray-900">For the summer season</p>
            </div>
            <div className="w-56 sm:w-72">
              <Image
                src="/model1.png"
                alt="Promo 1"
                width={282}
                height={218}
                className="object-contain mx-auto"
              />
            </div>
          </div>

          {/* Discount Box 2 */}
          <div className="bg-black text-white text-center py-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <h3 className="text-3xl font-bold">GET 30% Off</h3>
            <p className="text-gray-300 text-sm">USE PROMO CODE</p>
            {/* Clickable Promo Code Button */}
            <button
              onClick={copyPromoCode}
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg mt-2 tracking-wide transition-all duration-300 transform hover:scale-105"
            >
              DINEWEEKENDSALE
            </button>
          </div>
        </div>

        {/* Right Side (Product Cards) */}
        <div className="bg-yellow-200 p-4 text-center rounded-lg flex flex-col items-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          <p className="text-gray-900 font-bold">Flex Sweatshirt</p>
          <p className="text-gray-900 line-through">$100.00</p>
          <p className="text-lg font-bold text-gray-900">$75.00</p>
          <div className="w-40 sm:w-48">
            <Image
              src="/model2.png"
              alt="Promo 2"
              width={192}
              height={256}
              className="object-contain mx-auto"
            />
          </div>
        </div>

        <div className="bg-gray-200 p-4 text-center rounded-lg flex flex-col items-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          <p className="text-gray-900 font-bold">Flex Push Button Bomber</p>
          <p className="text-gray-900 line-through">$225.00</p>
          <p className="text-lg font-bold text-gray-900">$190.00</p>
          <div className="w-40 sm:w-48">
            <Image
              src="/model3.png"
              alt="Promo 3"
              width={192}
              height={256}
              className="object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
