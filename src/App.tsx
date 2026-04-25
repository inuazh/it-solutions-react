import TodoList from "./var1/Task1_1_TodoList";
import ProfileEditor from "./var1/Task1_2_ProfileEditor";
import {  useState } from "react";
import ClickTracker from "./var1/Task1_3_ClickTracker";

function App() {
  const [todos, setTodos] = useState([
    { text: "купить молоко", done: false, id: 1 },
    { text: "сделать домашку", done: true, id: 2 },
    { text: "выжить после укола", done: false, id: 3 },
  ]);

  const [userId, setUserId] = useState(1);

  const hanldeDelete = (i: number) => {
    setTodos(todos.filter((_, index) => index !== i));
  };

  const handleToggle = (id: number) => {
    setTodos(todos.map((n) => (n.id === id ? { ...n, done: !n.done } : n)));
  };
  return (
    <>
      <TodoList todos={todos} onDelete={hanldeDelete} onToggle={handleToggle} />
      <button onClick={() => setUserId((id) => id + 1)}>change user</button>
      <ProfileEditor key={userId} userId={userId} />
      <ClickTracker/>
    </>
  );
}

export default App;
