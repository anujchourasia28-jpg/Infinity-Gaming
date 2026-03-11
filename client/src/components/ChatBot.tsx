import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const QUICK_REPLIES = [
  { label: "Check Hours", value: "What are your hours?" },
  { label: "Console Pricing", value: "What's the pricing for consoles?" },
  { label: "Games Available", value: "What games do you have?" },
  { label: "Book Now", value: "How do I book?" },
  { label: "Contact", value: "What's your phone number?" },
];

const BOT_RESPONSES: Record<string, string> = {
  "what are your hours": "We're open daily from 10:00 AM to 11:00 PM. Walk-ins are welcome, but advance booking guarantees immediate access!",
  "what's the pricing for consoles": "Visit us or contact us at +91 7067601040 for detailed pricing. Different packages available for PS5, Xbox, Gaming PCs, and Switch!",
  "what games do you have": "We have COD MW3, Counter-Strike 2, Valorant, Cyberpunk 2077, Elden Ring, Fortnite, Palworld, Street Fighter 6 and more!",
  "how do i book": "You can WhatsApp us at +91 7067601040 or call for instant bookings. We also accept walk-ins!",
  "what's your phone number": "Call or WhatsApp us at +91 7067601040. We're in MP Nagar, Zone-II, Bhopal.",
  "where are you located": "We're located in the heart of MP Nagar, Zone-II, Bhopal. Specialized basement sanctuary for ultimate gaming immersion!",
  "high end gaming pc": "Our gaming PCs feature RTX 4080 Ti, i9-13900K processors, 32GB RAM, and deliver 4K @ 120fps performance!",
  "low latency": "We have a fiber-optic backbone with <1ms latency for competitive gaming. Zero-lag environment engineered for pro players!",
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to Infinity Gaming Bhopal! 🎮 How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const findBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(BOT_RESPONSES)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    // Check for quick reply matches
    for (const key of Object.keys(BOT_RESPONSES)) {
      if (userMessage.toLowerCase().includes(key.split(" ")[0])) {
        return BOT_RESPONSES[key];
      }
    }

    return "Great question! For more detailed information, please WhatsApp us at +91 7067601040 or call us directly. We're here to help! 🎯";
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: findBotResponse(input),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);

    setInput("");
  };

  const handleQuickReply = (value: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: value,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: findBotResponse(value),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-96 bg-card border border-border rounded-2xl shadow-2xl box-glow-cyan overflow-hidden flex flex-col max-h-96"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-border p-4">
              <h3 className="font-display font-bold text-white uppercase">Infinity Support</h3>
              <p className="text-xs text-muted-foreground">Always here to help</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.sender === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs rounded-lg px-4 py-2 text-sm ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-background border border-border text-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 py-3 border-t border-border flex flex-wrap gap-2">
                {QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply.value}
                    onClick={() => handleQuickReply(reply.value)}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-border p-4 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary text-foreground"
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary hover:bg-primary/80 text-primary-foreground p-2 rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow box-glow-cyan"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
