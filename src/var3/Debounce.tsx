import { useEffect, useState } from "react";
import type { Product } from "./Task3_1_ProductSearch";
import { ProductList } from "./Task3_1_ProductSearch";

type ProductSearchProps = {
  products: Product[];
};

function Debounce({ products }: ProductSearchProps) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFiltered(
        products.filter((p) =>
          p.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 300);

    return () => clearTimeout(timer);
  }, [query, products]);

  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск..."
      />
      <ProductList items={filtered} />
    </>
  );
}

export default Debounce;