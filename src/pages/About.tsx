import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/layout/PageHeader";
import { Users, Award, ThumbsUp, Car } from "lucide-react";
import aboutImg from "@/assets/about-mechanic.jpg";

const stats = [
  { icon: Car, value: "500+", label: "Cars Sold" },
  { icon: Users, value: "1000+", label: "Happy Customers" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: ThumbsUp, value: "99%", label: "Satisfaction Rate" },
];

const About = () => {
  return (
    <Layout>
      <PageHeader
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={aboutImg}
                alt="About Sai Car"
                className="w-full h-auto object-cover shadow-lg"
              />
              <div className="absolute bottom-0 left-0 bg-primary p-6 text-primary-foreground">
                <h2 className="text-4xl font-oswald font-bold">15</h2>
                <span className="text-lg">Years</span>
                <p className="text-sm uppercase tracking-wider mt-1">Experience</p>
              </div>
            </div>

            <div>
              <span className="section-subtitle">// About Us //</span>
              <h2 className="section-title text-foreground">
                Your Trusted Partner In Finding The Perfect Car
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Sai Car has been a trusted name in the used car industry for over 15 years. 
                We connect buyers with sellers to make the car buying and selling process 
                simple, transparent, and enjoyable.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our mission is to provide a platform where everyone can find their perfect 
                vehicle or sell their car with confidence. We believe in honesty, quality, 
                and customer satisfaction above all else.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-oswald font-bold text-foreground">
                      Quality Vehicles
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Every car listed is verified for quality and accuracy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                    <ThumbsUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-oswald font-bold text-foreground">
                      Trusted Service
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Our team is dedicated to providing the best customer experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-4xl font-oswald font-bold text-secondary-foreground mb-2">
                  {stat.value}
                </h3>
                <p className="text-secondary-foreground/70 uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-subtitle">// Why Choose Us //</span>
            <h2 className="section-title text-foreground">
              We Make Car Buying Easy
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 shadow-lg text-center">
              <div className="text-5xl font-oswald font-bold text-primary/20 mb-4">01</div>
              <h3 className="text-xl font-oswald font-bold text-foreground mb-3">
                Wide Selection
              </h3>
              <p className="text-muted-foreground">
                Browse through hundreds of quality used cars from trusted sellers.
              </p>
            </div>
            <div className="bg-card p-8 shadow-lg text-center">
              <div className="text-5xl font-oswald font-bold text-primary/20 mb-4">02</div>
              <h3 className="text-xl font-oswald font-bold text-foreground mb-3">
                Easy Process
              </h3>
              <p className="text-muted-foreground">
                Simple search, filter, and contact sellers directly through our platform.
              </p>
            </div>
            <div className="bg-card p-8 shadow-lg text-center">
              <div className="text-5xl font-oswald font-bold text-primary/20 mb-4">03</div>
              <h3 className="text-xl font-oswald font-bold text-foreground mb-3">
                Trusted Reviews
              </h3>
              <p className="text-muted-foreground">
                Read reviews and ratings from real buyers to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
