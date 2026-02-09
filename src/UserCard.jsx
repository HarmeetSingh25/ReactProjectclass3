import React from 'react'

const UserCard = () => {
  return (
    <div className=' flex flex-col gap-4 p-5  bg-white w-1/2 h-80 rounded-xl items-start'>
      <h1 className='text-xl font-bold'>User Card</h1>
      <div >

      <h1>Name: Devendra</h1>
      <h1>Role: Admin</h1>
      </div>
          <button className='px-3.5 text-md py-2 text-white rounded-md bg-yellow-500'>Change Name</button>
    </div>
  )
}

export default UserCard