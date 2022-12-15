import React from "react";
import { Wrench } from "phosphor-react";
import { BASE_URL } from "../util/config";
import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";

const SponsorsList = ({ setPopup, setSponsor }) => {
  const { isLoggedIn, resetUser, userToken } = useContext(AuthContext);

  const [sponsors, setSponsors] = useState([]);

  const getAllSponsors = async () => {
    let url = `${BASE_URL}/sponsor/getAll`;

    try {
      let res = await axios.get(url, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });

      if (res.status === 200) {
        setSponsors(res.data.sponsor);
      }
    } catch (error) {
      let status = error.response.status;
      if (status === 401 || status === 403) {
        resetUser();
        toast.error("You are not authenticated");
      } else if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Some Unknown Error Occured");
      }
    }
  };

  useEffect(() => {
    getAllSponsors();
  }, []);

  return (
    <>
      <table className="md:table-auto w-11/12 md:m-5 ">
        <thead className="bg-neutral-100">
          <tr className="font-thin uppercase outline-1 outline-gray-200 outline rounded-sm">
            <th className="p-3">
              <input type="checkbox" name="allCheck" id="" />
            </th>
            <th className="p-3 text-left font-normal">Sponsor Name</th>
            <th className="p-3 max-md:hidden font-normal">Contact Name</th>
            <th className="p-3 max-md:hidden font-normal">Email</th>
            <th className="p-3 max-md:hidden font-normal">No. Live Adverts</th>
            <th className="p-3 max-md:hidden font-normal">Edit</th>
            <th className="p-3 font-normal">Active</th>
          </tr>
        </thead>
        <tbody>
          {sponsors.map((sponsor) => (
            <tr
              key={sponsor._id}
              className="outline-1 outline-gray-200 outline rounded-sm "
            >
              <th>
                <input type="checkbox" name="single" />
              </th>
              <td className="p-3 flex">
                {/* <img src="/logo192.png" className="w-10 h-10 mr-2" alt="" /> */}
                <div className="text-left">
                  <p className="font-semibold text-sm">{sponsor.sponsorName}</p>
                  <p className="font-light text-xs">{sponsor.phone}</p>
                </div>
              </td>
              <td className="text-sm max-md:hidden">
                {sponsor.pointOfContact}
              </td>
              <td className="text-sm max-md:hidden">{sponsor.email}</td>
              <td className="text-sm max-md:hidden">
                {sponsor.noOfAdverts.length}
              </td>
              <td
                className="text-sm max-md:hidden cursor-pointer"
                onClick={() => {setPopup(true); setSponsor(sponsor)}}
              >
                {" "}
                <Wrench size={20} className="m-auto" />{" "}
              </td>
              <td>
                <input type="checkbox" name="active" id="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => setPopup(true)}
        className="px-10 bg-primary-500 py-2 float-right mr-24 text-white"
      >
        ADD &gt;{" "}
      </button>
    </>
  );
};

export default SponsorsList;
