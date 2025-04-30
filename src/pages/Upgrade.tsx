
import React, { useState } from "react";
import MainLayout from "@/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface Skin {
  id: string;
  name: string;
  weapon: string;
  price: number;
  imageUrl: string;
  rarity: "blue" | "purple" | "pink" | "red" | "gold";
}

// Имитация данных инвентаря пользователя
const userInventory: Skin[] = [
  {
    id: "inv1",
    name: "Asiimov",
    weapon: "AWP",
    price: 899,
    imageUrl: "https://images.unsplash.com/photo-1605092676920-8ac5ae26c5c6",
    rarity: "pink"
  },
  {
    id: "inv2",
    name: "Neo-Noir",
    weapon: "USP-S",
    price: 399,
    imageUrl: "https://images.unsplash.com/photo-1624032545726-d9aba115af35",
    rarity: "purple"
  },
  {
    id: "inv3",
    name: "Cyrex",
    weapon: "M4A1-S",
    price: 250,
    imageUrl: "https://images.unsplash.com/photo-1605092676920-8ac5ae26c5c6",
    rarity: "purple"
  },
  {
    id: "inv4",
    name: "Redline",
    weapon: "AK-47",
    price: 550,
    imageUrl: "https://images.unsplash.com/photo-1616881545289-d04475acd4a1",
    rarity: "pink"
  },
  {
    id: "inv5",
    name: "Printstream",
    weapon: "Desert Eagle",
    price: 350,
    imageUrl: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5",
    rarity: "blue"
  },
];

// Потенциальные улучшения
const possibleUpgrades: Skin[] = [
  {
    id: "up1",
    name: "Dragon Lore",
    weapon: "AWP",
    price: 1999,
    imageUrl: "https://images.unsplash.com/photo-1598094460151-5f0d0e0875dd",
    rarity: "gold"
  },
  {
    id: "up2",
    name: "Hyper Beast",
    weapon: "M4A1-S",
    price: 1100,
    imageUrl: "https://images.unsplash.com/photo-1624032545726-d9aba115af35",
    rarity: "red"
  },
  {
    id: "up3",
    name: "Crimson Web",
    weapon: "Butterfly Knife",
    price: 2999,
    imageUrl: "https://images.unsplash.com/photo-1616881545289-d04475acd4a1",
    rarity: "red"
  },
  {
    id: "up4",
    name: "Doppler",
    weapon: "Karambit",
    price: 1800,
    imageUrl: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5",
    rarity: "red"
  },
  {
    id: "up5",
    name: "Vulcan",
    weapon: "AK-47",
    price: 1300,
    imageUrl: "https://images.unsplash.com/photo-1605092676920-8ac5ae26c5c6",
    rarity: "red"
  },
];

