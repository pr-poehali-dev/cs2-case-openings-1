
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Главная", path: "/", icon: "Home" },
  { name: "Апгрейд", path: "/upgrade", icon: "ArrowUp" },
  { name: "Контракты", path: "/contracts", icon: "FileText" },
  { name: "Профиль", path: "/profile", icon: "User" },
  { name: "Бонусы", path: "/bonuses", icon: "Gift" },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-cs-gamer-dark border-b border-cs-gamer-highlight sticky top-0 z-50">

  const menuItems = [
    { label: 'Кейсы', href: '/', icon: 'Package' },
    { label: 'Апгрейд', href: '/upgrade', icon: 'ArrowUpCircle' },
    { label: 'Контракты', href: '/contracts', icon: 'FileContract' },
    { label: 'Бонусы', href: '/bonus', icon: 'Gift' },
    { label: 'Профиль', href: '/profile', icon: 'User' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cs-gamer-highlight bg-cs-gamer-dark/95 backdrop-blur supports-[backdrop-filter]:bg-cs-gamer-dark/80">
      <div className="container flex h-16 items-center px-4">
        <Link to="/" className="mr-6 flex items-center gap-2 transition-opacity hover:opacity-80">
          <Icon name="Zap" className="h-6 w-6 text-cs-gamer-glow" />
          <span className="gamer-title text-xl hidden sm:inline-block">CS2 CASES</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 mx-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) => 
                cn(
                  "flex items-center gap-1 text-sm transition-colors hover:text-cs-gamer-glow relative py-2",
                  isActive 
                    ? "text-cs-gamer-glow after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-cs-gamer-glow"
                    : "text-muted-foreground hover:text-white"
                )
              }
            >
              <Icon name={item.icon as any} size={16} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-cs-gamer-highlight text-white hover:bg-cs-gamer-highlight hover:text-white">
            <Icon name="LogIn" className="mr-2 h-4 w-4" />
            Войти
          </Button>
          <Button variant="default" size="sm" className="cyber-button">
            <Icon name="Wallet" className="mr-2 h-4 w-4" />
            Пополнить
          </Button>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-2 md:hidden border-cs-gamer-highlight">
              <Icon name="Menu" className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-cs-gamer-dark border-cs-gamer-highlight">
            <SheetHeader className="mb-4">
              <SheetTitle className="gamer-title text-white">CS2 CASES</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center gap-2 p-2 rounded-lg text-white hover:bg-cs-gamer-highlight"
                >
                  <Icon name={item.icon as any} size={16} className="text-cs-gamer-glow" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );

                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-3 text-gray-300 hover:text-cs-gamer-glow p-3 transition-colors rounded-lg hover:bg-cs-gamer-highlight/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-10 h-10 rounded-lg bg-cs-gamer-dark flex items-center justify-center">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
