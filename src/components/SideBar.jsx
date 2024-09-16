import React from 'react'
import { nightmodeLogo } from '../Data'
import { menus } from '../Data'
import { logo } from '../Data'
import Button from './Button'

const SideBar = () => {
  return (
        <div className='flex flex-col h-full w-[266px] bg-[#090a10] items-center justify-between border border-r-[1px] border-[#101012] fixed' >
            <div className='h-[564px] w-[218px] flex flex-col gap-[72px] mt-10'>
                <div className='flex items-start justify-start w-[180.08px] [h-36px]'>
                    <img 
                    src= {logo} 
                    alt="logo" 
                    />
                </div>
                <div className='flex flex-col gap-[18px]'>
                {menus.map((menu) => {
                        return (
                            <Button 
                            key={menu.id}
                            id= {menu.id} 
                            name= {menu.name} 
                            src = {menu.src}/>
                        )
                        })}
                </div>

                <div className='px-4 py-2 mt-10 flex gap-3 cursor-pointer'>
                    <img 
                        src="src/assets/menu-icons/Vector.png" 
                        alt="icon" 
                        height={21.5}
                        width={21.5}
                        />
                   <p className='font-[500] text-[16px] leading-6 text-white font-[inter]'>
                        Logout
                    </p>
                </div>
            </div>
    </div>    
  )
}

export default SideBar