import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Apple,
  Play,
  Mail,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#", description: "Our story & mission" },
        { name: "Blogs", href: "#", description: "Latest insights" },
        { name: "Sitemap", href: "#", description: "Navigate easily" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "PNR Status", href: "#", description: "Track your journey" },
        { name: "Coach Position", href: "#", description: "Find your coach" },
        {
          name: "Running Status",
          href: "#",
          description: "Live train updates",
        },
        {
          name: "Seat Availability",
          href: "#",
          description: "Check availability",
        },
        { name: "Time Table", href: "#", description: "Train schedules" },
        { name: "Fare Calculator", href: "#", description: "Calculate costs" },
        {
          name: "Station Details",
          href: "#",
          description: "Station information",
        },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Chat Support", href: "#", description: "24/7 assistance" },
        { name: "FAQ", href: "#", description: "Quick answers" },
        {
          name: "Terms & Conditions",
          href: "#",
          description: "Legal information",
        },
        { name: "Privacy Policy", href: "#", description: "Data protection" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:bg-blue-100 hover:text-blue-600",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "hover:bg-sky-100 hover:text-sky-600",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:bg-blue-100 hover:text-blue-700",
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube",
      color: "hover:bg-red-100 hover:text-red-600",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:bg-pink-100 hover:text-pink-600",
    },
  ];

  return (
    <footer className="relative bg-white text-gray-800 overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-red-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-red-500 animate-pulse" />
            <span className="text-red-500 font-medium tracking-wider uppercase text-sm">
              Your Travel Companion
            </span>
            <Sparkles className="w-6 h-6 text-red-500 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-600 to-orange-400 bg-clip-text text-transparent mb-4">
            <span className="text-red-500">M</span>ySa
            <span className="text-red-500">T</span>hi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Revolutionizing your railway journey with cutting-edge technology
            and seamless experiences
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {footerSections.map((section, index) => (
            <div
              key={section.title}
              className={`${index === 1 ? "lg:col-span-2" : ""} group`}
            >
              <div className="flex items-center space-x-2 mb-6">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                  {section.title}
                </h3>
                <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-transparent group-hover:from-orange-300 transition-colors duration-300"></div>
              </div>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group/link flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:translate-x-1"
                    >
                      <span className="font-medium">{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-all duration-300 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                    <p className="text-xs text-gray-400 mt-1 group-hover/link:text-gray-500 transition-colors duration-300">
                      {link.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect & Download Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Connect with Us */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-500 transition-colors duration-300">
                Connect with Us
              </h3>
              <div className="flex items-center space-x-3 mb-6 p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-300 group/email">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center group-hover/email:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    Email us
                  </p>
                  <a
                    href="mailto:feedback@mysathi.com"
                    className="text-gray-800 font-medium hover:text-red-500 transition-colors duration-300"
                  >
                    feedback@mysathi.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-300 transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* App Download */}
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Download Our App
              </h3>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-white rounded-xl p-2 shadow-lg">
                  <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-white rounded-sm mx-auto mb-1"></div>
                      <span className="text-xs text-gray-600">QR Code</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-800 font-medium mb-1">
                    Scan & Download
                  </p>
                  <p className="text-sm text-gray-600">
                    Get instant access to all features
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center space-x-3 bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group/app"
                >
                  {/* <Apple className="w-8 h-8 group-hover/app:scale-110 transition-transform duration-300" /> */}
                  <img
                    src="/logos/appleWhte.png"
                    alt="Apple Logo"
                    className="text-white-500 w-8 h-8 group-hover/app:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <div className="text-xs opacity-75">Download on the</div>
                    <div className="font-bold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group/app"
                >
                  {/* <Play className="w-8 h-8 group-hover/app:scale-110 transition-transform duration-300" /> */}
                  <img
                    src="/logos/playstore.png"
                    alt="Google Play Logo"
                    className="text-white-500 w-8 h-8 group-hover/app:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <div className="text-xs opacity-75">Get it on</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="flex items-center space-x-3">
                <div>
                  <img
                    src="/logos/logo.png"
                    alt=""
                    className="h-12 w-20 rounded-xl"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">
                    MySathi
                  </div>
                  <div className="text-xs text-gray-500">
                    Your Travel Companion
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                © 2025 MySathi. All rights reserved.
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Powered by</span>
              <div className="bg-gray-100 px-6 py-3 rounded-xl border border-gray-200 hover:border-red-300 transition-all duration-300 group">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent group-hover:from-red-300 group-hover:to-red-500 transition-all duration-300">
                    MySathi
                  </span>
                  <div className="text-gray-500 group-hover:text-gray-800 transition-colors duration-300">
                    <div className="text-xs font-medium">Pvt Ltd.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
