import React from 'react'

const Counter = () => {
  return (
    <div className=' flex flex-col gap-4 p-5  bg-white w-1/2 h-80 rounded-xl'>
      <h1 className='text-xl font-bold'>Counter Card</h1>
      <h1 className='text-3xl'>0</h1>
      <div className=' flex gap-1'>

        <button className='bg-blue-500 px-3.5 rounded-md text-xl text-white py-1.5'>+</button>
        <button className='px-3.5 text-xl py-1.5 text-white rounded-md   bg-red-600'>-</button>
        <button className='px-3.5 text-md py-1.3 text-white rounded-md bg-gray-500'>Reset</button>
      </div>
    </div>
  )
}

export default Counter