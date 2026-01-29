import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CarCard from "@/components/cars/CarCard";
import { mockCars } from "@/data/mockCars";
import heroBg from "@/assets/hero-bg.jpg";
import { Car, Shield, Users, Award } from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Wide Selection",
    description: "Browse hundreds of quality used cars from trusted sellers.",
  },
  {
    icon: Shield,
    title: "Verified Listings",
    description: "All cars are verified for quality and authenticity.",
  },
  {
    icon: Users,
    title: "Direct Contact",
    description: "Connect directly with sellers for the best deals.",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Trusted by thousands of buyers and sellers.",
  },
];

const Index = () => {
  const featuredCars = mockCars.filter((car) => car.isFeatured).slice(0, 6);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Car background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-custom relative z-10 pt-32">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              // Used Car Dealer //
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-primary-foreground mb-6 leading-tight">
              Find Your Perfect Car Today
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Browse our collection of quality used cars or list your own car for sale. 
              The best platform for buying and selling used vehicles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/cars" className="btn-primary">
                Browse Cars
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/sell" className="btn-outline-light">
                Sell Your Car
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="icon-box mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-oswald font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-subtitle">// Featured Listings //</span>
            <h2 className="section-title text-foreground">
              Featured Cars For Sale
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/cars" className="btn-primary">
              View All Cars
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-oswald font-bold text-primary-foreground mb-4">
                Ready To Sell Your Car?
              </h2>
              <p className="text-primary-foreground/80">
                List your car for free and reach thousands of potential buyers. 
                Simple process, best prices, quick sale guaranteed.
              </p>
            </div>
            <div className="lg:text-right">
              <Link to="/sell" className="btn-outline-light">
                Sell Your Car Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-subtitle">// Why Choose Us //</span>
              <h2 className="section-title text-foreground">
                The Best Platform For Used Cars
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of experience in the automotive industry, we've 
                helped thousands of people find their perfect car or sell their 
                vehicle at the best price.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-foreground">
                    Verified listings from trusted sellers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-foreground">
                    Secure communication between buyers and sellers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-foreground">
                    Comprehensive vehicle history reports
                  </span>
                </li>
              </ul>
              <Link to="/about" className="btn-primary mt-8 inline-flex">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary p-8 text-center">
                <h3 className="text-4xl font-oswald font-bold text-primary mb-2">500+</h3>
                <p className="text-secondary-foreground uppercase text-sm tracking-wider">Cars Sold</p>
              </div>
              <div className="bg-primary p-8 text-center">
                <h3 className="text-4xl font-oswald font-bold text-primary-foreground mb-2">1000+</h3>
                <p className="text-primary-foreground/80 uppercase text-sm tracking-wider">Happy Customers</p>
              </div>
              <div className="bg-primary p-8 text-center">
                <h3 className="text-4xl font-oswald font-bold text-primary-foreground mb-2">15+</h3>
                <p className="text-primary-foreground/80 uppercase text-sm tracking-wider">Years Experience</p>
              </div>
              <div className="bg-secondary p-8 text-center">
                <h3 className="text-4xl font-oswald font-bold text-primary mb-2">99%</h3>
                <p className="text-secondary-foreground uppercase text-sm tracking-wider">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
