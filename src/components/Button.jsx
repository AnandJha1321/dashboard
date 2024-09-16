import React from 'react'

const Button = ({id, name, src}) => {
  return (
    <div className='flex flex-row items-center gap-[10px] p-3 hover:bg-gradient-to-r hover:from-[#FF7000] hover:to-[#E2995F] h-[48px] w-[200px] rounded-lg cursor-pointer'>
        <img src= {src} alt="" 
        height={21.5}
        width={21.5}
        />
        <p className='font-[500] text-[16px] leading-6 text-white font-[inter] w-full '>{name}</p>
    </div>
  )
}

export default Button