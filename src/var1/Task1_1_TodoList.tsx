type Todo = {
    text: string;
    done: boolean;
    id: number;
}


type TodoListProps = {
    todos: Todo[];
    onDelete: (index: number)=> void;
}

function TodoList ({todos, onDelete}: TodoListProps){
    return(

        //баг 1 - при удалении элемента индексы смещаются таким образом что реакт путает элементы местами
        // fix используем idт
        <ul>
            {todos.map((todo: Todo,index) => (
                <li key={todo.id}>
                    <input type="checkbox" defaultChecked={todo.done} />
                    <span>{todo.text}</span>
                    <button onClick={() => onDelete(index)}>удалить</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList;