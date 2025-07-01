import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import NavButton from "./NavButton";
import MobileDropdown from "./MobileDropdown";
import { navItems, additionalItems } from "./navData";

const Header = ({ activeTab = "Home", onTabChange }) => {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [megaMenuPosition, setMegaMenuPosition] = useState("center");
  const moreButtonRef = useRef(null);

  // Calculate mega menu position to prevent overflow
  useEffect(() => {
    if (hoveredItem === "More") {
      const handleResize = () => {
        // Find the More button element
        const moreButton = document.querySelector('[data-more-button="true"]');
        if (moreButton) {
          const buttonRect = moreButton.getBoundingClientRect();
          const windowWidth = window.innerWidth;
          const megaMenuWidth = 900; // Updated to match new width

          // Calculate position based on available space
          const spaceOnRight = windowWidth - buttonRect.right;
          const spaceOnLeft = buttonRect.left;

          if (spaceOnRight < megaMenuWidth / 2 + 20) {
            setMegaMenuPosition("right");
          } else if (spaceOnLeft < megaMenuWidth / 2 + 20) {
            setMegaMenuPosition("left");
          } else {
            setMegaMenuPosition("center");
          }
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
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
    }, 150);
    setHoverTimeout(timeout);
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
              className="w-12 h-12 group-hover:scale-110 transition-transform duration-200"
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
          {navItems.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              isAdditional={false}
              activeTab={activeTab}
              hoveredItem={hoveredItem}
              megaMenuPosition={megaMenuPosition}
              onTabChange={onTabChange}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onSubItemClick={handleSubItemClick}
            />
          ))}
          {additionalItems.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              isAdditional={true}
              activeTab={activeTab}
              hoveredItem={hoveredItem}
              megaMenuPosition={megaMenuPosition}
              onTabChange={onTabChange}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onSubItemClick={handleSubItemClick}
            />
          ))}
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

      {/* Mobile Dropdown */}
      <MobileDropdown
        isOpen={isMobileDropdownOpen}
        activeTab={activeTab}
        navItems={navItems}
        additionalItems={additionalItems}
        onNavClick={handleMobileNavClick}
        onClose={() => setIsMobileDropdownOpen(false)}
      />
    </header>
  );
};

export default Header;
