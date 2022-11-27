import React from 'react'
import { MagnifyingGlass } from "phosphor-react";

const SearchBar = () => {
  return (
    <div className="md:w-fit w-full my-5">
          <div className="flex md:flex-row flex-col p-3 md:rounded-full rounded-3xl  border  items-center">
            <div className="flex md:flex-col justify-around md:w-fit w-full text-left mx-2 p-2">
              <p className="font-semibold">Main Search</p>
              <p className="font-light">What do you want?</p>
            </div>
            <div className="flex md:flex-col justify-around md:w-fit w-full text-left mx-2 p-2">
              <p className="font-semibold">Age</p>
              <input className='border w-16 rounded border-primary-500 text-sm outline-none' type="number" name="" id="" />
            </div>
            <div className="flex md:flex-col justify-around md:w-fit w-full text-left mx-2 p-2">
              <p className="font-semibold">Location</p>
              <input className='border w-32 rounded border-primary-500 text-sm outline-none' type="text" name="" id="" />
            </div>
            <div className="flex md:flex-col justify-around md:w-fit w-full text-left mx-2 p-2">
              <p className="font-semibold">Gender</p>

                <select className='border rounded border-primary-500 text-sm outline-none' name="" id="">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

            </div>

            <MagnifyingGlass
              size={60}
              className="ml-3 mt-3 md:mt-0 bg-primary-500 p-4 text-white rounded-full"
            />
          </div>
        </div>
  )
}

export default SearchBar