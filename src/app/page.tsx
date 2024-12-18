import Demostration from "./Demostration"
import Faq from "./Faq"
import Resenia from "./Resenia"
import { Hero } from "./Hero"
import Prefooter from "./Prefooter"
import Footer from "./Footer"
import { CounterProvider } from "@/Components/Contextapi/CounterContext"


function IndexPage() {
  return (
    <>
      <CounterProvider>
        <Hero />
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