import React, { useState } from 'react'

const NameCard = () => {
  let [Name, setName] = useState("Harmeet")
  let changeName = () => {
    Name = "React Master 🚀"
    setName(Name)
  }
  return (
    <div className=' flex flex-col gap-4 p-5 bg-white w-1/2 h-80 rounded-xl items-start'>
      <h1 className='text-xl font-bold'>Name Card</h1>
      <h1 className='text-2xl' >{Name}</h1>
      <button onClick={() => { changeName() }} className='px-3.5 text-md py-2 text-white rounded-md bg-green-500'>Change Name</button>
    </div>
  )
}

export default NameCard