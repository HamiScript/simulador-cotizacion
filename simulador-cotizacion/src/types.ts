// src/types.ts

/**
 * Representa un producto disponible en la tienda
 */
export interface Product {
  id: string;
  name: string;
  category: string; // p. ej. "Hogar", "Cocina", "Jardín"
  price: number; // precio unitario
  promotion?: "3x2"; // tipo de promoción (opcional)
}

/**
 * Elemento agregado al carrito, con cálculos de línea
 */
export interface CartItem {
  product: Product; // el producto seleccionado
  quantity: number; // cantidad elegida
  lineTotal: number; // precio neto = quantity * product.price – lineDiscount
  lineDiscount: number; // ahorro aplicado por promoción
}

/**
 * Props del componente CategoryFilter
 */
export interface CategoryFilterProps {
  categories: string[]; // lista de todas las categorías disponibles
  selected: string; // categoría actualmente seleccionada
  onChange: (newCat: string) => void;
}

/**
 * Props del componente ProductList
 */
export interface ProductListProps {
  products: Product[];
  onAdd: (productId: string, qty: number) => void;
}

/**
 * Props del componente QuoteSummary
 */
export interface QuoteSummaryProps {
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  onRemove: (id: string) => void;
}
