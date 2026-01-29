import { Shield, Users, Settings, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Servicing",
    description: "Diam dolor diam ipsum sit amet diam et eos erat ipsum",
  },
  {
    icon: Users,
    title: "Expert Workers",
    description: "Diam dolor diam ipsum sit amet diam et eos erat ipsum",
  },
  {
    icon: Settings,
    title: "Modern Equipment",
    description: "Diam dolor diam ipsum sit amet diam et eos erat ipsum",
  },
];

const Features = () => {
  return (
    <section className="relative z-20 -mt-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card group ${
                index === 1 ? "bg-primary" : "bg-card"
              }`}
            >
              <div
                className={`icon-box mb-6 ${
                  index === 1
                    ? "bg-secondary"
                    : "bg-primary"
                }`}
              >
                <feature.icon className="w-8 h-8" />
              </div>
              <h3
                className={`text-xl font-oswald font-bold mb-3 ${
                  index === 1 ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`mb-4 ${
                  index === 1
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {feature.description}
              </p>
              <a
                href="#services"
                className={`inline-flex items-center gap-2 font-semibold uppercase text-sm tracking-wider group-hover:gap-3 transition-all ${
                  index === 1
                    ? "text-primary-foreground"
                    : "text-primary"
                }`}
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
