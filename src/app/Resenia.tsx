import { Comentario } from '@/Components/Comentario'
import React from 'react'

export function Resenia() {
  return (
    <section>
      <div>
        <main className='flex flex-col py-16 md:px-[240px] gap-8'>
          <article className='grid justify-items-center text-white   
                               md:justify-items-start md:px-16'>
            {/* <div className='flex items-center'>
              <span></span>
              <h3 className='text-4xl md:text-7xl'>4.5</h3>
            </div>
            <p className='ml-4 text-lg'>3 Reseñas</p> */}
          </article>
         <div className='flex gap-4'>
         <Comentario
            Nombre={'Michael V'}
            Fecha={'25/12/24'}
            Comentarios={'¡Entrega rápida! Me llegó al día siguiente, ¡gracias!'} />

          <Comentario
            Nombre={'Nestor C'}
            Fecha={'18/12/24'}
            Comentarios={'Exelente Calidad de Imagen Estoy muy contento,le  hablarle a mis perros a por  la cámara hasta parlantes tiene .'} />

          <Comentario
            Nombre={'Fernando'}
            Fecha={'8/12/24'}
            Comentarios={'Buen Flash Llego rápido y tiene un tremendo flash; quité un foco que tenía y con la luz de la cámara es ya esta.'} />

          <Comentario
            Nombre={'Valeria P'}
            Fecha={'4/12/24'}
            Comentarios={'La cámara llegó rápido y tiene una buena visión en la noche, ¡muy satisfecha!'} />
         </div>
        </main>
      </div>
    </section>
  )
}

