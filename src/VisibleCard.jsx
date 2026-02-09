import React, { useState } from 'react'

const VisibleCard = () => {
  const [isVisible, setIsVisible] = useState(true)

  const changeTextbtn = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className='flex flex-col gap-4 p-5 bg-white w-1/2 h-80 rounded-xl items-start'>
      <h1 className='text-xl font-bold'>Visibility Card</h1>

      <button
        onClick={changeTextbtn}
        className='px-3.5 text-md py-2 text-white rounded-md bg-red-500'
      >
        {isVisible ? "Hide Message" : "Show Message"}
      </button>

      {isVisible && (
        <p className='bg-blue-50 text-blue-600 px-2 py-4 rounded-md border-blue-300 border'>
          🚀 This message is controlled by useState boolean value.
        </p>
      )}
    </div>
  )
}

export default VisibleCard
