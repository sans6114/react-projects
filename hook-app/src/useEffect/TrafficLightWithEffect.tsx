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

// type TrafficLightColor = "red" | "yellow" | "green";

type TrafficLightColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {
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

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-3xl font-bold text-white">
          Semaforo con useEffect
        </h1>
        <span className="text-3xl font-bold text-white">{countDown}</span>
        <div className="bg-gray-400 h-2 w-64 rounded-full">
          <div
            className="bg-blue-500 rounded-full transition-all duration-1000 ease-linear h-full"
            style={{ width: `${(countDown / 5) * 100}%` }}
          ></div>
        </div>

        <div
          className={`cursor-pointer w-32 h-32  rounded-full ${light === "red" ? colors[light] : "bg-gray-500"}`}
        ></div>

        <div
          className={`cursor-pointer w-32 h-32  rounded-full ${light === "yellow" ? colors[light] : "bg-gray-500"}`}
        ></div>
        <div
          className={`cursor-pointer w-32 h-32  rounded-full ${light === "green" ? colors[light] : "bg-gray-500"}`}
        ></div>
      </div>
    </div>
  );
};
