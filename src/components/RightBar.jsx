import React from 'react'
import { tags } from '../Data'

const RightBar = () => {
  const questionData = [
    {id: 1, question: "Would it be appropriate to point out an error in another paper during a referee report?"},
    {id: 2, question: "How can an airconditioning machine exist?"},
    {id: 3, question: "Interrogated every time crossing UK Border as citizen"},
    {id: 4, question: "Low digit addition generator"},
    {id: 5, question: "What is an example of 3 numbers that do not make up a vector?"}
  ]

  const popularTags = [
    {id:1, tag: "javacript", number: "20152+" },
    {id:2, tag: "next.js", number: "18493+" },
    {id:3, tag: "react.js", number: "16269+" },
    {id:4, tag: "node.js", number: "15121+" },
    {id:5, tag: "python", number: "14431+" },
    {id:6, tag: "microsoft axure", number: "9429+" },
    {id:7, tag: "postgresql", number: "9429+" },
    {id:8, tag: "machine learning", number: "9429+" },
  ]

  return (
    <div className='text-white w-[336px] ml-70 bg-[#07080b] 
    px-6 py-16 b-r-[#07080b] flex flex-col gap-8 font-[inter]'>
      <div>
        <h1 className='font-bold text-[20px]'>Hot Network</h1>
      </div>

      <div className='flex flex-col gap-8'>
        {
          questionData.map((question) => (
            <div 
            key ={question.id}
            className='flex  justify-between items-start cursor-pointer'>
              <p 
              className='text-[14px] font-medium text-[#DCE3F1]'>
                {question.question}
              </p>
              <img src="src/assets/right.png" alt=""
                  height= {20}
                  width= {20}
                  className='ml-10'
                />
            </div>
          ))
        }
      </div>

      <div>
        <h1 className='font-bold text-[20px]'>Popular Tags</h1>
      </div>

      <div className='flex flex-col gap-4'>
        {
            popularTags.map((tags) => (              
                <div 
                key = {tags.id}
                className='flex justify-between items-center '
                >
                    <p className='min-w-fit bg-[#151821] px-6 py-2 rounded-md text-center uppercase text-[10px] leading-3 text-[#7B8EC8] font-medium'>{tags.tag}</p>
                    <p className='text-[#DCE3F1] text-[12px]'>{tags.number}</p>
                </div> 
            ))
        }
      </div>

    </div>
  )
}

export default RightBar