import { ProfessionalApp } from "./useContext/ProfessionalApp";

export const HookApp = () => {
  return (
    <>
      {/* <TrafficLight /> */}
      {/* <TrafficLightWithEffect /> */}
      {/* <TrafficLightWithHook /> */}
      {/* <PokemonPage /> */}
      {/* <FocusScreen /> */}
      {/* <TaskApp /> */}
      {/* <ScrambleWords /> */}
      {/* <MemoHook /> */}
      {/* <MemoCounter /> */}
      {/* <InstagramApp /> */}
      {/* <Suspense
        fallback={
          <div className="bg-gradient flex flex-col gap-4 justify-center items-center">
            <h1 className="text-5xl font-bold">
              Probando suspense con fallback
            </h1>
            <span className="text-white font-thin text-2xl">Cargando...</span>
          </div>
        }
      >
        <ClientInformation getUser={getUserAction(1000)} />
      </Suspense> */}
      <ProfessionalApp />
    </>
  );
};
