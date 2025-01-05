'use client';

import React from 'react';
import Image from 'next/image';
import AddCart from "../../../public/assets/icons/AddCart.svg";
import ModalCart from './ModalCart';
import { useCounter } from './CounterContext'; 

interface CartProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const Cart: React.FC<CartProps> = ({ isModalOpen, openModal, closeModal }) => {
  const { count } = useCounter();

  return (
    <div className='relative inline-block'>
      <button onClick={openModal} className="flex items-center">
        <span className='absolute top-0 right-2 bg-[#e1fd6f] text-black rounded-full px-2 py-1 text-xs font-bold max-sm:scale-50 max-sm:-mx-2 max-sm:-my-1'>{count}</span>
        <Image
          src={AddCart}
          alt="Carrito de compras"
          width={32}
          height={32}
          className="size-6 mr-2 -ml-2 md:size-12 md:mr-4 md:-ml-4"
        />
      </button>
      {isModalOpen && <ModalCart closeModal={closeModal} />}
    </div>
  );
};

export default Cart;