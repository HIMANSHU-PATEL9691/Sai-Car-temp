import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/layout/PageHeader";
import { Search, Droplet, Disc, Wrench, Shield, Car, FileCheck, Sparkles } from "lucide-react";
import serviceDiagnostic from "@/assets/service-diagnostic.jpg";
import serviceTires from "@/assets/service-tires.jpg";
import serviceOil from "@/assets/service-oil.jpg";
import serviceBrake from "@/assets/service-brake.jpg";

const services = [
  {
    icon: Search,
    title: "Pre-Purchase Inspection",
    description:
      "Get a comprehensive inspection before buying any used car. Our certified mechanics will check everything from engine to body condition.",
    image: serviceDiagnostic,
    features: ["Engine Check", "Body Inspection", "Test Drive", "History Report"],
  },
  {
    icon: FileCheck,
    title: "Vehicle History Report",
    description:
      "Get detailed history reports for any vehicle including accident history, ownership records, and service history.",
    image: serviceTires,
    features: ["Accident History", "Title Check", "Odometer Verification", "Service Records"],
  },
  {
    icon: Shield,
    title: "Extended Warranty",
    description:
      "Protect your investment with our extended warranty plans that cover major repairs and unexpected breakdowns.",
    image: serviceOil,
    features: ["Engine Coverage", "Transmission", "Electrical Systems", "24/7 Support"],
  },
  {
    icon: Car,
    title: "Trade-In Service",
    description:
      "Looking to upgrade? Trade in your old car and get the best value towards your new purchase.",
    image: serviceBrake,
    features: ["Free Valuation", "Instant Quote", "Hassle-Free Process", "Fair Prices"],
  },
];

const additionalServices = [
  {
    icon: Wrench,
    title: "Maintenance Services",
    description: "Regular maintenance to keep your car running smoothly.",
  },
  {
    icon: Droplet,
    title: "Oil Change",
    description: "Quick and professional oil change services.",
  },
  {
    icon: Disc,
    title: "Brake Service",
    description: "Complete brake inspection and repair services.",
  },
  {
    icon: Sparkles,
    title: "Detailing",
    description: "Professional car detailing to make your car shine.",
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* Main Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-subtitle">// What We Offer //</span>
            <h2 className="section-title text-foreground">
              Comprehensive Car Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a wide range of services to help you buy, sell, and maintain 
              your vehicle with confidence.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="icon-box mb-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-oswald font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-2 text-foreground"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-subtitle">// Additional Services //</span>
            <h2 className="section-title text-foreground">
              Car Maintenance & Care
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="feature-card text-center">
                <div className="icon-box mx-auto mb-4">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-oswald font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-oswald font-bold text-primary-foreground mb-4">
            Need Help With Your Car?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Contact us today and let our team help you with all your car needs.
          </p>
          <a href="/contact" className="btn-outline-light">
            Contact Us
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
