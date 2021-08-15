const TodoItem = ({name}) => {
    return (
        <div className='hover:bg-yellow-200 bg-gray-100
        rounded-lg shadow-md px-3 py-2'>
            <div className='flex content-center space-x-2'>
                <input className='border rounded-lg border-yellow-500 my-auto' 
                type='checkbox' />
                <label>{name}</label>
            </div>
        </div>
    )
}

export default TodoItem