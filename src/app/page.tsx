import Demostration from "./Demostration"
import Faq from "./Faq"
import {Resenia} from "./Resenia"
import { Hero } from "./Hero"
import Prefooter from "./Prefooter"
import Footer from "./Footer"
import { CounterProvider } from "@/Components/Contextapi/CounterContext"
import Link from "next/link"
import { TooltipWhtspp } from "@/Components/TooltipWhtspp"

function IndexPage() {
  return (
    <>
      <CounterProvider>
        <Hero />
        <Link 
        className="right fixed bottom-4 right-2"
         target="_blank" 
         href="https://w.app/c4CFi2">
                            <TooltipWhtspp/>
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