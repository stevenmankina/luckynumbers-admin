import React, { useState } from "react";

import {
  User,
  ChartPieSlice,
  ShoppingCartSimple,
  CurrencyDollar,
  Tray,
  SquaresFour,
  Stack,
  EnvelopeSimple,
} from "phosphor-react";
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";
import UserInfo from "./UserInfo";
import Analytics from "./Analytics";

const Layout = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <p
        className="absolute p-2 text-xl md:hidden"
        onClick={() => setSidebar(!sidebar)}
      >
        =
      </p>

      <div className="flex md:flex-row flex-col">
        {/* PC Nav  */}
        <div className="sidebar md:block hidden bg-primary-100 w-100 md:w-2/12 h-[100vh]">
          
          <div className="fixed md:w-2/12 p-3">

          <div className="logo w-2/4 m-auto">
            <img src="/lucky-numbers.png" className="w-full" alt="" />
          </div>

          <div className="tab text-white w-11/12 my-2 bg-primary-500 rounded-lg flex p-2 m-auto">
            <Tray size={32} />
            <span className="font-semibold pl-4">Dashboard</span>
          </div>

          <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
            <User size={32} />
            <span className="font-semibold pl-4">User Info</span>
          </div>
          <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
            <ChartPieSlice size={32} />
            <span className="font-semibold pl-4">Show Analytics</span>
          </div>
          <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
            <SquaresFour size={32} />
            <span className="font-semibold pl-4">Lucky Numbers Card</span>
          </div>
          <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
            <Stack size={32} />
            <span className="font-semibold pl-4">Sponsors & Adverts</span>
          </div>
          <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
            <EnvelopeSimple size={32} />
            <span className="font-semibold pl-4">Marketing Emails</span>
          </div>
        </div>
        </div>

        {/* Mobile Nav  */}
        {sidebar && (
          <div className="sidebar bg-primary-100 w-100 md:w-2/12 h-[100vh] p-3">
            <div className="logo w-2/4 m-auto">
              <img src="/lucky-numbers.png" className="w-full" alt="" />
            </div>

            <div className="tab text-white w-11/12 my-2 bg-primary-500 rounded-lg flex p-2 m-auto">
              <Tray size={32} />
              <span className="font-semibold pl-4">Dashboard</span>
            </div>

            <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
              <User size={32} />
              <span className="font-semibold pl-4">User Info</span>
            </div>
            <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
              <ChartPieSlice size={32} />
              <span className="font-semibold pl-4">Show Analytics</span>
            </div>
            <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
              <SquaresFour size={32} />
              <span className="font-semibold pl-4">Lucky Numbers Card</span>
            </div>
            <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
              <Stack size={32} />
              <span className="font-semibold pl-4">Sponsors & Adverts</span>
            </div>
            <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
              <EnvelopeSimple size={32} />
              <span className="font-semibold pl-4">Marketing Emails</span>
            </div>
          </div>
        )}

        <div className="maincomponent md:w-10/12 w-full ">

          

          <Analytics/>


        </div>
      </div>
    </>
  );
};

export default Layout;
