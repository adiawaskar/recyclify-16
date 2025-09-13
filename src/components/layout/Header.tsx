import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Leaf, 
  Menu, 
  X, 
  Sun, 
  Moon,
  BarChart3,
  Recycle,
  Bot,
  User,
  Building2,
  TrendingUp,
  Heart,
  Users,
  Calculator,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Marketplace", href: "/marketplace", icon: Recycle },
    { name: "Ask AI", href: "/copilot", icon: Bot },
    { name: "Impact", href: "/impact", icon: TrendingUp },
    
    { name: "Suppliers", href: "/suppliers", icon: Building2 },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Donations", href: "/donations", icon: Heart },
    { name: "Carbon Tracker", href: "/carbon-tracker", icon: Calculator },
    { name: "Reports", href: "/reports", icon: FileText },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10 bg-gradient-eco"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-eco animate-shimmer bg-[length:200%_100%]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative p-3 rounded-xl bg-gradient-eco group-hover:scale-105 transition-all duration-300 shadow-glow animate-glow-pulse group-hover:shadow-glow-bright">
              <Leaf className="h-6 w-6 text-white drop-shadow-sm" />
              <div className="absolute inset-0 rounded-xl bg-gradient-eco opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-eco bg-clip-text text-transparent group-hover:scale-[1.02] transition-transform duration-300">
                GreenChain
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                Zero-Waste AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={isActive(item.href) ? "default" : "ghost"}
                    size="sm"
                    className={`gap-2 text-xs px-3 py-2 transition-all duration-300 hover:shadow-soft ${
                      isActive(item.href) 
                        ? "bg-gradient-eco text-white shadow-glow" 
                        : "hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    <Icon className={`h-4 w-4 transition-transform duration-300 ${isActive(item.href) ? "scale-110" : "group-hover:scale-110"}`} />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Profile, Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Link to="/profile" className="hidden xl:block">
              <Button 
                variant="ghost" 
                size="sm"
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:shadow-soft hover:scale-105"
              >
                <User className="h-4 w-4 transition-transform duration-300" />
              </Button>
            </Link>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:shadow-soft hover:scale-105 relative group"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 transition-all duration-300 group-hover:rotate-180 group-hover:text-amber-500" />
              ) : (
                <Moon className="h-4 w-4 transition-all duration-300 group-hover:rotate-12 group-hover:text-blue-400" />
              )}
              <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-20 bg-gradient-eco transition-opacity duration-300"></div>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="xl:hidden hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:shadow-soft hover:scale-105"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-4 w-4 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-t border-primary/20 mt-2 pt-4 pb-4 bg-gradient-glass rounded-b-lg"
          >
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button
                      variant={isActive(item.href) ? "default" : "ghost"}
                      size="sm"
                      className={`w-full justify-start gap-3 transition-all duration-300 hover:shadow-soft ${
                        isActive(item.href) 
                          ? "bg-gradient-eco text-white shadow-glow" 
                          : "hover:bg-primary/10 hover:text-primary hover:translate-x-1"
                      }`}
                    >
                      <Icon className={`h-4 w-4 transition-transform duration-300 ${isActive(item.href) ? "scale-110" : ""}`} />
                      {item.name}
                    </Button>
                  </Link>
                );
              })}
              
              {/* Mobile Profile Link */}
              <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="xl:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start gap-3 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  <User className="h-4 w-4" />
                  Profile
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;