
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Главная", path: "/", icon: "Home" },
  { name: "Апгрейд", path: "/upgrade", icon: "ArrowUp" },
  { name: "Контракты", path: "/contracts", icon: "FileText" },
  { name: "Профиль", path: "/profile", icon: "User" },
  { name: "Бонусы", path: "/bonuses", icon: "Gift" },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-cs-gamer-dark border-b border-cs-gamer-highlight sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 bg-gradient-to-br from-cs-gamer-glow to-cs-gamer-accent rounded-full flex items-center justify-center shadow-neon-blue group-hover:animate-pulse">
            <Icon name="Briefcase" className="text-white" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cs-gamer-glow to-cs-gamer-accent">CS2Cases</span>
            <span className="text-xs text-gray-400">Legendary skins</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-2 text-gray-400 hover:text-cs-gamer-glow transition-colors group py-2"
            >
              <Icon name={item.icon} size={18} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">{item.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cs-gamer-glow scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="bg-cs-gamer-secondary rounded-lg px-4 py-2 flex items-center gap-2 border border-cs-gamer-highlight">
            <Icon name="Wallet" size={18} className="text-cs-gold animate-pulse" />
            <span className="font-bold text-white">0 ₽</span>
          </div>
          <Button className="cyber-button">
            <Icon name="Plus" size={18} className="mr-1" />
            <span>Пополнить</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="lg:hidden border-cs-gamer-highlight text-white hover:bg-cs-gamer-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} />
          </Button>
        </div>
      </div>
      
      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cs-gamer-secondary border-t border-cs-gamer-highlight animate-accordion-down">
          <div className="container mx-auto py-4 px-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-3 text-gray-300 hover:text-cs-gamer-glow p-3 transition-colors rounded-lg hover:bg-cs-gamer-highlight/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-10 h-10 rounded-lg bg-cs-gamer-dark flex items-center justify-center">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
