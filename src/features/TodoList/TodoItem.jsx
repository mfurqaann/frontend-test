import { Trash2 } from "lucide-react"

const TodoItem = ({todo, handleCheckbox, handleDelete, toTitleCase}) => {
  return (
    <li key={todo.id} className="flex items-center justify-between p-4 bg-white border-gray-200 rounded border">
        <div className="flex items-center space-x-3">
                <input type="checkbox" 
                checked={todo.completed} 
                onClick={()=> handleCheckbox(todo.id)} 
                readOnly 
                className="w-5 h-5 text-blue-600 border-gray-300 rounded cursor-pointer" /> 
            <span className={todo.completed ? 'line-through text-red-400' : 'text-gray-800 font-medium'}>
              {toTitleCase(todo.title)}
            </span>
        </div>
        <div>
            <button
              className="p-2 cursor-pointer rounded-full hover:bg-red-100 transition-colors duration-200 group"
              onClick={() => handleDelete(todo.id)}
            >
              <Trash2 className="text-gray-500 group-hover:text-red-500 transition-colors duration-200" />
            </button>
        </div>
    </li>
  )
}

export default TodoItem