import { useState } from 'react'
import TodoItem from '../components/todoitem'

const TaskContent = ({taskName, getTaskObject,allTask}) => {
    const [todoName, setTodoName] = useState('')
    const [todoList, setTodoList] = useState(allTask[taskName])

    console.log('todolist',todoList)

    const handleChange = (event) => {
        setTodoName(event.target.value)
    }
    
    const submitTodoList = (event) => {
        event.preventDefault()
        setTodoList(todoList.concat(todoName))
        getTaskObject({[taskName]:todoList})
        setTodoName('')
    }

    return (
        <div id='task-content'
            className='hidden md:flex md:w-2/3 lg:w-1/2 flex-grow flex-col h-full bg-indigo-200 
            min-h-0 py-4 px-10'>
            <div className='text-2xl py-4'>{taskName}</div>
            <div className='flex flex-col h-full space-y-2 min-h-0 overflow-y-auto px-1'>
                {todoList.map(todo => <TodoItem name={todo} />)}
            </div>
            <form className='flex space-x-2 my-2'
            onSubmit={submitTodoList}>
                <input className='w-full focus:outline-none focus:ring
                    focus: border-blue-400 focus:text-black
                    text-gray-400 rounded-md shadow-md
                    px-2' 
                    placeholder='Add List'
                    onChange={handleChange}
                    value={todoName} />
                <button className='hover:bg-red-600 bg-red-300 rounded-md 
                    shadow-md px-2 py-1'
                    type='submit'>+</button>
            </form>
        </div>
    )
}

export default TaskContent