import React from "react";

interface LandingPageProps {
  onStartPlanning: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartPlanning }) => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-light text-stone-800 mb-6 tracking-tight">
            Your AI-Powered
            <br />
            <span className="text-stone-600">Travel Companion</span>
          </h1>
          <p className="text-xl text-stone-600 mb-8 font-light max-w-2xl mx-auto">
            Plan smarter. Travel better.
          </p>
          <button
            onClick={onStartPlanning}
            className="bg-stone-800 text-white px-8 py-4 rounded-full cursor-pointer text-lg font-medium hover:bg-stone-700 transition-colors shadow-lg"
          >
            Start Planning
          </button>
        </div>

        {/* Hero Illustration */}
        <div className="w-full max-w-md mx-auto opacity-60">
          <svg viewBox="0 0 400 300" className="w-full h-auto">
            <circle
              cx="200"
              cy="150"
              r="80"
              fill="none"
              stroke="#d6d3d1"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <path
              d="M120 150 L280 150 M200 70 L200 230 M160 110 L240 190 M240 110 L160 190"
              stroke="#a8a29e"
              strokeWidth="1"
            />
            <circle cx="200" cy="150" r="4" fill="#78716c" />
            <path
              d="M180 130 Q200 120 220 130"
              stroke="#78716c"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="170" cy="140" r="2" fill="#a8a29e" />
            <circle cx="230" cy="160" r="2" fill="#a8a29e" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
