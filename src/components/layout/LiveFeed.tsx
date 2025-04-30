
import React, { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface LiveDrop {
  id: string;
  username: string;
  skinName: string;
  weaponName: string;
  rarity: "blue" | "purple" | "pink" | "red" | "gold";
  timestamp: number;
}

// Имитация данных живой ленты
const initialLiveDrops: LiveDrop[] = [
  {
    id: "l1",
    username: "xScope",
    skinName: "Neo-Noir",
    weaponName: "USP-S",
    rarity: "purple",
    timestamp: Date.now() - 5000,
  },
  {
    id: "l2",
    username: "FlashMaster",
    skinName: "Asiimov",
    weaponName: "AWP",
    rarity: "pink",
    timestamp: Date.now() - 15000,
  },
  {
    id: "l3",
    username: "BoomHeadshot",
    skinName: "Fade",
    weaponName: "Glock-18",
    rarity: "pink",
    timestamp: Date.now() - 30000,
  },
  {
    id: "l4",
    username: "GoldNova",
    skinName: "Hyper Beast",
    weaponName: "M4A1-S",
    rarity: "red",
    timestamp: Date.now() - 45000,
  },
  {
    id: "l5",
    username: "TapTapBang",
    skinName: "Dragon Lore",
    weaponName: "AWP",
    rarity: "gold",
    timestamp: Date.now() - 60000,
  },
  {
    id: "l6",
    username: "SmokeGrenader",
    skinName: "Vulcan",
    weaponName: "AK-47",
    rarity: "red",
    timestamp: Date.now() - 75000,
  },
  {
    id: "l7",
    username: "NinjaDefuser",
    skinName: "Printstream",
    weaponName: "Desert Eagle",
    rarity: "pink",
    timestamp: Date.now() - 90000,
  },
  {
    id: "l8",
    username: "ClutchKing",
    skinName: "Cyrex",
    weaponName: "M4A1-S",
    rarity: "purple",
    timestamp: Date.now() - 105000,
  },
];

const LiveFeed: React.FC = () => {
  const [liveDrops, setLiveDrops] = useState<LiveDrop[]>(initialLiveDrops);
  
  // Имитация получения новых данных
  useEffect(() => {
    const newDropsInterval = setInterval(() => {
      // Новые скины, которые могут выпасть
      const possibleSkins = [
        { name: "Asiimov", weapon: "AWP", rarity: "pink" as const },
        { name: "Dragon Lore", weapon: "AWP", rarity: "gold" as const },
        { name: "Hyper Beast", weapon: "M4A1-S", rarity: "red" as const },
        { name: "Vulcan", weapon: "AK-47", rarity: "red" as const },
        { name: "Neo-Noir", weapon: "USP-S", rarity: "purple" as const },
        { name: "Printstream", weapon: "Desert Eagle", rarity: "pink" as const },
        { name: "Fade", weapon: "Glock-18", rarity: "pink" as const },
        { name: "Cyrex", weapon: "M4A1-S", rarity: "purple" as const },
        { name: "Doppler", weapon: "Karambit", rarity: "red" as const },
        { name: "Gamma Doppler", weapon: "M9 Bayonet", rarity: "gold" as const },
        { name: "Bullet Rain", weapon: "M4A4", rarity: "purple" as const },
        { name: "Redline", weapon: "AK-47", rarity: "pink" as const },
      ];
      
      // Пользователи
      const possibleUsers = [
        "xScope", "FlashMaster", "BoomHeadshot", "GoldNova", "TapTapBang",
        "SmokeGrenader", "NinjaDefuser", "ClutchKing", "AceSniper", "SprayControl",
        "BunnyHopper", "WallBanger", "RushBPlayer", "HeadshotMachine", "AWPGod"
      ];
      
      const randomSkin = possibleSkins[Math.floor(Math.random() * possibleSkins.length)];
      const randomUser = possibleUsers[Math.floor(Math.random() * possibleUsers.length)];
      
      const newDrop: LiveDrop = {
        id: `new-${Date.now()}`,
        username: randomUser,
        skinName: randomSkin.name,
        weaponName: randomSkin.weapon,
        rarity: randomSkin.rarity,
        timestamp: Date.now(),
      };
      
      setLiveDrops(prev => [newDrop, ...prev.slice(0, 7)]);
    }, 8000); // Новый предмет каждые 8 секунд
    
    return () => clearInterval(newDropsInterval);
  }, []);
  
  return (
    <div className="bg-cs-gamer-dark border-y border-cs-gamer-highlight py-2 overflow-hidden">
      <div className="flex items-center animate-marquee">
        {liveDrops.map((drop) => (
          <div 
            key={drop.id} 
            className={cn(
              "flex items-center mx-4 px-3 py-1 rounded-md transition-all", 
              "border border-cs-gamer-highlight bg-cs-gamer-secondary/30",
              "hover:bg-cs-gamer-highlight/50 cursor-pointer"
            )}
          >
            <Icon name="Zap" size={14} className={cn(
              "mr-2",
              {
                "text-cs-blue": drop.rarity === "blue",
                "text-cs-purple": drop.rarity === "purple",
                "text-cs-pink": drop.rarity === "pink",
                "text-cs-red": drop.rarity === "red",
                "text-cs-gold animate-pulse": drop.rarity === "gold",
              }
            )} />
            
            <span className="font-bold text-white">{drop.username}</span>
            <Icon name="ArrowRight" size={14} className="mx-2 text-cs-gamer-glow" />
            
            <span className={cn(
              "font-medium",
              {
                "text-cs-blue": drop.rarity === "blue",
                "text-cs-purple": drop.rarity === "purple",
                "text-cs-pink": drop.rarity === "pink",
                "text-cs-red": drop.rarity === "red",
                "text-cs-gold": drop.rarity === "gold",
              }
            )}>
              {drop.skinName}
            </span>
            <span className="text-gray-400 ml-1">({drop.weaponName})</span>
            
            {drop.rarity === "gold" && (
              <span className="ml-2 text-xs px-2 py-0.5 bg-cs-gamer-glow/20 border border-cs-gold rounded-full text-cs-gold animate-pulse">
                ЛЕГЕНДА!
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveFeed;
