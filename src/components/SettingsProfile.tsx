import { Moon, Sun, User } from "lucide-react";
import React, { useState } from "react";

const SettingsProfile: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 p-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light text-stone-800">
            Settings & Profile
          </h2>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4">
        {/* Profile Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center">
              <User size={24} className="text-stone-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-stone-800">
                John Traveler
              </h3>
              <p className="text-stone-600 text-sm">john.traveler@email.com</p>
            </div>
          </div>
          <button className="text-stone-600 text-sm hover:text-stone-800 transition-colors">
            Edit Profile
          </button>
        </div>

        {/* Preferences */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 mb-6">
          <h3 className="text-lg font-medium text-stone-800 mb-4">
            Preferences
          </h3>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between py-3 border-b border-stone-100">
            <div className="flex items-center space-x-3">
              {darkMode ? (
                <Moon size={20} className="text-stone-600" />
              ) : (
                <Sun size={20} className="text-stone-600" />
              )}
              <span className="text-stone-700">Dark Mode</span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                darkMode ? "bg-stone-800" : "bg-stone-300"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform absolute top-0.5 ${
                  darkMode ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          {/* Country Preference */}
          <div className="py-3 border-b border-stone-100">
            <label className="block text-stone-700 text-sm mb-2">
              Preferred Countries
            </label>
            <select className="w-full p-2 border border-stone-200 rounded-lg bg-stone-50 text-stone-700 focus:border-stone-400 focus:outline-none">
              <option>Japan</option>
              <option>South Korea</option>
              <option>Thailand</option>
              <option>Singapore</option>
            </select>
          </div>

          {/* Travel Style */}
          <div className="py-3">
            <label className="block text-stone-700 text-sm mb-2">
              Travel Style
            </label>
            <select className="w-full p-2 border border-stone-200 rounded-lg bg-stone-50 text-stone-700 focus:border-stone-400 focus:outline-none">
              <option>Adventure</option>
              <option>Luxury</option>
              <option>Budget</option>
              <option>Cultural</option>
            </select>
          </div>
        </div>

        {/* Support */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
          <h3 className="text-lg font-medium text-stone-800 mb-4">Support</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg hover:bg-stone-50 transition-colors text-stone-700">
              Help Center
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-stone-50 transition-colors text-stone-700">
              Contact Support
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-stone-50 transition-colors text-stone-700">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfile;
