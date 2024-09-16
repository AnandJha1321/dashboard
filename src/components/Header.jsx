import React from 'react'
import Questions from './Questions'
import RightBar from './RightBar'

const Header = () => {
  
  return (
    <div className='flex flex-col ml-[265px] w-full'>
      <div className='w-full h-[100px] bg-[#090A10] ml-[] flex items-center'>
      <div className='flex flex-col w-full'>
        
        {/* Header */}
        <div className='flex items-center justify-between h-[56px] bg-[#090a10] px-10  '>
          
          {/* Search Bar */}
          <div className='flex items-center w-[60%]'>
            <input
              type='text'
              placeholder= "🔍 Search anything globally"
              className='w-[600px] h-[56px] bg-[#0e1116] text-[#7B8EC8] text-[16px] pl-4 rounded-[10px] 
              focus:outline-none focus:ring-2 focus:ring-[#2b2d35] ml-[200px] font-[inter]'
            />
          </div>
          
          {/* Icons Section */}
          <div className='flex items-center space-x-4'>
            {/* Moon Icon */}
            <div className='text-[#ffa500] text-2xl cursor-pointer'>
              {/* Add your moon icon here, it can be a <svg> or <img> */}
              🌙
            </div>
            
            {/* Profile Logo */}
            <div className='h-[40px] w-[40px]'>
            <img 
                src="src/assets/avatar.png" 
                alt="logo"
                height={42}
                width={42}

                />
            </div>
          </div>
        </div>
      </div>
     </div>
      <div className='flex space-x-20 min-h-screen'>
         <Questions />
         <RightBar />
      </div>
    </div>
  )
}

export default Header


