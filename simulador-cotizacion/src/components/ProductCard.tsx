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
      className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      style={{ width }}
    >
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="mt-2 text-gray-600">
          Precio: ${product.price.toFixed(2)}
        </p>
        {product.promotion === "3x2" && (
          <span className="promo inline-block mt-1 px-2 py-1 bg-green-100 text-green-800 rounded">
            Promoción 3x2
          </span>
        )}

        <div className="controls flex items-center mt-4 space-x-2">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            +
          </button>
        </div>

        <div className="mt-4">
          <button
            onClick={() => onAdd(product.id, quantity)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
