/* src/components/ProductList.tsx */
import type { Product } from "../data/products";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onAdd: (productId: string, qty: number) => void;
}

function ProductList({ products, onAdd }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((prod) => (
        <ProductCard key={prod.id} product={prod} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default ProductList;
