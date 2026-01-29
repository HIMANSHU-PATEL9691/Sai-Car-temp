import { Link } from "react-router-dom";
import { Car } from "@/data/mockCars";
import { Calendar, Gauge, Fuel, Settings } from "lucide-react";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Link to={`/cars/${car.id}`} className="group">
      <div className="bg-card shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={car.images[0]}
            alt={`${car.make} ${car.model}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {car.isFeatured && (
            <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold uppercase">
              Featured
            </span>
          )}
          <span className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-semibold uppercase">
            {car.condition}
          </span>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-oswald font-bold text-foreground">
              {car.make} {car.model}
            </h3>
            <span className="text-primary font-bold text-lg">
              ${car.price.toLocaleString()}
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {car.description}
          </p>
          
          <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{car.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-primary" />
              <span>{car.mileage.toLocaleString()} mi</span>
            </div>
            <div className="flex items-center gap-2">
              <Fuel className="w-4 h-4 text-primary" />
              <span>{car.fuelType}</span>
            </div>
            <div className="flex items-center gap-2">
              <Settings className="w-4 h-4 text-primary" />
              <span>{car.transmission}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
