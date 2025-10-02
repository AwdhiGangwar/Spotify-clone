import React from 'react'
import { Policies } from '../../assets/assets'
const SecurityPolicy = () => {
  return (
  <>
  <div>  <div className='px-4 py-7 mx-4  border-b-2 border-neutral-700 flex justify-between items-center'>
       <div className='flex'> {Policies.map((feature,index)=>(
          <div className=' flex flex-col mx-4 px-4 text-neutral-100' key={index}><div className='font-bold text-md'>{feature.title}</div>
          <div className='  flex flex-col'>{feature.features.map((item,index)=>(
            <a className='text-md py-1 font-semibold text-neutral-500 hover:underline hover:text-neutral-100' href={item.href}>{item.text}</a>
          ))}</div></div>
        ))}</div>
        <div className='flex -translate-y-9 mx-2'>
        <a className='px-2 py-2 bg-neutral-800 rounded-full mx-1 h-10 w-10 flex justify-center items-center hover:bg-neutral-600'><i class="fa-brands fa-twitter"></i></a>
        <a className='px-2 py-2 bg-neutral-800 rounded-full mx-1 h-10 w-10 flex justify-center items-center hover:bg-neutral-600'><i class="fa-brands fa-instagram"></i></a>
        <a className='px-2 py-2 bg-neutral-800 rounded-full mx-1 h-10 w-10 flex justify-center items-center hover:bg-neutral-600'><i class="fa-brands fa-facebook"></i></a></div>
    </div>
       <div className='px-2 text-neutral-500 mx-4 my-4 min-h-[50px] text-sm'><i class="fa-solid fa-c"></i> 2025 Spotify AB</div>
    </div>
  </>
  )
}

export default SecurityPolicy
