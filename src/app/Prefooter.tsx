import React from 'react'
import Image from 'next/image'
import TruckFooter from '@/assets/icons/TruckFooter.svg'
import Hs from '@/assets/icons/24hs.svg'
import Grade from '@/assets/icons/Grade.svg'
import CheckMarket from '@/assets/icons/Checkmarket.svg'

function Prefooter() {
    return (
        <section className='pt-32 pb-8'>
            <main className='justify-evenly h-auto w-full bg-[#e1fd6f]  snap-x
                        md:flex'>
                <div className='grid justify-items-center'>
                    <Image
                        src={TruckFooter}
                        alt="Navbarcenter"
                        width={90}
                        height={91}
                    >
                    </Image>
                    <h5 className='font-semibold text-xl"'>Envíos A Todo el Uruguay</h5>
                    <p>Entrega de <strong>24-72 HS</strong></p>
                </div>

                <div className='grid justify-items-center'>
                    <Image
                        src={Hs}
                        alt="Navbarcenter"
                        width={90}
                        height={91}
                    >
                    </Image>
                    <h5 className='font-semibold text-xl"'>Seguridad 24HS</h5>
                    <p>Calidad de imagen las <strong>24HS del dia</strong></p>
                </div>

                <div className='grid justify-items-center'>
                    <Image
                        src={Grade}
                        alt="Navbarcenter"
                        width={90}
                        height={91}
                    >
                    </Image>
                    <h5 className='font-semibold text-xl"'>Vigilancia 360°</h5>
                    <p>Seguridad, <strong>control y visión</strong> integral.</p>
                </div>

                <div className='grid justify-items-center'>
                    <Image
                        src={CheckMarket}
                        alt="Navbarcenter"
                        width={90}
                        height={91}
                    >
                    </Image>
                    <h5 className='font-semibold text-xl"'>6 MESES DE GARANTÍA</h5>
                    <p>Entrega de <strong>Garantía sin preocupaciones.</strong></p>
                </div>
            </main>
        </section>
    )
}

export default Prefooter