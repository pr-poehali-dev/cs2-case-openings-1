
import React from "react";
import Icon from "@/components/ui/icon";

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: "Zap",
    title: "МГНОВЕННЫЕ ВЫПЛАТЫ",
    description: "Получайте выигрыши на свой аккаунт Steam без задержек",
    color: "cs-neon-green"
  },
  {
    icon: "Shield",
    title: "100% ЧЕСТНОСТЬ",
    description: "Все дропы генерируются в режиме реального времени",
    color: "cs-blue"
  },
  {
    icon: "Gift",
    title: "БОНУСЫ И ПРОМОКОДЫ",
    description: "Регулярные раздачи бонусных кредитов активным игрокам",
    color: "cs-pink"
  },
  {
    icon: "Trophy",
    title: "VIP ПРОГРАММА",
    description: "Эксклюзивные кейсы и персональные предложения",
    color: "cs-gold"
  },
  {
    icon: "HeartHandshake",
    title: "ТЕХПОДДЕРЖКА 24/7",
    description: "Наша команда всегда готова помочь с любым вопросом",
    color: "cs-purple"
  },
  {
    icon: "Percent",
    title: "ВЫГОДНЫЕ АПГРЕЙДЫ",
    description: "Улучшайте свои скины с максимальной выгодой",
    color: "cs-red"
  },
];

const FeatureSection: React.FC = () => {
  return (
    <div className="py-16 bg-cs-gamer-secondary bg-cyber-grid bg-[size:30px_30px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gamer-title">НАШИ ПРЕИМУЩЕСТВА</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Мы создали лучший сервис для открытия кейсов CS2 с максимальными шансами на выигрыш топовых скинов</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="cyber-card border-2 hover:border-cs-gamer-glow hover:scale-105 group"
            >
              <div className="p-6">
                <div className={`w-16 h-16 rounded-lg bg-cs-gamer-highlight flex items-center justify-center mb-4 border border-${feature.color} group-hover:shadow-neon-blue`}>
                  <Icon 
                    name={feature.icon} 
                    size={30} 
                    className={`text-${feature.color} group-hover:animate-pulse`} 
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cs-gamer-glow transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
                
                {/* Декоративный элемент */}
                <div className="absolute bottom-4 right-4 w-12 h-12 opacity-10 border-2 border-cs-gamer-glow rounded-full group-hover:opacity-30 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
