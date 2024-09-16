import React from 'react'

const Tags = () => {
    const filterOptions = [
        {id: 1, option: "Newest"},
        {id: 2, option: "Recommended Questions"},
        {id: 3, option: "Frequent"},
        {id: 4, option: "Unanswered"}
    ];

  return (
    <div className='flex gap-[12px] '>
        {
            filterOptions.map((option) => (              
                <div 
                key = {option.id} 
                className= {
                    (option.id === 1 ? " text-orange-300 bg-[#212734] rounded-lg px-6 py-3": "bg-[#151821] rounded-lg px-6 py-3")
                }>
                    {option.option}
                </div> 
            ))
        }
    </div>
   
  )
}

export default Tags
