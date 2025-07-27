import { useState } from "react";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onAdd: (productId: string, qty: number) => void;
}

function ProductCard({ product, onAdd }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 w-64 transition hover:shadow-2xl border border-gray-200">
      {/* Título del producto */}
      <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>

      {/* Precio */}
      <p className="text-gray-600 mb-2 text-sm">
        Precio:{" "}
        <span className="font-semibold">${product.price.toFixed(2)}</span>
      </p>

      {/* Promoción */}
      {product.promotion === "3x2" && (
        <span className="inline-block mb-2 px-2 py-1 text-xs bg-green-100 text-green-700 font-medium rounded-full">
          🎁 Promoción 3x2
        </span>
      )}

      {/* Controles de cantidad */}
      <div className="flex items-center justify-center gap-2 mt-2">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="px-2 py-1 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300"
        >
          –
        </button>
        <span className="text-gray-800">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="px-2 py-1 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Botón Agregar */}
      <button
        onClick={() => onAdd(product.id, quantity)}
        className="mt-4 w-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold py-2 rounded-lg transition-colors"
      >
        Agregar
      </button>
    </div>
  );
}

export default ProductCard;
