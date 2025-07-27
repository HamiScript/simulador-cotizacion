// src/data/products.ts

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  promotion?: "3x2";
}

export const PRODUCTS: Product[] = [
  // Cocina
  { id: "p1", name: "Taza Cerámica", category: "Cocina", price: 5.0 },
  { id: "p2", name: "Set de Cuchillos", category: "Cocina", price: 40.0 },
  {
    id: "p3",
    name: "Tabla de Picar de Madera",
    category: "Cocina",
    price: 12.5,
  },
  {
    id: "p4",
    name: "Juego de Vasos",
    category: "Cocina",
    price: 18.0,
    promotion: "3x2",
  },
  { id: "p5", name: "Cafetera Eléctrica", category: "Cocina", price: 55.0 },

  // Hogar
  {
    id: "p6",
    name: "Juego de Sábanas (2 plazas)",
    category: "Hogar",
    price: 25.0,
    promotion: "3x2",
  },
  { id: "p7", name: "Almohada Memory Foam", category: "Hogar", price: 18.5 },
  { id: "p8", name: "Lámpara de Mesa", category: "Hogar", price: 22.0 },
  { id: "p9", name: "Cortinas Decorativas", category: "Hogar", price: 30.0 },
  { id: "p10", name: "Perchero de Pie", category: "Hogar", price: 20.0 },

  // Jardín
  { id: "p11", name: "Maceta Plástica", category: "Jardín", price: 10.0 },
  {
    id: "p12",
    name: "Regadera de Metal",
    category: "Jardín",
    price: 12.0,
    promotion: "3x2",
  },
  { id: "p13", name: "Pala de Jardín", category: "Jardín", price: 9.5 },
  { id: "p14", name: "Juego de Herramientas", category: "Jardín", price: 25.0 },
  { id: "p15", name: "Césped Artificial", category: "Jardín", price: 35.0 },

  // Tecnología
  {
    id: "p16",
    name: "Auriculares Bluetooth",
    category: "Tecnología",
    price: 60.0,
  },
  {
    id: "p17",
    name: "Smartwatch Deportivo",
    category: "Tecnología",
    price: 80.0,
    promotion: "3x2",
  },
  { id: "p18", name: "Mouse Inalámbrico", category: "Tecnología", price: 15.0 },
  { id: "p19", name: "Teclado Mecánico", category: "Tecnología", price: 45.0 },
  { id: "p20", name: "Cargador Portátil", category: "Tecnología", price: 25.0 },
];
