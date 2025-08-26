import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/BWJ Logos.png";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
    { name: "Other Campuses", path: "/Campuses" },
  ];

  const phoneNumber = "918056179108"; // ✅ Use full number with country code
  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-premium sticky top-0 z-50 border-b border-neutral-100">
      <div className="container mx-auto px-3">

        {/* 🔸 Top mini bar */}
        <div className="hidden md:flex justify-between py-1.5 text-xs border-b border-neutral-100">
          <div className="flex items-center gap-4 text-neutral-500">
            <div className="flex items-center gap-1 hover:text-orange-600 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="font-medium">+91 8056179108</span>
            </div>
            <div className="flex items-center gap-1 hover:text-teal-600 transition-colors">
              <MapPin className="w-3.5 h-3.5" />
              <span className="font-medium">Chennai, Tamil Nadu</span>
            </div>
          </div>
          <div className="bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-colored">
            ✨ Admissions Open 2025-26 ✨
          </div>
        </div>

        {/* 🔸 Main navbar */}
        <div className="flex items-center justify-between py-2.5">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Basil Woods Juniors Logo"
              className="w-24 h-24 hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all
                  ${location.pathname === item.path
                    ? "text-orange-600 bg-orange-50"
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-2">
            {/* ✅ Desktop WhatsApp Button */}
            <Button
              size="sm"
              className="hidden md:flex items-center gap-2 btn-primary hover-glow px-4 py-2.5 shadow-sm font-medium text-sm"
              onClick={handleWhatsAppRedirect}
            >
              <FaWhatsapp className="w-6 h-6" />
              <span>Contact Us</span>
            </Button>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* 🔸 Mobile nav */}
        {isMenuOpen && (
          <div className="lg:hidden pb-3 border-t border-gray-100 bg-white/90 backdrop-blur-sm rounded-b-xl">
            <nav className="flex flex-col gap-0.5 mt-2">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`py-2.5 px-3 text-sm font-medium rounded-lg transition-colors 
                    ${location.pathname === item.path
                      ? "text-orange-600 bg-orange-50"
                      : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* ✅ Mobile WhatsApp Button */}
              <div className="mt-2 px-3">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg py-2.5 font-medium text-sm shadow-md flex items-center justify-center gap-2"
                  onClick={handleWhatsAppRedirect}
                >
                  <FaWhatsapp className="w-6 h-6" />
                  Contact Us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;