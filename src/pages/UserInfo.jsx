import { MagnifyingGlass } from "phosphor-react";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import UserProfile from "./UserProfile";

const UserInfo = () => {

  const [popup, setPopup] = useState(false);

  return (
    <>

{popup && <div className=" bg-black h-screen fixed bg-opacity-30 w-10/12 flex justify-center m-auto self-center">

       <UserProfile setPopup={setPopup} />

      </div>}

      <div className="md:p-6 p-2">

        
        <Title title={"User Info"} />

        <SearchBar />

            <div className="p-7">
              <button onClick={()=> setPopup(true)} className='px-3 py-1 rounded text-white bg-primary-500'>Add User</button>
            
            </div>

        <table class="md:table-auto w-11/12 ">
          <thead className="bg-neutral-100">
            <tr className="font-thin uppercase outline-1 outline-gray-200 outline rounded-sm">
              <th className="p-3">
                <input type="checkbox" name="allCheck" id="" />
              </th>
              <th className="p-3 font-normal">Name</th>
              <th className="p-3 max-md:hidden font-normal">Address</th>
              <th className="p-3 max-md:hidden font-normal">Email</th>
              <th className="p-3 max-md:hidden font-normal">Age</th>
              <th className="p-3 max-md:hidden font-normal">Account Created</th>
              <th className="p-3 max-md:hidden font-normal">Coins Held</th>
              <th className="p-3  font-normal">Active</th>
            </tr>
          </thead>
          <tbody>
            <tr className="outline-1 outline-gray-200 outline rounded-sm ">
              <th>
                <input type="checkbox" name="single" id="" />
              </th>
              <td onClick={()=> setPopup(true)}  className="p-3 cursor-pointer flex">
                <img src="/logo192.png" className="w-10 h-10 mr-2" alt="" />
                <div className="text-left">
                  <p className="font-semibold text-sm">Jane Cooper</p>
                  <p className="font-light text-xs">Lorem ipsum dolor sit.</p>
                </div>
              </td>
              <td className="text-sm max-md:hidden">
                The Sliding Mr. Bones Next Stop, Pottersville
              </td>
              <td className="text-sm max-md:hidden">jane@email.com</td>
              <td className="text-sm max-md:hidden">21</td>
              <td className="text-sm max-md:hidden">21/11/22</td>
              <td className="text-sm max-md:hidden">100</td>
              <td>
                <input type="checkbox" name="active" id="" />
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </>
  );
};

export default UserInfo;
