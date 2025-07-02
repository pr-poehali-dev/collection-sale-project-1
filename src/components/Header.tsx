import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              CollectArt
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Коллекции
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Магазин
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              О бренде
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-purple-100">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-purple-100">
              <Icon name="Heart" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-purple-100">
              <Icon name="User" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-purple-100">
              <Icon name="ShoppingBag" size={20} />
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Поддержка
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
