
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
    username: "WolfHunter",
    avatar: "https://images.unsplash.com/photo-1598094460151-5f0d0e0875dd",
    skinName: "Волчий клык",
    weaponName: "AWP",
    price: 1299,
    date: "2 мин назад",
    rarity: "red"
  },
  {
    id: "2",
    username: "FoxyLady",
    avatar: "https://images.unsplash.com/photo-1616881545289-d04475acd4a1",
    skinName: "Лисья хитрость",
    weaponName: "Desert Eagle",
    price: 890,
    date: "5 мин назад",
    rarity: "pink"
  },
  {
    id: "3",
    username: "BearForce",
    avatar: "https://images.unsplash.com/photo-1605092676920-8ac5ae26c5c6",
    skinName: "Медвежий рык",
    weaponName: "M4A4",
    price: 560,
    date: "10 мин назад",
    rarity: "purple"
  },
  {
    id: "4",
    username: "EagleEye",
    avatar: "https://images.unsplash.com/photo-1624032545726-d9aba115af35",
    skinName: "Орлиный взор",
    weaponName: "Karambit",
    price: 12500,
    date: "15 мин назад",
    rarity: "gold"
  },
  {
    id: "5",
    username: "TigerStripe",
    avatar: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5",
    skinName: "Тигриная атака",
    weaponName: "AK-47",
    price: 750,
    date: "20 мин назад",
    rarity: "pink"
  },
  {
    id: "6",
    username: "CrocoStyle",
    avatar: "https://images.unsplash.com/photo-1471099042378-6a89900ed8ee",
    skinName: "Крокодилья кожа",
    weaponName: "Glock-18",
    price: 340,
    date: "25 мин назад",
    rarity: "blue"
  },
];

const RecentDrops: React.FC = () => {
  return (
    <div className="py-16 container mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Недавние выигрыши</h2>
        <a href="#" className="text-primary flex items-center gap-1 hover:underline">
          <span>Все выигрыши</span>
          <Icon name="ChevronRight" size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {drops.map((drop) => (
          <div 
            key={drop.id} 
            className={cn(
              "bg-white rounded-xl shadow-sm overflow-hidden border-2 transition-transform hover:-translate-y-1",
              {
                "rarity-border-blue": drop.rarity === "blue",
                "rarity-border-purple": drop.rarity === "purple",
                "rarity-border-pink": drop.rarity === "pink",
                "rarity-border-red": drop.rarity === "red",
                "rarity-border-gold": drop.rarity === "gold",
              }
            )}
          >
            <div className="relative h-48 bg-gray-100">
              <img 
                src={drop.avatar} 
                alt={drop.username} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-white font-medium">{drop.skinName}</h3>
                    <p className="text-white/80 text-sm">{drop.weaponName}</p>
                  </div>
                  <div className="bg-black/40 rounded-full px-3 py-1">
                    <span className="text-white font-medium">{drop.price} ₽</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden">
                  <img 
                    src={drop.avatar} 
                    alt={drop.username} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium">{drop.username}</span>
              </div>
              <span className="text-gray-500 text-sm">{drop.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentDrops;
