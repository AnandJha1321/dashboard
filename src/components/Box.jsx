import React from 'react'
import { boxes } from '../Data'
import { tags } from '../Data'

const Box = () => {
  return (
    <div className='flex flex-col gap-4 w-[766px] h-[209px] font-[inter]'>
        {boxes.map((box) => (
            <div key={box.id} className='bg-[#0f1116] px-9 py-11 flex flex-col rounded-[10px]'>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-[20px] leading-6 font-semibold'>{box.text}</h3>
                    <div className='flex flex-row gap-2'>
                            {
                                    tags.map((tag) => (
                                             <div className='min-w-fit bg-[#151821] px-6 py-2 rounded-md'>
                                                <p className='text-center uppercase text-[10px] leading-3 text-[#7B8EC8] font-medium'>{tag}</p>
                                             </div>
                                    ))
                            }
                    </div>
                </div>

                <div className='flex items-center justify-between mt-8'>
                    <div className='flex '>
                            <div>
                                <img src= {box.src} alt="" 
                                width= "100%"
                                height= "100%"
                                />
                            </div>
                            <div className='flex'>
                                <p className='ml-2 font-medium text-sm text-[#DCE3F1]'>Satheesh</p>
                                <p className='ml-2 font-medium text-sm text-[#DCE3F1]'>• asked 2 mins ago</p>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <div className='flex items-center space-x-2'>
                                <span>
                                    <img 
                                            src= {box.analytics.like.src} 
                                            alt="like" 
                                            width= "100%"
                                            height= "100%"
                                            />
                                </span>
                                <p className='font-normal text-xs'>{box.analytics.like.text}</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                                <span>
                                    <img 
                                            src= {box.analytics.answers.src} 
                                            alt="answer" 
                                            width= "100%"
                                            height= "100%"
                                            />
                                </span>
                                <p className='font-normal text-xs'>{box.analytics.answers.text}</p>
                            </div>

                            <div className='flex items-center space-x-2'>
                                <span>
                                    <img 
                                            src= {box.analytics.view.src} 
                                            alt="view" 
                                            width= "100%"
                                            height= "100%"
                                            />
                                </span>
                                <p className='font-normal text-xs'>{box.analytics.view.text}</p>
                            </div>
                        </div>
                    </div>
            </div>
        ))}
    </div>
  )
}

export default Box