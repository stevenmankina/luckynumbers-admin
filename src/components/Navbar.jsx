import React, { useState } from "react";
import {
  User,
  ChartPieSlice,
  Tray,
  SquaresFour,
  Stack,
} from "phosphor-react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <p
        className="fixed p-2 z-50 text-xl md:hidden"
        onClick={() => setSidebar(!sidebar)}
      >
        =
      </p>

      <div
        className={`sidebar ${
          sidebar ? "" : "max-md:hidden"
        }  bg-primary-100 w-100 md:w-2/12  md:h-[100vh] `}
      >
        <div className="fixed md:w-2/12 p-3 bg-primary-100 h-screen">
          <div className="logo w-2/4 m-auto">
            <img src="/lucky-numbers.png" className="w-full" alt="" />
          </div>

          <NavLink to={"/"} onClick={()=>setSidebar(false)}>
            <Tray size={32} />
            <span className="font-semibold pl-4">Dashboard</span>
          </NavLink>

          <NavLink to={"/userinfo"} onClick={()=>setSidebar(false)}>
            <User size={32} />
            <span className="font-semibold pl-4">User Info</span>
          </NavLink>

          <NavLink to={"/analytics"} onClick={()=>setSidebar(false)}>
            <ChartPieSlice size={32} />
            <span className="font-semibold pl-4">Show Analytics</span>
          </NavLink>

          <NavLink to={"/luckynumbers"} onClick={()=>setSidebar(false)}>
            <SquaresFour size={32} />
            <span className="font-semibold pl-4">Lucky Numbers Card</span>
          </NavLink>

          <NavLink to={"/sponsors"} onClick={()=>setSidebar(false)}>
            <Stack size={32} />
            <span className="font-semibold pl-4">Sponsors & Adverts</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// Navlink helper Component
const NavLink = ({ to, children, ...props }) => {
  
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true})

  return (
    <>
    <Link to={to}>
      <div
      {...props}
        className={`tab items-center text-left w-full my-2 ${
            isActive ? "bg-primary-500 text-white" : ""
        }  rounded-lg flex p-2 m-auto`}
        >
        {children}
      </div>
          </Link>
    </>
  );
};
