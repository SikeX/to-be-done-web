import TodoItem from '../components/todoitem'

const TaskContent = () => {
    return (
        <div id='task-content'
            className='hidden md:flex flex-col h-full w-full bg-indigo-200 py-4 px-10'>
            <div className='text-2xl py-4'>My day</div>
            <div className='flex flex-col h-full space-y-2'>
                <TodoItem todoName='Math' />
                <TodoItem todoName='English' />
                <TodoItem todoName='Deep learning' />
                <TodoItem todoName='haha' />
            </div>
            <div className='flex space-x-2 my-2'>
                <input className='w-full focus:outline-none focus:ring
                    focus: border-blue-400 focus:text-black
                    text-gray-400 rounded-md shadow-md
                    px-2' 
                    placeholder='Add List' />
                <button className='hover:bg-red-600 bg-red-300 rounded-md 
                    shadow-md px-2 py-1'>+</button>
            </div>
        </div>
    )
}

export default TaskContent