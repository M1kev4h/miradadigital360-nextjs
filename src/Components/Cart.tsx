'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AddCart from "@/assets/icons/AddCart.svg";
import ModalCart from './ModalCart';
import { useCounter } from './Contextapi/CounterContext'; 

const Cart: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isModalOpen]);

  const { count } = useCounter();

  return (
    <div className='relative inline-block'>
      <button onClick={openModal} className="flex items-center">
        <span className='absolute top-0 right-2 bg-[#e1fd6f] text-black rounded-full px-2 py-1 text-xs font-bold'>{count}</span>
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
