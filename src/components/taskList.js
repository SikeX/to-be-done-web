import {MyDay, Important, All, TaskItem } from '../components/taskItem'
import {useState, useEffect} from 'react'
import service from './service'

const TaskList = ({getTask}) => {
    const [ taskName, setTaskName ] = useState('')
    const [ taskList, setTaskList ] = useState([])

    console.log(taskList)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = service.getAll()
                const allTasks = await response
                setTaskList(allTasks.Tasks.filter(task => task.system === false))
                console.log(taskList)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    },[])

    const handleChange = (event) => {
        setTaskName(event.target.value)
    }

    const submitList = async (event) => {
        event.preventDefault()
        const task = {
            "taskName":taskName,
            "system":false,
            "taskList":[]
        }

        try {
            await service.postTaskList(task)
            setTaskList(taskList.concat(task))
            console.log(taskList)
            setTaskName('')
        } catch (err) {
            console.log(err)
        }
        
    }

    return (
        <div id='task-list' 
            className='flex flex-col content-center h-full 
            w-full mx-auto px-3 min-h-0' >
            <div className='flex flex-col h-full w-full py-3 divide-y-2 divide-solid 
            lg:text-sm divide-gray-300 min-h-0'>
                <div className='flex flex-col my-4'>
                    <MyDay getTask={getTask} /> 
                    <Important getTask={getTask} />
                    <All getTask={getTask}/>
                </div>
                <div className='flex flex-col h-full py-2 overflow-auto'>
                    {taskList.map((task,index) => <TaskItem 
                    key={index}
                    taskName={task.taskName} 
                    getTask={getTask} />)}
                </div>
            </div>
            <form className='flex h-10 lg:h-8 justify-center space-x-2 my-3 px-2' 
            onSubmit={submitList}>
                <input className='w-full focus:outline-none focus:ring
                focus: border-blue-400 focus:text-black md:bg-gray-200
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