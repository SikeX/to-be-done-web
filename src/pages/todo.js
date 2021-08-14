import Banner from '../components/banner'
import TaskList from '../components/taskList'
import TaskContent from '../components/taskContent'
import TaskStat from '../components/taskStat'
import Div100vh from 'react-div-100vh'

const Todo = () => {
    return (
        <Div100vh className='flex'>
            <div className='flex flex-col h-full w-full bg-blue-100
            md:bg-white md:w-1/5'>
                <Banner />
                <TaskList />
            </div>
            <TaskContent />
            <TaskStat />
        </Div100vh>
    )
}

export default Todo