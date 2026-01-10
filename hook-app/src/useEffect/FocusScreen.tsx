import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    console.log(inputRef.current?.value);
    inputRef.current?.select();
  };
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-white">Focus screen</h1>
      <input
        ref={inputRef}
        className="p-2 rounded bg-white text-black"
        type="text"
        autoFocus
      />
      <button
        onClick={handleClick}
        className="bg-blue-400 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Focus
      </button>
    </div>
  );
};
