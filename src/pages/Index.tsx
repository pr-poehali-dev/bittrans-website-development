import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Bittrans</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#fleet" className="text-gray-700 hover:text-primary transition-colors">Автопарк</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-secondary">
              Запросить расчет
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Bittrans: Надежные международные грузоперевозки по Европе
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Ваш груз под надежной защитой. Профессиональные решения FTL транспорта с 2022 года.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Запросить бесплатный расчет
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="Phone" className="mr-2" size={20} />
                  +371 22 389 812
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/b4176bc9-f0aa-4d0f-a49a-a1520f0418a0.jpg" 
                alt="Современный грузовик Bittrans" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр логистических решений для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-white" />
                </div>
                <CardTitle>Международные FTL перевозки</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Полная загрузка автомобилей по всей Европе. Безопасная доставка паллетированных грузов и промышленных материалов.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Globe" size={32} className="text-white" />
                </div>
                <CardTitle>Европейские маршруты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Регулярные рейсы по Прибалтике, Скандинавии и Центральной Европе. Опытные водители знают все особенности маршрутов.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <CardTitle>Полная ответственность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Полное страхование груза и материальная ответственность. Отслеживание GPS в реальном времени на всем маршруте.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Почему выбирают Bittrans?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Современный автопарк</h3>
                    <p className="text-muted-foreground">
                      Грузовики стандарта Euro-6 с полуприцепами-тентами объемом 92 м³ и грузоподъемностью до 24 тонн.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Clock" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Пунктуальность</h3>
                    <p className="text-muted-foreground">
                      Строго соблюдаем сроки доставки. GPS-мониторинг позволяет отслеживать местоположение груза 24/7.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Users" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Опытная команда</h3>
                    <p className="text-muted-foreground">
                      Профессиональные водители с многолетним опытом международных перевозок и знанием европейских дорог.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/4ea1a289-282f-4350-9fb6-6d31b29ca651.jpg" 
                alt="Логистический центр Bittrans" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наш автопарк</h2>
            <p className="text-xl text-muted-foreground">
              Современная техника для безопасной перевозки ваших грузов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-primary to-secondary p-8 flex items-center justify-center">
                <Icon name="Truck" size={64} className="text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Тягачи Euro-6</h3>
                <p className="text-muted-foreground">
                  Современные тягачи стандарта Euro-6 с низким уровнем выбросов и высокой топливной эффективностью.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-secondary to-accent p-8 flex items-center justify-center">
                <Icon name="Container" size={64} className="text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Полуприцепы-тенты</h3>
                <p className="text-muted-foreground">
                  Полуприцепы-тенты объемом 92 м³ и грузоподъемностью до 24 тонн для защищенной перевозки грузов.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-accent to-primary p-8 flex items-center justify-center">
                <Icon name="MapPin" size={64} className="text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">GPS-мониторинг</h3>
                <p className="text-muted-foreground">
                  Все автомобили оснащены системами GPS-мониторинга для контроля местоположения в режиме реального времени.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">О компании Bittrans</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Sabiedrība ar ierobežotu atbildību "Bittrans" - надежный партнер в сфере международных автомобильных грузоперевозок. 
              С 2022 года мы предоставляем качественные логистические услуги, обеспечивая безопасную и своевременную доставку грузов по всей Европе.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <p className="text-muted-foreground">Года опыта</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">Стран Европы</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <p className="text-muted-foreground">Выполненных рейсов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Quote Form */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Получите расчет стоимости и консультацию по вашему грузу
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+371 22 389 812</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@bittrans.lv</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">
                      "Aviators 32", Dzērumi, Ķekavas pag.,<br/>
                      Ķekavas nov., LV-2113, Latvia
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <p className="text-sm text-muted-foreground">
                  <strong>SIA "Bittrans"</strong><br/>
                  Регистрационный номер: 50203397891<br/>
                  НДС номер: LV50203397891
                </p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Запрос расчета стоимости</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Компания</label>
                    <Input placeholder="Название компании" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="email@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input placeholder="+371 xxxxxxxx" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Откуда</label>
                    <Input placeholder="Город отправления" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Куда</label>
                    <Input placeholder="Город назначения" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Детали груза</label>
                  <Textarea 
                    placeholder="Вес, габариты, описание груза..."
                    className="min-h-[100px]"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-secondary" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить запрос
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Bittrans</div>
              <p className="text-gray-400">
                Надежные международные грузоперевозки по всей Европе с 2022 года.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>FTL перевозки</li>
                <li>Европейские маршруты</li>
                <li>GPS мониторинг</li>
                <li>Страхование груза</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Наш автопарк</li>
                <li>Контакты</li>
                <li>Карьера</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p>+371 22 389 812</p>
                <p>info@bittrans.lv</p>
                <p>LV-2113, Latvia</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SIA "Bittrans". Все права защищены. Рег. №50203397891</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;