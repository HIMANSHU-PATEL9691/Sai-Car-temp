import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/layout/PageHeader";
import SellCarForm from "@/components/forms/SellCarForm";
import { Car, DollarSign, Clock, Shield } from "lucide-react";

const benefits = [
  {
    icon: Car,
    title: "Free Listing",
    description: "List your car for free and reach thousands of potential buyers.",
  },
  {
    icon: DollarSign,
    title: "Best Price",
    description: "Get the best price for your car with our wide network of buyers.",
  },
  {
    icon: Clock,
    title: "Quick Sale",
    description: "Sell your car quickly with our streamlined process.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your information is protected with our secure platform.",
  },
];

const SellYourCar = () => {
  return (
    <Layout>
      <PageHeader
        title="Sell Your Car"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sell Your Car" },
        ]}
      />

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-subtitle">// Why Sell With Us //</span>
            <h2 className="section-title text-foreground">
              The Best Way To Sell Your Car
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="feature-card text-center">
                <div className="icon-box mx-auto mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-oswald font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <span className="section-subtitle">// List Your Car //</span>
            <h2 className="section-title text-foreground">
              Fill Out The Form Below
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Provide accurate details about your car to attract the right buyers.
              Fields marked with * are required.
            </p>
          </div>

          <SellCarForm />
        </div>
      </section>
    </Layout>
  );
};

export default SellYourCar;
