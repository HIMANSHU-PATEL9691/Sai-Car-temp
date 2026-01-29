import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/layout/PageHeader";
import { mockCars } from "@/data/mockCars";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Gauge,
  Fuel,
  Settings,
  Car,
  Palette,
  DoorOpen,
  Users,
  Phone,
  Mail,
  MapPin,
  Check,
  ArrowLeft,
} from "lucide-react";

const CarDetails = () => {
  const { id } = useParams();
  const car = mockCars.find((c) => c.id === id);

  if (!car) {
    return (
      <Layout>
        <PageHeader
          title="Car Not Found"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Cars", href: "/cars" },
            { label: "Not Found" },
          ]}
        />
        <section className="section-padding">
          <div className="container-custom text-center">
            <p className="text-xl text-muted-foreground mb-4">
              The car you're looking for doesn't exist.
            </p>
            <Link to="/cars" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Cars
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const specs = [
    { icon: Calendar, label: "Year", value: car.year },
    { icon: Gauge, label: "Mileage", value: `${car.mileage.toLocaleString()} mi` },
    { icon: Fuel, label: "Fuel Type", value: car.fuelType },
    { icon: Settings, label: "Transmission", value: car.transmission },
    { icon: Car, label: "Body Type", value: car.bodyType },
    { icon: Palette, label: "Color", value: car.color },
    { icon: DoorOpen, label: "Doors", value: car.doors },
    { icon: Users, label: "Seats", value: car.seats },
  ];

  return (
    <Layout>
      <PageHeader
        title={`${car.make} ${car.model}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Cars", href: "/cars" },
          { label: `${car.make} ${car.model}` },
        ]}
      />

      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <div className="bg-card shadow-lg overflow-hidden">
                <img
                  src={car.images[0]}
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Car Info */}
              <div className="bg-card p-6 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold uppercase mb-2 ${
                        car.condition === "excellent"
                          ? "bg-green-100 text-green-800"
                          : car.condition === "good"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {car.condition} Condition
                    </span>
                    <h2 className="text-3xl font-oswald font-bold text-foreground">
                      {car.make} {car.model} {car.year}
                    </h2>
                  </div>
                  <p className="text-3xl font-bold text-primary">
                    ${car.price.toLocaleString()}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {car.description}
                </p>

                {car.vin && (
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">VIN:</span> {car.vin}
                  </p>
                )}
              </div>

              {/* Specifications */}
              <div className="bg-card p-6 shadow-lg">
                <h3 className="text-xl font-oswald font-bold text-foreground mb-6">
                  Specifications
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {specs.map((spec, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded">
                      <spec.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">{spec.label}</p>
                        <p className="font-semibold text-foreground">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {car.engine && (
                  <div className="mt-4 p-3 bg-muted rounded">
                    <p className="text-xs text-muted-foreground">Engine</p>
                    <p className="font-semibold text-foreground">{car.engine}</p>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="bg-card p-6 shadow-lg">
                <h3 className="text-xl font-oswald font-bold text-foreground mb-6">
                  Features
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Seller Info */}
              <div className="bg-card p-6 shadow-lg">
                <h3 className="text-xl font-oswald font-bold text-foreground mb-6">
                  Seller Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {car.sellerName.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{car.sellerName}</p>
                      <p className="text-sm text-muted-foreground">Private Seller</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{car.sellerCity}</span>
                  </div>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>{car.sellerPhone}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button className="btn-primary w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Seller
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-card p-6 shadow-lg">
                <h3 className="text-xl font-oswald font-bold text-foreground mb-4">
                  Interested?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Contact the seller to schedule a test drive or request more information.
                </p>
                <Link to="/sell" className="btn-primary w-full text-center block">
                  Sell Your Car
                </Link>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <Link
              to="/cars"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Cars
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CarDetails;
