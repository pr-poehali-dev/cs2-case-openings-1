
import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cs-gamer-dark border-t border-cs-gamer-highlight pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 inline-block">
              <div className="w-10 h-10 bg-gradient-to-br from-cs-gamer-glow to-cs-gamer-accent rounded-full flex items-center justify-center">
                <Icon name="Briefcase" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cs-gamer-glow to-cs-gamer-accent">CS2Cases</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Лучший сайт для открытия кейсов CS2 с моментальными выплатами на ваш аккаунт Steam.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cs-gamer-secondary flex items-center justify-center hover:bg-cs-gamer-highlight transition-colors">
                <Icon name="Twitch" size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cs-gamer-secondary flex items-center justify-center hover:bg-cs-gamer-highlight transition-colors">
                <Icon name="Youtube" size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cs-gamer-secondary flex items-center justify-center hover:bg-cs-gamer-highlight transition-colors">
                <Icon name="Instagram" size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cs-gamer-secondary flex items-center justify-center hover:bg-cs-gamer-highlight transition-colors">
                <Icon name="Twitter" size={18} className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cs-gamer-glow transition-colors inline-flex items-center">
                  <Icon name="ChevronRight" size={14} className="mr-2" />
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/upgrade" className="text-gray-400 hover:text-cs-gamer-glow transition-colors inline-flex items-center">
                  <Icon name="ChevronRight" size={14} className="mr-2" />
                  Апгрейд
                </Link>
              </li>
              <li>
                <Link to="/contracts" className="text-gray-400 hover:text-cs-gamer-glow transition-colors inline-flex items-center">
                  <Icon name="ChevronRight" size={14} className="mr-2" />
                  Контракты
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-cs-gamer-glow transition-colors inline-flex items-center">
                  <Icon name="ChevronRight" size={14} className="mr-2" />
                  Профиль
                </Link>
              </li>
              <li>
                <Link to="/bonuses" className="text-gray-400 hover:text-cs-gamer-glow transition-colors inline-flex items-center">
                  <Icon name="ChevronRight" size={14} className="mr-2" />
                  Бонусы
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Помощь</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-cs-gamer-glow transition-colors inline-flex items-center">
                  <Icon name="HelpCircle" size={14} className="mr-2" />
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cs-gamer-glow transition-colors inline-flex items-center">
                  <Icon name="LifeBuoy" size={14} className="mr-2" />
                  Поддержка
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cs-gamer-glow transition-colors inline-flex items-center">
                  <Icon name="Book" size={14} className="mr-2" />
                  Правила
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cs-gamer-glow transition-colors inline-flex items-center">
                  <Icon name="Shield" size={14} className="mr-2" />
                  Гарантии
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cs-gamer-glow transition-colors inline-flex items-center">
                  <Icon name="Phone" size={14} className="mr-2" />
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Способы оплаты</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-cs-gamer-secondary p-2 rounded-lg hover:bg-cs-gamer-highlight/30 transition-colors">
                <img src="https://via.placeholder.com/40x20/171629/4B53FF?text=VISA" alt="VISA" className="w-full" />
              </div>
              <div className="bg-cs-gamer-secondary p-2 rounded-lg hover:bg-cs-gamer-highlight/30 transition-colors">
                <img src="https://via.placeholder.com/40x20/171629/4B53FF?text=MC" alt="MasterCard" className="w-full" />
              </div>
              <div className="bg-cs-gamer-secondary p-2 rounded-lg hover:bg-cs-gamer-highlight/30 transition-colors">
                <img src="https://via.placeholder.com/40x20/171629/4B53FF?text=QIWI" alt="QIWI" className="w-full" />
              </div>
              <div className="bg-cs-gamer-secondary p-2 rounded-lg hover:bg-cs-gamer-highlight/30 transition-colors">
                <img src="https://via.placeholder.com/40x20/171629/4B53FF?text=WMZ" alt="WebMoney" className="w-full" />
              </div>
              <div className="bg-cs-gamer-secondary p-2 rounded-lg hover:bg-cs-gamer-highlight/30 transition-colors">
                <img src="https://via.placeholder.com/40x20/171629/4B53FF?text=YOO" alt="ЮMoney" className="w-full" />
              </div>
              <div className="bg-cs-gamer-secondary p-2 rounded-lg hover:bg-cs-gamer-highlight/30 transition-colors">
                <img src="https://via.placeholder.com/40x20/171629/4B53FF?text=BTC" alt="Bitcoin" className="w-full" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-cs-gamer-highlight flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2025 CS2Cases. Все права защищены. Мы не связаны с Valve Corporation.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-cs-gamer-glow text-sm">Политика конфиденциальности</a>
            <a href="#" className="text-gray-400 hover:text-cs-gamer-glow text-sm">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
