
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTA: React.FC = () => {
  return (
    <div className="py-20 relative overflow-hidden">
      {/* Анимированный фоновый элемент */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cs-gamer-glow/10 animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cs-gamer-glow/20 animate-rotate-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-cs-gamer-glow/30 animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block p-2 bg-cs-gamer-highlight rounded-full">
            <div className="rounded-full bg-cs-gamer-dark p-2">
              <Icon name="Flame" size={40} className="text-cs-gamer-accent animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-5xl font-extrabold mb-6 neon-text">
            НАЧНИ ОХОТУ ЗА СКИНАМИ ПРЯМО СЕЙЧАС!
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Зарегистрируйся и получи <span className="text-cs-gold font-bold">500 ₽</span> на счет для открытия своего первого кейса
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cyber-button text-lg px-8 py-6 group">
              <Icon name="Rocket" size={24} className="mr-2 group-hover:animate-pulse" />
              <span>НАЧАТЬ ИГРУ</span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cs-gamer-glow text-white hover:bg-cs-gamer-highlight text-lg px-8 py-6"
            >
              <Icon name="LogIn" size={24} className="mr-2" />
              <span>ВОЙТИ</span>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cs-gamer-secondary p-6 rounded-xl border border-cs-gamer-highlight flex flex-col items-center">
              <div className="text-4xl font-bold text-cs-red mb-2">1000+</div>
              <p className="text-gray-400">Уникальных скинов</p>
            </div>
            
            <div className="bg-cs-gamer-secondary p-6 rounded-xl border border-cs-gamer-highlight flex flex-col items-center">
              <div className="text-4xl font-bold text-cs-gold mb-2">24/7</div>
              <p className="text-gray-400">Работаем круглосуточно</p>
            </div>
            
            <div className="bg-cs-gamer-secondary p-6 rounded-xl border border-cs-gamer-highlight flex flex-col items-center">
              <div className="text-4xl font-bold text-cs-blue mb-2">50 000+</div>
              <p className="text-gray-400">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
