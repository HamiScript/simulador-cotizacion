import { useState } from "react";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onAdd: (productId: string, qty: number) => void;
}

function ProductCard({ product, onAdd }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const width = 300;

  return (
    <div
      className="mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-4"
      style={{ width }}
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="mt-1 text-gray-600">${product.price.toFixed(2)}</p>
        {product.promotion === "3x2" && (
          <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 rounded">
            Promoción 3x2
          </span>
        )}
        <div className="flex items-center mt-4 space-x-2">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-2 py-1 border rounded hover:bg-gray-100"
          >
            -
          </button>
          <span className="text-gray-800">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-2 py-1 border rounded hover:bg-gray-100"
          >
            +
          </button>
        </div>
        <button
          onClick={() => onAdd(product.id, quantity)}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded"
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
