// src/types.ts

/**
 * Representa un producto disponible en la tienda
 */
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  promotion?: "3x2";
}

export interface CartItem {
  product: Product;
  quantity: number;
  lineTotal: number;
  lineDiscount: number;
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
