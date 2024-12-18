'use client'

import { useCounter } from "./Contextapi/CounterContext";
const AddtoCart = () => {
  const { increment } = useCounter();

  return (
    <button className="w-full h-10 rounded-2xl bg-[#e1fd6f] hover:bg-[#dafd4c]  text-xl text-[#222227] font-bold -tracking-[-.05rem] mt-2 mb-2" onClick={increment}>Añadir al carrito</button>
  );
};

export default AddtoCart;