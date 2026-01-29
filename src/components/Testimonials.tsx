import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    content:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.",
    name: "Client Name 1",
    role: "Profession",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    content:
      "Diam dolor diam ipsum sit amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Tempor erat elitr rebum at clita.",
    name: "Client Name 2",
    role: "Profession",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    content:
      "Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.",
    name: "Client Name 3",
    role: "Profession",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">// Testimonials //</span>
          <h2 className="section-title text-foreground">What Our Clients Say</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card p-8 md:p-12 shadow-lg">
            <Quote className="w-12 h-12 text-primary/20 absolute top-6 left-6" />
            
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  current === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute inset-0 p-8 md:p-12"
                }`}
              >
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-oswald font-bold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 transition-all ${
                  current === index ? "bg-primary" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
