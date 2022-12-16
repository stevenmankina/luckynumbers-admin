import React from "react";

const WinningNumbers = ({ numbers, setPopup }) => {
  return (
    <>
      <div className=" w-10/12  h-full fixed flex justify-center items-center bg-black bg-opacity-30">
        <div className="p-6 relative bg-white w-1/2 h-fit  rounded">
          <p
            className="absolute top-0 cursor-pointer right-2"
            onClick={() => setPopup(false)}
          >
            X
          </p>
          <div className="flex border flex-wrap justify-center w-fit px-2 my-10 m-auto rounded-md border-primary-500">
            {numbers &&
              numbers.map((num, index) => (
                <p key={index} className="text-primary-500  p-2">
                  {num}
                </p>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WinningNumbers;
