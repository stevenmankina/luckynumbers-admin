import React, { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Stepper from "../components/Stepper";
import Title from "../components/Title";

const LuckyNumbers = () => {

  const [step, setStep] = useState(1);

  return (


    <>

<div className="p-2 md:p-6">

    <Title title={'Lucky Numbers Card'}/>


    <Stepper step={step} />

    {step === 1 ? <Step1 setStep={setStep}/>: null}
    {step === 2 ? <Step2 setStep={setStep}/>: null}
    {step === 3 ? <Step3 setStep={setStep}/>: null}
    {step === 4 ? <Step4 setStep={setStep}/>: null}

</div>
    </>
  );
};

export default LuckyNumbers;
