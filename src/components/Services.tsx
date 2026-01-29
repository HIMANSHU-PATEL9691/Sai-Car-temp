import { Search, Droplet, Disc, Wrench } from "lucide-react";
import serviceDiagnostic from "@/assets/service-diagnostic.jpg";
import serviceTires from "@/assets/service-tires.jpg";
import serviceOil from "@/assets/service-oil.jpg";
import serviceBrake from "@/assets/service-brake.jpg";

const services = [
  {
    icon: Search,
    title: "Diagnostic Test",
    description:
      "Diam dolor diam ipsum sit amet diam et eos erat ipsum lorem sed stet lorem sit.",
    image: serviceDiagnostic,
  },
  {
    icon: Wrench,
    title: "Engine Servicing",
    description:
      "Diam dolor diam ipsum sit amet diam et eos erat ipsum lorem sed stet lorem sit.",
    image: serviceTires,
  },
  {
    icon: Droplet,
    title: "Oil Changing",
    description:
      "Diam dolor diam ipsum sit amet diam et eos erat ipsum lorem sed stet lorem sit.",
    image: serviceOil,
  },
  {
    icon: Disc,
    title: "Brake Repair",
    description:
      "Diam dolor diam ipsum sit amet diam et eos erat ipsum lorem sed stet lorem sit.",
    image: serviceBrake,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">// Our Services //</span>
          <h2 className="section-title text-foreground">
            Explore Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-card overflow-hidden shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="icon-box -mt-14 relative z-10 mb-4">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-oswald font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
