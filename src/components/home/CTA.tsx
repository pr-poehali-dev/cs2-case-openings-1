
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTA: React.FC = () => {
  return (
    <div className="py-12 bg-secondary/50 rounded-2xl my-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Начните открывать кейсы прямо сейчас</h2>
          <p className="text-gray-600 mb-8">
            Получите бонус 100 ₽ на первое пополнение и ежедневные бесплатные кейсы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cs-gold hover:bg-cs-gold/90 text-white">
              <Icon name="Briefcase" />
              <span>Открыть кейс</span>
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Plus" />
              <span>Пополнить баланс</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
