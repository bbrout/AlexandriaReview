// client/src/pages/LandingPage.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
        The Alexandria Review
      </h1>
      <p className="text-lg mb-8 text-center text-gray-600 max-w-xl">
        Decentralized, open-access scientific publishing. Transparent peer review. Open to all.
      </p>

      <div className="grid gap-4 w-full max-w-sm">
        <button
          onClick={() => navigate("/author")}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl shadow"
        >
          Sign Up / Sign In as Author
        </button>
        <button
          onClick={() => navigate("/reviewer")}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl shadow"
        >
          Sign Up / Sign In as Reviewer
        </button>
        <button
          onClick={() => navigate("/library")}
          className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-xl shadow"
        >
          Browse as Library / Reader
        </button>
      </div>

      <footer className="mt-10 text-sm text-gray-400 text-center">
        © 2025 The Alexandria Review · <a href="https://github.com/bbrout/AlexandriaReview" className="underline">GitHub</a>
      </footer>
    </div>
  );
};



export default LandingPage;
