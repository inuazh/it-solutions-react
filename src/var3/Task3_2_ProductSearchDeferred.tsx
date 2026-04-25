import { useDeferredValue, useState } from "react";
import type { Product } from "./Task3_1_ProductSearch";
import { ProductList } from "./Task3_1_ProductSearch";

type ProductSearch2 = {
    products: Product[];
}



// import { ProductList } from "ui-library"; 
// нельзя менять (по смыслу я не менял я просто закоментировал ахах)


function ProductSearch2({ products }: ProductSearch2) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query)
  const isPending = query !== deferredQuery // загрузка отрабатывает если чтение значения откладывается 
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(deferredQuery.toLowerCase()),
  );
  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск..."
      />
       {isPending && <p>loading...</p>}
      <ProductList items={filtered} />
    </>
  );
}

//usetransition от useedferredvalue отличается главным образом тем что usetransition работает с обновлениями и отмечает 
// их как прерываемыми и делает низкоприоритетными в то время как useDeferredValue тоже делает низкоприоритетными задачи,
//  однако работает со значениями то есть есть значение, делаем рендер - ui показывает старое значение, затем в низкоприоритетеных задачах отрабатывает 
// useDeferredValue и отдает измененное значение то есть значение обновляется, но с задержкой из-за приоритета

export default ProductSearch2