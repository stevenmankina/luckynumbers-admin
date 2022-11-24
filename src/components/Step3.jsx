import React from 'react'

const Step1 = ({setStep}) => {
  return (
<>
<div className="p-10">
        <h3 className="text-xl text-primary-500">
          Step 3 - Add number of winning cards per round
        </h3>

        <button
          onClick={() => setStep(4)}
          className="px-10 bg-primary-500 py-2 my-3  text-white"
        >
          CONTINUE &gt;{" "}
        </button>
      </div>

</>
  )
}

export default Step1