import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const team = [
  {
    name: "John Smith",
    role: "Master Mechanic",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Mike Johnson",
    role: "Engine Specialist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "David Williams",
    role: "Brake Expert",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    name: "James Brown",
    role: "Diagnostic Tech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">// Our Technicians //</span>
          <h2 className="section-title text-foreground">Our Expert Technicians</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="team-overlay">
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="bg-card p-4 text-center shadow-lg">
                <h4 className="text-lg font-oswald font-bold text-foreground">
                  {member.name}
                </h4>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
