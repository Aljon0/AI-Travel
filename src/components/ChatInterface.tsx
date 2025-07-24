import { Mic, Send } from "lucide-react";
import React, { useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: "ai" | "user";
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI travel companion. Where would you like to go?",
      sender: "ai",
    },
    {
      id: 2,
      text: "I'm planning a trip to Japan in March. Can you help me with recommendations?",
      sender: "user",
    },
    {
      id: 3,
      text: "Perfect! March is a wonderful time to visit Japan - cherry blossom season begins! I'd recommend visiting Tokyo, Kyoto, and Osaka. Would you like me to create a detailed itinerary?",
      sender: "ai",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        { id: Date.now(), text: inputValue, sender: "user" },
      ]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 p-4 sticky top-0 z-10">
        <h2 className="text-xl font-medium text-stone-800 text-center">
          Ask me anything about your trip
        </h2>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 pb-24 max-w-4xl mx-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex mb-6 ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl ${
                message.sender === "user"
                  ? "bg-stone-800 text-white"
                  : "bg-white text-stone-700 shadow-sm border border-stone-100"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 p-4">
        <div className="max-w-4xl mx-auto flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your travel question..."
              className="w-full px-4 py-3 rounded-full border border-stone-200 focus:border-stone-400 focus:outline-none bg-stone-50"
            />
          </div>
          <button className="p-3 text-stone-600 hover:text-stone-800 transition-colors">
            <Mic size={20} />
          </button>
          <button
            onClick={handleSend}
            className="p-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
