import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Визитки",
      description: "Премиальные визитные карточки с различными покрытиями",
      icon: "CreditCard",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Буклеты",
      description: "Информационные буклеты для презентации услуг",
      icon: "BookOpen",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Флаеры",
      description: "Яркие рекламные листовки для акций и мероприятий",
      icon: "FileText",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Дизайн",
      description: "Создание уникального дизайна для вашего бренда",
      icon: "Palette",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Календари",
      description: "Настенные и настольные календари любых форматов",
      icon: "Calendar",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Постеры",
      description: "Крупноформатная печать для рекламы и оформления",
      icon: "Image",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const portfolio = [
    {
      title: "Визитки для IT-компании",
      category: "Визитки",
      image: "/img/2f4c49eb-39dd-4a50-87d7-eda8425d0000.jpg",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Рекламные буклеты",
      category: "Буклеты",
      image: "/img/2f4c49eb-39dd-4a50-87d7-eda8425d0000.jpg",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Постеры для мероприятий",
      category: "Постеры",
      image: "/img/2f4c49eb-39dd-4a50-87d7-eda8425d0000.jpg",
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Корпоративные календари",
      category: "Календари",
      image: "/img/2f4c49eb-39dd-4a50-87d7-eda8425d0000.jpg",
      gradient: "from-green-600 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <Icon name="Printer" size={28} className="text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                PrintPro
              </h1>
            </div>
            <ul className="hidden md:flex space-x-8">
              <li><a href="#home" className="text-white/90 hover:text-purple-400 transition-colors font-medium">Главная</a></li>
              <li><a href="#services" className="text-white/90 hover:text-purple-400 transition-colors font-medium">Услуги</a></li>
              <li><a href="#portfolio" className="text-white/90 hover:text-purple-400 transition-colors font-medium">Портфолио</a></li>
              <li><a href="#contact" className="text-white/90 hover:text-purple-400 transition-colors font-medium">Контакты</a></li>
            </ul>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-purple-500/25">
              Заказать
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(120,119,198,0.3),_rgba(255,255,255,0))]"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Полиграфия
              </span>
              <br />
              <span className="text-white">нового поколения</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Создаем яркую и запоминающуюся полиграфию с использованием современных технологий. 
              Превращаем ваши идеи в произведения искусства.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-10 py-6 shadow-2xl shadow-purple-500/30 transform hover:scale-105 transition-all duration-300">
                Смотреть портфолио
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-6 backdrop-blur-sm">
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Наши услуги
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              Современные решения для всех ваших полиграфических задач
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group bg-black/40 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105">
                <CardHeader className="text-center pb-6">
                  <div className={`mx-auto w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon name={service.icon} size={36} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-white/70 text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Портфолио
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              Яркие примеры наших лучших работ
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {portfolio.map((item, index) => (
              <Card key={index} className="group bg-black/40 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className={`bg-gradient-to-r ${item.gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80 text-lg">
                      Инновационный подход к полиграфии с использованием передовых технологий
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-orange-900/50"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Свяжитесь с нами
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            Готовы воплотить ваши самые смелые идеи в жизнь!
          </p>
          
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-12">
            <div className="flex items-center space-x-4 bg-black/30 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/10">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <span className="text-lg text-white font-medium">+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-4 bg-black/30 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/10">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <span className="text-lg text-white font-medium">info@printpro.ru</span>
            </div>
            <div className="flex items-center space-x-4 bg-black/30 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/10">
              <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <span className="text-lg text-white font-medium">Москва, ул. Принтерская, 1</span>
            </div>
          </div>
          
          <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-lg px-12 py-6 shadow-2xl shadow-orange-500/30 transform hover:scale-105 transition-all duration-300">
            Заказать консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-lg border-t border-white/10 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
              <Icon name="Printer" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              PrintPro
            </span>
          </div>
          <p className="text-white/60 text-lg">© 2024 PrintPro. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;