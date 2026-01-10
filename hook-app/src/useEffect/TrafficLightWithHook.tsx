import { useTrafficLight } from "../hooks/useTrafficLight";

export const TrafficLightWithHook = () => {
  const { countDown, porcentage, greenLight, redLight, yellowLight } =
    useTrafficLight();

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
            style={{ width: `${porcentage}%` }}
          ></div>
        </div>

        <div
          className={`cursor-pointer w-32 h-32  rounded-full ${redLight}`}
        ></div>

        <div
          className={`cursor-pointer w-32 h-32  rounded-full ${yellowLight}`}
        ></div>
        <div
          className={`cursor-pointer w-32 h-32  rounded-full ${greenLight}`}
        ></div>
      </div>
    </div>
  );
};
