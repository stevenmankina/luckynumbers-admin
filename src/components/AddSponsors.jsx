import React from "react";

const AddSponsors = ({ setPopup }) => {
  const handleSubmit = () => {
    setPopup(false);
  };

  return (
    <>
      <div className="flex h-fit">

        <div className="text-left w-full md:w-1/3 border-r-2  bg-white md:p-10 p-2">
          <h1 className="text-3xl font-bold">Sponsor Profile</h1>
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
            <p className="font-semibold mt-3">Sponsor Name</p>
            <input
              type="text"
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              placeholder="Your Sponsor Name"
              name="sponsorName"
            />

            <p className="font-semibold mt-3">Point of contact</p>
            <input
              type="email"
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              placeholder="Your Name"
              name="poc"
            />

            <p className="font-semibold mt-3">Phone Number</p>
            <input
              type="text"
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              placeholder="Your Phone Number"
              name="phoneno"
            />

            <p className="font-semibold mt-3">Email address</p>
            <input
              type="email"
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              placeholder="email"
              name="email"
            />

            <p className="font-semibold mt-3">Live Adverts</p>
            <input
              type="text"
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              placeholder="Number of Adverts"
              name="liveadverts"
            />

            <p className="font-semibold mt-3">Wallet on account</p>
            <input
              type="email"
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              placeholder="text"
              name="email"
            />

            <p className="font-semibold mt-3">Location</p>
            <input
              type="text"
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              placeholder="text"
              name="location"
            />

            <p className="font-semibold mt-3">About Me</p>
            <textarea
              name="about"
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              rows="2"
            ></textarea>

            <div className="flex justify-end">
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
            <button className="px-3 py-1 mt-2 rounded text-white float-right bg-primary-400">
              Remove Sponsor
            </button>
          </form>
        </div>

        <div className=" md:w-1/3 w-full md:p-10 p-2">

        <h1 className="text-3xl font-bold">Live Adverts</h1>

        <div className="bg-secondary-100 text-center w-full p-7">

            <img src="/icecream.png" alt="" />
            
            <h2 className="text-2xl pt-4">Advert Title</h2>
            <p>Time</p>
            <p>Date</p>
            <p>Duration</p>

            <button className="px-3 mt-3 rounded text-white bg-primary-500">Remove Advert</button>

        </div>


        </div>


      </div>
    </>
  );
};

export default AddSponsors;
