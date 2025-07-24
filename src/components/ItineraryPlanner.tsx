import { Clock, Plus } from "lucide-react";
import React, { useState } from "react";

interface Activity {
  time: string;
  title: string;
  note: string;
}

interface ItineraryData {
  [key: number]: Activity[];
}

const ItineraryPlanner: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const days = [1, 2, 3, 4, 5];

  const itinerary: ItineraryData = {
    1: [
      {
        time: "9:00 AM",
        title: "Tokyo Station Arrival",
        note: "Take JR Yamanote Line",
      },
      {
        time: "11:00 AM",
        title: "Imperial Palace Gardens",
        note: "Free entry, 2-hour visit",
      },
      { time: "2:00 PM", title: "Lunch in Ginza", note: "Try authentic sushi" },
      {
        time: "4:00 PM",
        title: "Tokyo Skytree",
        note: "Book tickets in advance",
      },
    ],
    2: [
      { time: "8:00 AM", title: "Shinkansen to Kyoto", note: "3-hour journey" },
      {
        time: "12:00 PM",
        title: "Kiyomizu-dera Temple",
        note: "Famous wooden temple",
      },
      {
        time: "3:00 PM",
        title: "Gion District Walk",
        note: "Geisha spotting area",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 p-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light text-stone-800 mb-4">
            Your Japan Itinerary
          </h2>
          <button className="bg-stone-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-stone-700 transition-colors">
            Generate Itinerary with AI
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        {/* Day Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedDay === day
                  ? "bg-stone-800 text-white"
                  : "bg-white text-stone-600 hover:bg-stone-100"
              }`}
            >
              Day {day}
            </button>
          ))}
        </div>

        {/* Activities */}
        <div className="space-y-4">
          {(itinerary[selectedDay] || []).map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-sm border border-stone-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex items-center text-stone-500 text-sm">
                  <Clock size={16} className="mr-2" />
                  {activity.time}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-stone-800 mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-stone-600">{activity.note}</p>
                </div>
              </div>
            </div>
          ))}

          <button className="w-full bg-stone-100 hover:bg-stone-200 border-2 border-dashed border-stone-300 rounded-xl p-6 text-stone-600 transition-colors">
            <Plus size={20} className="mx-auto mb-2" />
            <span className="text-sm">Add Activity</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItineraryPlanner;
