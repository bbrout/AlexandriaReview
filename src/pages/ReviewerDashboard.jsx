// src/pages/ReviewerDashboard.jsx
import React from "react";

const ReviewerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Reviewer Dashboard</h1>
        <p className="text-gray-700 mb-6">
          Welcome! This is a placeholder for your reviewer workspace.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>View assigned submissions</li>
          <li>Submit peer reviews</li>
          <li>Check review deadlines</li>
          <li>Track review history</li>
        </ul>
      </div>
    </div>
  );
};

export default ReviewerDashboard;
