import { Wrench } from "phosphor-react";
import React, { useEffect, useState } from "react";
import WinningNumbers from "./WinningNumbers";

const Step0 = ({ setStep }) => {
  const [numbers, setNumbers] = useState([5, 8, 9, 7, 6]);

  const [popup, setPopup] = useState(false);

  return (
    <>

    <div className="relative">
      
      {popup && <WinningNumbers numbers={numbers} setPopup={setPopup} />}
    </div>

      <div className="p-10">
        <h3 className="text-4xl pb-5 text-primary-500">Saved Episodes</h3>
        <h3 className="text-xl my-7 text-primary-500">Saved Winning Numbers</h3>

        <table className="md:table-auto w-11/12 m-auto ">
          <thead className="bg-neutral-100">
            <tr className="font-thin uppercase outline-1 outline-gray-200 outline rounded-sm">
              <th className="p-3">
                <input type="checkbox" name="allCheck" id="" />
              </th>
              <th className="p-3 font-normal">Episode</th>
              <th className="p-3 max-md:hidden font-normal">Date</th>
              <th className="p-3 max-md:hidden font-normal">Time</th>
              <th className="p-3 max-md:hidden font-normal">Winning Numbers</th>
              {/* <th className="p-3 max-md:hidden font-normal">Edit</th> */}
              <th className="p-3 max-md:hidden font-normal">Remove Show</th>
            </tr>
          </thead>
          <tbody>
            <tr className="outline-1 outline-gray-200 outline rounded-sm ">
              <th>
                <input type="checkbox" name="single" id="" />
              </th>
              <td className="text-sm p-3 max-md:hidden">1</td>
              <td className="text-sm max-md:hidden">21/11/22</td>
              <td className="text-sm max-md:hidden">18:30</td>
              <td
                onClick={() => setPopup(true)}
                className="text-base cursor-pointer text-primary-500 max-md:hidden"
              >
                view
              </td>
              {/* <td className="text-sm max-md:hidden"> <Wrench className="m-auto" size={20} /> </td> */}
              <td className="text-sm max-md:hidden"> X</td>
            </tr>
          </tbody>
        </table>

        <button
          onClick={() => setStep(1)}
          className="px-10  bg-primary-500 py-2 m-10 float-right uppercase text-white"
        >
          Add New Show &gt;
        </button>
      </div>
    </>
  );
};

export default Step0;
