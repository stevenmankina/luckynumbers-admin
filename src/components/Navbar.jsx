import React, { useEffect, useState } from "react";

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

import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <p
        className="absolute p-2 text-xl md:hidden"
        onClick={() => setSidebar(!sidebar)}
      >
        =
      </p>

      <div
        className={`sidebar ${
          sidebar ? "" : "max-md:hidden"
        }  bg-primary-100 w-100 md:w-2/12 h-[100vh] `}
      >
        <div className="fixed w-2/12 p-3 bg-primary-100 h-screen">
          <div className="logo w-2/4 m-auto">
            <img src="/lucky-numbers.png" className="w-full" alt="" />
          </div>

          <NavLink to={"/"}>
            <Tray size={32} />
            <span className="font-semibold pl-4">Dashboard</span>
          </NavLink>

          <NavLink to={"/userinfo"}>
            <User size={32} />
            <span className="font-semibold pl-4">User Info</span>
          </NavLink>

          <NavLink to={"/analytics"}>
            <ChartPieSlice size={32} />
            <span className="font-semibold pl-4">Show Analytics</span>
          </NavLink>

          <NavLink to={"/luckynumbers"}>
            <SquaresFour size={32} />
            <span className="font-semibold pl-4">Lucky Numbers Card</span>
          </NavLink>

          <NavLink to={"/sponsors"}>
            <Stack size={32} />
            <span className="font-semibold pl-4">Sponsors & Adverts</span>
          </NavLink>

          <NavLink to={"/marketing"}>
            <EnvelopeSimple size={32} />
            <span className="font-semibold pl-4">Marketing Emails</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const NavLink = ({ to, children, ...props }) => {
  
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true})

  return (
    <>
    <Link to={to}>
      <div
        className={`tab  w-11/12 my-2 ${
            isActive ? "bg-primary-500 text-white" : ""
        }  rounded-lg flex p-2 m-auto`}
        >
        {children}
      </div>
          </Link>
    </>
  );
};
