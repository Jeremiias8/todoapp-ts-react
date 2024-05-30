
import '../assets/css/styles.css';
import { type TodoId, type Todo as TodoType } from '../types';

interface Props extends TodoType {
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
    borrarTodos: ({ id }: TodoId) => void
    completarTodos: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, borrarTodos, onToggleCompleteTodo }) => {

    {/* const removeItem = (id: string) => {

        let filtrado = Todo.filter(todo => todo.id !== id);
        console.log(filtrado);
    } */}

    const handleChangeCheckbox = 
        (event: React.ChangeEvent<HTMLInputElement>): void => {

            onToggleCompleteTodo({
                id,
                completed: event.target.checked
            })
            event.preventDefault();
            // React.ChangeEvent<HTMLInputElement>
    }

    return (

        <div className="view">
            <input 
                type="checkbox" 
                className="toggle"
                checked={completed}
                onChange={handleChangeCheckbox}
            />
            <label>{title}</label>

            <button 
                className="destroy"
                onClick={() => {
                    borrarTodos({ id })
                }}
            >
                X
            </button>
        </div>

    )

}