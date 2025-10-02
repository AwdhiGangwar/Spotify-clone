import React from 'react'

const Login = () => {
    return (

        <>
            <div className=' mx-[25%] my-8 bg-neutral-900 flex justify-center flex-col items-center rounded-lg '>
                <div className='flex flex-col justify-center items-center'>

                    <div className='mt-7 mb-2 text-4xl'>
                        <i class="fa-brands fa-spotify"></i>
                    </div>
                    <div className='text-3xl font-bold'>
                        Log in to Spotify
                    </div>
                    <div className='flex flex-col my-10 border-b-2 border-neutral-500 pb-14 '>
                        <div className='flex my-1 justify-evenly items-center border-2 border-neutral-600 hover:border-neutral-400 rounded-3xl h-[45px] w-[340px]'><button className='flex font-bold'><div className='-translate-x-14 text-xl'><i class="fa-brands fa-google"></i></div>Continue with Google</button></div>
                        <div className='flex my-1 justify-evenly items-center border-2 border-neutral-600 hover:border-neutral-400 rounded-3xl h-[45px] w-[340px]'><button className='flex font-bold'><div className='-translate-x-14 text-xl'><i class="fa-brands fa-facebook"></i></div>Continue with Facebook</button></div>
                        <div className='flex my-1 justify-evenly items-center border-2 border-neutral-600 hover:border-neutral-400 rounded-3xl h-[45px] w-[340px]'><button className='flex font-bold'><div className='-translate-x-14 text-xl'><i class="fa-brands fa-apple"></i></div>Continue with Apple</button></div>
                        <div className='flex my-1 justify-evenly items-center border-2 border-neutral-600 hover:border-neutral-400 rounded-3xl h-[45px] w-[340px]'><button className='flex font-bold'>Continue with phone number</button></div>
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            <p className='font-bold text-sm pl-2'>Email or username</p>
                            <input className='h-[45px] w-[340px] rounded-sm border-2 px-2 py-4 border-neutral-700 hover:border-neutral-400 text-sm my-2' type="text" placeholder='Email or username' />
                        </div>
                        <div>
                            <p className='font-bold text-sm pl-2 '>Password</p>
                            <input className='h-[45px] w-[340px] rounded-sm border-2 px-2 py-4 text-sm my-2 border-neutral-700 hover:border-neutral-400 ' type="text" placeholder='Password' />
                        </div>
                        <button className='w-[340px] h-[45px] rounded-3xl flex justify-center items-center text-neutral-950 bg-green-600 mt-4 mb-10 font-bold hover:bg-green-500 '>Log in</button>
                    </div>
                    <nav className='underline font-semibold hover:text-green-600'><a href="">Forgot your password?</a></nav>
                    <div className='flex mt-10 mb-10'>
                        <p className='text-neutral-400'>Don't have an account?</p>
                        <a className='underline hover:text-green-600 pl-3 ' href=""> Sign up for Spotify.</a>
                    </div>
                </div>
            </div>
            <div className='my-3 h-[90px] flex justify-center items-center text-neutral-400 w-full text-xs bg-neutral-900'>
                <p>This site is protected by reCAPTCHA and the Google <span className='underline hover:font-bold text-neutral-300'><a href="">Privacy Policy</a></span> and <span className='underline hover:font-bold text-neutral-300'><a href="">Terms and Service</a></span> apply.</p>
            </div>
        </>
    )
}

export default Login
