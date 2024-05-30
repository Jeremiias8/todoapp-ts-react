
import { useState } from 'react';
import './assets/css/styles.css'
import { Todos } from './components/Todos';
import { FilterValue, TodoTitle, type TodoCompleted, type TodoId, type Todo as TodoType } from './types';
import { TODO_FILTERS } from './consts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

  const allTodos = [
    {
      id: '1',
      title: 'Terminar curso de Midu',
      completed: false
    },
    {
      id: '2',
      title: 'Dominar hooks de React',
      completed: true
    },
    {
      id: '3',
      title: 'Deberes de Inglés y leer',
      completed: false
    },
    {
      id: '4',
      title: 'Programación diaria',
      completed: true
    },
    {
      id: '5',
      title: 'Lectura',
      completed: false
    }
  ]

const App = (): JSX.Element => {

  const [todos, setTodos] = useState(allTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL);

  const handleRemove = ({ id }: TodoId): void => {

    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const handleCompleted = (
    { id, completed }: { id: TodoId, completed: TodoCompleted }
  ): void => {

    const newTodos = todos.map(todo => {

      if (todo.id === id) {
        return {

          ...todo,
          completed

        }
      } 

      return todo
    })

    setTodos(newTodos);
  }

  const handleFilterChange = (filter: FilterValue): void => {

    setFilterSelected(filter);
  }

  const handleRemoveAllTodos = (): void => {

    // filtrado mediante el cual me devuelve solamente las tareas no completadas
    const newTodos = todos.filter(todo => !todo.completed).length
    setTodos(newTodos)

  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    
    return todo
  });

  const handleAddTodo = ({title}: TodoTitle): void => {

    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos);
  }

  return (
    <>
      <div className="todoapp">
  
        <Header saveTodo={handleAddTodo} />
        <Todos
          onToggleCompleteTodo={handleCompleted}
          borrarTodos={handleRemove}
          todos={filteredTodos} 
        />
        <Footer 
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filterSelected}
          onClearCompleted={handleRemoveAllTodos}
          handleFilterChange={handleFilterChange}
        />
      </div>
    </> 
  )
  
}

export default App
