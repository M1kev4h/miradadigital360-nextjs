import Demostration from "./Demostration"
import Faq from "./Faq"
import {Resenia} from "./Resenia"
import { Hero } from "./Hero"
import Prefooter from "./Prefooter"
import Footer from "./Footer"
import { CounterProvider } from "@/Components/Contextapi/CounterContext"
import Whatsapp from "../../public/assets/icons/Whatsapp.svg"
import Link from "next/link"
import Image from "next/image"

function IndexPage() {
  return (
    <>
      <CounterProvider>
        <Hero />
        <Link 
        className="right fixed bottom-4 right-2"
         target="_blank" 
         href="https://w.app/c4CFi2">
                            <Image
                                src={Whatsapp}
                                alt="Carito de compras"
                                width={96}
                                height={96}
                                className="size-10 mt-1.5 
                                            md:mt-3 md:size-16 ">
                            </Image>
                        </Link>
        <Demostration />
        <Faq />
        <Resenia />
        <Prefooter />
        <Footer />
      </CounterProvider>
    </>
  )
}

export default IndexPage