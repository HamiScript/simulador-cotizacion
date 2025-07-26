/* src/components/CartItemRow.tsx */
import type { CartItem } from "../types";

interface CartItemRowProps {
  item: CartItem;
  onRemove: (id: string) => void;
}

function CartItemRow({ item, onRemove }: CartItemRowProps) {
  return (
    <div className="flex justify-between items-center py-2 border-b last:border-none">
      <div className="flex-1">
        <p className="font-medium text-gray-800">{item.product.name}</p>
        <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
      </div>
      <div className="text-right">
        <p className="text-gray-800">Subtotal: ${item.lineTotal.toFixed(2)}</p>
        {item.lineDiscount > 0 && (
          <p className="text-sm text-green-600">
            - ${item.lineDiscount.toFixed(2)}
          </p>
        )}
      </div>
      <button
        onClick={() => onRemove(item.product.id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        Eliminar
      </button>
    </div>
  );
}

export default CartItemRow;
