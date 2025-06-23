import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";

const Header = ({ activeTab = "Home", onTabChange }) => {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [megaMenuPosition, setMegaMenuPosition] = useState("center");
  const megaMenuRef = useRef(null);
  const moreButtonRef = useRef(null);

  const navItems = [
    {
      id: "Bookings",
      label: "Bookings",
      iconSrc: "/logos/Bookings.png",
      subItems: [
        { id: "coolie-booking", label: "Coolie Booking" },
        { id: "ticket-booking", label: "Ticket Booking" },
      ],
    },
    { id: "PNR Status", label: "PNR Status", iconSrc: "/logos/PNR_Status.png" },
    {
      id: "Train Status",
      label: "Train Status",
      iconSrc: "/logos/Running_Status.png",
    },
    {
      id: "More",
      label: "More",
      iconSrc: "/logos/More.png",
      megaMenu: {
        sections: [
          {
            title: "Services",
            items: [
              { id: "portar", label: "Portar" },
              { id: "connecting-trains", label: "Connecting Trains"},
              { id: "my-trips", label: "My Trips"},
              { id: "seat-availability", label: "Seat Availability"},
              { id: "ticket-booking", label: "Ticket Booking"},
              { id: "pnr-status", label: "PNR Status"},
              { id: "running-status", label: "Running Status"},
              { id: "train-route", label: "Train Route"},
              { id: "chart-vacancy", label: "Chart Vacancy"},
              { id: "coach-position", label: "Coach Position"},
              { id: "live-station", label: "Live Station"},
              { id: "cancel-ticket", label: "Cancel Ticket"},
              { id: "rail-madad", label: "Rail Madad"}, 
              { id: "e-wallet", label: "E - Wallet" },
              { id: "fare-calculator", label: "Fare Calculator" },
              { id: "check-speed", label: "Check Speed" },
            ],
          },
          {
            title: "OTHERS",
            items: [
              { id: "about-us", label: "About us" },
              { id: "user-guide", label: "User Guide" },
              {
                id: "railway-helpline-number",
                label: "Railway Helpline Number",
              },
              { id: "language", label: "Language" },
              { id: "help-support", label: "Help & Support" },
              { id: "alert", label: "Alert" },
              { id: "refund-history", label: "Refund History" },
              { id: "cancel-food-order", label: "Cancel Food order" },
              { id: "rate-us", label: "Rate us" },
              { id: "gallery", label: "Gallery" },
            ],
          },
        ],
      },
    },
  ];

  const additionalItems = [
    { id: "Help", label: "Help", iconSrc: "/logos/Help.png" },
    {
      id: "Login",
      label: "",
      iconSrc: "/logos/login.png",
      subItems: [
        { id: "login", label: "Login" },
        { id: "register", label: "Register" },
      ],
    },
  ];

  // Calculate mega menu position to prevent overflow
  useEffect(() => {
    if (hoveredItem === "More" && moreButtonRef.current) {
      const buttonRect = moreButtonRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const megaMenuWidth = 800; // Fixed width of mega menu

      // Calculate if menu would overflow on the right
      const spaceOnRight = windowWidth - buttonRect.right;
      const spaceOnLeft = buttonRect.left;

      // If not enough space to center, adjust position
      if (buttonRect.left + megaMenuWidth / 2 > windowWidth - 20) {
        setMegaMenuPosition("right");
      } else if (buttonRect.left - megaMenuWidth / 2 < 20) {
        setMegaMenuPosition("left");
      } else {
        setMegaMenuPosition("center");
      }
    }
  }, [hoveredItem]);

  const handleMobileNavClick = (itemId) => {
    onTabChange?.(itemId);
    setIsMobileDropdownOpen(false);
  };

  const handleSubItemClick = (subItemId) => {
    onTabChange?.(subItemId);
    setHoveredItem(null);
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleMouseEnter = (itemId) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredItem(null);
    }, 150); // 150ms delay before hiding
    setHoverTimeout(timeout);
  };

  const getMegaMenuClasses = () => {
    const baseClasses =
      "absolute top-full mt-1 w-[800px] max-w-[95vw] bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-50 animate-in fade-in duration-200";

    switch (megaMenuPosition) {
      case "right":
        return `${baseClasses} right-0`;
      case "left":
        return `${baseClasses} left-0`;
      default:
        return `${baseClasses} left-1/2 transform -translate-x-1/2`;
    }
  };

  const renderNavButton = (item, isAdditional = false) => {
    const isActive = activeTab === item.id;
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const hasMegaMenu = item.megaMenu && item.megaMenu.sections;
    const isHovered = hoveredItem === item.id;
    const isMoreButton = item.id === "More";

    return (
      <div
        key={item.id}
        className="relative"
        ref={isMoreButton ? moreButtonRef : null}
        onMouseEnter={() =>
          (hasSubItems || hasMegaMenu) && handleMouseEnter(item.id)
        }
        onMouseLeave={() => (hasSubItems || hasMegaMenu) && handleMouseLeave()}
      >
        <button
          onClick={() =>
            !(hasSubItems || hasMegaMenu) && onTabChange?.(item.id)
          }
          className={`group flex flex-col items-center p-3 rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg border border-transparent ${
            isActive
              ? "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200"
              : isAdditional
              ? "hover:bg-gradient-to-br hover:from-white hover:to-red-50 hover:border-red-100"
              : "hover:bg-gradient-to-br hover:from-white hover:to-orange-50 hover:border-orange-100"
          }`}
        >
          <div className="relative">
            <img
              src={item.iconSrc}
              alt={item.label}
              className={`w-6 h-6 transition-transform duration-200 group-hover:scale-110 ${
                isActive
                  ? "brightness-110"
                  : "grayscale group-hover:grayscale-0"
              }`}
            />
            {isActive && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full"></div>
            )}
            {!isActive && isAdditional && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
            )}
          </div>
          <span
            className={`text-xs font-medium mt-1 transition-colors duration-200 ${
              isActive
                ? "text-orange-600"
                : isAdditional
                ? "text-gray-600 group-hover:text-red-600"
                : "text-gray-600 group-hover:text-orange-600"
            }`}
          >
            {item.label}
          </span>
        </button>

        {/* Mega Menu for More */}
        {hasMegaMenu && isHovered && (
          <div
            ref={megaMenuRef}
            className={getMegaMenuClasses()}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
             {/* Arrow pointer - adjust based on position */}
            <div
              className={`absolute -top-2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45 ${
                megaMenuPosition === "right"
                  ? "right-8"
                  : megaMenuPosition === "left"
                  ? "left-8"
                  : "left-1/2 transform -translate-x-1/2"
              }`}
            ></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {item.megaMenu.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-4">
                  {section.title && (
                    <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                      {section.title}
                    </h3>
                  )}
                  <div className="space-y-2">
                    {section.items.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleSubItemClick(subItem.id)}
                        className="w-full text-left px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Hover Dropdown for other items */}
        {hasSubItems && isHovered && !hasMegaMenu && (
          <div
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50 animate-in fade-in duration-200"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
            {item.subItems.map((subItem, index) => (
              <button
                key={subItem.id}
                onClick={() => handleSubItemClick(subItem.id)}
                className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  isAdditional
                    ? "text-gray-700 hover:bg-red-50 hover:text-red-600"
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                } ${index === 0 ? "rounded-t-lg" : ""} ${
                  index === item.subItems.length - 1 ? "rounded-b-lg" : ""
                }`}
              >
                {subItem.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="sticky top-0 bg-white shadow-lg border-b border-gray-100 px-4 py-4 z-50">
      {/* Top Section */}
      <div className="relative flex items-center justify-between w-full px-4">
        {/* Left - Logo and Menu */}
        <div className="flex items-center space-x-2 z-10">
          <button className="p-2 hover:bg-gray-50 rounded-xl transition-colors duration-200 group">
            <img
              src="/logos/Three_lines.png"
              alt="Menu"
              className="w-10 h-10 group-hover:scale-110 transition-transform duration-200"
            />
          </button>
          <img
            src="/logos/mysathi_logo_white.png"
            alt="MySathi Logo"
            className="w-24 h-auto hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* Right - Nav & Login (Desktop only) */}
        <div className="hidden md:flex items-center space-x-4 z-10">
          {navItems.map((item) => renderNavButton(item, false))}
          {additionalItems.map((item) => renderNavButton(item, true))}
        </div>

        {/* Mobile - Dropdown Toggle */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            className={`p-2 hover:bg-gray-50 rounded-xl transition-colors duration-200 group flex items-center space-x-1 ${
              isMobileDropdownOpen ? "bg-gray-100" : ""
            }`}
          >
            {isMobileDropdownOpen ? (
              <X className="w-6 h-6 text-white group-hover:text-white transition-colors" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-600 group-hover:text-orange-600 transition-colors" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileDropdownOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-2xl z-50 max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="px-6 py-4 bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
            <h3 className="text-lg font-bold text-gray-800 mb-1">Menu</h3>
            <p className="text-sm text-gray-600">Choose your destination</p>
          </div>

          {/* Navigation Items */}
          <div className="px-4 py-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2 mb-3">
              Navigation
            </div>
            <div className="space-y-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                const hasSubItems = item.subItems && item.subItems.length > 0;

                return (
                  <div key={item.id}>
                    <button
                      onClick={() =>
                        !hasSubItems && handleMobileNavClick(item.id)
                      }
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-orange-50 to-orange-100 text-orange-600 border border-orange-200 shadow-sm"
                          : "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
                      }`}
                    >
                      <img
                        src={item.iconSrc}
                        alt={item.label}
                        className={`w-5 h-5 ${
                          isActive ? "brightness-110" : "grayscale"
                        }`}
                      />
                      <span className="font-medium flex-1 text-left">
                        {item.label}
                      </span>
                      {isActive && (
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      )}
                    </button>

                    {/* Mobile Sub-items */}
                    {hasSubItems && (
                      <div className="ml-12 mt-2 space-y-1">
                        {item.subItems.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => handleMobileNavClick(subItem.id)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Mobile Mega Menu */}
                    {item.megaMenu && (
                      <div className="ml-12 mt-2 space-y-3">
                        {item.megaMenu.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            {section.title && (
                              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                                {section.title}
                              </div>
                            )}
                            <div className="space-y-1">
                              {section.items.map((subItem) => (
                                <button
                                  key={subItem.id}
                                  onClick={() =>
                                    handleMobileNavClick(subItem.id)
                                  }
                                  className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                                >
                                  {subItem.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="mx-4 border-t border-gray-200"></div>

          {/* Additional Items */}
          <div className="px-4 py-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2 mb-3">
              Account & Support
            </div>
            <div className="space-y-2">
              {additionalItems.map((item) => {
                const hasSubItems = item.subItems && item.subItems.length > 0;

                return (
                  <div key={item.id}>
                    <button
                      onClick={() =>
                        !hasSubItems && handleMobileNavClick(item.id)
                      }
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-gray-700 hover:bg-gray-50 hover:text-red-600"
                    >
                      <img
                        src={item.iconSrc}
                        alt={item.label}
                        className="w-5 h-5"
                      />
                      <span className="font-medium flex-1 text-left">
                        {item.label}
                      </span>
                    </button>

                    {/* Mobile Sub-items */}
                    {hasSubItems && (
                      <div className="ml-12 mt-2 space-y-1">
                        {item.subItems.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => handleMobileNavClick(subItem.id)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-center text-gray-500">
              MySathi - Your Travel Companion
            </p>
          </div>
        </div>
      )}

      {/* Backdrop to close dropdown when clicking outside */}
      {isMobileDropdownOpen && (
        <div
          className="md:hidden fixed inset-0 z-40"
          onClick={() => setIsMobileDropdownOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
