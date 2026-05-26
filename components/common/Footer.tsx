"use client";

import {
  Envelope,
  FacebookLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  TwitterLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "About", path: "/about" },
    { name: "Treatments", path: "/treatments" },
    { name: "Contact", path: "/contact" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  return (
    <footer className="bg-gradient-to-r from-primaryOrtho to-[#1d3573] text-tertiaryOrtho mt-auto">
      <div className="container-wrapper section-padding">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Info */}
          <div>
            <h3 className="text-xl font-bold mb-3">Shreenath Orthopedic</h3>
            <p className="text-sm text-tertiaryOrtho/80">
              Professional orthopedic care for better health and recovery.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-tertiaryOrtho/80 hover:text-secondaryOrtho transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-tertiaryOrtho/80">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 (123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Envelope size={16} />
                <span>info@shreenath.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>City Center</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-tertiaryOrtho/20 my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-tertiaryOrtho/80">
            &copy; {currentYear} Shreenath Orthopedic. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-tertiaryOrtho/80 hover:text-secondaryOrtho transition-colors"
            >
              <FacebookLogo size={20} weight="fill" />
            </a>
            <a
              href="#"
              className="text-tertiaryOrtho/80 hover:text-secondaryOrtho transition-colors"
            >
              <TwitterLogo size={20} weight="fill" />
            </a>
            <a
              href="#"
              className="text-tertiaryOrtho/80 hover:text-secondaryOrtho transition-colors"
            >
              <LinkedinLogo size={20} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
