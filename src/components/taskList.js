import {MyDay, Important, All, TaskItem } from '../components/taskItem'
import {useState} from 'react'

const TaskList = () => {
    const [ taskName, setTaskName ] = useState('')
    const [ taskList, setTaskList ] = useState([])

    const handleChange = (event) => {
        setTaskName(event.target.value)
    }

    const submitList = (event) => {
        event.preventDefault()
        setTaskList(taskList.concat(taskName))
        setTaskName('')
    }

    return (
        <div id='task-list' 
            className='flex flex-col content-center h-4/5 md:h-full 
            w-full mx-auto px-3 min-h-0' >
            <div className='flex flex-col h-full w-full py-3 divide-y-2 divide-solid 
            text-sm divide-gray-300 min-h-0'>
                <div className='flex flex-col my-4'>
                    <MyDay /> 
                    <Important />
                    <All />
                </div>
                <div className='flex flex-col h-full py-2 overflow-auto'>
                    {taskList.map(task => <TaskItem taskName={task} />)}
                </div>
            </div>
            <form className='flex justify-center space-x-2 mx-auto my-3 px-2' 
            onSubmit={submitList}>
                <input className='w-full focus:outline-none focus:ring
                focus: border-blue-400 focus:text-black bg-gray-200
                text-gray-400 rounded-md shadow-md
                px-2' 
                placeholder='Add List'
                value={taskName}
                onChange={handleChange} />
                <button className='hover:bg-red-600 bg-red-300 rounded-md 
                shadow-md px-2 py-1'
                type='submit'>+</button>
            </form>
        </div>
    )
}

export default TaskList