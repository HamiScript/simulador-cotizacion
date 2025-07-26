import { useState, useMemo } from "react";
import QuoteSummary from "./components/QuoteSummary";
import CategorySection from "./components/CategorySection";
import { PRODUCTS } from "./data/products";
import type { CartItem } from "./types";

const CATEGORIES = ["Hogar", "Cocina", "Jardín", "Tecnología"];

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
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-red-600">
          Minimarket Las Lomas
        </h1>
      </header>

      <div className="flex flex-col-reverse lg:flex-row gap-6">
        <aside className="w-full lg:w-1/3 order-first lg:order-none">
          <QuoteSummary
            items={cart}
            subtotal={subtotal}
            discount={totalDiscount}
            total={total}
            onRemove={handleRemove}
          />
        </aside>

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
      </div>
    </div>
  );
}

export default App;
