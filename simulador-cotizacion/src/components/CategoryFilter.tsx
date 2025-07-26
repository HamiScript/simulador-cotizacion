// src/components/CategoryFilter.tsx

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (cat: string) => void;
}

function CategoryFilter({
  categories,
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="mb-4">
      <label htmlFor="category-select" className="sr-only">
        Filtrar por categoría
      </label>
      <select
        id="category-select"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2 border rounded bg-white hover:border-gray-600 focus:outline-none"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
export default CategoryFilter;
