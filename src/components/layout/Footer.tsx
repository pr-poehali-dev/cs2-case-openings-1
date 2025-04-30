
import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-cs-blue rounded-full flex items-center justify-center">
                <Icon name="Briefcase" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold">CS2Cases</span>
            </Link>
            <p className="text-gray-500 text-sm">
              Открывайте кейсы CS2 с уникальными животными-талисманами и получайте редкие скины!
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Страницы</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-500 hover:text-primary text-sm">Главная</Link></li>
              <li><Link to="/upgrade" className="text-gray-500 hover:text-primary text-sm">Апгрейд</Link></li>
              <li><Link to="/contracts" className="text-gray-500 hover:text-primary text-sm">Контракты</Link></li>
              <li><Link to="/profile" className="text-gray-500 hover:text-primary text-sm">Профиль</Link></li>
              <li><Link to="/bonuses" className="text-gray-500 hover:text-primary text-sm">Бонусы</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Помощь</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-500 hover:text-primary text-sm">FAQ</Link></li>
              <li><Link to="/terms" className="text-gray-500 hover:text-primary text-sm">Правила использования</Link></li>
              <li><Link to="/privacy" className="text-gray-500 hover:text-primary text-sm">Политика конфиденциальности</Link></li>
              <li><Link to="/support" className="text-gray-500 hover:text-primary text-sm">Поддержка</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              support@cs2cases.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 CS2Cases. Все права защищены.
          </p>
          <p className="text-xs text-gray-400 mt-2 md:mt-0">
            CS2Cases не связан с Valve Corporation. Все торговые марки принадлежат их соответствующим владельцам.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
