import Task1_1_TodoList from "./var1/Task1_1_TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { text: "купить молоко", done: false, id: 1 },
    { text: "сделать домашку", done: true, id: 2 },
    { text: "выжить после укола", done: false, id: 3 },
  ]);
  const hanldeDelete = (i: number) => {
    setTodos(todos.filter((_, index) => index !== i));
  };
  return (
    <>
      <Task1_1_TodoList todos={todos} onDelete={hanldeDelete} />
    </>
  );
}

export default App;
