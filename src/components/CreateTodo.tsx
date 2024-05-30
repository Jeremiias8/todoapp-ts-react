import { useState } from "react"
import { type TodoTitle } from "../types"
import '../assets/css/styles.css'

interface Props {
    saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>): 
    void => {

        event.preventDefault();
        saveTodo({ title: inputValue })
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>

            <input 
                className="new-todo"
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value) }}
                placeholder="¿Qué tarea quieres agregar?"
                autoFocus
            />

        </form>
    )

}

// polyfill para funcionalidad en browsers que no soporten la function randomUUID()
window.crypto.randomUUID = window.crypto.randomUUID || function () {

    const crypto = window.crypto || window.msCrypto
    const rnds8 = new Uint8Array(16)
    
    return crypto.getRandomValues(rnds8).reduce(function (result, value) {

        return result + value.toString(16).padStart(2, '0')
    }, '')

}