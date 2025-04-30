
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Case {
  id: string;
  name: string;
  price: number;
  weapon: string;
  imageUrl: string;
  rarity: "blue" | "purple" | "pink" | "red" | "gold";
  videoUrl?: string;
}

const cases: Case[] = [
  {
    id: "1",
    name: "AWP DRAGON LORE",
    price: 1999,
    weapon: "AWP",
    imageUrl: "https://images.unsplash.com/photo-1598094460151-5f0d0e0875dd",
    rarity: "gold",
    videoUrl: "https://media.tenor.com/dVdLLIGD5fQAAAAC/awpdl.gif"
  },
  {
    id: "2",
    name: "BUTTERFLY CRIMSON",
    price: 2999,
    weapon: "Нож",
    imageUrl: "https://images.unsplash.com/photo-1616881545289-d04475acd4a1",
    rarity: "red",
    videoUrl: "https://i.imgur.com/z3ZzDdi.gif"
  },
  {
    id: "3",
    name: "AK-47 ASIMOV",
    price: 899,
    weapon: "AK-47",
    imageUrl: "https://images.unsplash.com/photo-1605092676920-8ac5ae26c5c6",
    rarity: "pink",
    videoUrl: "https://thumbs.gfycat.com/OilyMeagerIslandwhistler-max-1mb.gif"
  },
  {
    id: "4",
    name: "M4A4 HOWL",
    price: 1499,
    weapon: "M4A4",
    imageUrl: "https://images.unsplash.com/photo-1624032545726-d9aba115af35",
    rarity: "red",
    videoUrl: "https://thumbs.gfycat.com/AcclaimedSlightEstuarinecrocodile-max-1mb.gif"
  },
  {
    id: "5",
    name: "GLOVES FADE",
    price: 999,
    weapon: "Перчатки",
    imageUrl: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5",
    rarity: "purple",
    videoUrl: "https://thumbs.gfycat.com/GleefulGivingHogget-max-1mb.gif"
  },
];

const CaseSlider: React.FC = () => {
  const [activeCase, setActiveCase] = React.useState<Case>(cases[0]);
  const [isHovering, setIsHovering] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  
  // Функция открытия кейса с анимацией
  const handleOpenCase = () => {
    setIsOpening(true);
    
    // Имитация задержки для анимации открытия кейса
    setTimeout(() => {
      setIsOpening(false);
    }, 3000);
  };

  return (
    <div className="py-12 bg-gradient-to-b from-cs-gamer-dark to-cs-gamer-secondary rounded-xl overflow-hidden border border-cs-gamer-highlight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="gamer-title text-5xl mb-4">
            ОТКРЫВАЙ ЛУЧШИЕ КЕЙСЫ CS2
          </h1>
          <p className="text-gray-400 text-lg">Получи легендарные скины прямо сейчас!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-4">
            {cases.map((caseItem) => (
              <button
                key={caseItem.id}
                className={`w-full text-left p-4 border-2 rounded-xl transition-all duration-300 ${
                  activeCase.id === caseItem.id 
                    ? `rarity-border-${caseItem.rarity} bg-cs-gamer-highlight animate-pulse-glow` 
                    : "border-cs-gamer-highlight bg-cs-gamer-secondary hover:bg-cs-gamer-highlight/70"
                }`}
                onClick={() => setActiveCase(caseItem)}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 overflow-hidden border-2 rarity-border-${caseItem.rarity}`}>
                    <img 
                      src={caseItem.imageUrl} 
                      alt={caseItem.weapon}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{caseItem.name}</h3>
                    <p className={`text-sm text-${caseItem.rarity === "gold" ? "cs-gold" : caseItem.rarity === "red" ? "cs-red" : caseItem.rarity === "pink" ? "cs-pink" : caseItem.rarity === "purple" ? "cs-purple" : "cs-blue"}`}>
                      {caseItem.weapon}
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <span className="font-bold text-white">{caseItem.price} ₽</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 flex flex-col items-center">
            <div 
              className={`relative w-80 h-80 mb-8 rounded-xl border-4 rarity-border-${activeCase.rarity} overflow-hidden`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {isOpening ? (
                <div className="w-full h-full flex items-center justify-center bg-black">
                  <div className="text-center">
                    <div className="spinner w-24 h-24 border-4 border-t-cs-gamer-glow rounded-full mx-auto animate-spin"></div>
                    <p className="text-white font-bold mt-4 animate-pulse">ОТКРЫВАЕМ...</p>
                  </div>
                </div>
              ) : isHovering && activeCase.videoUrl ? (
                <img 
                  src={activeCase.videoUrl} 
                  alt={activeCase.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src={activeCase.imageUrl} 
                  alt={activeCase.name} 
                  className="w-full h-full object-cover"
                />
              )}
              
              <div className="absolute inset-0 shine-gradient animate-shine"></div>
              
              {/* Угловые элементы в стиле киберпанк */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cs-gamer-glow"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cs-gamer-glow"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cs-gamer-glow"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cs-gamer-glow"></div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                <h3 className="text-white font-bold text-xl">{activeCase.name}</h3>
                <div className="flex justify-between items-center">
                  <p className={`text-${activeCase.rarity === "gold" ? "cs-gold" : activeCase.rarity === "red" ? "cs-red" : activeCase.rarity === "pink" ? "cs-pink" : activeCase.rarity === "purple" ? "cs-purple" : "cs-blue"}`}>
                    {activeCase.weapon}
                  </p>
                  <div className="bg-cs-gamer-dark/80 rounded-full px-3 py-1 border border-cs-gamer-glow">
                    <span className="text-white font-bold">{activeCase.price} ₽</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                size="lg" 
                onClick={handleOpenCase}
                disabled={isOpening}
                className="cyber-button group"
              >
                <Icon name="Zap" className="mr-2 group-hover:animate-pulse" />
                <span className="group-hover:animate-pulse">{isOpening ? "Открываем..." : "Открыть кейс"}</span>
              </Button>
              <Button size="lg" variant="outline" className="border-cs-gamer-glow text-white hover:bg-cs-gamer-highlight hover:text-white hover:border-cs-gamer-glow">
                <Icon name="Eye" className="mr-2" />
                <span>Посмотреть содержимое</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseSlider;
