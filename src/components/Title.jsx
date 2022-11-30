import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Title = ({ title }) => {
  const [logoutBtn, setLogoutBtn] = useState(false);

  const { isLoggedIn, resetUser } = useContext(AuthContext);

  return (
    <>
      <div className="top flex justify-between items-center pb-6 px-6">
        <h1 className="text-3xl font-extralight ">{title}</h1>

        <img
          onClick={() => setLogoutBtn(true)}
          src="/H1.jpg"
          className="rounded-full  w-10 h-10"
          alt=""
        />
      </div>
      {logoutBtn && (
        <div onClick={()=>{resetUser(); setLogoutBtn(false)}} className="absolute z-50 cursor-pointer bg-purple-50  p-2 rounded border right-10">
          Logout
        </div>
      )}
    </>
  );
};

export default Title;
