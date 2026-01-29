import { Calendar, Clock, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Booking = () => {
  return (
    <section className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/90" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              // Working Hours //
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-oswald font-bold text-primary-foreground mb-8">
              Best Quality Service For Your Car
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit amet
              diam et eos. Lorem ipsum dolor sit amet.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-primary/20 p-4">
                <Calendar className="w-8 h-8 text-primary mb-2" />
                <h4 className="text-primary-foreground font-semibold">Mon - Friday</h4>
                <p className="text-primary-foreground/70 text-sm">09:00 AM - 09:00 PM</p>
              </div>
              <div className="bg-primary/20 p-4">
                <Clock className="w-8 h-8 text-primary mb-2" />
                <h4 className="text-primary-foreground font-semibold">Sat - Sunday</h4>
                <p className="text-primary-foreground/70 text-sm">09:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-primary p-8">
            <h3 className="text-2xl font-oswald font-bold text-primary-foreground mb-6">
              Book Your Service
            </h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <select className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:border-primary-foreground">
                  <option value="">Select Service</option>
                  <option value="diagnostic">Diagnostic Test</option>
                  <option value="engine">Engine Servicing</option>
                  <option value="oil">Oil Changing</option>
                  <option value="brake">Brake Repair</option>
                </select>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:border-primary-foreground"
                />
              </div>
              <textarea
                placeholder="Special Request"
                rows={4}
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground resize-none"
              />
              <button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground py-4 font-semibold uppercase tracking-wider hover:bg-secondary/90 transition-all flex items-center justify-center gap-2"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
