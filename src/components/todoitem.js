import {useState} from 'react'
import { ContextMenu, ContextMenuTrigger } from "react-contextmenu";
import MyMenuItem from './menuItem'

const TodoItem = ({name,done, important}) => {

    const [check, setCheck] = useState(done)
    const [importance, setImportance] = useState(important)

    console.log(check)
    console.log(importance)

    return (
        <>
        <ContextMenuTrigger id='todoMenu'>
            <div className='flex hover:bg-gray-200 bg-gray-100
            rounded-lg shadow-md px-4 py-2 content-center'>
                <div id='checklist' className='flex w-full content-center space-x-3'>
                    <input id={name} 
                    className='border rounded-lg border-yellow-500 my-auto' 
                    type='checkbox'
                    defaultChecked={check}
                    onChange={() => {setCheck(!check)}} />
                    <label htmlFor={name} data-content={name} className='text-lg'>{name}</label>
                </div>
                <svg t="1629288096179" 
                onClick={() => {setImportance(!importance)}}
                className="my-auto" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17874" width="2rem" height="2rem"><path d="M920.32 426.666667A70.826667 70.826667 0 0 0 853.333333 375.466667h-209.066666l-64.426667-197.973334a71.253333 71.253333 0 0 0-135.68 0L379.733333 375.466667H170.666667a71.253333 71.253333 0 0 0-42.666667 128l170.666667 123.306666-64 198.4a71.253333 71.253333 0 0 0 109.653333 79.786667L512 782.506667l170.666667 122.453333a72.106667 72.106667 0 0 0 42.666666 13.653333 73.386667 73.386667 0 0 0 42.666667-13.653333 71.253333 71.253333 0 0 0 25.6-79.786667L725.333333 626.773333l170.666667-122.026666a71.68 71.68 0 0 0 24.32-78.08z" p-id="17875" data-spm-anchor-id="a313x.7781069.0.i21" className="selected fill-current hover:text-yellow-400"></path><path d="M722.346667 918.613333a72.106667 72.106667 0 0 1-42.666667-13.653333L512 782.506667l-168.533333 122.453333a71.253333 71.253333 0 0 1-109.653334-79.786667L298.666667 626.773333l-170.666667-122.026666a71.253333 71.253333 0 0 1 42.666667-128h209.066666l64.426667-197.973334a71.253333 71.253333 0 0 1 135.68 0L644.266667 375.466667H853.333333a70.826667 70.826667 0 0 1 66.986667 51.2 71.68 71.68 0 0 1-25.6 80.213333L725.333333 626.773333l64 198.4a71.253333 71.253333 0 0 1-25.6 79.786667 73.386667 73.386667 0 0 1-41.386666 13.653333zM512 693.76a72.106667 72.106667 0 0 1 42.666667 13.653333L695.893333 810.666667 640 643.84a71.68 71.68 0 0 1 26.026667-80.213333L810.666667 460.8h-176.64a72.106667 72.106667 0 0 1-67.84-49.066667L512 244.48l-54.186667 166.826667a71.68 71.68 0 0 1-67.84 49.493333H213.333333l142.08 103.253333A70.826667 70.826667 0 0 1 384 643.84L328.106667 810.666667 469.333333 707.413333a72.106667 72.106667 0 0 1 42.666667-13.653333z m341.333333-232.96z m-353.706666-256z" fill="#13227a" p-id="17876" data-spm-anchor-id="a313x.7781069.0.i22" className="fill-current text-blue-500" ></path></svg>
            </div>
        </ContextMenuTrigger>

        <ContextMenu id='todoMenu' className='flex flex-col bg-gray-200 rounded-md shadow-lg'>
            <MyMenuItem name='set important' />
            <MyMenuItem name='delete' />
            <MyMenuItem name='add to my day' />
            
        </ContextMenu>
        </>
    )
}

export default TodoItem