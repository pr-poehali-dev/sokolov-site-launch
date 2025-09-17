import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Sokolov</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">Главная</a>
              <a href="#portfolio" className="text-foreground/80 hover:text-primary transition-colors">Портфолио</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="outline" size="icon" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Творческое
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                Портфолио
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Добро пожаловать в мир креативных решений и инновационного дизайна. 
              Здесь каждый проект рассказывает свою уникальную историю.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
                <Icon name="Eye" size={20} className="mr-2" />
                Смотреть работы
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать резюме
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Коллекция креативных проектов, которые воплощают в жизнь смелые идеи и современные решения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/3cfda4e4-877a-48f3-9dc4-1944908766de.jpg" 
                  alt="Creative Design Project"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold mb-2">Геометрический Дизайн</h3>
                  <p className="text-sm opacity-90">Современная абстракция с динамичными формами</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Дизайн</span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">UI/UX</span>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Icon name="ArrowUpRight" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="relative overflow-hidden">
                <img 
                  src="/img/ac426dd2-e717-4168-adc7-b01e9c202ee9.jpg" 
                  alt="Branding Project"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold mb-2">Брендинг Проект</h3>
                  <p className="text-sm opacity-90">Создание уникальной визуальной идентичности</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent-foreground text-xs rounded-full">Брендинг</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Логотип</span>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Icon name="ArrowUpRight" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="relative overflow-hidden">
                <img 
                  src="/img/0b8e923d-f164-4671-a0de-e07599ed3190.jpg" 
                  alt="Digital Art"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold mb-2">Цифровое Искусство</h3>
                  <p className="text-sm opacity-90">Экспериментальная визуализация и эффекты</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">Арт</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent-foreground text-xs rounded-full">3D</span>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Icon name="ArrowUpRight" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover:bg-primary/5">
              <Icon name="Plus" size={20} className="mr-2" />
              Посмотреть больше работ
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Навыки</h2>
            <p className="text-xl text-muted-foreground">Инструменты и технологии, которыми я владею</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Design", icon: "Palette", color: "primary" },
              { name: "Photography", icon: "Camera", color: "secondary" },
              { name: "3D Modeling", icon: "Box", color: "accent" },
              { name: "Animation", icon: "Play", color: "primary" },
              { name: "Branding", icon: "Star", color: "secondary" },
              { name: "UI/UX", icon: "Smartphone", color: "accent" },
              { name: "Illustration", icon: "PenTool", color: "primary" },
              { name: "Web Design", icon: "Monitor", color: "secondary" }
            ].map((skill, index) => (
              <div 
                key={skill.name} 
                className="text-center group animate-fade-in hover:scale-105 transition-transform duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${skill.color}/10 flex items-center justify-center group-hover:bg-${skill.color}/20 transition-colors duration-300`}>
                  <Icon name={skill.icon as any} size={24} className={`text-${skill.color}`} />
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Давайте создадим что-то удивительное</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готов к новым вызовам и интересным проектам. Свяжитесь со мной, чтобы обсудить ваши идеи.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
                <Icon name="Mail" size={20} className="mr-2" />
                Написать письмо
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
            </div>

            <div className="flex justify-center space-x-6 pt-8">
              {[
                { name: "Instagram", icon: "Instagram" },
                { name: "Behance", icon: "Eye" },
                { name: "Dribbble", icon: "Circle" },
                { name: "LinkedIn", icon: "Linkedin" }
              ].map((social) => (
                <Button 
                  key={social.name} 
                  variant="ghost" 
                  size="icon" 
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <Icon name={social.icon as any} size={24} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Sokolov Creative Studio. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;