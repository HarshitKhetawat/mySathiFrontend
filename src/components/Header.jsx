// components/Header.jsx
import { Menu, User, HelpCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left side - Menu and Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logos/Three_lines.png" alt="" className='w-15 h-15'/>
          <div className="flex items-center">
            {/* Logo placeholder - you can replace this */}
            <img src="/logos/mysathi_logo_white.png" alt=""  className='w-15 h-12'/>
          </div>
        </div>
        
        {/* Right side - Help and Login */}
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center">
            <HelpCircle className="w-6 h-6 text-gray-600" />
            <span className="text-xs text-gray-600">Help</span>
          </div>
          <div className="flex flex-col items-center">
            <User className="w-6 h-6 text-gray-600" />
            <span className="text-xs text-gray-600">Login</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;