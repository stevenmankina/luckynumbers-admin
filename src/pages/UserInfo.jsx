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
import moment from "moment/moment";
import { dateFormat } from "../util/constants";

// user info
const UserInfo = () => {
  const { resetUser, userToken } = useContext(AuthContext);

  const [popup, setPopup] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const searchUsers = async (search, searchValue) => {
    if (search === null || search === undefined) {
      return;
    }

    let url;
    if (search === 1) {
      url = `${BASE_URL}/user/age?value=${searchValue.age}`;
    } else if (search === 2) {
      url = `${BASE_URL}/user/country?value=${searchValue.location}`;
    } else if (search === 3) {
      url = `${BASE_URL}/user/gender?value=${
        searchValue.gender ? searchValue.gender : "Male"
      }`;
    }

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
      setUsers([]);
      let status = error.response.status;
      if (status === 401 || status === 403) {
        resetUser();
        toast.error("You are not authenticated");
      } else if (error.response.data.message) {
        toast.error("No User Found with given filter");
        getAllUsers();
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

  // invokes getAllUsers function When page loads
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

        <div className="p-7"></div>

        <table className="md:table-auto w-11/12 ">
          <thead className="bg-neutral-100">
            <tr className="font-thin uppercase outline-1  outline-gray-200 outline rounded-sm">
              <th className="p-3 pl-8 text-left font-normal">Name</th>
              <th className="p-3 max-md:hidden font-normal">Country</th>
              <th className="p-3 max-md:hidden font-normal">Email</th>
              <th className="p-3 max-md:hidden font-normal">Age</th>
              <th className="p-3 max-md:hidden font-normal">Account Created</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr
                  key={user._id}
                  className="outline-1 outline-gray-200 outline rounded-sm "
                >
                  <td
                    onClick={() => {
                      setPopup(true);
                      setUser(user);
                    }}
                    className="p-3  pl-8 cursor-pointer flex"
                  >
                    <div className="text-left ">
                      <p className="font-bold text-primary-500 text-sm">
                        {user.firstname + " " + user.lastname}
                      </p>
                      <p className="font-light text-xs">{user.phone}</p>
                    </div>
                  </td>
                  <td className="text-sm max-md:hidden">
                    {user.country ? user.country : "NA"}
                  </td>
                  <td className="text-sm max-md:hidden">{user.email}</td>
                  <td className="text-sm max-md:hidden">
                    {user.age ? user.age : getAge(user.dob)}
                  </td>
                  <td className="text-sm max-md:hidden">
                    {moment(user.created_at).format(dateFormat)}
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
