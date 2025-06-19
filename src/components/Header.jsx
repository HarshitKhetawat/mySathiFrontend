const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-100 px-4 py-4">
      <div className="flex items-center justify-between w-full px-4">
        {/* Left side - Menu and Logo */}
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-50 rounded-xl transition-colors duration-200 group">
            <img 
              src="/logos/Three_lines.png" 
              alt="Menu" 
              className="w-10 h-10 group-hover:scale-110 transition-transform duration-200"
            />
          </button>
          <div className="flex items-center">
            <img 
              src="/logos/mysathi_logo_white.png" 
              alt="MySathi Logo" 
              className="w-24 h-auto hover:scale-105 transition-transform duration-200"
            />
          </div>
        </div>
        
        {/* Right side - Help and Login */}
        <div className="flex items-center space-x-4">
          {/* Help Button */}
          <button className="group flex flex-col items-center p-2 hover:bg-gradient-to-br hover:from-white hover:to-red-50 rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg border border-transparent hover:border-red-100">
            <div className="relative">
              <img 
                src="/logos/Help.png" 
                alt="Help" 
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" 
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
            </div>
            <span className="text-xs text-gray-600 group-hover:text-red-600 font-medium transition-colors duration-200 mt-1">
              Help
            </span>
          </button>
          
          {/* Login Button */}
          <button className="group flex flex-col items-center p-2 hover:bg-gradient-to-br hover:from-white hover:to-red-50 rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg border border-transparent hover:border-red-100">
            <div className="relative">
              <img 
                src="/logos/login.png" 
                alt="Login" 
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" 
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
            </div>
            <span className="text-xs text-gray-600 group-hover:text-red-600 font-medium transition-colors duration-200 mt-1">
              Login
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
