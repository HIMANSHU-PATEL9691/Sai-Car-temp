import aboutImg from "@/assets/about-mechanic.jpg";

const aboutPoints = [
  { num: "01", title: "Professional & Expert", desc: "Diam dolor diam ipsum sit amet diam et eos" },
  { num: "02", title: "Quality Servicing Center", desc: "Diam dolor diam ipsum sit amet diam et eos" },
  { num: "03", title: "Awards Winning Workers", desc: "Diam dolor diam ipsum sit amet diam et eos" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="About us"
              className="w-full h-auto object-cover shadow-lg"
            />
            <div className="absolute bottom-0 left-0 bg-primary p-6 text-primary-foreground">
              <h2 className="text-4xl font-oswald font-bold">15</h2>
              <span className="text-lg">Years</span>
              <p className="text-sm uppercase tracking-wider mt-1">Experience</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="section-subtitle">// About Us //</span>
            <h2 className="section-title text-foreground">
              Sai Car Is The Best Place For Your Auto Care
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet.
            </p>

            <div className="space-y-6">
              {aboutPoints.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-4xl font-oswald font-bold text-primary/20">
                      {point.num}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-oswald font-bold text-foreground mb-1">
                      {point.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
