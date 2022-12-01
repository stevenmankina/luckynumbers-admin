import React, { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step0 from "../components/Step0";
import Stepper from "../components/Stepper";
import Title from "../components/Title";
import { BASE_URL } from "../util/config";

const LuckyNumbers = () => {
  const [step, setStep] = useState(0);
  const [datetime, setDatetime] = useState(null);
  const [numbers, setNumbers] = useState([]);

  const [winning, setWinning] = useState({ win_at: 0, win_from: 0 });

  const saveGame = async () => {
    let win_numbers = [];
    let time_array = [];

    for (let i = 0; i < numbers.length; i++) {
      let numberObj = numbers[i];
      win_numbers.push(numberObj.number);
      time_array.push(numberObj.time);
    }

    let url = `${BASE_URL}/game`;

    let data = {
      starts_at: datetime,
      win_in: winning.win_at,
      win_from: winning.win_from,
      win_numbers,
      time_array,
    };

    console.log(data);
    setStep(4);

    // try {
    //   let res = await axios.post(url, data);

    //   if (res.status === 201) {
    //     setStep(4);
    //   } else {
    //     console.log("Failed to add Episode");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <div className="p-2 md:p-6">
        <Title title={"Lucky Numbers Card"} />

        {step > 0 ? <Stepper step={step} /> : null}

        {step === 0 ? <Step0 setStep={setStep} /> : null}
        {step === 1 ? (
          <Step1
            setStep={setStep}
            setDatetime={setDatetime}
            datetime={datetime}
          />
        ) : null}
        {step === 2 ? (
          <Step2 setStep={setStep} numbers={numbers} setNumbers={setNumbers} />
        ) : null}
        {step === 3 ? (
          <Step3 setStep={setStep} winning={winning} saveGame={saveGame} setWinning={setWinning} />
        ) : null}
        {step === 4 ? <Step4 setStep={setStep} numbers={numbers} /> : null}
      </div>
    </>
  );
};

export default LuckyNumbers;
