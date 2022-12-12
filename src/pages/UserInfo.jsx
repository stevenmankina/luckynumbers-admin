import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import { getAge, getDate } from "../util/age";
import { BASE_URL } from "../util/config";
import UserProfile from "./UserProfile";

const UserInfo = () => {
  const [popup, setPopup] = useState(false);

  const [users, setUsers] = useState([]);

  const [user, setUser] = useState(null);

  const { isLoggedIn, resetUser, userToken } = useContext(AuthContext);

  const searchUsers = async (search, searchValue) => {
    if (search === null || search === undefined) {
      return;
    }

    var url;
    if (search === 1) {
      url = `${BASE_URL}/user/age?value=${searchValue.age}`;
    } else if (search === 2) {
      url = `${BASE_URL}/user/location?value=${searchValue.location}`;
    } else if (search === 3) {
      url = `${BASE_URL}/user/gender?value=${searchValue.gender}`;
    }

    // console.log(url);

    try {
      let res = await axios.get(url, {
        headers: {
          Authorization: "Bearer " + userToken,
        }
      });
      if (res.status === 200) {
        setUsers(res.data.data);
      }
    } catch (error) {
      setUsers([]);
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
        }
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
    getAllUsers();
  }, []);

  return (
    <>
      {popup && (
        <div className=" bg-black h-screen fixed bg-opacity-30 w-10/12 flex justify-center m-auto self-center">
          <UserProfile
            user={user}
            getAllUsers={getAllUsers}
            setUser={setUser}
            setPopup={setPopup}
          />
        </div>
      )}

      <div className="md:p-6 p-2">
        <Title title={"User Info"} />

        <SearchBar searchUsers={searchUsers} />

        <div className="p-7">
          <button
            onClick={() => setPopup(true)}
            className="px-3 py-1 rounded text-white bg-primary-500"
          >
            Add User
          </button>
        </div>

        <table className="md:table-auto w-11/12 ">
          <thead className="bg-neutral-100">
            <tr className="font-thin uppercase outline-1 outline-gray-200 outline rounded-sm">
              <th className="p-3">
                <input type="checkbox" name="allCheck" id="" />
              </th>
              <th className="p-3 font-normal">Name</th>
              <th className="p-3 max-md:hidden font-normal">Location</th>
              <th className="p-3 max-md:hidden font-normal">Email</th>
              <th className="p-3 max-md:hidden font-normal">Age</th>
              <th className="p-3 max-md:hidden font-normal">Account Created</th>
              <th className="p-3 max-md:hidden font-normal">Coins Held</th>
              <th className="p-3  font-normal">Active</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr
                  key={user._id}
                  className="outline-1 outline-gray-200 outline rounded-sm "
                >
                  <th>
                    <input type="checkbox" name="single" id="" />
                  </th>
                  <td
                    onClick={() => {
                      setPopup(true);
                      setUser(user);
                    }}
                    className="p-3 cursor-pointer flex"
                  >
                    {/* <img src="/logo192.png" className="w-10 h-10 mr-2" alt="" /> */}
                    <div className="text-left">
                      <p className="font-semibold text-sm">
                        {user.firstname + " " + user.lastname}
                      </p>
                      <p className="font-light text-xs">{user.phone}</p>
                    </div>
                  </td>
                  <td className="text-sm max-md:hidden">
                    {user.location ? user.location : "Unknown"}
                  </td>
                  <td className="text-sm max-md:hidden">{user.email}</td>
                  <td className="text-sm max-md:hidden">
                    {user.age ? user.age : getAge(user.dob)}
                  </td>
                  <td className="text-sm max-md:hidden">
                    {getDate(user.created_at)}
                  </td>
                  <td className="text-sm max-md:hidden">100</td>
                  <td>
                    <input type="checkbox" name="active" id="" />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {users && users.length === 0 && <p>No User Found with given filter</p>}
      </div>
    </>
  );
};

export default UserInfo;
