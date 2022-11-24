import React from 'react'

const Step1 = ({setStep}) => {
  return (
    <>
<div className="p-10">
        <h3 className="text-xl text-primary-500">
          Winning numbers have been added!
        </h3>

        <button
          onClick={() => setStep(1)}
          className="px-10 bg-primary-500 py-2 my-3  text-white"
        >
          BACK TO DASHBOARD &gt;{" "}
        </button>
        <br />

        <button
          onClick={() => setStep(1)}
          className="px-10 border rounded-md border-primary-500 py-2 text-primary-500"
        >
          VIEW WINNING NUMBERS &gt;{" "}
        </button>
      </div>

</>
  )
}

export default Step1