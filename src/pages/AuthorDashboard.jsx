import React from "react";

const AuthorDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Author Dashboard</h1>
        <p className="text-gray-700 mb-6">
          Welcome! This is a placeholder for your author workspace.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Submit a new manuscript</li>
          <li>View submission history</li>
          <li>Edit or withdraw previous submissions</li>
          <li>Track peer review progress</li>
        </ul>
      </div>
    </div>
  );
};

export default AuthorDashboard;
