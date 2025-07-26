// src/components/CategorySection.tsx
import type { Product } from "../data/products";
import ProductCard from "./ProductCard";

interface CategorySectionProps {
  category: string;
  products: Product[];
  onAdd: (productId: string, qty: number) => void;
}

function CategorySection({ category, products, onAdd }: CategorySectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2 lowercase text-purple-600">
        {category}
      </h2>
      <div className="flex space-x-4 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {products.map((prod) => (
          <ProductCard key={prod.id} product={prod} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
