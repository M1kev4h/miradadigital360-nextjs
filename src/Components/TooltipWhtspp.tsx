import Image from "next/image"
import Whatsapp from "../../public/assets/icons/Whatsapp.svg"

export const TooltipWhtspp = () => {
    return(
        <div className="relative group inline-block">
            <Image
                src={Whatsapp}
                alt="Carito de compras"
                width={96}
                height={96}
                className="size-10 mt-1.5 
                            md:mt-3 md:size-16 ">
            </Image>

            <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 hidden group-hover:block bg-gray-800 text-white text-sm py-2 px-3 rounded-lg shadow-lg z-10 whitespace-nowrap">
                <span className="block">Haga clic para plantearnos tus dudas por Whatsapp</span>
      </div>
        </div>
    )}