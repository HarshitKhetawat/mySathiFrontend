import React from "react";

const MobileDropdown = ({
  isOpen,
  activeTab,
  navItems,
  additionalItems,
  onNavClick,
  onClose,
  onLoginClick,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Mobile Dropdown Menu */}
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
                    onClick={() => !hasSubItems && onNavClick(item.id)}
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
                          onClick={() => onNavClick(subItem.id)}
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
                                onClick={() => onNavClick(subItem.id)}
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
                    onClick={() => !hasSubItems && onNavClick(item.id)}
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
                          onClick={() => onNavClick(subItem.id)}
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

        {/* Login Button */}
        <div className="px-4 pb-4">
          <button
            onClick={onLoginClick}
            className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow hover:from-orange-600 hover:to-red-600 transition-all duration-200 mt-2"
          >
            <img src="/logos/login.png" alt="Login" className="w-5 h-5 mr-2" />
            Login
          </button>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-xs text-center text-gray-500">
            MySathi - Your Travel Companion
          </p>
        </div>
      </div>

      {/* Backdrop to close dropdown when clicking outside */}
      <div className="md:hidden fixed inset-0 z-40" onClick={onClose} />
    </>
  );
};

export default MobileDropdown;
