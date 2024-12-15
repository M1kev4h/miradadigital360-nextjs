import Demostration from "./Demostration"
import Faq from "./Faq"
import Resenia from "./Resenia"
import { Hero } from "./Hero"
import Prefooter from "./Prefooter"
import Footer from "./Footer"


function IndexPage() {
  return (
    <>
      <Hero />
      <Demostration />
      <Faq/>
      <Resenia/>
      <Prefooter/>
      <Footer/>
    </>
  )
}

export default IndexPage