import React, { useState } from "react";
import AuthPages from "./components/AuthPages"; // Import the new auth component
import ChatInterface from "./components/ChatInterface";
import ItineraryPlanner from "./components/ItineraryPlanner";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import SettingsProfile from "./components/SettingsProfile";
import TravelDashboard from "./components/TravelDashboard";

type Screen =
  | "landing"
  | "auth"
  | "chat"
  | "itinerary"
  | "dashboard"
  | "settings";

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleScreenChange = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentScreen("dashboard");
  };

  const handleStartPlanning = () => {
    // Redirect to auth page when Start Planning is clicked
    setCurrentScreen("auth");
  };

  const handleBackToHome = () => {
    setCurrentScreen("landing");
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "landing":
        return <LandingPage onStartPlanning={handleStartPlanning} />;
      case "auth":
        return (
          <AuthPages onLogin={handleLogin} onBackToHome={handleBackToHome} />
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
        return <LandingPage onStartPlanning={handleStartPlanning} />;
    }
  };

  return (
    <div className="font-sans antialiased">
      {renderScreen()}
      {currentScreen !== "landing" && currentScreen !== "auth" && (
        <Navigation
          currentScreen={currentScreen}
          onScreenChange={handleScreenChange}
        />
      )}
    </div>
  );
};

export default App;
