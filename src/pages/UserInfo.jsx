import { MagnifyingGlass } from "phosphor-react";
import React from "react";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";

const UserInfo = () => {
  return (
    <>
      <Title title={"User Info"} />

      <div>

        <SearchBar />

            <div className="p-7"></div>

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
              <td className="p-3 flex">
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

            
            <tr className="outline-1 outline-gray-200 outline rounded-sm ">
              <th>
                <input type="checkbox" name="single" id="" />
              </th>
              <td className="p-3 flex">
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

            <tr className="outline-1 outline-gray-200 outline rounded-sm ">
              <th>
                <input type="checkbox" name="single" id="" />
              </th>
              <td className="p-3 flex">
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
