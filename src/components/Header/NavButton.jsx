import React, { useRef, useEffect } from "react";

const NavButton = ({ 
  item, 
  isAdditional = false, 
  activeTab, 
  hoveredItem, 
  megaMenuPosition,
  onTabChange, 
  onMouseEnter, 
  onMouseLeave, 
  onSubItemClick 
}) => {
  const moreButtonRef = useRef(null);
  
  const isActive = activeTab === item.id;
  const hasSubItems = item.subItems && item.subItems.length > 0;
  const hasMegaMenu = item.megaMenu && item.megaMenu.sections;
  const isHovered = hoveredItem === item.id;
  const isMoreButton = item.id === "More";

  const getMegaMenuClasses = () => {
    const baseClasses =
      "absolute top-full mt-2 w-[900px] max-w-[95vw] bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-50 animate-in fade-in duration-200";

    switch (megaMenuPosition) {
      case "right":
        return `${baseClasses} right-0`;
      case "left":
        return `${baseClasses} left-0`;
      default:
        return `${baseClasses} left-1/2 transform -translate-x-1/2`;
    }
  };

  return (
    <div
      className="relative"
      ref={isMoreButton ? moreButtonRef : null}
      data-more-button={isMoreButton ? "true" : undefined}
      onMouseEnter={() => (hasSubItems || hasMegaMenu) && onMouseEnter(item.id)}
      onMouseLeave={() => (hasSubItems || hasMegaMenu) && onMouseLeave()}
    >
      <button
        onClick={() => !(hasSubItems || hasMegaMenu) && onTabChange?.(item.id)}
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
          className={`text-l font-medium mt-1 transition-colors duration-200 ${
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
          className={getMegaMenuClasses()}
          onMouseEnter={() => onMouseEnter(item.id)}
          onMouseLeave={onMouseLeave}
        >
          {/* Arrow pointer */}
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
                  <div className="grid grid-cols-2 gap-2">
                    {section.items.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => onSubItemClick(subItem.id)}
                        className="flex w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
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
          onMouseEnter={() => onMouseEnter(item.id)}
          onMouseLeave={onMouseLeave}
        >
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
          {item.subItems.map((subItem, index) => (
            <button
              key={subItem.id}
              onClick={() => onSubItemClick(subItem.id)}
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

export default NavButton;