import React, { useState } from "react";
import ChatInterface from "./components/ChatInterface";
import ItineraryPlanner from "./components/ItineraryPlanner";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import SettingsProfile from "./components/SettingsProfile";
import TravelDashboard from "./components/TravelDashboard";

type Screen = "landing" | "chat" | "itinerary" | "dashboard" | "settings";

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing");

  const handleScreenChange = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "landing":
        return (
          <LandingPage onStartPlanning={() => setCurrentScreen("dashboard")} />
        );
      case "chat":
        return <ChatInterface />;
      case "itinerary":
        return <ItineraryPlanner />;
      case "dashboard":
        return <TravelDashboard />;
      case "settings":
        return <SettingsProfile />;
      default:
        return (
          <LandingPage onStartPlanning={() => setCurrentScreen("dashboard")} />
        );
    }
  };

  return (
    <div className="font-sans antialiased">
      {renderScreen()}
      {currentScreen !== "landing" && (
        <Navigation
          currentScreen={currentScreen}
          onScreenChange={handleScreenChange}
        />
      )}
    </div>
  );
};

export default App;
