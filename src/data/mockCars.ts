export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  bodyType: string;
  color: string;
  engine: string;
  doors: number;
  seats: number;
  vin: string;
  condition: 'excellent' | 'good' | 'fair';
  description: string;
  features: string[];
  images: string[];
  isFeatured: boolean;
  createdAt: string;
  sellerName: string;
  sellerPhone: string;
  sellerCity: string;
}

export const mockCars: Car[] = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry",
    year: 2021,
    price: 28500,
    mileage: 35000,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "Sedan",
    color: "Silver",
    engine: "2.5L 4-Cylinder",
    doors: 4,
    seats: 5,
    vin: "1HGBH41JXMN109186",
    condition: "excellent",
    description: "Well-maintained Toyota Camry with low mileage. Single owner, full service history available. Perfect for daily commuting.",
    features: ["Bluetooth", "Backup Camera", "Cruise Control", "Keyless Entry", "Apple CarPlay"],
    images: ["https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800"],
    isFeatured: true,
    createdAt: "2024-01-15",
    sellerName: "John Smith",
    sellerPhone: "+1 234 567 8901",
    sellerCity: "New York"
  },
  {
    id: "2",
    make: "Honda",
    model: "CR-V",
    year: 2020,
    price: 32000,
    mileage: 42000,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "SUV",
    color: "Black",
    engine: "1.5L Turbo",
    doors: 5,
    seats: 5,
    vin: "2HKRW2H50KH123456",
    condition: "excellent",
    description: "Spacious Honda CR-V perfect for family adventures. AWD system, excellent fuel economy, and loaded with safety features.",
    features: ["AWD", "Lane Departure Warning", "Heated Seats", "Sunroof", "Android Auto"],
    images: ["https://images.unsplash.com/photo-1568844293986-8c8c5f3b3b9d?w=800"],
    isFeatured: true,
    createdAt: "2024-01-10",
    sellerName: "Sarah Johnson",
    sellerPhone: "+1 234 567 8902",
    sellerCity: "Los Angeles"
  },
  {
    id: "3",
    make: "BMW",
    model: "3 Series",
    year: 2019,
    price: 35500,
    mileage: 55000,
    fuelType: "Diesel",
    transmission: "Automatic",
    bodyType: "Sedan",
    color: "White",
    engine: "2.0L TwinPower Turbo",
    doors: 4,
    seats: 5,
    vin: "WBA8E9C50JK789012",
    condition: "good",
    description: "Sporty BMW 3 Series with excellent handling. M Sport package, leather interior, and premium sound system.",
    features: ["M Sport Package", "Leather Seats", "Navigation", "Parking Sensors", "Sport Suspension"],
    images: ["https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800"],
    isFeatured: true,
    createdAt: "2024-01-08",
    sellerName: "Michael Brown",
    sellerPhone: "+1 234 567 8903",
    sellerCity: "Chicago"
  },
  {
    id: "4",
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2020,
    price: 42000,
    mileage: 38000,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "Sedan",
    color: "Grey",
    engine: "2.0L Turbo",
    doors: 4,
    seats: 5,
    vin: "WDDWF8DB5LA234567",
    condition: "excellent",
    description: "Elegant Mercedes C-Class with AMG Line styling. Premium Burmester sound, ambient lighting, and driver assistance package.",
    features: ["AMG Line", "Burmester Sound", "Ambient Lighting", "360 Camera", "Head-Up Display"],
    images: ["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800"],
    isFeatured: false,
    createdAt: "2024-01-05",
    sellerName: "Emily Davis",
    sellerPhone: "+1 234 567 8904",
    sellerCity: "Houston"
  },
  {
    id: "5",
    make: "Ford",
    model: "F-150",
    year: 2022,
    price: 48000,
    mileage: 25000,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "Pickup",
    color: "Blue",
    engine: "3.5L EcoBoost V6",
    doors: 4,
    seats: 5,
    vin: "1FTEW1EP6NFA12345",
    condition: "excellent",
    description: "Powerful Ford F-150 XLT with towing package. Perfect for work and weekend adventures. Low miles, like new condition.",
    features: ["Towing Package", "Bed Liner", "LED Headlights", "SYNC 4", "Pro Trailer Backup"],
    images: ["https://images.unsplash.com/photo-1590739225287-bd31519780c2?w=800"],
    isFeatured: true,
    createdAt: "2024-01-12",
    sellerName: "Robert Wilson",
    sellerPhone: "+1 234 567 8905",
    sellerCity: "Dallas"
  },
  {
    id: "6",
    make: "Volkswagen",
    model: "Golf",
    year: 2021,
    price: 24000,
    mileage: 30000,
    fuelType: "Petrol",
    transmission: "Manual",
    bodyType: "Hatchback",
    color: "Red",
    engine: "1.4L TSI",
    doors: 5,
    seats: 5,
    vin: "WVWZZZ1KZMW567890",
    condition: "good",
    description: "Fun-to-drive Volkswagen Golf with excellent fuel economy. German engineering at its finest. Perfect city car.",
    features: ["Digital Cockpit", "Adaptive Cruise", "Wireless Charging", "LED Lights", "Sport Mode"],
    images: ["https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=800"],
    isFeatured: false,
    createdAt: "2024-01-03",
    sellerName: "Lisa Anderson",
    sellerPhone: "+1 234 567 8906",
    sellerCity: "Miami"
  },
  {
    id: "7",
    make: "Audi",
    model: "A4",
    year: 2020,
    price: 38500,
    mileage: 45000,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "Sedan",
    color: "Black",
    engine: "2.0L TFSI",
    doors: 4,
    seats: 5,
    vin: "WAUFFAFL5LN012345",
    condition: "excellent",
    description: "Sophisticated Audi A4 with Quattro AWD. S-Line package, virtual cockpit, and Bang & Olufsen premium sound.",
    features: ["Quattro AWD", "S-Line", "Virtual Cockpit", "B&O Sound", "Matrix LED"],
    images: ["https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800"],
    isFeatured: true,
    createdAt: "2024-01-07",
    sellerName: "David Martinez",
    sellerPhone: "+1 234 567 8907",
    sellerCity: "Phoenix"
  },
  {
    id: "8",
    make: "Hyundai",
    model: "Tucson",
    year: 2022,
    price: 29500,
    mileage: 20000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    bodyType: "SUV",
    color: "Green",
    engine: "1.6L Turbo Hybrid",
    doors: 5,
    seats: 5,
    vin: "KM8J3CAL5NU678901",
    condition: "excellent",
    description: "Eco-friendly Hyundai Tucson Hybrid with stunning design. Low running costs and packed with tech features.",
    features: ["Hybrid Engine", "Panoramic Roof", "Blind Spot Monitor", "Remote Start", "Wireless CarPlay"],
    images: ["https://images.unsplash.com/photo-1619976215249-0815c9a1e153?w=800"],
    isFeatured: false,
    createdAt: "2024-01-14",
    sellerName: "Jennifer Taylor",
    sellerPhone: "+1 234 567 8908",
    sellerCity: "Seattle"
  }
];
