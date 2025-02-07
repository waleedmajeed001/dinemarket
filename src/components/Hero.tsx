import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-12 px-6 lg:px-16 relative">
      {/* Left Content */}
      <div className="space-y-4">
        <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-6 py-3 rounded-lg">
          Sale 70%
        </span>
        <h1 className="text-5xl font-bold text-white leading-tight">
          An Industrial Take <br /> on Streetwear
        </h1>
        <p className="text-gray-400 leading-relaxed">
          Anyone can beat you but no one can beat your <br />
          outfit as long as you wear Dine outfits.
        </p>

        {/* Shopping Button */}
        <button className="bg-black text-white px-6 py-3 flex items-center gap-2 text-sm font-medium rounded-lg hover:bg-gray-800 transition">
          <ShoppingCart size={20} /> Start Shopping
        </button>

        {/* Responsive Logos Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-14">
          <Image src="/logo1.png" alt="Logo 1" width={96} height={96} className="sm:w-24 sm:h-24 md:w-20 md:h-10 transition hover:scale-110" />
          <Image src="/logo2.png" alt="Logo 2" width={96} height={96} className="sm:w-24 sm:h-24 md:w-20 md:h-10 transition hover:scale-110" />
          <Image src="/logo3.png" alt="Logo 3" width={96} height={96} className="sm:w-24 sm:h-24 md:w-20 md:h-10 transition hover:scale-110" />
          <Image src="/logo4.png" alt="Logo 4" width={96} height={96} className="sm:w-24 sm:h-24 md:w-20 md:h-10 transition hover:scale-110" />
        </div>
      </div>

      {/* Right Image with Visible Circle (Hidden on Mobile) */}
      <div className="relative hidden md:flex justify-center">
        <div className="absolute w-[500px] h-[500px] bg-pink-100 rounded-full -z-10 top-8 md:top-0 border backdrop-blur-md"></div>
        <Image
          src="/model.png"
          alt="Fashion Model"
          width={550}
          height={700}
          className="relative z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
