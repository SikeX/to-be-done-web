import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const SignUp = ({change}) => {

    return (
        <div className='flex flex-col m-auto px-5 py-5 bg-white 
                content-center rounded-xl shadow-lg'>
            <div className='mx-auto font-semibold'>Sign up</div>
            <form className='flex flex-col py-2 space-y-2 text-gray-500'>
                    <div>username</div>
                    <input className='border border-blue-400 rounded-md py-1 px-2' 
                        type='text'/>
                    <div>password</div>
                    <input className='border border-blue-400 rounded-md py-1 px-2' 
                        type='password' />
                    <div>confirm password</div>
                    <input className='border border-blue-400 rounded-md py-1 px-2' 
                        type='password' />
                    <div className='flex justify-between pt-2'>
                        <button className='hover:bg-blue-700 hover:text-white border border-black bg-white-300 
                        rounded-md text-black px-2 py-1'
                        onClick={change}
                        >Sign up</button>
                    </div>
                </form>
        </div>
    )
}

const SignIn = ({change}) => {
    return (
        <div className='flex flex-col m-auto px-5 py-5 bg-white 
        content-center rounded-xl shadow-lg'>
            <div className='mx-auto font-semibold'>Sign in</div>
                <form className='flex flex-col py-2 space-y-2 text-gray-500'>
                    <div>username</div>
                    <input className='border border-blue-400 rounded-md py-1 px-2' 
                        type='text'/>
                    <div>password</div>
                    <input className='border border-blue-400 rounded-md py-1 px-2' 
                        type='password' />
                    <div className='flex content-center'>
                        <input className='border border-blue-400 my-auto' type='checkbox' />
                        <label className='text-blue-500 text-sm px-1'>Remenber me</label>
                    </div>
                    <div className='flex justify-between pt-2'>
                        <button className='transition duration-500 hover:shadow-lg hover:bg-blue-700 hover:text-white bg-green-300 
                        rounded-md text-black px-3 py-1'><Link to='/todo'>Sign In</Link></button>
                        <button className='hover:bg-blue-700 hover:text-white border border-black bg-white-300 
                        rounded-md text-black px-2 py-1'
                        onClick={change}
                        >Sign up</button>
                    </div>
                </form>
        </div>
    )
}

const Login = () => {
    const [signup,setSignup] = useState(false)

    const changeSign = () => setSignup(!signup)
    return (
        <div id='loginpage' className='min-h-screen h-screen w-full flex flex-col content-center py-20 md:py-10'>
            <div className='flex justify-center space-x-2'>
                <div>
                    <img className='max-w-full h-auto' src="https://img.icons8.com/office/40/000000/tomato.png" alt='tomato' />
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='font-serif font-bold text-green-600 text-xl'
                        style={{ 'fontFamily': 'JelleeBold' }}>ToBeDone</div>
                </div>
            </div>

            <div className='mx-auto mt-3 font-semibold'>Get Everything Organized</div>
            
            {signup ? <SignUp change={changeSign} /> : <SignIn change={changeSign} />}

            <div className='text-center whitespace-normal text-sm mx-auto px-3 py-5 text-gray-500'>
                If you have any quesion or suggestion please send email to
                <a className='hover:underline text-blue-500' href='mailto:yoloxzx@outlook.com'> yoloxzx@outlook.com</a>
            </div>
        </div>
    )
}

export default Login