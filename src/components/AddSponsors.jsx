import axios from "axios";
import React from "react";
import { BASE_URL } from "../util/config";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import Advert from "./Advert";
import { useState } from "react";
import AddAdvert from "./AddAdvert";

const AddSponsors = ({ setPopup, sponsor, setSponsor }) => {
  const { resetUser, userToken } = useContext(AuthContext);

  const [advertPopup, setAdvertPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sponsor._id) {
      updateSponsor();
    } else {
      createSponsor();
    }
  };

  const getSponsor = async () => {
    if(!sponsor?._id) return;

    try {
      
      let url = `${BASE_URL}/sponsor/${sponsor._id}/get`

      let res = await axios.get(url, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });

      if(res.status === 200) {
        setSponsor(res.data.sponsorExists);
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

  }

  const createSponsor = async () => {
    let url = `${BASE_URL}/sponsor/create`;

    let data = {
      sponsorName: sponsor.sponsorName,
      pointOfContact: sponsor.pointOfContact,
      email: sponsor.email,
      phone: sponsor.phone,
      country: sponsor.country,
      city: sponsor.city,
      street: sponsor.street,
      zipcode: sponsor.zipcode,
    };

    try {
      let res = await axios.post(url, data, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });

      if (res.status === 200) {
        // setPopup(false);
        setSponsor(res.data.sponsor);
        toast.success("Sponsor Created Successfully");
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

  const updateSponsor = async () => {
    let url = `${BASE_URL}/sponsor/${sponsor._id}/update`;

    let data = {
      sponsorName: sponsor.sponsorName,
      pointOfContact: sponsor.pointOfContact,
      email: sponsor.email,
      phone: sponsor.phone,
      country: sponsor.country,
      city: sponsor.city,
      street: sponsor.street,
      zipcode: sponsor.zipcode,
    };

    try {
      let res = await axios.patch(url, data, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });

      if (res.status === 200) {
        setPopup(false);
        toast.success("Sponsor Updated Successfully");
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

  const deleteSponsor = async () => {
    let url = `${BASE_URL}/sponsor/${sponsor._id}/delete`;

    try {
      let res = await axios.delete(url, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });

      if (res.status === 200) {
        setPopup(false);
        toast.success("Sponsor Deleted Successfully");
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

  return (
    <>
      {advertPopup && (
        <div className="fixed w-10/12 ml-[-24px] h-full flex justify-center bg-slate-200">
          <AddAdvert setAdvertPopup={setAdvertPopup} sid={sponsor?._id} getSponsor={getSponsor} />
        </div>
      )}

      <div className="flex h-fit">
        <div className="text-left w-full md:w-1/3 border-r-2  bg-white md:p-10 p-2">
          <h1 className="text-3xl font-bold">Sponsor Profile</h1>

          <button
            onClick={() => {setPopup(false); setSponsor(null);}}
            className="px-3  py-1 rounded cursor-pointer my-3 text-white bg-primary-500"
          >
            Back
          </button>
          {/* <p className="font-semibold">Sponsor photo</p> */}

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

          <form action="" onSubmit={(e) => handleSubmit(e)} className="mt-4">
            <p className="font-semibold mt-3">Sponsor Name</p>
            <input
              type="text"
              value={sponsor ? sponsor.sponsorName : ""}
              onChange={(e) => {
                setSponsor({ ...sponsor, sponsorName: e.target.value });
              }}
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              placeholder="Your Sponsor Name"
              name="sponsorName"
            />

            <p className="font-semibold mt-3">Point of contact</p>
            <input
              type="text"
              value={sponsor ? sponsor.pointOfContact : ""}
              onChange={(e) => {
                setSponsor({ ...sponsor, pointOfContact: e.target.value });
              }}
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              placeholder="Your Name"
              name="poc"
            />

            <p className="font-semibold mt-3">Phone Number</p>
            <input
              type="text"
              value={sponsor ? sponsor.phone : ""}
              onChange={(e) => {
                setSponsor({ ...sponsor, phone: e.target.value });
              }}
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              placeholder="+918179455623"
              name="phoneno"
            />

            <p className="font-semibold mt-3">Email address</p>
            <input
              type="email"
              value={sponsor ? sponsor.email : ""}
              onChange={(e) => {
                setSponsor({ ...sponsor, email: e.target.value });
              }}
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              placeholder="email"
              name="email"
            />
{/* 
            <p className="font-semibold mt-3">Live Adverts</p>
            <input
              type="text"
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              placeholder="Number of Adverts"
              name="liveadverts"
            /> */}

            {/* <p className="font-semibold mt-3">Wallet on account</p>
            <input
              type="email"
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              placeholder="text"
              name="email"
            /> */}

            <p className="font-semibold mt-3">Country</p>
            <input
              type="text"
              value={sponsor ? sponsor.country : ""}
              onChange={(e) => {
                setSponsor({ ...sponsor, country: e.target.value });
              }}
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              placeholder="text"
              name="location"
            />
            <p className="font-semibold mt-3">City</p>
            <input
              type="text"
              value={sponsor ? sponsor.city : ""}
              onChange={(e) => {
                setSponsor({ ...sponsor, city: e.target.value });
              }}
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              placeholder="text"
              name="location"
            />
            <p className="font-semibold mt-3">Street</p>
            <input
              type="text"
              value={sponsor ? sponsor.street : ""}
              onChange={(e) => {
                setSponsor({ ...sponsor, street: e.target.value });
              }}
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              placeholder="text"
              name="location"
            />
            <p className="font-semibold mt-3">Zipcode</p>
            <input
              type="number"
              value={sponsor ? sponsor.zipcode : ""}
              onChange={(e) => {
                setSponsor({ ...sponsor, zipcode: e.target.value });
              }}
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              placeholder="text"
              name="location"
            />

            <div className="flex mt-3 justify-end">
              <button
                onClick={() => setPopup(false)}
                className="cursor-pointer mx-4"
              >
                Cancel
              </button>

              <input
                type="submit"
                className="px-3 py-1 rounded text-white bg-primary-500"
                value="Save Sponsor"
              />
            </div>
            <button
              onClick={deleteSponsor}
              className={`px-3 py-1 mt-2 ${
                sponsor && sponsor._id ? "" : "hidden"
              } rounded text-white float-right bg-primary-400`}
            >
              Remove Sponsor
            </button>
          </form>
        </div>

        {sponsor?._id && (
          <>
          <div className="flex w-full flex-col">

            <div className="flex justify-between mt-3 px-10 h-fit items-cente w-full">
              <h1 className="text-3xl font-bold">Live Adverts</h1>
              <button
                onClick={() => setAdvertPopup(true)}
                className="px-3 mx-3 py-1 rounded cursor-pointer text-white bg-primary-500"
              >
                Add Advert
              </button>
            </div>
            <div className=" flex w-full flex-wrap  ">
              {sponsor?.noOfAdverts.map((id) => (
                <Advert key={id} sid={sponsor?._id} id={id} getSponsor={getSponsor} />
              ))}
            </div>
                </div>
          </>
        )}
        {/* <Advert/> */}
      </div>
    </>
  );
};

export default AddSponsors;
