
import React from "react";
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
  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-cs-blue rounded-full flex items-center justify-center">
            <Icon name="Briefcase" className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold">CS2Cases</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Icon name={item.icon} size={18} />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="bg-secondary rounded-full px-4 py-2 flex items-center gap-2">
            <Icon name="Wallet" size={18} />
            <span className="font-medium">0 ₽</span>
          </div>
          <Button>
            <Icon name="Plus" size={18} />
            <span>Пополнить</span>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Icon name="Menu" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
