import TodoList from "./var1/Task1_1_TodoList";
import ProfileEditor from "./var1/Task1_2_ProfileEditor";
import { useState, useRef, Suspense } from "react";
import ClickTracker from "./var1/Task1_3_ClickTracker";
import Tooltip from "./var2/Task2_1_Tooltip";
import Parent from "./var2/Task2_2_HookOrder";
import UserCard from "./var2/Task2_3_UserCard";
import ProductSearch from "./var3/Task3_1_ProductSearch";
import ProductSearch2 from "./var3/Task3_2_ProductSearchDeferred";
import Dashboard from "./var3/Task3_3_Dashboard";
import { Skeleton } from "./var3/Task3_3_Dashboard";
import Debounce from "./var3/Debounce";

function App() {
  const [todos, setTodos] = useState([
    { text: "купить молоко", done: false, id: 1 },
    { text: "сделать домашку", done: true, id: 2 },
    { text: "выжить после укола", done: false, id: 3 },
  ]);

  const products = Array.from({ length: 20000 }, (_, i) => ({
    id: i,
    name: `Product ${i}`,
  }));

  const [varActive, setVar] = useState(1);

  const [userId, setUserId] = useState(1);

  const hanldeDelete = (i: number) => {
    setTodos(todos.filter((_, index) => index !== i));
  };

  const handleToggle = (id: number) => {
    setTodos(todos.map((n) => (n.id === id ? { ...n, done: !n.done } : n)));
  };

  const targetRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      {varActive === 1 && (
        <>
          <TodoList
            todos={todos}
            onDelete={hanldeDelete}
            onToggle={handleToggle}
          />
          <button onClick={() => setUserId((id) => id + 1)}>change user</button>
          <ProfileEditor key={userId} userId={userId} />
          <ClickTracker />
        </>
      )}

      {varActive === 2 && (
        <>
          <button ref={targetRef} style={{ marginTop: 100 }}>
            hover on me
          </button>
          <Tooltip text="hello " targetRef={targetRef} />
          <Parent />

          <div>
            <h4>задание 2.2</h4>
            <p>Parent render</p>
            <p>Child: render - внутри реакт видит чайлд и рендерит</p>
            <p>
              Child: useLayoutEffect - после коммита сначала дети
              <br />
              (тк родители могут зависеть от результата эфекта ребенка)
            </p>
            <p>Parent: useLayoutEffect - потом родители</p>
            <p>Child: useEffect - после отрисовки сначала дети</p>
            <p> parent: useEffect - потом родители</p>

            <p>
              cleanup при первом mount не срабатывает <br /> cleanup запускается
              только при размонтировании компонента <br />
              или перед следующим запуском эффекта в дев режиме включается
              strict mode, то есть реакт специально
              <br />
              монтирует компонет и сразу размонтирует, потом монтирует снова
              поэтому каждый эффект будет продублирован и будут клинапы, потому
              что элемент размонтировался
            </p>
          </div>

          <UserCard userId={userId} />
        </>
      )}

      <button onClick={() => setVar(1)}>variant1</button>
      <button onClick={() => setVar(2)}>change to variant2</button>
      <button onClick={() => setVar(3)}>change to variant3.1</button>
      <button onClick={() => setVar(4)}>change to variant3.2</button>
      <button onClick={() => setVar(5)}>change to variant3.3</button>
      <button onClick={() => setVar(6)}>change to debounce</button>

      {varActive === 3 && <ProductSearch products={products} />}
      {varActive === 4 && <ProductSearch2 products={products} />}
      {varActive === 5 && (
        <Suspense fallback={<Skeleton />}>
          <Dashboard />
        </Suspense>
      )}
      {varActive === 6 && <Debounce products={products}/>}

    </>
  );
}

export default App;
