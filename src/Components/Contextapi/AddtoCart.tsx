'use client';

import React from 'react';
import { useCounter } from "./CounterContext";

interface AddtoCartProps {
  openModal: () => void;
}

const AddtoCart: React.FC<AddtoCartProps> = ({ openModal }) => {
  const { increment } = useCounter();

  const handleAddToCart = () => {
    increment();
    openModal(); // Abrir el modal al añadir al carrito
  };

  return (
    <button
      className="w-full h-10 rounded-2xl bg-[#e1fd6f] hover:bg-[#dafd4c] text-xl text-[#222227] font-bold -tracking-[-.05rem] mt-2 mb-2"
      onClick={handleAddToCart}
    >
      Añadir al carrito
    </button>
  );
};

export default AddtoCart;
