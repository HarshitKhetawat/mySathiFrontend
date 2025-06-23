import React, { useState } from 'react';
import { Search, Calendar, MapPin, Clock, Train } from 'lucide-react';

const SeatAvailabilityPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [fromStation, setFromStation] = useState('Pune Jn');
  const [toStation, setToStation] = useState('Chhatrapati Shivaji Maharaj Terminus');
  const [quota, setQuota] = useState('General');

  // Sample train data
  const trainData = {
    trainNumber: '11010',
    trainName: 'SINHAGAD EXP',
    route: 'Pune Jn to Chhatrapati Shivaji Maharaj Terminus | M, T, W, T, F, S, S | CC,2S | Express',
    classes: [
      { code: '2S', price: '₹90', selected: true },
      { code: 'CC', price: '₹340', selected: false }
    ]
  };

  // Sample availability data
  const availabilityData = {
    'June 2025': [
      { date: 'Mon, 23 Jun', status: 'CHECK', color: 'gray' },
      { date: 'Tue, 24 Jun', status: 'CHECK', color: 'gray' },
      { date: 'Wed, 25 Jun', status: 'GNWL 49', percentage: '69%', color: 'orange' },
      { date: 'Thu, 26 Jun', status: 'GNWL 9', percentage: '84%', color: 'teal' },
      { date: 'Fri, 27 Jun', status: 'AVL 30', percentage: '100%', color: 'green' },
      { date: 'Sat, 28 Jun', status: 'GNWL 73', percentage: '60%', color: 'orange' },
      { date: 'Sun, 29 Jun', status: 'GNWL 57', percentage: '68%', color: 'orange' },
      { date: 'Mon, 30 Jun', status: 'GNWL 107', percentage: '44%', color: 'orange' }
    ],
    'July 2025': [
      { date: 'Tue, 01 Jul', status: 'CHECK', color: 'gray' },
      { date: 'Wed, 02 Jul', status: 'CHECK', color: 'gray' },
      { date: 'Thu, 03 Jul', status: 'CHECK', color: 'gray' },
      { date: 'Fri, 04 Jul', status: 'CHECK', color: 'gray' },
      { date: 'Sat, 05 Jul', status: 'CHECK', color: 'gray' },
      { date: 'Sun, 06 Jul', status: 'CHECK', color: 'gray' }
    ]
  };

  const popularTrains = [
    '19037 AVADH EXP',
    '19038 AVADH EXPRESS',
    '15909 AVADH ASSAM EXP',
    '15910 AVADH ASSAM EXP',
    '12925 Paschim SF Express (PT)',
    '11062 JYG LTT EXP',
    '11061 LTT JAYNAGAR EXP',
    '12926 Paschim SF Express (PT)'
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSelectedTrain(trainData);
      setShowResults(true);
    }
  };

  const getStatusColor = (color) => {
    switch (color) {
      case 'orange':
        return 'border-orange-200 bg-orange-50 text-orange-700';
      case 'teal':
        return 'border-teal-200 bg-teal-50 text-teal-700';
      case 'green':
        return 'border-green-200 bg-green-50 text-green-700';
      default:
        return 'border-gray-200 bg-gray-50 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600">Seat Availability</span>
            <span className="text-sm text-gray-400">Book Train Tickets</span>
          </div>

          {/* Search Section */}
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Train Number or Name
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="11010 - SINHAGAD EXP"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-lg"
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {showResults && selectedTrain ? (
              <div className="space-y-6">
                {/* Train Info */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedTrain.trainNumber} {selectedTrain.trainName} Seat Availability
                  </h1>
                  <p className="text-gray-600 mb-4">{selectedTrain.route}</p>

                  {/* Filters */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                      <select 
                        value={fromStation}
                        onChange={(e) => setFromStation(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      >
                        <option value="Pune Jn">Pune Jn</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                      <select 
                        value={toStation}
                        onChange={(e) => setToStation(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      >
                        <option value="Chhatrapati Shivaji Maharaj Terminus">Chhatrapati Shivaji Maharaj Terminus</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Quota</label>
                      <select 
                        value={quota}
                        onChange={(e) => setQuota(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      >
                        <option value="General">General</option>
                        <option value="Ladies">Ladies</option>
                        <option value="Senior Citizen">Senior Citizen</option>
                      </select>
                    </div>
                  </div>

                  {/* Class Selection */}
                  <div className="flex space-x-4 mb-6">
                    {selectedTrain.classes.map((cls) => (
                      <button
                        key={cls.code}
                        className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                          cls.selected
                            ? 'bg-gray-800 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {cls.code} {cls.price}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Availability Calendar */}
                {Object.entries(availabilityData).map(([month, dates]) => (
                  <div key={month} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">{month}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {dates.map((date, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md cursor-pointer ${getStatusColor(date.color)}`}
                        >
                          <div className="text-sm font-medium text-gray-600 mb-1">
                            {date.date}
                          </div>
                          <div className="font-bold text-sm mb-1">
                            {date.status}
                          </div>
                          {date.percentage && (
                            <div className="text-xs text-gray-500">
                              {date.percentage}
                            </div>
                          )}
                          <div className="text-xs text-gray-400 mt-2">
                            2 hrs ago
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <Train className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Search for Train Seat Availability
                </h3>
                <p className="text-gray-500">
                  Enter a train number or name to view seat availability across different dates
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Offers Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Offers and Discounts</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-1">Free Cancellation</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Full Refund</span> on train ticket cancellation
                  </p>
                  <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Popular Trains */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Trains</h3>
              <div className="space-y-2">
                {popularTrains.map((train, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(train);
                      setSelectedTrain(trainData);
                      setShowResults(true);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-600 rounded-lg transition-colors duration-200"
                  >
                    {train}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Support */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold text-sm">CS</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Chat Support</h4>
              <p className="text-sm text-gray-600">Need help? Chat with us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatAvailabilityPage;