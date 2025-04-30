
import React from "react";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";

interface Drop {
  id: string;
  username: string;
  avatar: string;
  skinName: string;
  weaponName: string;
  price: number;
  date: string;
  rarity: "blue" | "purple" | "pink" | "red" | "gold";
}

const drops: Drop[] = [
  {
    id: "1",
    username: "HEADSH0T",
    avatar: "https://images.unsplash.com/photo-1598094460151-5f0d0e0875dd",
    skinName: "Dragon Lore",
    weaponName: "AWP",
    price: 129900,
    date: "2 мин назад",
    rarity: "gold"
  },
  {
    id: "2",
    username: "GodLike95",
    avatar: "https://images.unsplash.com/photo-1616881545289-d04475acd4a1",
    skinName: "Crimson Web",
    weaponName: "Bayonet",
    price: 89000,
    date: "5 мин назад",
    rarity: "red"
  },
  {
    id: "3",
    username: "Pr0_Pl4yer",
    avatar: "https://images.unsplash.com/photo-1605092676920-8ac5ae26c5c6",
    skinName: "Asiimov",
    weaponName: "M4A4",
    price: 56000,
    date: "10 мин назад",
    rarity: "pink"
  },
  {
    id: "4",
    username: "H3adHunt3r",
    avatar: "https://images.unsplash.com/photo-1624032545726-d9aba115af35",
    skinName: "Neo-Noir",
    weaponName: "USP-S",
    price: 12500,
    date: "15 мин назад",
    rarity: "purple"
  },
  {
    id: "5",
    username: "xXDarKLorDXx",
    avatar: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5",
    skinName: "Fade",
    weaponName: "Glock-18",
    price: 7500,
    date: "20 мин назад",
    rarity: "pink"
  },
  {
    id: "6",
    username: "SniperElite",
    avatar: "https://images.unsplash.com/photo-1471099042378-6a89900ed8ee",
    skinName: "Printstream",
    weaponName: "Desert Eagle",
    price: 3400,
    date: "25 мин назад",
    rarity: "blue"
  },
];

const RecentDrops: React.FC = () => {
  return (
    <div className="py-16 container mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold gamer-title">ЛЕГЕНДАРНЫЕ ВЫИГРЫШИ</h2>
        <a href="#" className="text-cs-gamer-glow flex items-center gap-1 hover:underline group transition-all">
          <span>Все выигрыши</span>
          <Icon name="ChevronRight" size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {drops.map((drop) => (
          <div 
            key={drop.id} 
            className={cn(
              "cyber-card hover:-translate-y-2 transition-all duration-300",
              {
                "rarity-border-blue": drop.rarity === "blue",
                "rarity-border-purple": drop.rarity === "purple",
                "rarity-border-pink": drop.rarity === "pink",
                "rarity-border-red": drop.rarity === "red",
                "rarity-border-gold": drop.rarity === "gold",
              }
            )}
          >
            <div className="absolute top-2 right-2 z-10 bg-black/60 text-white font-bold rounded-full px-3 py-1 text-sm flex items-center">
              <Icon name="Timer" size={14} className="mr-1" />
              {drop.date}
            </div>
            
            <div className="relative h-48 bg-cs-gamer-dark overflow-hidden">
              <img 
                src={drop.avatar} 
                alt={drop.username} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              
              {/* Гексагональная сетка поверх изображения */}
              <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OSI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNEI1M0ZGIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik00MyAxdjE2bTAtOC0zNy42IDIxLjVtMzctMTMuNSAzNy42IDIxLjVtLTc1LjIgMCAzNy42IDIxLjVtMC00MyAzNy42IDIxLjVtLTM3LjYgMjEuNXYxNiIvPjwvZz48L3N2Zz4=')]"></div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className={`font-bold text-xl ${drop.rarity === "gold" ? "text-cs-gold" : drop.rarity === "red" ? "text-cs-red" : drop.rarity === "pink" ? "text-cs-pink" : drop.rarity === "purple" ? "text-cs-purple" : "text-cs-blue"}`}>
                      {drop.skinName}
                    </h3>
                    <p className="text-white text-sm">{drop.weaponName}</p>
                  </div>
                  <div className="bg-cs-gamer-dark/80 rounded-md px-3 py-1 border border-cs-gamer-glow">
                    <span className="text-white font-bold">{drop.price.toLocaleString()} ₽</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-cs-gamer-highlight overflow-hidden border border-cs-gamer-glow">
                  <img 
                    src={drop.avatar} 
                    alt={drop.username} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="font-bold text-white">{drop.username}</span>
                  <div className="flex items-center text-xs text-gray-400">
                    <Icon name="Trophy" size={12} className="mr-1 text-cs-gold" />
                    <span>Профи</span>
                  </div>
                </div>
              </div>
              
              <button className="text-cs-gamer-glow hover:text-white transition-colors">
                <Icon name="ExternalLink" size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentDrops;
