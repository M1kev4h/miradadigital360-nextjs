import DropDown from '@/Components/DropDown'
import React from 'react'

function Faq() {
  return (
    <section className="relative md:flex grid justify-center pt-32 h-auto gap-8 md:gap-32">
    <main className="grid gap-4 md:w-[400px]">
        <h3 className="text-white text-4xl font-black">Preguntas Frecuentes</h3>
        <div>
        <p className=" bottom-32 text-white text-lg md:-mt-24">No te quedes con ninguna duda. Si tienes alguna pregunta, no dudes en escribirnos.</p>
        </div>
    </main>
    <aside className=" md:h-[280px]">
        <DropDown/>
    </aside>
</section>
  )
}

export default Faq