import React from 'react'
import { Wrench } from 'phosphor-react'

const SponsorsList = ({setPopup}) => {
  return (
    <>
    <table class="md:table-auto w-11/12 md:m-5 ">
    <thead className="bg-neutral-100">
      <tr className="font-thin uppercase outline-1 outline-gray-200 outline rounded-sm">
        <th className="p-3">
          <input type="checkbox" name="allCheck" id="" />
        </th>
        <th className="p-3 font-normal">Sponsor Name</th>
        <th className="p-3 max-md:hidden font-normal">Contact Name</th>
        <th className="p-3 max-md:hidden font-normal">Email</th>
        <th className="p-3 max-md:hidden font-normal">No. Live Adverts</th>
        <th className="p-3 max-md:hidden font-normal">Edit</th>
        <th className="p-3  font-normal">Active</th>
      </tr>
    </thead>
    <tbody>
      <tr className="outline-1 outline-gray-200 outline rounded-sm ">
        <th>
          <input type="checkbox" name="single"/>
        </th>
        <td className="p-3 flex">
          <img src="/logo192.png" className="w-10 h-10 mr-2" alt="" />
          <div className="text-left">
            <p className="font-semibold text-sm">Jane Cooper</p>
            <p className="font-light text-xs">Lorem ipsum dolor sit.</p>
          </div>
        </td>
        <td className="text-sm max-md:hidden">
          Lorem ipsum dolor sit 
        </td>
        <td className="text-sm max-md:hidden">janecopper@email.com</td>
        <td className="text-sm max-md:hidden">10</td>
        <td className="text-sm max-md:hidden "> <Wrench size={20} className='m-auto' /> </td>
        <td>
          <input type="checkbox" name="active" id="" />
        </td>
      </tr>

      <tr className="outline-1 outline-gray-200 outline rounded-sm ">
        <th>
          <input type="checkbox" name="single"/>
        </th>
        <td className="p-3 flex">
          <img src="/logo192.png" className="w-10 h-10 mr-2" alt="" />
          <div className="text-left">
            <p className="font-semibold text-sm">Jane Cooper</p>
            <p className="font-light text-xs">Lorem ipsum dolor sit.</p>
          </div>
        </td>
        <td className="text-sm max-md:hidden">
          Lorem ipsum dolor sit 
        </td>
        <td className="text-sm max-md:hidden">janecopper@email.com</td>
        <td className="text-sm max-md:hidden">10</td>
        <td className="text-sm max-md:hidden "> <Wrench size={20} className='m-auto' /> </td>
        <td>
          <input type="checkbox" name="active" id="" />
        </td>
      </tr>

      <tr className="outline-1 outline-gray-200 outline rounded-sm ">
        <th>
          <input type="checkbox" name="single"/>
        </th>
        <td className="p-3 flex">
          <img src="/logo192.png" className="w-10 h-10 mr-2" alt="" />
          <div className="text-left">
            <p className="font-semibold text-sm">Jane Cooper</p>
            <p className="font-light text-xs">Lorem ipsum dolor sit.</p>
          </div>
        </td>
        <td className="text-sm max-md:hidden">
          Lorem ipsum dolor sit 
        </td>
        <td className="text-sm max-md:hidden">janecopper@email.com</td>
        <td className="text-sm max-md:hidden">10</td>
        <td className="text-sm max-md:hidden "> <Wrench size={20} className='m-auto' /> </td>
        <td>
          <input type="checkbox" name="active" id="" />
        </td>
      </tr>



    </tbody>
  </table>


    

    <button onClick={() => setPopup(true)} className='px-10 bg-primary-500 py-2 float-right mr-24 text-white'>ADD &gt; </button>


  </>
  )
}

export default SponsorsList