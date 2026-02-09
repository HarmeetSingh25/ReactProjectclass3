import React from 'react'

const NameCard = () => {
  return (
    <div className=' flex flex-col gap-4 p-5 bg-white w-1/2 h-80 rounded-xl items-start'>
      <h1 className='text-xl font-bold'>Name Card</h1>
      <h1 className='text-2xl' >React Master 🚀</h1>
      <button className='px-3.5 text-md py-2 text-white rounded-md bg-green-500'>Change Name</button>
    </div>
  )
}

export default NameCard