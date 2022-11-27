import axios from "axios";
import React from "react";
import Title from "../components/Title";
import { BASE_URL } from "../util/config";

const UserProfile = ({ user, setUser, setPopup }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);

    if (user._id) {
      console.log("put");
      // updateUser();
    } else {
      console.log("post");
      // createUser();
    }
  };

  const createUser = async () => {
    let url = `${BASE_URL}/player/register`;

    let data = {
      phone: "2222222222",
      firstname: "Pranil",
      lastname: "Kakade",
      email: "df@gmail.com",
      dob: "1998-08-14",
      gender: "Male",
      location: "Thane",
    };

    let res = await axios.post(url, data);
  };

  const updateUser = () => {};

  return (
    <>
      {/* <Title title={'User Info'}/> */}

      <div className="text-left w-full md:w-1/3  bg-white md:p-10 p-2">
        <h1 className="text-3xl font-bold">View Profile</h1>
        <p className="font-semibold">Sponsor photo</p>

        <div className="uploadimage flex items-center">
          <img src="/logo192.png" className="w-1/4" alt="" />

          <div className="text-left w-3/4 pl-4">
            <p>Upload your photo</p>
            <p className="text-xs my-2">
              Your photo should be in PNG or JPG format
            </p>
            <input type="file" className="w-full" name="" id="" />
          </div>
        </div>

        <form action="" onSubmit={handleSubmit} className="mt-4">
          <p className="font-semibold mt-3">Full Name</p>
          <input
            type="text"
            value={user ? user.firstname : ""}
            onChange={(e) => {
              setUser({ ...user, firstname: e.target.value});
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
                setUser({ ...user, email: e.target.value});
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
                setUser({ ...user, phone: e.target.value});
              }}
            className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
            placeholder="Your Phone Number"
            name="phoneno"
            required={true}
          />

          <p className="font-semibold mt-3">Location</p>
          <input
            type="text"
            className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
            placeholder="Your Location"
            name="location"
          />

          <p className="font-semibold mt-3">About Me</p>
          <textarea
            name="about"
            className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
            rows="2"
          ></textarea>

          <input
            type="submit"
            className="px-3 py-1 rounded text-white bg-primary-500"
            value="Save Profile"
          />
        </form>

        <button className="px-3 py-1 mt-2 rounded text-white bg-primary-400">
          Delete Account
        </button>
        <button
          onClick={() => {
            setPopup(false);
            setUser(null);
          }}
          className="px-3 py-1 mt-2 mx-3 rounded text-white bg-primary-400"
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default UserProfile;
