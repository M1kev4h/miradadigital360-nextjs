'use client'

import { useCounter } from "./CounterContext";
const Increment = () => {
  const { increment } = useCounter();

  return (
    <button className="text-white font-black" 
    onClick={increment}>+</button>
  );
};

export default Increment;