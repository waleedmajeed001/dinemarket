"use client";

import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="px-6 lg:px-16 py-12 max-w-7xl mx-auto text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        {/* Left side with features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="text-lg font-bold">Using Good Quality <br /> Materials</h3>
            <p className="text-white">Lorem ipsum dolor sit <br /> amt, consectetur <br /> adipiscing elit.</p>
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="text-lg font-bold">100% Handmade <br /> Products</h3>
            <p className="text-white">Lorem ipsum dolor sit <br /> amt, consectetur <br /> adipiscing elit.</p>
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="text-lg font-bold">Modern Fashion <br /> Design</h3>
            <p className="text-white">Lorem ipsum dolor sit <br /> amt, consectetur <br /> adipiscing elit.</p>
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="text-lg font-bold">Discount for Bulk <br /> Orders</h3>
            <p className="text-white">Lorem ipsum dolor sit <br /> amt, consectetur <br /> adipiscing elit.</p>
          </div>

          {/* Background text effect - Centered on Mobile */}
          <p className="absolute left-1/2 -translate-x-1/2 top-10 text-[50px] sm:text-[80px] font-bold text-gray-900 -z-10 leading-none lg:left-0 lg:translate-x-0">
            Different <br /> from <br /> Others
          </p>
        </div>

        {/* Right side with image and text */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
            Unique and Authentic <br /> Vintage Designer <br /> Jewellery
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Image src="/Female.png" alt="Model" width={250} height={250} className="rounded-lg" />
            <p className="text-gray-400 text-sm sm:text-base">
              This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care.
              The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
            </p>
          </div>

          {/* Button moved below the description */}
          <button className="bg-white text-black px-6 py-2 mt-6 rounded-md font-semibold hover:bg-gray-300 transition">
            See All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
