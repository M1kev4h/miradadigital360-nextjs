import React from 'react';
import Verified from '../../public/assets/icons/Verified.svg';
import Image, { StaticImageData } from 'next/image';

interface NewType {
  Img?: string | StaticImageData;
  Nombre: string;
  Fecha: string;
  Comentarios: string;
  MostrarImagen?: boolean;
}

export const Comentario: React.FC<NewType> = ({ Img, Nombre, Fecha, Comentarios, MostrarImagen = false }) => {
  return (
    <section className="text-white rounded-2xl w-[250px] bg-[#1b1b20] inline-block md:mx-4">
    <article>
      {Img && MostrarImagen === false && (
        <div className="relative w-[15.6rem] h-[15.6rem] overflow-hidden rounded-tl-lg rounded-tr-lg">
          <Image
            src={Img}
            alt="Imagen del comentario"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
  
      <div className="px-4 py-2">
        <h3 className="text-xl flex gap-4 font-bold md:text-2xl">
          {Nombre}
          <span className="flex gap-1 text-sm mt-2 font-normal items-center">
            <Image
              src={Verified}
              alt="Verified"
              width={16}
              height={16}
            />{' '}
            Verificado
          </span>
        </h3>
        <span className="text-xs">{Fecha}</span>
        <div className="flex mt-2">
          <slot />
        </div>
        <p className="w-full text-pretty">{Comentarios}</p>
      </div>
    </article>
  </section>
  
  );
};
