// src/pages/ReaderPortal.jsx
import React from "react";

const ReaderPortal = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Library Reader Portal</h1>
        <p className="text-gray-700 mb-6">
          Welcome! This is a placeholder for the open-access reader portal.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Browse published papers</li>
          <li>Search by author, keyword, or topic</li>
          <li>Read reviews and comments</li>
          <li>Support authors via tips or ratings (future)</li>
        </ul>
      </div>
    </div>
  );
};

export default ReaderPortal;
