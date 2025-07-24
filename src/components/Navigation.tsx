import {
  Calendar,
  MapPin,
  Menu,
  MessageCircle,
  Settings,
  X,
} from "lucide-react";
import React, { useState } from "react";

interface NavigationProps {
  currentScreen: string;
  onScreenChange: (screen: string) => void;
}

interface NavItem {
  id: string;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
}

const Navigation: React.FC<NavigationProps> = ({
  currentScreen,
  onScreenChange,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems: NavItem[] = [
    { id: "dashboard", icon: MapPin, label: "Dashboard" },
    { id: "chat", icon: MessageCircle, label: "Chat" },
    { id: "itinerary", icon: Calendar, label: "Itinerary" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <>
      {/* Mobile Navigation - Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 md:hidden z-50">
        <div className="flex justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onScreenChange(item.id)}
                className={`flex flex-col items-center p-2 transition-colors ${
                  currentScreen === item.id
                    ? "text-stone-800"
                    : "text-stone-500"
                }`}
              >
                <Icon size={20} />
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop Navigation - Collapsible Sidebar */}
      <div
        className={`hidden md:block fixed left-0 top-0 h-full bg-white border-r border-stone-200 z-40 transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="p-4">
          {/* Toggle Button */}
          <div className="flex items-center justify-between mb-6">
            {!isCollapsed && (
              <h2 className="text-lg font-semibold text-stone-800">
                AI - Travel Companion
              </h2>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
            >
              {isCollapsed ? <Menu size={20} /> : <X size={20} />}
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onScreenChange(item.id)}
                  className={`w-full flex items-center transition-colors text-left group relative cursor-pointer ${
                    isCollapsed
                      ? "justify-center px-3 py-3"
                      : "space-x-3 px-4 py-3"
                  } rounded-lg ${
                    currentScreen === item.id
                      ? "bg-stone-100 text-stone-800" +
                        (isCollapsed ? "" : " border-l-4 border-stone-600")
                      : "text-stone-600 hover:text-stone-800 hover:bg-stone-50"
                  }`}
                >
                  <Icon size={20} />
                  {!isCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}

                  {/* Tooltip for collapsed state */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-stone-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {item.label}
                    </div>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