const Upgrade: React.FC = () => {
  const [selectedSkin, setSelectedSkin] = useState<Skin | null>(null);
  const [targetSkin, setTargetSkin] = useState<Skin | null>(null);
  const [upgradeChance, setUpgradeChance] = useState<number>(0);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [rollResult, setRollResult] = useState<"success" | "fail" | null>(null);
  
  // Расчет шанса апгрейда при выборе скинов
  React.useEffect(() => {
    if (selectedSkin && targetSkin) {
      // Упрощенная формула расчета шанса: (цена выбранного / цена целевого) * 0.85
      const chance = Math.min(Math.round((selectedSkin.price / targetSkin.price) * 85), 90);
      setUpgradeChance(chance);
    } else {
      setUpgradeChance(0);
    }
  }, [selectedSkin, targetSkin]);
  
  const handleSelectSkin = (skin: Skin) => {
    setSelectedSkin(skin);
    setRollResult(null);
  };
  
  const handleSelectTargetSkin = (skin: Skin) => {
    setTargetSkin(skin);
    setRollResult(null);
  };
  
  const handleUpgrade = () => {
    if (!selectedSkin || !targetSkin || upgradeChance <= 0) return;
    
    setIsRolling(true);
    
    // Имитация прокрутки
    setTimeout(() => {
      // Определяем успех или неудачу на основе шанса
      const isSuccess = Math.random() * 100 <= upgradeChance;
      setRollResult(isSuccess ? "success" : "fail");
      setIsRolling(false);
    }, 3000);
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="gamer-title text-5xl mb-4">
            АПГРЕЙД СКИНОВ CS2
          </h1>
          <p className="text-gray-400 text-lg">Улучшай свои скины и получай редкие предметы!</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Левая колонка - Выбор предмета для апгрейда */}
          <div className="bg-cs-gamer-secondary/40 border border-cs-gamer-highlight rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">ТВОЙ СКИН</h2>
              <span className="text-gray-400 text-sm">{userInventory.length} предметов</span>
            </div>
            
            <Tabs defaultValue="inventory" className="w-full">
              <TabsList className="w-full mb-4">
                <TabsTrigger value="inventory" className="w-full">Инвентарь</TabsTrigger>
                <TabsTrigger value="history" className="w-full">История</TabsTrigger>
              </TabsList>
              
              <TabsContent value="inventory" className="space-y-4">
                {userInventory.map((skin) => (
                  <div 
                    key={skin.id}
                    onClick={() => handleSelectSkin(skin)}
                    className={cn(
                      "relative p-3 border-2 rounded-lg cursor-pointer transition-all",
                      selectedSkin?.id === skin.id 
                        ? `border-cs-gamer-glow bg-cs-gamer-highlight/50` 
                        : "border-cs-gamer-highlight/40 bg-cs-gamer-dark hover:bg-cs-gamer-highlight/30",
                      {
                        "opacity-50": selectedSkin && selectedSkin.id !== skin.id,
                      }
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-lg flex items-center justify-center shrink-0 overflow-hidden border-2 rarity-border-${skin.rarity}`}>
                        <img 
                          src={skin.imageUrl} 
                          alt={skin.weapon}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{skin.name}</h3>
                        <p className={`text-sm text-${skin.rarity === "gold" ? "cs-gold" : skin.rarity === "red" ? "cs-red" : skin.rarity === "pink" ? "cs-pink" : skin.rarity === "purple" ? "cs-purple" : "cs-blue"}`}>
                          {skin.weapon}
                        </p>
                      </div>
                      <div className="ml-auto text-right">
                        <span className="font-bold text-white">{skin.price} ₽</span>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="history" className="h-64 flex items-center justify-center border border-cs-gamer-highlight/30 rounded-lg">
                <div className="text-center text-gray-400">
                  <Icon name="History" size={36} className="mx-auto mb-2 opacity-50" />
                  <p>История апгрейдов пуста</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Средняя колонка - Панель управления и отображение шансов */}
          <div className="flex flex-col gap-6">
            {/* Отображение выбранного предмета и целевого */}
            <div className="bg-cs-gamer-dark/80 border border-cs-gamer-highlight rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-cs-gamer-highlight flex items-center justify-center">
                  {selectedSkin ? (
                    <img src={selectedSkin.imageUrl} alt={selectedSkin.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-gray-500 text-center">
                      <Icon name="Plus" size={24} className="mx-auto mb-2" />
                      <span className="text-xs">Выбери скин</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col items-center">
                  <Icon name="ArrowRight" size={36} className="text-cs-gamer-glow mb-2" />
                  <span className={cn(
                    "text-2xl font-bold",
                    upgradeChance > 70 ? "text-green-500" : 
                    upgradeChance > 40 ? "text-yellow-400" : 
                    "text-red-500"
                  )}>
                    {upgradeChance}%
                  </span>
                </div>
                
                <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-cs-gamer-highlight flex items-center justify-center">
                  {targetSkin ? (
                    <img src={targetSkin.imageUrl} alt={targetSkin.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-gray-500 text-center">
                      <Icon name="Plus" size={24} className="mx-auto mb-2" />
                      <span className="text-xs">Выбери цель</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Колесо прокрутки и панель с результатом */}
            <div className="flex-grow bg-cs-gamer-dark/80 border border-cs-gamer-highlight rounded-xl p-6 flex flex-col items-center justify-center">
              {isRolling ? (
                <div className="text-center">
                  <div className="spinner w-24 h-24 border-4 border-t-cs-gamer-glow rounded-full mx-auto animate-spin mb-4"></div>
                  <p className="text-white font-bold text-xl animate-pulse">ПРОКРУЧИВАЕМ...</p>
                </div>
              ) : rollResult ? (
                <div className="text-center">
                  <div className={cn(
                    "mb-4 w-24 h-24 rounded-full mx-auto flex items-center justify-center",
                    rollResult === "success" ? "bg-green-500/20 border-2 border-green-500" : "bg-red-500/20 border-2 border-red-500"
                  )}>
                    <Icon 
                      name={rollResult === "success" ? "CheckCircle" : "XCircle"} 
                      size={48} 
                      className={rollResult === "success" ? "text-green-500" : "text-red-500"} 
                    />
                  </div>
                  <p className="text-white font-bold text-xl">
                    {rollResult === "success" ? "УСПЕШНЫЙ АПГРЕЙД!" : "НЕУДАЧА!"}
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-full h-6 rounded-full bg-cs-gamer-dark overflow-hidden mb-4 border border-cs-gamer-highlight">
                    <div 
                      className={cn(
                        "h-full",
                        upgradeChance > 70 ? "bg-green-500" : 
                        upgradeChance > 40 ? "bg-yellow-400" : 
                        "bg-red-500"
                      )}
                      style={{ width: `${upgradeChance}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-400 mb-6">Выбери предметы для апгрейда</p>
                </div>
              )}
              
              <Button 
                size="lg" 
                onClick={handleUpgrade}
                disabled={!selectedSkin || !targetSkin || isRolling}
                className={cn(
                  "cyber-button group mt-4 w-full",
                  (!selectedSkin || !targetSkin) && "opacity-50 cursor-not-allowed"
                )}
              >
                <Icon name="Zap" className="mr-2 group-hover:animate-pulse" />
                <span className="group-hover:animate-pulse">
                  {isRolling ? "ПРОКРУЧИВАЕМ..." : "АПГРЕЙД"}
                </span>
              </Button>
            </div>
          </div>
          
          {/* Правая колонка - Выбор целевого предмета */}
          <div className="bg-cs-gamer-secondary/40 border border-cs-gamer-highlight rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">ПОЛУЧИШЬ</h2>
              <span className="text-gray-400 text-sm">{possibleUpgrades.length} предметов</span>
            </div>
            
            <div className="space-y-4">
              {possibleUpgrades.map((skin) => (
                <div 
                  key={skin.id}
                  onClick={() => handleSelectTargetSkin(skin)}
                  className={cn(
                    "relative p-3 border-2 rounded-lg cursor-pointer transition-all",
                    targetSkin?.id === skin.id 
                      ? `border-cs-gamer-glow bg-cs-gamer-highlight/50` 
                      : "border-cs-gamer-highlight/40 bg-cs-gamer-dark hover:bg-cs-gamer-highlight/30",
                    {
                      "opacity-50": targetSkin && targetSkin.id !== skin.id,
                    }
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center shrink-0 overflow-hidden border-2 rarity-border-${skin.rarity}`}>
                      <img 
                        src={skin.imageUrl} 
                        alt={skin.weapon}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{skin.name}</h3>
                      <p className={`text-sm text-${skin.rarity === "gold" ? "cs-gold" : skin.rarity === "red" ? "cs-red" : skin.rarity === "pink" ? "cs-pink" : skin.rarity === "purple" ? "cs-purple" : "cs-blue"}`}>
                        {skin.weapon}
                      </p>
                    </div>
                    <div className="ml-auto text-right">
                      <span className="font-bold text-white">{skin.price} ₽</span>
                    </div>
                  </div>
                  
                  {selectedSkin && (
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-xs text-gray-400">Шанс:</span>
                      <span className={cn(
                        "text-xs font-bold",
                        (selectedSkin.price / skin.price) * 85 > 70 ? "text-green-500" : 
                        (selectedSkin.price / skin.price) * 85 > 40 ? "text-yellow-400" : 
                        "text-red-500"
                      )}>
                        {Math.min(Math.round((selectedSkin.price / skin.price) * 85), 90)}%
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Upgrade;
