// src/App.tsx
import { useState, useMemo } from "react";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import QuoteSummary from "./components/QuoteSummary";
import { PRODUCTS } from "./data/products";
import type { Product } from "./data/products";
import type { CartItem } from "./types";

function App() {
  // Estados principales
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [cart, setCart] = useState<CartItem[]>([]);

  // Filtrar productos según categoría
  const filteredProducts = useMemo<Product[]>(
    () =>
      PRODUCTS.filter(
        (p) => selectedCategory === "Todas" || p.category === selectedCategory
      ),
    [selectedCategory]
  );

  // Función para calcular un CartItem con promoción aplicada
  function calculateCartItem(product: Product, quantity: number): CartItem {
    let freeItems = 0;
    if (product.promotion === "3x2") {
      freeItems = Math.floor(quantity / 3);
    }
    const lineDiscount = freeItems * product.price;
    const lineTotal = quantity * product.price - lineDiscount;
    return { product, quantity, lineTotal, lineDiscount };
  }

  // Manejador de "Agregar al carrito"
  function handleAdd(productId: string, qty: number) {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    setCart((prev) => {
      const exists = prev.find((item) => item.product.id === productId);
      if (exists) {
        const newQty = exists.quantity + qty;
        return prev.map((item) =>
          item.product.id === productId
            ? calculateCartItem(product, newQty)
            : item
        );
      }
      return [...prev, calculateCartItem(product, qty)];
    });
  }

  // Manejador de eliminar del carrito
  function handleRemove(productId: string) {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  }

  // Cálculos de totales
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

      <CategoryFilter
        categories={["Todas", "Hogar", "Cocina", "Jardín", "Tecnología"]}
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />

      <div className="flex flex-col lg:flex-row gap-6">
        <section className="flex-1">
          <ProductList products={filteredProducts} onAdd={handleAdd} />
        </section>

        <aside className="w-full lg:w-1/3">
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
