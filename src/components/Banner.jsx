import { Train, Compass, Star } from 'lucide-react';

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-rose-500 text-white overflow-hidden">
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 transform rotate-45 -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 transform rotate-12 translate-y-12 -translate-x-12"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center py-3 px-6">
        {/* Left icon */}
        <div className="hidden md:flex items-center justify-center w-10 h-10 bg-white/20 rounded-full mr-6">
          <Compass className="w-5 h-5 text-white animate-spin" style={{animationDuration: '8s'}} />
        </div>
        
        {/* Center content */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-1">
            <Star className="w-4 h-4 text-yellow-300 animate-pulse" />
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">
              Plan Your Summer Train Journey
            </h1>
            <Star className="w-4 h-4 text-yellow-300 animate-pulse" />
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-sm font-medium text-white/90">
            <Train className="w-4 h-4" />
            <span>Discover • Book • Travel</span>
            <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>
          </div>
        </div>
        
        {/* Right icon */}
        <div className="hidden md:flex items-center justify-center w-10 h-10 bg-white/20 rounded-full ml-6">
          <Train className="w-5 h-5 text-white" />
        </div>
      </div>
      
      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400"></div>
    </div>
  );
};

export default Banner;