import React from "react";
import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import { useState } from "react";
import { BASE_URL } from "../util/config";
import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import GenderBigChart from "../charts/GenderBigChart";
import MonthlyData from "../charts/MonthlyData";

const Analytics = () => {
  const [genderData, setGenderData] = useState({ male: 0, female: 0 });
  const { isLoggedIn, resetUser, userToken } = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  const [winners, setWinners] = useState(0);

  const getTotalWinners = async () => {
    let url = `${BASE_URL}/game/winner`;

    try {
      let res = await axios.get(url, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      if (res.status === 200) {
        setWinners(res.data.data);
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

  const getGenderData = async () => {
    var totalMales = 0;
    var totalFemales = 0;

    try {
      let maleUrl = `${BASE_URL}/user/gender?value=male`;
      let femaleUrl = `${BASE_URL}/user/gender?value=female`;
      let male = await axios.get(maleUrl, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      if (male.status === 200) {
        totalMales = male.data.data.length;
      }
      let female = await axios.get(femaleUrl, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      if (female.status === 200) {
        totalFemales = female.data.data.length;
      }

      setGenderData({
        male: totalMales,
        female: totalFemales,
      });
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

  const getAllUsers = async () => {
    let url = `${BASE_URL}/user/searchAll`;

    try {
      let res = await axios.get(url, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      if (res.status === 200) {
        setUsers(res.data.data);
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
    let interval = setInterval(() => {
      getGenderData();
      getAllUsers();
      getTotalWinners();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="md:p-6 p-2">
        <Title title={"Analytics"} />

        {/* <SearchBar/> */}

        <div className="flex flex-wrap">
          <div className=" w-1/2 border-gray-400 border-r h-[50vh] p-6">
            <h2 className='font-bold text-xl text-left px-6'>Total Users</h2>
            <MonthlyData data={users.length} />
          </div>
          <div className=" w-1/2 border-gray-400 border-l border-b p-6">
            <img src="/totaldownloads.png" width="100%" alt="" />
          </div>
          <div className=" w-1/2 border-gray-400 border-r border-t p-4">
            <h2 className="font-bold text-xl text-left p-3">Genders</h2>

            {/* <img src="/genders.png" width='100%' alt="" /> */}

            <GenderBigChart gData={genderData} />
          </div>
          <div className=" w-1/2 border-gray-400 border-l h-[50vh] border-t p-6">
            <h2 className="font-bold text-xl text-left p-3">Total Winners</h2>
            {/* <div className="w-full h-full"> */}
              <MonthlyData data={winners} />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
