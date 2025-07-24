import {
  Calendar,
  CloudSun,
  DollarSign,
  MapPin,
  MessageCircle,
  Plane,
  Settings,
} from "lucide-react";
import React from "react";

const TravelDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 p-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light text-stone-800">
            Travel Dashboard
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            Your trip to Japan • March 15-20, 2024
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Weather Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-stone-800">Weather in Tokyo</h3>
              <CloudSun size={24} className="text-stone-600" />
            </div>
            <div className="text-2xl font-light text-stone-800 mb-2">18°C</div>
            <p className="text-sm text-stone-600">
              Partly cloudy, perfect for cherry blossoms
            </p>
          </div>

          {/* Currency Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-stone-800">Currency Exchange</h3>
              <DollarSign size={24} className="text-stone-600" />
            </div>
            <div className="text-2xl font-light text-stone-800 mb-2">
              ¥149.50
            </div>
            <p className="text-sm text-stone-600">1 USD = 149.50 JPY</p>
          </div>

          {/* Flight Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-stone-800">Next Flight</h3>
              <Plane size={24} className="text-stone-600" />
            </div>
            <div className="text-lg font-medium text-stone-800 mb-1">
              LAX → NRT
            </div>
            <p className="text-sm text-stone-600">March 15, 11:30 PM</p>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 md:col-span-2 lg:col-span-3">
            <h3 className="font-medium text-stone-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="flex flex-col items-center p-4 rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors">
                <MapPin size={24} className="text-stone-600 mb-2" />
                <span className="text-sm text-stone-700">Nearby Places</span>
              </button>
              <button className="flex flex-col items-center p-4 rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors">
                <MessageCircle size={24} className="text-stone-600 mb-2" />
                <span className="text-sm text-stone-700">Translation</span>
              </button>
              <button className="flex flex-col items-center p-4 rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors">
                <Calendar size={24} className="text-stone-600 mb-2" />
                <span className="text-sm text-stone-700">Add to Calendar</span>
              </button>
              <button className="flex flex-col items-center p-4 rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors">
                <Settings size={24} className="text-stone-600 mb-2" />
                <span className="text-sm text-stone-700">Emergency Info</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDashboard;
