import React from 'react'
import Image from "next/image"
interface Props { 
    imagen: string;
     Descripcion: string;
      Nombre: string; 
      Fecha: string;
       Comentarios: string; 
       }
import Verified from '@/assets/icons/Verified.svg'    

const Comentario:React.FC<Props> = ({imagen,  Descripcion, Nombre, Fecha, Comentarios }) =>{
  return (
    <section className="text-white rounded-t-2xl w-[250px] bg-[#1b1b20] ">
    <Image src={imagen} alt={Descripcion} className="h-auto w-fit rounded-t-2xl " />
    <article className="p-3">
        <h3 className="text-2xl flex gap-4 font-bold ">{Nombre}<span className="flex gap-1 text-sm mt-2 font-normal items-center"><Verified/> Verificado</span></h3>
        <span className="text-xs">{Fecha}</span>
        <div className="flex mt-2"><slot/></div>
        <p className="w-full text-pretty">{Comentarios}</p>
    </article>
</section>
  )
}

export default Comentario