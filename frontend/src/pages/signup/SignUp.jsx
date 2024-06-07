import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
import { FaGithub } from 'react-icons/fa'

const SignUp = () => {

    const [inputs,setInputs ] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '' 
    })

    const {loading, signup} = useSignup()

    const handleCheckboxChange = (gender) =>{
        setInputs({...inputs, gender})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    <span className='text-blue-500'>ChatApp </span>
                    <span className='text-zinc-300'>SignUp </span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2 mt-4'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type='text' placeholder='Enter full name' className='w-full input input-bordered h-10' 
                            value={inputs.fullName}
                            onChange={(e) => setInputs({...inputs,fullName: e.target.value})}
                        
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'
                            value={inputs.username}
                            onChange={(e) => setInputs({...inputs,username: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter password'
                            className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs,password: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Confirm password'
                            className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs,confirmPassword: e.target.value})}
                        />
                    </div>

                    {/* <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/> */}

                    <Link to={'/login'} className='text-sm hover:underline hover:text-blue-600 mt-6 mb-2 inline-block' href='#'>
                        Already have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2'
                        disabled={loading}
                        >
                            {loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}
                        </button>
                    </div>
                    <div className='flex items-center justify-center mt-6'>
                        <a href='https://github.com/chorok5' target='_blank' rel='noopener noreferrer' className='flex items-center text-sm text-gray-600 hover:text-blue-600'>
                            <FaGithub className='mr-2' size={20} />
                            chorok5
                        </a>
                    </div>
                </form>

            </div>


            </div>
    )
}

export default SignUp


// STARTER CODE FOR THIS SingUp FILE: 

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const SignUp = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     SignUp
//                     <span className='text-blue-500'> ChatApp</span>
//                 </h1>
//                 <form>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Full Name</span>
//                         </label>
//                         <input type='text' placeholder='Enter full name' className='w-full input input-bordered h-10' />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Username</span>
//                         </label>
//                         <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10' />
//                     </div>
//                     <div>
//                         <label className='label'>
//                             <span className='text-base label-text'>Password</span>
//                         </label>
//                         <input
//                             type='password'
//                             placeholder='Enter password'
//                             className='w-full input input-bordered h-10'
//                         />
//                     </div>

//                     <div>
//                         <label className='label'>
//                             <span className='text-base label-text'>Confirm Password</span>
//                         </label>
//                         <input
//                             type='password'
//                             placeholder='Confirm password'
//                             className='w-full input input-bordered h-10'
//                         />
//                     </div>

//                     <GenderCheckbox />

//                     <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                         Already have an account?
//                     </a>

//                     <div>
//                         <button className='btn btn-block btn-sm mt-2 border border-slate-700'>SignUp</button>
//                     </div>

//                 </form>

//             </div>


//             </div>
//     )
// }

// export default SignUp