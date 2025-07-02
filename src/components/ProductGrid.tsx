import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Винтажное кольцо «Звездная пыль»",
      category: "Украшения",
      price: "12 500 ₽",
      image: "/placeholder.svg",
      liked: false,
    },
    {
      id: 2,
      name: "Керамическая ваза «Рассвет»",
      category: "Искусство",
      price: "8 900 ₽",
      image: "/placeholder.svg",
      liked: true,
    },
    {
      id: 3,
      name: "Коллекционная фигурка «Дракон»",
      category: "Коллекции",
      price: "15 200 ₽",
      image: "/placeholder.svg",
      liked: false,
    },
    {
      id: 4,
      name: "Серебряные серьги «Лунный свет»",
      category: "Украшения",
      price: "7 800 ₽",
      image: "/placeholder.svg",
      liked: false,
    },
    {
      id: 5,
      name: "Картина маслом «Абстракция»",
      category: "Искусство",
      price: "25 000 ₽",
      image: "/placeholder.svg",
      liked: true,
    },
    {
      id: 6,
      name: "Антикварная музыкальная шкатулка",
      category: "Коллекции",
      price: "18 500 ₽",
      image: "/placeholder.svg",
      liked: false,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Украшения":
        return "bg-purple-100 text-purple-700";
      case "Искусство":
        return "bg-pink-100 text-pink-700";
      case "Коллекции":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Популярные товары
          </h2>
          <p className="text-xl text-gray-600">
            Самые любимые предметы наших коллекционеров
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-4 right-4 ${
                    product.liked
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-white/80 text-gray-600 hover:bg-white"
                  } backdrop-blur-sm transition-all duration-200`}
                >
                  <Icon
                    name="Heart"
                    size={20}
                    className={product.liked ? "fill-current" : ""}
                  />
                </Button>
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(product.category)}`}
                >
                  {product.category}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />В
                    корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3"
          >
            <Icon name="Grid3x3" size={20} className="mr-2" />
            Посмотреть все товары
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
