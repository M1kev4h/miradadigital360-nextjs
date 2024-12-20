import Image from "next/image"
import Link from "next/link"
import Whatsapp from "@/assets/icons/Whatsapp.svg"
import Facebook from "@/assets/icons/Facebook.svg"
import Instagram from "@/assets/icons/Instagram.svg"
import Navbar from "@/Components/CentroNavESC.svg"
import Star from "@/assets/icons/Star.svg"
import Down from "@/assets/icons/Down.svg"
import Portada from "@/assets/img/Portada.webp"
import Imagen2 from "@/assets/img/Imagen2.webp"
import Imagen3 from "@/assets/img/Imagen3.webp"
import Imagen4 from "@/assets/img/Imagen4.webp"
import Imagen5 from "@/assets/img/Imagen5.webp"
import Truck from "@/assets/icons/Truck.svg"
import Shield from "@/assets/icons/Shield.svg"
import Check from "@/assets/icons/Check.svg"
import Cart from "@/Components/Cart"
import AddtoCart from "@/Components/AddtoCart"




export const Hero = () => {
    return (
        <section className="flex justify-center mt-8">
            <main className="w-screen h-auto bg-[#d9d9d9]/10 rounded-tl-[25px] rounded-tr-[25px] shadow-inner border border-[#f8f8f8]/25 backdrop-blur-[186.93px] md:w-[1395px]">
                <nav className="flex justify-evenly mt-4">
                    <ul className=" relative flex text-white text-xs gap-2 font-medium 
                                md:text-xl md:gap-8">
                        <Link href="">Inicio</Link>
                        <Link href="">Faq</Link>
                        <Link href="">Reseñas</Link>
                        <Link href="">Más</Link>
                    </ul>
                    <Image
                        src={Navbar}
                        alt="Navbarcenter"
                        width={32}
                        height={32}
                        className="size-24  -mt-[3.34rem] 
                                    md:size-48 md:-mt-[5.6rem]">
                    </Image>
                    <span></span>

                    <ul className="flex  gap-1 -mt-1
                                ">
                        <Cart/>

                        <Link href="">
                            <Image
                                src={Whatsapp}
                                alt="Carito de compras"
                                width={32}
                                height={32}
                                className="size-4 mt-1.5
                                            md:mt-3 md:size-8">
                            </Image>
                        </Link>

                        <Link href="">
                            <Image
                                src={Facebook}
                                alt="Carito de compras"
                                width={32}
                                height={32}
                                className="size-4 mt-1.5
                                            md:mt-3 md:size-8">
                            </Image>
                        </Link>

                        <Link href="">
                            <Image
                                src={Instagram}
                                alt="Carito de compras"
                                width={32}
                                height={32}
                                className="size-4 mt-1.5
                                            md:mt-3 md:size-8">
                            </Image>
                        </Link>
                    </ul>
                </nav>
                <div className="grid justify-around
                            md:px-10 md:flex">
                    <aside className="grid gap-10 mt-8">
                        <article className="w-full  flex justify-center
                                        md:px-10 md:w-[600px]">
                            <Image
                                src={Portada}
                                alt="Portada"
                                width={550}
                                height={550}
                                className="w-[340px] h-[350px] rounded-2xl
                                    md:w-[550px] md:h-[550px]">
                            </Image>
                        </article>


                        <div className="hidden justify-between w-[550px] ml-16
                                    md:flex ">
                            <Image
                                src={Portada}
                                alt="Portada"
                                width={80}
                                height={80}
                                className="rounded-2xl
                                    md:w-[80px] md:h-[80px]">
                            </Image>

                            <Image
                                src={Imagen2}
                                alt="Portada"
                                width={80}
                                height={80}
                                className="rounded-2xl
                                   md:w-[80px] md:h-[80px]">
                            </Image>

                            <Image
                                src={Imagen3}
                                alt="Portada"
                                width={80}
                                height={80}
                                className="rounded-2xl
                                    md:w-[80px] md:h-[80px]">
                            </Image>

                            <Image
                                src={Imagen4}
                                alt="Portada"
                                width={550}
                                height={550}
                                className="rounded-2xl
                                    md:w-[80px] md:h-[80px]">
                            </Image>

                            <Image
                                src={Imagen5}
                                alt="Portada"
                                width={80}
                                height={80}
                                className="rounded-2xl
                                    md:w-[80px] md:h-[80px]">
                            </Image>
                        </div>
                    </aside>
                    <article className="px-4 mt-4">
                        <h5 className="text-[#e1fd6f] text-sm font-semibold -tracking-[-.2rem] mb-1">STOCK LIMITADO ASEGURA LA TUYA</h5>
                        <div className="flex mb-2 mt-4">
                            <Image
                                src={Star}
                                alt="Carito de compras"
                                width={32}
                                height={32}
                                className="size-4 mt-1.5
                                            md:mt-3 md:size-8">
                            </Image>

                            <Image
                                src={Star}
                                alt="Carito de compras"
                                width={32}
                                height={32}
                                className="size-4 mt-1.5
                                            md:mt-3 md:size-8">
                            </Image>

                            <Image
                                src={Star}
                                alt="Carito de compras"
                                width={32}
                                height={32}
                                className="size-4 mt-1.5
                                            md:mt-3 md:size-8">
                            </Image>

                            <Image
                                src={Star}
                                alt="Carito de compras"
                                width={32}
                                height={32}
                                className="size-4 mt-1.5
                                            md:mt-3 md:size-8">
                            </Image>

                            <Image
                                src={Star}
                                alt="Carito de compras"
                                width={32}
                                height={32}
                                className="size-4 mt-1.5
                                            md:mt-3 md:size-8">
                            </Image>
                        </div>

                        <h1 className="text-white text-5xl">Smart Net Camera V380</h1>
                        <span className="flex gap-4 py-4 text-white">
                            <del>
                                <span className="font-bold">$4.116,00</span>
                            </del>
                            <ins className="no-underline">
                                <span className="text-[#c62a32] font-medium">$2.990,00</span>
                            </ins>
                            <span className="bg-[#c62a32] rounded-full py-1 px-2 text-xs font-semibold text-white">27% DTO</span>
                        </span>
                        <hr />
                        <div className="grid gap-1 py-4 text-white font-extrabold">
                            <span className="flex gap-4">
                                <Image
                                    src={Truck}
                                    alt="Carito de compras"
                                    width={32}
                                    height={32}
                                >
                                </Image>
                                <p>Envíos a todo el Uruguay</p></span>
                            <span className="flex gap-4 mt-1 -mb-1">
                                <Image
                                    src={Shield}
                                    alt="Carito de compras"
                                    width={32}
                                    height={32}
                                >
                                </Image>
                                <p>Pagos Seguros 100%</p></span>
                            <span className="flex gap-4">
                                <Image
                                    src={Check}
                                    alt="Carito de compras"
                                    width={32}
                                    height={32}
                                >
                                </Image>
                                <p>Garantía de 6 meses</p>
                            </span>
                        </div>
                        <hr />
                        <h5 className="text-lg text-[#e1fd6f] font-medium py-4">🔥 Si haces tu pedido antes de las 16 hs.. ¡Lo recibes el mismo día!</h5>
                        <AddtoCart/>
                        <p className="text-white text-normal my-4"> <strong>Cámara de Seguridad WiFi  Protege tu Hogar con Confianza 🏠🔒 </strong> <br />Descubre la tranquilidad que ofrece nuestra cámara de seguridad WiFi. Su instalación es extremadamente sencilla: solo vincúlala a tu celular y colócala donde desees. <br /> <strong>Características Destacadas:</strong> <br /> <strong>Fácil Instalación ⚙:</strong> No necesitas técnicos. En pocos minutos, tendrás tu cámara lista para usar. <br /> <strong>Sin Pagos Mensuales 💸🚫:</strong> Disfruta de seguridad sin cargos recurrentes. Solo realiza un pago único y tendrás tu cámara por mucho tiempo. <br /> <strong>Potente Sirena 🚨:</strong> Disuade a intrusos con una sirena de alta potencia que se activa ante cualquier amenaza. Con esta cámara, disfrutarás de mayor comodidad y confianza al salir de casa. ¡Protege lo que más amas! ❤ </p>
                        <hr />
                        <h5 className="flex justify-between items-center text-white font-bold">¿QUÉ CONTIENE LA CAJA? <span>
                            <Image
                                src={Down}
                                alt="flecha abajo"
                                width={32}
                                height={32}
                                className="py-2 -mb-1">
                            </Image>
                        </span></h5>
                        <hr />
                    </article>
                </div>
            </main>
        </section>
    )
}
