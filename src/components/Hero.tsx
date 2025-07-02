import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
          Уникальные коллекции
          <br />
          для особенных людей
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Откройте мир эксклюзивных украшений, предметов искусства и
          коллекционных игрушек. Каждая вещь — это история, которая ждёт своего
          владельца.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3"
          >
            <Icon name="Sparkles" size={20} className="mr-2" />
            Смотреть коллекции
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3"
          >
            <Icon name="Play" size={20} className="mr-2" />О наших коллекциях
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-purple-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Gem" size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Украшения</h3>
            <p className="text-gray-600">
              Авторские украшения и изысканная бижутерия
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-purple-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Palette" size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Искусство</h3>
            <p className="text-gray-600">
              Предметы искусства и декоративные элементы
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-purple-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Gamepad2" size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Коллекции</h3>
            <p className="text-gray-600">
              Редкие игрушки и коллекционные предметы
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
