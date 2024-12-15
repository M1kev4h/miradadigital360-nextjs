import React from 'react'
import Down from '@/assets/icons/Down.svg'
import Image from 'next/image'

function DropDown() {
    return (
        <main>
            <ul id='Acordion'>
                <li className='md:w-[500px]'>
                    <label
                        className='cursor-pointer flex justify-between items-center w-full text-white text-2xl font-semibold'
                        htmlFor="Primero">
                        ¿Es difícil de instalar?
                        <span>
                            <Image
                                src={Down}
                                alt="flecha abajo"
                                width={32}
                                height={32}
                                className="py-2 -mb-1">
                            </Image>
                        </span>
                    </label>
                    <input type="radio"
                        name='acordion'
                        id='Primero' />
                    <div className="Contenido">
                        <p className="text-white">No, la instalación es muy sencilla. Solo necesitas descargar la aplicación y seguir los pasos indicados. Además, nuestro equipo está disponible para asistirte durante el proceso de instalación.
                        </p>
                    </div>
                    <hr></hr>
                </li>


                <li className='md:w-[500px]'>
                    <label
                        className='cursor-pointer flex justify-between items-center w-full text-white text-2xl font-semibold'
                        htmlFor="Segundo">
                        ¿Es a prueba de agua?
                        <span>
                            <Image
                                src={Down}
                                alt="flecha abajo"
                                width={32}
                                height={32}
                                className="py-2 -mb-1">
                            </Image>
                        </span>
                    </label>
                    <input type="radio"
                        name='acordion'
                        id='Segundo' />
                    <div className="Contenido">
                        <p className="text-white">Sí, la cámara es completamente a prueba de agua, incluso contra la lluvia y el granizo, gracias a su tecnología IP66.
                        </p>
                    </div>
                    <hr></hr>
                </li>

                <li className='md:w-[500px]'>
                    <label
                        className='cursor-pointer flex justify-between items-center w-full text-white text-2xl font-semibold'
                        htmlFor="Tercero">
                       ¿Qué métodos de pago aceptan?
                        <span>
                            <Image
                                src={Down}
                                alt="flecha abajo"
                                width={32}
                                height={32}
                                className="py-2 -mb-1">
                            </Image>
                        </span>
                    </label>
                    <input type="radio"
                        name='acordion'
                        id='Tercero' />
                    <div className="Contenido">
                        <p className="text-white">Aceptamos efectivo, tarjetas de débito y crédito a través de Mercado Pago, así como transferencias bancarias.
                        </p>
                    </div>
                    <hr></hr>
                </li>

                <li className='md:w-[500px]'>
                    <label
                        className='cursor-pointer flex justify-between items-center w-full text-white text-2xl font-semibold'
                        htmlFor="Cuarto">
                       ¿Qué garantía tiene?
                        <span>
                            <Image
                                src={Down}
                                alt="flecha abajo"
                                width={32}
                                height={32}
                                className="py-2 -mb-1">
                            </Image>
                        </span>
                    </label>
                    <input type="radio"
                        name='acordion'
                        id='Cuarto' />
                    <div className="Contenido">
                        <p className="text-white">La cámara cuenta con una garantía de 6 meses.
                        </p>
                    </div>
                    <hr></hr>
                </li>

                <li className='md:w-[500px]'>
                    <label
                        className='cursor-pointer flex justify-between items-center w-full text-white text-2xl font-semibold'
                        htmlFor="Quinto">
                       ¿Cómo hago para comprar?
                        <span>
                            <Image
                                src={Down}
                                alt="flecha abajo"
                                width={32}
                                height={32}
                                className="py-2 -mb-1">
                            </Image>
                        </span>
                    </label>
                    <input type="radio"
                        name='acordion'
                        id='Quinto' />
                    <div className="Contenido">
                        <p className="text-white">Si no estás seguro de cómo comprar, puedes comunicarte con nuestro equipo de atención al cliente, quienes te guiarán en el proceso.
                        </p>
                    </div>
                    <hr></hr>
                </li>
            </ul>
        </main>
    )
}

export default DropDown