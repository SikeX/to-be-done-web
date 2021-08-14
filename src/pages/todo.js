import Banner from '../components/banner'
import TaskList from '../components/taskList'
import TaskContent from '../components/taskContent'
import TaskStat from '../components/taskStat'

const Todo = () => {
    return (
        <div className='flex h-full'>
            <div className='flex flex-col h-screen w-full bg-blue-100
            md:bg-white md:w-1/5'>
                <Banner />
                <TaskList />
            </div>
            <TaskContent />
            <TaskStat />
        </div>
    )
}

export default Todo