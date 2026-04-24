import { useState, useTransition } from "react";

type ProductSearchProps = {
  products: Product[];
};

export type Product = {
  name: string;
  id: number;
};

type ProductListProps = {
  items: Product[];
};

export function ProductList({ items }: ProductListProps) {
  return (
    <ul>
      {items.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}

function ProductSearch({ products }: ProductSearchProps) {
  const [isPending, startTransition] = useTransition();

  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(products);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);

    // ложим обновление списка в useTransiton для того чтобы он обновлялся не приоритетно. а инпут должен обновляться сразу
    // поэтому с ним ничего не делаем, чтобы пользователь не чувствовал как будто он лагает
    startTransition(() => {
      setFiltered(
        products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase())),
      );
    });
  };
  return (
    <>
      <input value={query} onChange={handleChange} placeholder="Поиск..." />
      {isPending && <p>loading...</p>}
      <ProductList items={filtered} /> 
    </>
  );
}

export default ProductSearch;
