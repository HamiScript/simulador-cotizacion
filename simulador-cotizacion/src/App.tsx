import { useState, useMemo } from "react";
import QuoteSummary from "./components/QuoteSummary";
import CategorySection from "./components/CategorySection";
import { PRODUCTS } from "./data/products";
import type { CartItem } from "./types";
import CATEGORIES from "./data/categories";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  function calculateCartItem(
    product: (typeof PRODUCTS)[number],
    quantity: number
  ): CartItem {
    const freeItems =
      product.promotion === "3x2" ? Math.floor(quantity / 3) : 0;
    const lineDiscount = freeItems * product.price;
    const lineTotal = quantity * product.price - lineDiscount;
    return { product, quantity, lineTotal, lineDiscount };
  }

  function handleAdd(productId: string, qty: number) {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    setCart((prev) => {
      const exists = prev.find((item) => item.product.id === productId);
      if (exists) {
        const updatedQty = exists.quantity + qty;
        return prev.map((item) =>
          item.product.id === productId
            ? calculateCartItem(product, updatedQty)
            : item
        );
      }
      return [...prev, calculateCartItem(product, qty)];
    });
  }

  function handleRemove(productId: string) {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  }

  const subtotal = useMemo(
    () => cart.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    [cart]
  );
  const totalDiscount = useMemo(
    () => cart.reduce((sum, i) => sum + i.lineDiscount, 0),
    [cart]
  );
  const total = subtotal - totalDiscount;

  return (
    <div className="min-h-screen bg-neutral-50 p-6 font-sans text-gray-700">
      <header className="bg-red-600 text-white py-4 px-6 shadow-md mb-6 flex items-center justify-between rounded-lg">
        <div className="flex items-center gap-3">
          <img
            src="../public/logo.png"
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <h1 className="text-2xl font-bold tracking-wide">
            Minimarket Las Lomas
          </h1>
        </div>
        <div className="text-sm md:text-base font-medium">
          Total: <span className="font-bold">${total.toFixed(2)}</span>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Contenido principal (categorías) */}
        <main className="flex-1 space-y-8">
          {CATEGORIES.map((cat) => (
            <CategorySection
              key={cat}
              category={cat}
              products={PRODUCTS.filter((p) => p.category === cat)}
              onAdd={handleAdd}
            />
          ))}
        </main>

        {/* Panel lateral: carrito a la derecha */}
        <aside className="w-full lg:w-80 bg-blue-50 p-4 rounded-xl shadow-lg h-[90vh] overflow-y-auto sticky top-4">
          <QuoteSummary
            items={cart}
            subtotal={subtotal}
            discount={totalDiscount}
            total={total}
            onRemove={handleRemove}
          />
        </aside>
      </div>
    </div>
  );
}

export default App;
