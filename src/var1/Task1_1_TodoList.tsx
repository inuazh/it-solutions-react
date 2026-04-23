type Todo = {
  text: string;
  done: boolean;
  id: number;
};

type TodoListProps = {
  todos: Todo[];
  onDelete: (index: number) => void;
  onToggle: (id: number)=> void;
};

function TodoList({ todos, onDelete, onToggle }: TodoListProps) {
  return (

    <ul>
      {todos.map((todo: Todo, index) => (
    //         баг 1 - при удалении элемента индексы смещаются таким образом что реакт путает элементы местами
    //           fix используем idт
        <li key={todo.id}>
          {/* defaultChecked - неуправляемый инпут, у нас переиспользуемые элементы
                     фикс - надо использовать управляемые компоненты */}
          <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
          <span>{todo.text}</span>
          <button onClick={() => onDelete(index)}>удалить</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
