import React from 'react';

const DetailList = ({ details, title }) => (
  <div>
    <h3 className="font-semibold text-gray-800 mb-4">{title}:</h3>
    <ul className="space-y-3">
      {details.map((detail, index) => (
        <li key={index} className="flex items-start">
          <div className="w-2 h-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></div>
          <span className="text-gray-700">{detail}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default DetailList;