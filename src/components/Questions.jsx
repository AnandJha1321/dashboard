import React from 'react'
import Box from './Box'
import Tags from './Tags'

const Questions = () => {
  return (
    <div className='text-white mt-16 ml-6 w-[766px] min-h-screen'>
      <div className='flex flex-col gap-[30px]'>
        <div className='flex justify-between'>
          <h1 className='font-bold font-[inter] text-3xl'>All Questions</h1>
          <div className='items-center gap-[10px] p-3 bg-gradient-to-r from-[#FF7000] to-[#E2995F] h-[48px] w-[200px] rounded-lg cursor-pointer'>
             <p className='font-[500] text-[16px] leading-6 text-white font-[inter] w-full text-center'>Ask a question</p>
          </div>
        </div>
        <input
              type='text'
              placeholder= "🔍 Search anything globally"
              className='w-[766px] h-[56px] bg-gradient-to-r  from-[#0e1116] to-[#090b0e] text-[#7B8EC8] text-[16px] pl-4 rounded-[10px] 
              focus:outline-none focus:ring-2 focus:ring-[#2b2d35] font-[inter]'
            />
          <Tags />
      </div>  

      <div className='mt-4 min-h-screen'>
          <Box />
      </div>    
    </div>
  )
}

export default Questions