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
      <h2 className="text-2xl font-semibold mb-2 text-red-700 flex items-center gap-2 capitalize">
        {category}
      </h2>
      <div className="flex flex-wrap gap-4">
        {products.map((prod) => (
          <ProductCard key={prod.id} product={prod} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
