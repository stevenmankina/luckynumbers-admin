import React from 'react'
import { MagnifyingGlass } from "phosphor-react";

const SearchBar = () => {
  return (
    <div className="w-fit my-5">
          <div className="flex p-3 rounded-full border  items-center">
            <div className="text-left mx-2 p-2">
              <p className="font-semibold">Main Search</p>
              <p className="font-light">What do you want?</p>
            </div>
            <div className="text-left mx-2 p-2">
              <p className="font-semibold">Condition 1</p>
              <p className="font-light">Pick one option</p>
            </div>
            <div className="text-left mx-2 p-2">
              <p className="font-semibold">Condition 2</p>
              <p className="font-light">Pick one option</p>
            </div>
            <div className="text-left mx-2 p-2">
              <p className="font-semibold">Condition 3</p>
              <p className="font-light">Pick one option</p>
            </div>

            <MagnifyingGlass
              size={60}
              className="ml-3 bg-primary-500 p-4 text-white rounded-full"
            />
          </div>
        </div>
  )
}

export default SearchBar