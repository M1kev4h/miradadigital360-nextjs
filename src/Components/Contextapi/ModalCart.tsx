"use client";

import React from "react";
import { createPortal } from "react-dom";
import { useCounter } from "./CounterContext"; 
import Image from "next/image";
import CamaraChiquita from "../../../public/assets/img/CamaraChiquita.png";
import { createPreferece } from "@/actions/preferences/action"; 

const pricePerItem = 2990;
const originalPricePerItem = 4116;

interface ModalCartProps {
  closeModal: () => void;
}

const ModalCart: React.FC<ModalCartProps> = ({ closeModal }) => {
  const { count, increment, decrement } = useCounter(); 

  const product = {
    id: 1,
    name: "Smart Net Camera V380",
    price: pricePerItem,
  };

  const cart = [
    {
      product,
      quantity: count,
    },
  ];

  const calculateTotal = () => count * pricePerItem;

  // Renderizamos el modal usando un portal
  return createPortal(
    <section className="bg-black/80 fixed z-[60] inset-0 flex items-center justify-end text-white">
      <main className="bg-[#222227] p-4 rounded-tl-2xl rounded-bl-2xl h-full w-[320px] max-sm:w-screen">
        <div className="flex justify-between items-center mt-16 mb-4 max-sm:pt-32">
          <h1 className="-tracking-[-.05rem] font-medium">Carrito</h1>
          <button className="font-bold text-xl" onClick={closeModal}>
            X
          </button>
        </div>

        {count === 0 ? (
          <div className="flex items-center justify-center">
            <h2 className="text-xl font-bold text-gray-400">
              El carrito está vacío
            </h2>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center border-b border-gray-600 py-4">
              <div className="flex items-center gap-4">
                <Image
                  src={CamaraChiquita}
                  alt="Smart Net Camera V380"
                  width={90}
                  height={90}
                />
                <div>
                  <h2 className="font-bold text-lg">Smart Net Camera V380</h2>
                  <div className="flex flex-col">
                    <del className="text-gray-400 text-sm">
                      ${originalPricePerItem}
                    </del>
                    <ins className="no-underline font-bold text-lg">
                      ${pricePerItem}
                    </ins>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Cantidad: {count}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={decrement}
                  className="px-2 py-1 font-black bg-white text-black rounded hover:bg-gray-200"
                >
                  -
                </button>
                <button
                  onClick={increment}
                  className="px-2 py-1 font-black bg-white text-black rounded hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-right mt-4 font-bold text-lg">
              Total: ${calculateTotal()}
            </div>
          </div>
        )}

        <p className="border-[#e1fd6f] border-2 text-[#e1fd6f] py-1 px-2 my-2">
          ⏰ ¡Haz tu pedido antes de que se agoten!
        </p>

        <form action={() => createPreferece(cart)}>
          <button
            type="submit"
            className="w-full h-10 rounded-2xl bg-[#e1fd6f] hover:bg-[#dafd4c] text-xl text-[#222227] font-bold -tracking-[-.05rem] mt-2 mb-2"
          >
            Finalizar Compra
          </button>
        </form>
      </main>
    </section>,
    document.body // Renderizamos el modal en el body
  );
};

export default ModalCart;
