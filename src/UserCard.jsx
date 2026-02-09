import React, { useState } from 'react'

const UserCard = () => {
  let [role, setrole] = useState("Instructor")
  let changerole=()=>{
    role="Admin"
    setrole(role)
  }
  return (
    <div className=' flex flex-col gap-4 p-5  bg-white w-1/2 h-80 rounded-xl items-start'>
      <h1 className='text-xl font-bold'>User Card</h1>
      <div >

      <h1>Name: Harmeet</h1>
      <h1>Role: {role}</h1>
      </div>
          <button onClick={()=>{changerole()}} className='px-3.5 text-md py-2 text-white rounded-md bg-yellow-500'>Change Name</button>
    </div>
  )
}

export default UserCard