import React from 'react'

const VisibleCard = () => {
  return (

      <div className=' flex flex-col gap-4 p-5  bg-white w-1/2 h-80 rounded-xl items-start'>
      <h1 className='text-xl font-bold'>Visibility Card</h1>
          <button className='px-3.5 text-md py-2 text-white rounded-md bg-red-500'>Hide Message</button>
          <p className='bg-blue-50 w-1/1 text-blue-600 px-2 py-4 rounded-md border-blue-300 border'>🚀 This message is controlled by useState boolean value.</p>
    </div>

  )
}

export default VisibleCard