import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { fetchTodos } from './TodoService';
import { CircleArrowUp } from 'lucide-react';

const TodoList = ({scrollTo, counterRef}) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchTodos()
            const firstFiveData = data.slice(0, 5)
            setTodos(firstFiveData)
        }
        fetchData()
    }, [])

    const handleCheckbox = (id) => {
        setTodos(prevValue =>
            prevValue.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDelete = (id) => {
        const updatedList = todos.filter((item) => item.id !== id)
        setTodos(updatedList)
    }

     const toTitleCase = (str) => {
        return str
            .toLowerCase()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

  return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full min-h-[600px] max-w-2xl bg-white rounded-xl shadow-lg p-6">
                <h1 className='text-3xl font-bold text-center mb-3'>Task 3</h1>
                <h1 className="text-2xl font-bold text-center mb-6">Todo List</h1>
                <ul className="space-y-4">
                    {todos.length > 0 ? todos.map((todo) => (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo}
                            handleCheckbox={handleCheckbox}
                            handleDelete={handleDelete}
                            toTitleCase={toTitleCase}
                        />
                    )) : <p className='text-center text-gray-400'>No data found</p>}
                </ul>
            </div>
            <button
                onClick={() => scrollTo(counterRef)}
                className="absolute cursor-pointer right-10 bottom-10 mt-8 px-4 py-2 bg-black text-white rounded"
                    >
                    <CircleArrowUp />
                </button>
        </div>
    )
}

export default TodoList