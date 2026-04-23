import TodoList from "./var1/Task1_1_TodoList";
import ProfileEditor from "./var1/Task1_2_ProfileEditor";
import { useState, useRef } from "react";
import ClickTracker from "./var1/Task1_3_ClickTracker";
import Tooltip from "./var2/Task2_1_Tooltip";


function App() {
  const [todos, setTodos] = useState([
    { text: "купить молоко", done: false, id: 1 },
    { text: "сделать домашку", done: true, id: 2 },
    { text: "выжить после укола", done: false, id: 3 },
  ]);

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
        <button ref={targetRef} style={{ marginTop: 100 }}>hover on me</button>
          <Tooltip 
          text = 'hello ' 
          targetRef={targetRef}
          />
        </>
      )}

      <button onClick={() => setVar(1)}>variant1</button>
      <button onClick={() => setVar(2)}>change to variant2</button>
      <button onClick={() => setVar(3)}>change to variant3</button>
    </>
  );
}

export default App;
