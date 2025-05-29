import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Heart,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Classes", href: "#classes" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const programs = [
    { name: "Contemporary Dance", href: "#classes" },
    { name: "Hip Hop Fusion", href: "#classes" },
    { name: "Classical Ballet", href: "#classes" },
    { name: "Jazz & Musical Theatre", href: "#classes" },
    { name: "Latin Dance", href: "#classes" },
    { name: "Lyrical Dance", href: "#classes" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      url: "https://instagram.com/elitedanceacademy",
      name: "Instagram",
    },
    {
      icon: Facebook,
      url: "https://facebook.com/elitedanceacademy",
      name: "Facebook",
    },
    {
      icon: Youtube,
      url: "https://youtube.com/elitedanceacademy",
      name: "YouTube",
    },
    {
      icon: Twitter,
      url: "https://twitter.com/elitedanceacademy",
      name: "Twitter",
    },
  ];

  return (
    <footer className="bg-dance-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Academy Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-linear-to-r from-dance-gold to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <span className="font-playfair text-2xl font-bold">
                Elite Dance Academy
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming passion into artistry through world-class dance
              education. Join our community of dancers and discover your
              potential.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-dance-gold shrink-0" />
                <span className="text-sm text-gray-300">
                  123 Dance Avenue, Arts District, CA 90028
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-dance-gold shrink-0" />
                <span className="text-sm text-gray-300">(555) 123-DANCE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-dance-gold shrink-0" />
                <span className="text-sm text-gray-300">
                  info@elitedanceacademy.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6 text-dance-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-dance-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#shop"
                  className="text-gray-300 hover:text-dance-gold transition-colors duration-200 text-sm"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-dance-gold transition-colors duration-200 text-sm flex items-center"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6 text-dance-gold">
              Our Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-300 hover:text-dance-gold transition-colors duration-200 text-sm"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6 text-dance-gold">
              Stay Connected
            </h3>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to our newsletter for class updates and dance tips.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white placeholder-gray-400 focus:outline-hidden focus:border-dance-gold"
                />
                <button className="px-4 py-2 bg-dance-gold hover:bg-amber-600 text-white rounded text-sm font-medium transition-colors">
                  Join
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-300 text-sm mb-4">Follow our journey:</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-dance-gold transition-colors duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Elite Dance Academy. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-dance-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-dance-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-dance-gold transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
