import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getDate, getTime } from "../util/age";
import { BASE_URL } from "../util/config";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Advert = ({ sid, id }) => {
  const [advert, setAdvert] = useState(null);

  const { resetUser, userToken } = useContext(AuthContext);

  const getAdvert = async () => {
    let url = `${BASE_URL}/advert/${sid}/${id}/get`;

    try {
      let res = await axios.get(url, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });

      if (res.status === 200) {
        setAdvert(res.data.data);
        console.log(res.data.data)
      }
    } catch (error) {
      let status = error.response.status;
      if (status === 401 || status === 403) {
        toast.error("You are not authenticated");
        resetUser();
      } else if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Some Unknown Error Occured");
      }
    }
  };
  const deleteAdvert = async () => {
    let url = `${BASE_URL}/advert/${sid}/${id}/delete`;

    try {
      let res = await axios.delete(url, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });

      if (res.status === 200) {
        setAdvert(res.data.data);
        toast.success("Advert Deleted Successfully");
      }
    } catch (error) {
      let status = error.response.status;
      if (status === 401 || status === 403) {
        toast.error("You are not authenticated");
        resetUser();
      } else if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Some Unknown Error Occured");
      }
    }
  };

  useEffect(() => {
    getAdvert();
  }, []);

  return (
    <>
      <div className=" md:w-1/2  w-full md:px-10 p-5">
        <div className="bg-secondary-100 text-center w-full p-7">
          <img src={advert?.advertImage} alt="" />

          {/* <h2 className="text-2xl pt-4">Advert Title</h2> */}

          <p className="text-left mt-3 font-semibold">Start At</p>
          <p className="bg-white px-2 py-1 rounded-md border text-left mt-1 w-full">
            {getDate(advert?.startAt)} - {getTime(advert?.startAt)}
          </p>

          <p className="text-left mt-3 font-semibold">Ends At</p>
          <p className="bg-white px-2 py-1 rounded-md border text-left mt-1 w-full">
            {getDate(advert?.duration)} - {getTime(advert?.duration)}
          </p>

          <button onClick={deleteAdvert} className="px-3 mx-3 mt-5 py-1 rounded cursor-pointer text-white bg-primary-500">
            Remove Advert
          </button>
        </div>
      </div>
    </>
  );
};

export default Advert;
