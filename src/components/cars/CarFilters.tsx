import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface CarFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  search: string;
  make: string;
  bodyType: string;
  fuelType: string;
  transmission: string;
  priceRange: string;
  sortBy: string;
}

const CarFilters = ({ onFilterChange }: CarFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    make: "",
    bodyType: "",
    fuelType: "",
    transmission: "",
    priceRange: "",
    sortBy: "newest",
  });

  const handleChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      search: "",
      make: "",
      bodyType: "",
      fuelType: "",
      transmission: "",
      priceRange: "",
      sortBy: "newest",
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="bg-card p-6 shadow-lg mb-8">
      <div className="flex items-center gap-2 mb-6">
        <SlidersHorizontal className="w-5 h-5 text-primary" />
        <h3 className="font-oswald font-bold text-lg text-foreground">Filter Cars</h3>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search cars..."
            value={filters.search}
            onChange={(e) => handleChange("search", e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={filters.make} onValueChange={(v) => handleChange("make", v)}>
          <SelectTrigger>
            <SelectValue placeholder="All Makes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Makes</SelectItem>
            <SelectItem value="Toyota">Toyota</SelectItem>
            <SelectItem value="Honda">Honda</SelectItem>
            <SelectItem value="BMW">BMW</SelectItem>
            <SelectItem value="Mercedes-Benz">Mercedes-Benz</SelectItem>
            <SelectItem value="Ford">Ford</SelectItem>
            <SelectItem value="Volkswagen">Volkswagen</SelectItem>
            <SelectItem value="Audi">Audi</SelectItem>
            <SelectItem value="Hyundai">Hyundai</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={filters.bodyType} onValueChange={(v) => handleChange("bodyType", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Body Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Sedan">Sedan</SelectItem>
            <SelectItem value="SUV">SUV</SelectItem>
            <SelectItem value="Hatchback">Hatchback</SelectItem>
            <SelectItem value="Pickup">Pickup</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={filters.fuelType} onValueChange={(v) => handleChange("fuelType", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Fuel Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Fuel Types</SelectItem>
            <SelectItem value="Petrol">Petrol</SelectItem>
            <SelectItem value="Diesel">Diesel</SelectItem>
            <SelectItem value="Hybrid">Hybrid</SelectItem>
            <SelectItem value="Electric">Electric</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Select value={filters.transmission} onValueChange={(v) => handleChange("transmission", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Transmission" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Transmissions</SelectItem>
            <SelectItem value="Automatic">Automatic</SelectItem>
            <SelectItem value="Manual">Manual</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={filters.priceRange} onValueChange={(v) => handleChange("priceRange", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="0-25000">Under $25,000</SelectItem>
            <SelectItem value="25000-35000">$25,000 - $35,000</SelectItem>
            <SelectItem value="35000-50000">$35,000 - $50,000</SelectItem>
            <SelectItem value="50000+">$50,000+</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={filters.sortBy} onValueChange={(v) => handleChange("sortBy", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="mileage-low">Mileage: Low to High</SelectItem>
          </SelectContent>
        </Select>
        
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default CarFilters;
