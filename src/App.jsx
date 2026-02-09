import React from 'react'
import Counter from './Counter'
import NameCard from './NameCard'
import UserCard from './UserCard'
import VisibleCard from './VisibleCard'

const App = () => {
  return (
    <div className='p-13 h-screen w-screen flex flex-col gap-3 bg-gray-200'>
      <div className='flex  gap-5'>
        <Counter/>
        <NameCard/>
      </div>
      <div className='flex  gap-5'>
        <UserCard/>
        <VisibleCard/>
      </div>
    </div>
  )
}

export default App