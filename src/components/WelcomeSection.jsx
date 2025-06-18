// components/WelcomeSection.jsx

const WelcomeSection = () => {
  return (
    <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-gray-500">Welcome XYZ</span>
        <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
          <span className="text-gray-400 text-xs">👤</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;