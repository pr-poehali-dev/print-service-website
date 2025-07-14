import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Визитки",
      description: "Премиальные визитные карточки с различными покрытиями",
      icon: "CreditCard"
    },
    {
      title: "Буклеты",
      description: "Информационные буклеты для презентации услуг",
      icon: "BookOpen"
    },
    {
      title: "Флаеры",
      description: "Яркие рекламные листовки для акций и мероприятий",
      icon: "FileText"
    },
    {
      title: "Дизайн",
      description: "Создание уникального дизайна для вашего бренда",
      icon: "Palette"
    },
    {
      title: "Календари",
      description: "Настенные и настольные календари любых форматов",
      icon: "Calendar"
    },
    {
      title: "Постеры",
      description: "Крупноформатная печать для рекламы и оформления",
      icon: "Image"
    }
  ];

  const portfolio = [
    {
      title: "Визитки для IT-компании",
      category: "Визитки",
      image: "/img/2f4c49eb-39dd-4a50-87d7-eda8425d0000.jpg"
    },
    {
      title: "Рекламные буклеты",
      category: "Буклеты",
      image: "/img/2f4c49eb-39dd-4a50-87d7-eda8425d0000.jpg"
    },
    {
      title: "Постеры для мероприятий",
      category: "Постеры",
      image: "/img/2f4c49eb-39dd-4a50-87d7-eda8425d0000.jpg"
    },
    {
      title: "Корпоративные календари",
      category: "Календари",
      image: "/img/2f4c49eb-39dd-4a50-87d7-eda8425d0000.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Printer" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-secondary">PrintPro</h1>
            </div>
            <ul className="hidden md:flex space-x-8">
              <li><a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-primary transition-colors">Наши услуги</a></li>
              <li><a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Примеры работ</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a></li>
            </ul>
            <Button className="hidden md:inline-flex">Заказать</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-secondary mb-6">
            Профессиональная полиграфия<br />
            <span className="text-primary">высокого качества</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Создаем качественную полиграфическую продукцию для вашего бизнеса. 
            От визиток до крупноформатных постеров — воплощаем ваши идеи в жизнь.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">Посмотреть работы</Button>
            <Button size="lg" variant="outline" className="text-lg px-8">Заказать звонок</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр полиграфических услуг для решения любых задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Примеры работ</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Портфолио наших лучших проектов в области полиграфии
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>
                    Высококачественная печать с использованием современных технологий
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
          <p className="text-xl mb-8 opacity-90">
            Готовы обсудить ваш проект? Мы всегда рады помочь!
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="flex items-center space-x-3">
              <Icon name="Phone" size={24} />
              <span className="text-lg">+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Mail" size={24} />
              <span className="text-lg">info@printpro.ru</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="MapPin" size={24} />
              <span className="text-lg">Москва, ул. Принтерская, 1</span>
            </div>
          </div>
          <div className="mt-12">
            <Button size="lg" variant="outline" className="text-secondary bg-white hover:bg-gray-100">
              Заказать консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Printer" size={24} />
            <span className="text-xl font-bold">PrintPro</span>
          </div>
          <p className="text-gray-400">© 2024 PrintPro. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;