import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/layout/PageHeader";
import CarCard from "@/components/cars/CarCard";
import CarFilters, { FilterState } from "@/components/cars/CarFilters";
import { mockCars } from "@/data/mockCars";

const Cars = () => {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    make: "",
    bodyType: "",
    fuelType: "",
    transmission: "",
    priceRange: "",
    sortBy: "newest",
  });

  const filteredCars = useMemo(() => {
    let result = [...mockCars];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (car) =>
          car.make.toLowerCase().includes(searchLower) ||
          car.model.toLowerCase().includes(searchLower) ||
          car.description.toLowerCase().includes(searchLower)
      );
    }

    // Make filter
    if (filters.make && filters.make !== "all") {
      result = result.filter((car) => car.make === filters.make);
    }

    // Body type filter
    if (filters.bodyType && filters.bodyType !== "all") {
      result = result.filter((car) => car.bodyType === filters.bodyType);
    }

    // Fuel type filter
    if (filters.fuelType && filters.fuelType !== "all") {
      result = result.filter((car) => car.fuelType === filters.fuelType);
    }

    // Transmission filter
    if (filters.transmission && filters.transmission !== "all") {
      result = result.filter((car) => car.transmission === filters.transmission);
    }

    // Price range filter
    if (filters.priceRange && filters.priceRange !== "all") {
      const [min, max] = filters.priceRange.split("-").map(Number);
      if (max) {
        result = result.filter((car) => car.price >= min && car.price <= max);
      } else {
        result = result.filter((car) => car.price >= 50000);
      }
    }

    // Sorting
    switch (filters.sortBy) {
      case "newest":
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case "oldest":
        result.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "mileage-low":
        result.sort((a, b) => a.mileage - b.mileage);
        break;
    }

    return result;
  }, [filters]);

  return (
    <Layout>
      <PageHeader
        title="Browse Cars"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Cars" },
        ]}
      />

      <section className="section-padding bg-muted">
        <div className="container-custom">
          <CarFilters onFilterChange={setFilters} />

          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-bold text-foreground">{filteredCars.length}</span> cars
            </p>
          </div>

          {filteredCars.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-2xl font-oswald text-foreground mb-2">No cars found</p>
              <p className="text-muted-foreground">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Cars;
