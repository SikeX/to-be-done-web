import { useState } from 'react'
import Banner from '../components/banner'
import TaskList from '../components/taskList'
import TaskContent from '../components/taskContent'
import TaskStat from '../components/taskStat'
import Div100vh from 'react-div-100vh'

const Todo = () => {
    
    const [taskName, setTaskName] = useState('My day')

    const getTask = (name) => {
        setTaskName(name)
    }

    return (
        <Div100vh className='relative flex w-screen'>
            <div className='flex flex-col h-full w-full bg-blue-100
            md:bg-white md:w-1/3 lg:w-1/6'>
                <Banner />
                <TaskList 
                    getTask = {getTask} />
            </div>
            <TaskContent taskName = {taskName} />
            <TaskStat />
        </Div100vh>
    )
}

export default Todo