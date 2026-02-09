import React, { useState } from 'react'

const Counter = () => {
  let [Count, setCount] = useState(0)
  const incrament = () => {
    ++Count
    setCount(Count)
    console.log(Count);
  }
  const decreament = () => {
    --Count
    setCount(Count)
  }
  const reset = () => {
    Count = 0
    setCount(Count)
  }
  return (
    <div className=' flex flex-col gap-4 p-5  bg-white w-1/2 h-80 rounded-xl'>
      <h1 className='text-xl font-bold'>Counter Card</h1>
      <h1 className='text-3xl'>{Count}</h1>
      <div className=' flex gap-1'>

        <button onClick={() => incrament()} className='bg-blue-500 px-3.5 rounded-md text-xl text-white py-1.5'>+</button>
        <button onClick={() => { decreament() }} className='px-3.5 text-xl py-1.5 text-white rounded-md   bg-red-600'>-</button>
        <button onClick={() => { reset() }} className='px-3.5 text-md py-1.3 text-white rounded-md bg-gray-500'>Reset</button>
      </div>
    </div>
  )
}

export default Counter