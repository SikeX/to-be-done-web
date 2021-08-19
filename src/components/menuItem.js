import { MenuItem } from "react-contextmenu";
import {FaTrash, FaStar, FaCheckCircle} from 'react-icons/fa'

const MyMenuItem = ({ name }) => {

    const renderIcon = (name) => {
        switch (name) {
            case 'delete':{
                return <FaTrash className='text-blue-500 my-auto' />
 
            }
            case 'set important':{
                return  <FaStar className='text-red-500 my-auto' />
            }
            case 'add to my day':{
                return  <FaCheckCircle className='text-gray-500 my-auto' />
            }
        }
    }
    
    return (
        <MenuItem className='flex space-x-2 w-44 hover:bg-gray-100 px-3 py-2'>
            {renderIcon(name)}
            <span className='text-md'>{name}</span>
        </MenuItem>
    )
}

export default MyMenuItem