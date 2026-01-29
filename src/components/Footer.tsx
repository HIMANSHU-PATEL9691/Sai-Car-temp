import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Browse Cars", href: "/cars" },
    { name: "Sell Your Car", href: "/sell" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <Link to="/" className="text-2xl font-oswald font-bold text-primary mb-6 block">
                Sai Car
              </Link>
              <p className="text-secondary-foreground/70 mb-6">
                Your trusted partner for buying and selling quality used cars.
                Over 15 years of experience in the automotive industry.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-oswald font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-secondary-foreground/70 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-4 h-4 text-primary" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-oswald font-bold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-secondary-foreground/70">
                    123 Street, New York, USA
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-secondary-foreground/70">
                    +012 345 6789
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-secondary-foreground/70">
                    info@Sai Car.com
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xl font-oswald font-bold mb-6">Newsletter</h4>
              <p className="text-secondary-foreground/70 mb-4">
                Subscribe to get updates on new car listings and special offers.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary-foreground/10 py-6">
        <div className="container-custom text-center text-secondary-foreground/70">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-primary font-semibold">Sai Car</span>. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
