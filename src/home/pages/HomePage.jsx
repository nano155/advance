import { Carrusel } from "../components/Carrusel"
import { Information } from "../components/Information"
import { Information2 } from "../components/Information2"
import { InformationContact } from "../components/InformationContact"

export const HomePage = () => {
  return (
    <>
      <Information />
      <Carrusel />
      <Information2 />
      <InformationContact />
    </>
  )
}