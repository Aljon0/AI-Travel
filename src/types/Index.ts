// Common types used across the application

export interface Message {
  id: number;
  text: string;
  sender: "ai" | "user";
}

export interface Activity {
  time: string;
  title: string;
  note: string;
}

export interface ItineraryData {
  [key: number]: Activity[];
}

export interface NavItem {
  id: string;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
}

export interface WeatherData {
  temperature: string;
  condition: string;
  description: string;
}

export interface CurrencyData {
  rate: string;
  from: string;
  to: string;
}

export interface FlightData {
  route: string;
  date: string;
  time: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  preferences: {
    darkMode: boolean;
    preferredCountries: string[];
    travelStyle: string;
  };
}

export type Screen =
  | "landing"
  | "chat"
  | "itinerary"
  | "dashboard"
  | "settings";
