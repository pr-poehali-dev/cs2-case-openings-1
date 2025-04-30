
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import MainLayout from "@/layout/MainLayout";

const NotFound = () => {
  return (
    <MainLayout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold mb-4 text-cs-gold">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Страница не найдена</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Кажется, кейс, который вы ищете, не существует. 
            Возможно, он был открыт кем-то другим или никогда не существовал.
          </p>
          <Button asChild>
            <Link to="/">
              <Icon name="Home" />
              <span>Вернуться на главную</span>
            </Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
