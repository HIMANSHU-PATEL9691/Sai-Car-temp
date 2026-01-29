import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
}

const PageHeader = ({ title, breadcrumbs }: PageHeaderProps) => {
  return (
    <div className="bg-secondary pt-32 pb-16">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-oswald font-bold text-secondary-foreground mb-4">
          {title}
        </h1>
        <nav className="flex items-center gap-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-4 h-4 text-primary" />}
              {crumb.href ? (
                <Link
                  to={crumb.href}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-primary">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
