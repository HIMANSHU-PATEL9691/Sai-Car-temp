import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: "// Car Servicing //",
      title: "Qualified Car Repair Service Center",
      cta: "Learn More",
    },
    {
      subtitle: "// Car Servicing //",
      title: "Professional Auto Maintenance",
      cta: "Learn More",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Car service background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32">
        <div className="max-w-2xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                currentSlide === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute"
              }`}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                {slide.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-primary-foreground mb-8 leading-tight">
                {slide.title}
              </h1>
              <a
                href="#about"
                className="btn-primary inline-flex items-center gap-2"
              >
                {slide.cta}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-primary/20 hover:bg-primary text-primary-foreground flex items-center justify-center transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-primary/20 hover:bg-primary text-primary-foreground flex items-center justify-center transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
