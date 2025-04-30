
import React from "react";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Package",
    title: "Уникальные кейсы",
    description: "Каждый кейс содержит скины, связанные с определенным животным."
  },
  {
    icon: "Sparkles",
    title: "Редкие выигрыши",
    description: "Получайте скины разной редкости, от обычных до ножей."
  },
  {
    icon: "ArrowUpRight",
    title: "Апгрейд предметов",
    description: "Объединяйте несколько предметов, чтобы получить более редкий скин."
  },
  {
    icon: "FileText",
    title: "Контракты обмена",
    description: "Обменивайте ненужные предметы на более ценные."
  },
  {
    icon: "Gift",
    title: "Ежедневные бонусы",
    description: "Получайте бесплатные кейсы и бонусы каждый день."
  },
  {
    icon: "Lock",
    title: "Безопасные сделки",
    description: "Ваши скины и деньги находятся под надежной защитой."
  }
];

const FeatureSection: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">Почему выбирают нас</h2>
          <p className="text-gray-600">Откройте мир уникальных скинов с животными-талисманами</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-secondary rounded-xl p-6 transition-all hover:shadow-md hover:bg-white">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-cs-blue/10 text-cs-blue mb-4">
                <Icon name={feature.icon} size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
