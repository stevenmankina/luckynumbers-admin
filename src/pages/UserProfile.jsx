import axios from "axios";
import React from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { getDateInput } from "../util/age";
import { BASE_URL } from "../util/config";

const UserProfile = ({ user, setUser, setPopup, getAllUsers }) => {
  const { resetUser, userToken } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user._id) {
      updateUser();
    } else {
      createUser();
    }
  };

  const createUser = async () => {
    let url = `${BASE_URL}/player/register`;

    let data = {
      phone: user.phone,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      dob: user.dob,
      gender: user.gender ? user.gender : "Male",
      location: user.location,
    };

    try {
      let res = await axios.post(url, data, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      if (res.status === 201) {
        getAllUsers();
        setUser(null);
        toast.success("User added sucessfully");
        setPopup(false);
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

  const updateUser = async () => {
    let url = `${BASE_URL}/player/${user._id}/update`;

    let data = {
      phone: user.phone,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      dob: user.dob,
      gender: user.gender,
      location: user.location,
    };

    try {
      let res = await axios.patch(url, data, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      if (res.status === 201) {
        getAllUsers();
        setUser(null);
        toast.success("User Updated sucessfully");
        setPopup(false);
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

  const deleteUser = async () => {
    let url = `${BASE_URL}/player/${user._id}/delete`;

    try {
      let res = await axios.delete(url, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      if (res.status === 200) {
        getAllUsers();
        setUser(null);
        toast.success("User Deleted sucessfully");
        setPopup(false);
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

  return (
    <>
      <div className="text-left w-full md:w-1/3 relative bg-white md:p-10 p-2">
        <p
          onClick={() => {
            setPopup(false);
            setUser(null);
          }}
          className="text-2xl text-neutral-400 cursor-pointer absolute top-8 right-5"
        >
          X
        </p>

        <h1 className="text-3xl font-bold">View Profile</h1>
        <p className="font-semibold">Sponsor photo</p>

        <form action="" onSubmit={handleSubmit} className="mt-4">
          <p className="font-semibold mt-3">First Name</p>
          <input
            type="text"
            value={user ? user.firstname : ""}
            onChange={(e) => {
              setUser({ ...user, firstname: e.target.value });
            }}
            className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
            placeholder="Your Full Name"
            name="fullName"
            required={true}
          />
          <p className="font-semibold mt-3">Last Name</p>
          <input
            type="text"
            value={user ? user.lastname : ""}
            onChange={(e) => {
              setUser({ ...user, lastname: e.target.value });
            }}
            className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
            placeholder="Your Full Name"
            name="fullName"
            required={true}
          />

          <p className="font-semibold mt-3">Email</p>
          <input
            type="email"
            value={user ? user.email : ""}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
            placeholder="Your Email"
            name="email"
            required={true}
          />

          <p className="font-semibold mt-3">Phone Number</p>
          <input
            type="text"
            value={user ? user.phone : ""}
            onChange={(e) => {
              setUser({ ...user, phone: e.target.value });
            }}
            className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
            placeholder="Your Phone Number"
            name="phoneno"
            required={true}
          />

          <p className="font-semibold mt-3">Country</p>
          <input
            type="text"
            value={user ? user.country : ""}
            className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
            placeholder="Your Location"
            name="location"
            onChange={(e) => {
              setUser({ ...user, country: e.target.value });
            }}
          />
          <p className="font-semibold mt-3">Date Of Birth</p>
          <input
            type="date"
            value={user ? getDateInput(user.dob) : ""}
            className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
            placeholder="DOB"
            name="dateOfBirth"
            onChange={(e) => {
              setUser({ ...user, dob: e.target.value });
            }}
          />
          <p className="font-semibold mt-3">Gender</p>

          <select
            onChange={(e) => {
              setUser({ ...user, gender: e.target.value });
              console.log(e.target.value);
              console.log(user.gender);
            }}
            value={user ? user.gender : "Male"}
            className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <br />
        </form>

        <button
          onClick={deleteUser}
          className="px-4 py-1 my-5 border-2 rounded text-primary-500 border-primary-500"
        >
          Delete Account
        </button>
      </div>
    </>
  );
};

export default UserProfile;
