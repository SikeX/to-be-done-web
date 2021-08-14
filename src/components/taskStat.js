const TaskStat = () => {
    return (
        <div className='hidden md:flex flex-col h-full content-center w-1/3'>
            <div className='flex bg-gray-200 justify-end px-2 py-1'>
            <svg t="1628764611015" className="fill-current hover:text-blue-500" viewBox="0 0 1024 1024" version="1.1" 
            xmlns="http://www.w3.org/2000/svg" p-id="4876" width="25" height="25"><path d="M257.493333 799.573333A382.549333 382.549333 0 0 0 512 896a382.549333 382.549333 0 0 0 254.506667-96.426667C754.005333 754.645333 664.277333 725.333333 512 725.333333c-152.32 0-242.005333 29.312-254.506667 74.24z m-61.184-68.906666C244.309333 667.221333 357.12 640 512 640c154.88 0 267.690667 27.221333 315.733333 90.666667a384 384 0 1 0-631.424 0zM512 981.333333C252.8 981.333333 42.666667 771.2 42.666667 512S252.8 42.666667 512 42.666667s469.333333 210.133333 469.333333 469.333333-210.133333 469.333333-469.333333 469.333333zM341.333333 426.666667c0-95.744 67.413333-170.666667 170.666667-170.666667 102.997333 0 170.666667 82.005333 170.666667 179.2 0 139.946667-76.032 204.8-170.666667 204.8-95.573333 0-170.666667-67.114667-170.666667-213.333333z m85.333334 0c0 96.853333 34.901333 128 85.333333 128 50.261333 0 85.333333-29.952 85.333333-119.466667 0-53.333333-33.450667-93.866667-85.333333-93.866667-54.016 0-85.333333 34.816-85.333333 85.333334z" p-id="4877"></path></svg>
            </div>
            <div id='task-statistics' className='flex flex-col h-full 
            content-center px-3 py-6'>
                <div className='text-xl text-blue-900 mx-auto py-2'>Focus Time</div>
                <div className='bg-gray-200 h-1/2 rounded-lg shadow-md'>
                    <div className='flex flex-col p-2'>
                        <div className='flex justify-center space-x-2'>
                            <button className='rounded-md bg-blue-100 shadow-md w-1/2 px-2 py-1'>Day</button>
                            <button className='rounded-md bg-blue-100 shadow-md w-1/2 px-2 py-1'>Week</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskStat