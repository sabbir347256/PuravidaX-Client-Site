import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: ["Experiences", "Flights", "Hotels", "Car Rentals", "Rewards"],
    company: ["About Us", "Blog", "Careers", "Press", "Partnerships"],
    support: [
      "Help Center",
      "Contact Us",
      "Privacy Policy",
      "Terms & Conditions",
      "FAQs",
    ],
  };
  return (
    <footer className="bg-[#1a3a2a] text-gray-300 dynamic-Padding">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <img
                src="/logo.png" // Replace with your actual logo path
                alt="PuraVidaX"
                className="w-12 h-12 mb-2"
              />
              <span className="text-white text-xl font-bold tracking-tight">
                PuraVidaX
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400">
                Plan Less. Enjoy More.
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Your personal AI travel concierge for authentic Costa Rica
              adventures. From volcanic peaks to Pacific shores.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {["f", "X", "in", "play"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 border border-gray-500 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <span className="text-sm font-medium">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Explore</h3>
            <ul className="space-y-4 text-sm">
              {footerLinks.explore.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Pura Vida Travel. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="hover:text-white">English</button>
            <span className="text-gray-700">|</span>
            <button className="hover:text-white">Español</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
