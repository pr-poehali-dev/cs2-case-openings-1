
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Case {
  id: string;
  name: string;
  price: number;
  animal: string;
  weapon: string;
  imageUrl: string;
  rarity: "blue" | "purple" | "pink" | "red" | "gold";
}

const cases: Case[] = [
  {
    id: "1",
    name: "Волчий кейс",
    price: 199,
    animal: "Волк",
    weapon: "AWP",
    imageUrl: "https://images.unsplash.com/photo-1598094460151-5f0d0e0875dd",
    rarity: "blue"
  },
  {
    id: "2",
    name: "Лисий кейс",
    price: 299,
    animal: "Лиса",
    weapon: "Desert Eagle",
    imageUrl: "https://images.unsplash.com/photo-1616881545289-d04475acd4a1",
    rarity: "purple"
  },
  {
    id: "3",
    name: "Медвежий кейс",
    price: 399,
    animal: "Медведь",
    weapon: "M4A4",
    imageUrl: "https://images.unsplash.com/photo-1605092676920-8ac5ae26c5c6",
    rarity: "pink"
  },
  {
    id: "4",
    name: "Орлиный кейс",
    price: 499,
    animal: "Орел",
    weapon: "Knife",
    imageUrl: "https://images.unsplash.com/photo-1624032545726-d9aba115af35",
    rarity: "red"
  },
  {
    id: "5",
    name: "Золотой тигр",
    price: 999,
    animal: "Тигр",
    weapon: "AK-47",
    imageUrl: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5",
    rarity: "gold"
  },
];

const CaseSlider: React.FC = () => {
  const [activeCase, setActiveCase] = React.useState<Case>(cases[0]);

  return (
    <div className="py-12 bg-secondary/50 rounded-2xl overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Открывайте кейсы с животными</h1>
          <p className="text-gray-600">Уникальные скины с талисманами в виде животных</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-4">
            {cases.map((caseItem) => (
              <button
                key={caseItem.id}
                className={`w-full text-left p-4 border-2 rounded-xl transition-all ${
                  activeCase.id === caseItem.id 
                    ? `rarity-border-${caseItem.rarity} bg-white` 
                    : "border-transparent bg-white/50 hover:bg-white"
                }`}
                onClick={() => setActiveCase(caseItem)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cs-gray flex items-center justify-center shrink-0 overflow-hidden">
                    <img 
                      src={caseItem.imageUrl} 
                      alt={caseItem.animal}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{caseItem.name}</h3>
                    <p className="text-sm text-gray-500">{caseItem.animal} • {caseItem.weapon}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <span className="font-semibold">{caseItem.price} ₽</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 flex flex-col items-center">
            <div className={`relative w-72 h-72 mb-8 rounded-2xl border-4 rarity-border-${activeCase.rarity} overflow-hidden animate-float`}>
              <img 
                src={activeCase.imageUrl} 
                alt={activeCase.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 shine-gradient animate-shine"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold">{activeCase.name}</h3>
                <p className="text-white/80 text-sm">{activeCase.animal} • {activeCase.weapon}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="bg-cs-gold hover:bg-cs-gold/90 text-white">
                <Icon name="Briefcase" />
                <span>Открыть кейс</span>
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Eye" />
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
