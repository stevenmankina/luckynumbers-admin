import { MagnifyingGlass } from "phosphor-react";
import React from "react";
import Title from "../components/Title";

const Marketing = () => {
  return (
    <>
      <div className="p-2 md:p-6">
        <Title title={"Marketing Emails"} />

        <h2 className="text-2xl font-bold text-left p-6 text-primary-500">
          Send Email
        </h2>

        <div className="flex px-6">
          <div className=" md:w-5/12">
            <p className="py-2 text-2xl text-left">Users</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter name or email"
                className="rounded p-1 w-6/12 outline-none border-2 mr-1"
              />
              <div className="px-3 rounded bg-primary-500">
                <MagnifyingGlass
                  className="p-1 text-white bg-primary-500"
                  size={32}
                />
              </div>
            </div>
          </div>
          <div className=" md:w-5/12">
            <p className="py-2 text-2xl text-left">Sponsors</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter name or email"
                className="rounded w-6/12 p-1 outline-none border-2 mr-1"
              />
              <div className="px-3 rounded bg-primary-500">
                <MagnifyingGlass
                  className="p-1 text-white bg-primary-500"
                  size={32}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="float-left w-full p-6">

        <textarea name="" placeholder="Your text" className="border float-left min-h-[30vh] p-1 w-8/12 outline-none border-primary-500 rounded" id="" >

        </textarea>
        </div>




      </div>
    </>
  );
};

export default Marketing;
