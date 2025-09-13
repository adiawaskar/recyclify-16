import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  Bot, 
  User, 
  Lightbulb,
  Recycle,
  TrendingDown,
  Package,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

const Copilot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm your AI Copilot for sustainable supply chain optimization. I can help you reduce waste, find circular economy opportunities, and optimize your inventory. What would you like to explore today?",
      timestamp: new Date(),
      suggestions: [
        "How can I reduce waste in my manufacturing process?",
        "Find buyers for my surplus steel inventory",
        "Analyze my supply chain carbon footprint",
        "Suggest NGOs for donating excess materials"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    { icon: TrendingDown, title: "Reduce Stock", desc: "Optimize excess inventory" },
    { icon: Recycle, title: "Find Exchange", desc: "Match with circular partners" },
    { icon: Package, title: "Donate Surplus", desc: "Connect with NGOs" },
    { icon: AlertCircle, title: "Sustainability Audit", desc: "Full chain analysis" }
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const simulateBotResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const responses = {
        "waste": "Based on your data, I've identified 3 key areas for waste reduction:\n\n1. **Overproduction**: Your steel inventory is 23% above optimal levels\n2. **Packaging**: Switch to biodegradable alternatives to reduce 40% plastic waste\n3. **Energy**: Optimize production schedules to reduce energy consumption by 15%\n\nWould you like me to create an action plan for any of these areas?",
        "steel": "I found 4 potential buyers for your surplus steel inventory:\n\n🏭 **MetalCraft Industries** - 8km away\n• Needs: 10-15 tons monthly\n• Price: $2,800/ton\n• Sustainability score: 95/100\n\n🔧 **BuildTech Solutions** - 15km away\n• Needs: 5-8 tons monthly  \n• Price: $2,650/ton\n• Fast pickup available\n\nShall I initiate contact with any of these buyers?",
        "carbon": "Your current supply chain carbon footprint analysis:\n\n📊 **Total CO₂ Emissions**: 847 tons/month\n🚛 **Transportation**: 35% (295 tons)\n🏭 **Manufacturing**: 45% (381 tons)\n📦 **Packaging**: 20% (171 tons)\n\n**Quick Wins:**\n• Switch to rail transport: -12% emissions\n• Local supplier sourcing: -8% emissions\n• Renewable energy: -25% emissions\n\nImplementing all suggestions could reduce emissions by 45%. Want a detailed roadmap?",
        "donate": "I've matched your excess materials with these verified NGOs:\n\n🤝 **EcoBuilders Foundation**\n• Needs: Construction materials\n• Impact: Houses 50 families/month\n• Tax benefit: $12,000\n\n🌱 **Green Schools Initiative**\n• Needs: Office supplies & furniture\n• Impact: Supports 15 schools\n• Tax benefit: $8,500\n\nBoth organizations can arrange pickup within 48 hours. Shall I schedule a pickup?"
      };

      let response = "I understand you're asking about optimizing your supply chain. Let me analyze your data and provide specific recommendations. Could you provide more details about your current challenges or specific materials you're working with?";

      const lowerMessage = userMessage.toLowerCase();
      for (const [key, value] of Object.entries(responses)) {
        if (lowerMessage.includes(key)) {
          response = value;
          break;
        }
      }

      const botMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: response,
        timestamp: new Date(),
        suggestions: [
          "Show me more details",
          "Create an action plan", 
          "Schedule a consultation",
          "Export this analysis"
        ]
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        type: 'user',
        content: inputValue,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      simulateBotResponse(inputValue);
      setInputValue("");
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleQuickAction = (action: string) => {
    const actionMessages = {
      "Reduce Stock": "Help me optimize my current inventory levels and reduce excess stock",
      "Find Exchange": "Find circular economy partners for my surplus materials",
      "Donate Surplus": "Connect me with NGOs that can use my excess inventory",
      "Sustainability Audit": "Perform a full sustainability audit of my supply chain"
    };
    
    const message = actionMessages[action as keyof typeof actionMessages];
    if (message) {
      setInputValue(message);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">AI Copilot</h1>
          <p className="text-muted-foreground">Your intelligent assistant for sustainable supply chain optimization</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Quick Actions Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-start p-3 h-auto hover:bg-primary/10"
                      onClick={() => handleQuickAction(action.title)}
                    >
                      <action.icon className="h-5 w-5 mr-3 text-primary" />
                      <div className="text-left">
                        <div className="font-medium text-sm">{action.title}</div>
                        <div className="text-xs text-muted-foreground">{action.desc}</div>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <Card className="glass-card h-[700px] flex flex-col">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  AI Copilot Chat
                  <Badge variant="secondary" className="ml-auto">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Online
                  </Badge>
                </CardTitle>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                <div className="space-y-6">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {message.type === 'bot' && (
                          <div className="p-2 rounded-full bg-primary/10">
                            <Bot className="h-4 w-4 text-primary" />
                          </div>
                        )}
                        
                        <div className={`max-w-[80%] space-y-2 ${message.type === 'user' ? 'order-first' : ''}`}>
                          <div className={`p-4 rounded-2xl whitespace-pre-wrap ${
                            message.type === 'user' 
                              ? 'bg-primary text-primary-foreground ml-auto' 
                              : 'bg-muted'
                          }`}>
                            {message.content}
                          </div>
                          
                          {message.suggestions && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {message.suggestions.map((suggestion, index) => (
                                <Button
                                  key={index}
                                  variant="outline"
                                  size="sm"
                                  className="text-xs h-7"
                                  onClick={() => handleSuggestionClick(suggestion)}
                                >
                                  {suggestion}
                                </Button>
                              ))}
                            </div>
                          )}
                        </div>

                        {message.type === 'user' && (
                          <div className="p-2 rounded-full bg-accent/10">
                            <User className="h-4 w-4 text-accent" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3"
                    >
                      <div className="p-2 rounded-full bg-primary/10">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-muted p-4 rounded-2xl">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              {/* Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about waste reduction, circular opportunities, or sustainability..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} disabled={!inputValue.trim() || isTyping}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Copilot;