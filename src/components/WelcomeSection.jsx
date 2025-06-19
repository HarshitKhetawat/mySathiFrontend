import { User } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <div className="bg-gradient-to-r from-white via-gray-50 to-white rounded-xl p-5 mb-6 shadow-md border border-gray-200/50">
      <div className="flex items-center justify-between">
        {/* Welcome message */}
        <div className="flex items-center space-x-1">
          <span className="text-gray-600 font-medium">Welcome</span>
          <span className="text-red-600 font-semibold text-lg">XYZ</span>
        </div>
        
        {/* User avatar */}
        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-red-100">
          <User className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;