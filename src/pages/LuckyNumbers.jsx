import React, { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step0 from "../components/Step0";
import Stepper from "../components/Stepper";
import Title from "../components/Title";

const LuckyNumbers = () => {
  const date = new Date();

  const [step, setStep] = useState(0);
  const [datetime, setDatetime] = useState(date);
  const [numbers, setNumbers] = useState([]);

  
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
        {step === 2 ? <Step2 setStep={setStep} numbers={numbers} setNumbers={setNumbers} /> : null}
        {step === 3 ? <Step3 setStep={setStep} /> : null}
        {step === 4 ? <Step4 setStep={setStep} numbers={numbers} /> : null}
      </div>
    </>
  );
};

export default LuckyNumbers;
