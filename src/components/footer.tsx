import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="lg:flex justify-between">
          {/* Main Logo & Description */}
          <div className="lg:w-2/5 mb-8 lg:mb-0">
            <Link href="/">
              <Image src="/logo.png" alt="Main Logo" width={150} height={50} />
            </Link>
            <p className="mt-2 text-sm w-3/4 text-gray-400">
              Small, artisan label that offers a thoughtfully curated collection of high-quality everyday essentials.
            </p>
            {/* Social Icons with rounded design */}
            <div className="flex mt-2">
              {[
                { href: "#", label: "LinkedIn", icon: "/linkedin.png" },
                { href: "#", label: "Facebook", icon: "/facebook.png" },
                { href: "#", label: "Twitter", icon: "/Twitter.png" }
              ].map(({ href, label, icon }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`p-3 hover:text-white transition rounded-full ${index === 1 ? "mx-4" : ""}`}
                  aria-label={label}
                >
                  <Image src={icon} alt={label} width={30} height={30} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {[
                { title: "About", links: ["Terms of Use", "Privacy Policy", "How it Works", "Contact Us"] },
                { title: "Support", links: ["Support Career", "24h Service", "Quick Chat"] },
                { title: "Products", links: ["Mega Cloud", "Legacy", "ReactJS"] },
                { title: "Contact", links: ["Whatsapp", "Support 24"] }
              ].map(({ title, links }, index) => (
                <div key={index}>
                  <h3 className="text-white font-bold text-base mb-4">{title}</h3>
                  {links.map((link, i) => (
                    <a key={i} href="#" className="block mt-2 text-sm hover:text-white transition">
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="h-px my-6 bg-gray-700 border-none" />

        {/* Footer with "Designed by Waleed" on left and "Reserved" on center */}
        <div className="flex justify-between items-center">
          {/* Left section: Designed by Waleed */}
          <p className="text-sm text-gray-500">
            Code by: <span className="text-gray-500">Waleed Majeed</span>
          </p>

          {/* Center section: Reserved text */}
          <p className="text-center text-sm text-gray-500">
            © Dine Market {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
