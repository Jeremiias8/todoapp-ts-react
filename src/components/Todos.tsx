
import '../assets/css/styles.css';
import { Todo as TodoType, type TodoId, type ListOfTodos 
} from "../types"
import { Todo } from "./Todo"

interface Props {
    todos: ListOfTodos
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
    borrarTodos: ({ id }: TodoId) => void
}
 
export const Todos: React.FC<Props> = ({ todos, borrarTodos, onToggleCompleteTodo }) => {

    return (
        <ul className="todoapp-list">
            {todos.map(todo => (
                <li key={todo.id}
                    className={
                        `${todo.completed} ? 'completed' : ''`
                }>
                    <Todo 
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onToggleCompleteTodo={onToggleCompleteTodo}
                        borrarTodos={borrarTodos}
                    />
                </li>
            ))}
        </ul>
    )

}