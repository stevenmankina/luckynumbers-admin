import React, { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step0 from "../components/Step0";
import Stepper from "../components/Stepper";
import Title from "../components/Title";
import { BASE_URL } from "../util/config";
import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { timeInMilliseconds } from "../util/age";

const LuckyNumbers = () => {
  const [step, setStep] = useState(0);
  const [datetime, setDatetime] = useState(null);
  const [numbers, setNumbers] = useState([]);

  const { isLoggedIn, resetUser } = useContext(AuthContext);

  const [winning, setWinning] = useState({ win_at: 0, win_from: 0 });

  const [games, setGames] = useState([]);

  const getAllGames = async () => {
    try {
      let url = `${BASE_URL}/game`;

      let res = await axios.get(url);
      if (res.status === 200) {
        setGames(res.data.data);
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


  const saveGame = async () => {
    let win_numbers = [];
    let time_array = [];

    for (let i = 0; i < numbers.length; i++) {
      let numberObj = numbers[i];
      win_numbers.push(numberObj.number);
      let time = timeInMilliseconds(numberObj.time);
      time_array.push(time);
    }

    let url = `${BASE_URL}/game`;

    let data = {
      starts_at: datetime,
      win_in: winning.win_at,
      win_from: winning.win_from,
      win_array: win_numbers,
      win_numbers,
      time_array,
    };

    console.log(data);

    try {
      let res = await axios.post(url, data);

      if (res.status === 201) {
        setStep(4);
        toast.success('Game Added Successfully');
      }
    } catch (error) {
      console.log(error.response.data);
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
      <div className="p-2 md:p-6">
        <Title title={"Lucky Numbers Card"} />

        {step > 0 ? <Stepper step={step} /> : null}

        {step === 0 ? <Step0 setStep={setStep} games={games} getAllGames={getAllGames} /> : null}
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
          <Step3
            setStep={setStep}
            winning={winning}
            saveGame={saveGame}
            setWinning={setWinning}
          />
        ) : null}
        {step === 4 ? <Step4 setStep={setStep} numbers={numbers} /> : null}
      </div>
    </>
  );
};

export default LuckyNumbers;
