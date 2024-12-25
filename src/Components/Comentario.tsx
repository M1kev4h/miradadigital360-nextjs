import React from 'react'
import Verified from '../../public/assets/icons/Verified.svg'
import Image from 'next/image';
interface NewType {
  Nombre: string;
  Fecha: string;
  Comentarios: string;
}

export const Comentario: React.FC<NewType> = ({ Nombre, Fecha, Comentarios }) => {
  return (
    <section className="text-white rounded-2xl w-[250px] bg-[#1b1b20] ">
      <article className="p-3">
        <h3 className="text-xl flex gap-4 font-bold 
        md:text-2xl">{Nombre}<span className="flex gap-1 text-sm mt-2 font-normal items-center">
          <Image
            src={Verified}
            alt="Verified"
            width={16}
            height={16}
          /> Verificado</span></h3>
        <span className="text-xs">{Fecha}</span>
        <p></p>
        <div className="flex mt-2"><slot /></div>
        <p className="w-full text-pretty">{Comentarios}</p>
      </article>
    </section>
  )
}
