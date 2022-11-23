import React from 'react'
import SearchBar from '../components/SearchBar'
import Title from '../components/Title'

const Analytics = () => {
  return (
    <>
    <div className="md:p-6 p-2">

    <Title title={'Analytics'} />

    <SearchBar/>


    <div className="flex flex-wrap">

        <div className=" w-1/2 border-gray-400 border-r border-b p-6">
        {/* <h2 className='font-bold text-xl text-left p-6'>Live Users</h2> */}
            <img src="/liveusers.png" width='100%' alt="" />

        </div>
        <div className=" w-1/2 border-gray-400 border-l border-b p-6">

            <img src="/totaldownloads.png" width='100%' alt="" />

        </div>
        <div className=" w-1/2 border-gray-400 border-r border-t p-4">

            <h2 className='font-bold text-xl text-left p-3'>Genders</h2>

            <img src="/genders.png" width='100%' alt="" />

        </div>
        <div className=" w-1/2 border-gray-400 border-l border-t p-6">
        <h2 className='font-bold text-xl text-left p-3'>Total Winners</h2>

            <img src="/winners.png" width='100%' alt="" />

        </div>


    </div>
    
    
    </div>
    </>
  )
}

export default Analytics