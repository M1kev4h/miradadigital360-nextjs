import Image from 'next/image'
import EtiquetaBF from '@/assets/img/EtiquetaBF.webp'

function Header() {
  return (
   <section className='z-50 sticky top-0'>
    <Image  
    src={EtiquetaBF}
    alt="Etiqueta del Black Fraiday"
    width={100}
    height={100} 
    className="absolute size-10 
                  md:size-28" />
   
    <main className='bg-[#e1fd6f] grid w-full h-[1fr]'>
        <article className="flex-nowrap py-4 
                            md:flex 
                            md:justify-center
                            md:gap-10">
            <h4 className="text-[15px] text-center text[#1d1d1d] font-bold mb-2
                         md:text-[37px] font-['Squada_One']">¡CAMARAS INTELIGENTES!LA MEJOR OFERTA DEL AÑO 38% OFF!</h4>
            <div className="flex justify-center gap-2">
            <div>
                    <h4 className="font-['Squada_One'] text-4xl grid text-center ">00<span className="text-xs text-center">DÍAS</span></h4>
                </div>
                <span className="font-['Squada_One'] text-4xl leading-9">:</span>

                <div>
                    <h4 className="font-['Squada_One'] text-4xl grid text-center ">00<span className="text-xs text-center">HORAS</span></h4>
                </div>
                <span className="font-['Squada_One'] text-4xl leading-9">:</span>

                <div>
                    <h4 className="font-['Squada_One'] text-4xl grid text-center ">00<span className="text-xs text-center">MINUTOS</span></h4>
                </div>
                <span className="font-['Squada_One'] text-4xl leading-9">:</span>

                <div>
                    <h4 className="font-['Squada_One'] text-4xl grid text-center ">00<span className="text-xs text-center">SEGUNDOS</span></h4>
                </div>
                
            </div>
        </article>
        
    </main>
   </section>
  )
}

export default Header