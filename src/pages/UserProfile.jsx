import axios from "axios";
import React from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { getDate, getDateInput } from "../util/age";
import { BASE_URL } from "../util/config";

const UserProfile = ({ user, setUser, setPopup, getAllUsers }) => {
  const { isLoggedIn, resetUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);

    if (user._id) {
      updateUser();
    } else {
      console.log(user);
      console.log("post");
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
      gender: user.gender,
      location: user.location,
    };

    try {
      let res = await axios.post(url, data);
      if (res.status === 201) {
        getAllUsers();
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
      let res = await axios.patch(url, data);
      if (res.status === 201) {
        getAllUsers();
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
      let res = await axios.delete(url);
      if (res.status === 200) {
        getAllUsers();
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
      {/* <Title title={'User Info'}/> */}

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

        {/* <div className="uploadimage flex items-center">
          <img src="/logo192.png" className="w-1/4" alt="" />

          <div className="text-left w-3/4 pl-4">
            <p>Upload your photo</p>
            <p className="text-xs my-2">
              Your photo should be in PNG or JPG format
            </p>
            <input type="file" className="w-full" name="" id="" />
          </div>
        </div> */}

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

          <p className="font-semibold mt-3">Location</p>
          <input
            type="text"
            value={user ? user.location : ""}
            className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
            placeholder="Your Location"
            name="location"
            onChange={(e) => {
              setUser({ ...user, location: e.target.value });
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
            }}
            value={user ? user.gender : "Male"}
            className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <br />

          {/* <p className="font-semibold mt-3">About Me</p>
          <textarea
            name="about"
            className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
            rows="2"
          ></textarea> */}

          <input
            type="submit"
            className="px-3 mt-5 py-1 rounded text-white bg-primary-500"
            value="Save Profile"
          />
        </form>

        <button onClick={deleteUser} className="px-3 py-1 mt-2 rounded text-white bg-primary-400">
          Delete Account
        </button>
      </div>
    </>
  );
};

export default UserProfile;
