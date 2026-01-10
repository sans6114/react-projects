import {
  useEffect,
  useState,
} from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
  //   blue: "bg-blue-500 animate-pulse",
  //   pink: "bg-pink-500 animate-pulse",
};
type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countDown, setCountDown] = useState(5);

  //Countdown effect
  useEffect(() => {
    if (countDown === 0) return;
    const intervalId = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countDown]);

  //change value of light effect

  useEffect(() => {
    if (countDown > 0) return;
    let timeToUpdate: number;
    if (light === "red") {
      setLight("green");
      timeToUpdate = 5;
    } else if (light === "green") {
      setLight("yellow");
      timeToUpdate = 2;
    } else {
      setLight("red");
      timeToUpdate = 5;
    }
    setCountDown(timeToUpdate);
  }, [countDown, light]);

  return {
    //props
    countDown,
    //computed
    porcentage: (countDown / 5) * 100,
    greenLight: light === "green" ? colors.green : "bg-gray-500",
    redLight: light === "red" ? colors.red : "bg-gray-500",
    yellowLight: light === "yellow" ? colors.yellow : "bg-gray-500",
    //methods
  };
};
