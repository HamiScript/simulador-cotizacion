/* src/components/QuoteSummary.tsx */
import type { CartItem } from "../types";
import CartItemRow from "./CartItemRow";

interface QuoteSummaryProps {
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  onRemove: (id: string) => void;
}

function QuoteSummary({
  items,
  subtotal,
  discount,
  total,
  onRemove,
}: QuoteSummaryProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 text-sm space-y-4">
      <h2 className="text-xl font-semibold">Detalle de Cotización</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">No hay productos agregados.</p>
      ) : (
        items.map((item) => (
          <CartItemRow key={item.product.id} item={item} onRemove={onRemove} />
        ))
      )}
      <div className="border-t pt-4 space-y-1">
        <p>
          Subtotal: <span className="font-medium">${subtotal.toFixed(2)}</span>
        </p>
        <p>
          Descuentos:{" "}
          <span className="font-medium text-green-600">
            - ${discount.toFixed(2)}
          </span>
        </p>
        <p>
          Total: <span className="font-bold text-lg">${total.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}

export default QuoteSummary;
