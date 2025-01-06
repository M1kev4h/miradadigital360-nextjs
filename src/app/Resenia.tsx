import { Comentario } from '@/Components/Comentario'
import React from 'react';
import Imagencomentaro1 from '@/../public/assets/img/imagencomentario1.jpg';
import Imagencomentaro2 from '@/../public/assets/img/ImagenComentario2.jpg';
import Imagencomentaro3 from '@/../public/assets/img/ImagenComentario3.jpg';

export function Resenia() {
  return (
    <section className='grid justify-items-center '>
      <div>
        <main className='flex flex-col py-16 md:px-[240px] gap-8 '>
          <article className='grid justify-items-center text-white   
                               md:justify-items-start'>
            
          </article>
          <div className='w-screen grid justify-items-center gap-4 
                         md:inline-block '>
            <Comentario
              Img={Imagencomentaro1}
              Nombre={'Michael V'}
              Fecha={'25/12/24'}
              Comentarios={'¡Entrega rápida! Me llegó al día siguiente, ¡gracias!'}
               />

            <Comentario
              Img={Imagencomentaro2}
              Nombre={'Nestor C'}
              Fecha={'18/12/24'}
              Comentarios={'Exelente Calidad de Imagen Estoy muy contento,le  hablarle a mis perros a por  la cámara hasta parlantes tiene .'}
              // MostrarImagen 
              />

            <Comentario
              Img={Imagencomentaro3}
              Nombre={'Fernando'}
              Fecha={'8/12/24'}
              Comentarios={'Buen Flash Llego rápido y tiene un tremendo flash; quité un foco que tenía y con la luz de la cámara es ya esta.'}
              // MostrarImagen 
              />

            <Comentario
              Nombre={'Valeria P'}
              Fecha={'4/12/24'}
              Comentarios={'La cámara llegó rápido y tiene una buena visión en la noche, ¡muy satisfecha!'}
              // MostrarImagen 
              />
          </div>
        </main>
      </div>
    </section>
  )
}

