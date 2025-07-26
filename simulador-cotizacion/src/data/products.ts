// src/data/products.ts

// Define el tipo Product para garantizar la forma de cada artículo
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number; // Precio unitario
  promotion?: "3x2"; // Opcional, por ejemplo promoción 3x2
}

// Array de ejemplo con varios productos separados por categoría
export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Taza Cerámica",
    category: "Cocina",
    price: 5.0,
  },
  {
    id: "p2",
    name: "Juego de Sábanas (2 plazas)",
    category: "Hogar",
    price: 25.0,
    promotion: "3x2",
  },
  {
    id: "p3",
    name: "Maceta Plástica",
    category: "Jardín",
    price: 10.0,
  },
  {
    id: "p4",
    name: "Set de Cuchillos",
    category: "Cocina",
    price: 40.0,
  },
  {
    id: "p5",
    name: "Almohada Memory Foam",
    category: "Hogar",
    price: 18.5,
  },
  {
    id: "p6",
    name: "Regadera de Metal",
    category: "Jardín",
    price: 12.0,
    promotion: "3x2",
  },
];
