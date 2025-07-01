import React from 'react';

const ProTip = ({ tip }) => (
  <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-xl p-6">
    <h3 className="font-semibold text-gray-800 mb-3">Pro Tip:</h3>
    <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
  </div>
);

export default ProTip;