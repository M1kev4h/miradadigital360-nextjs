interface StatusProp  {
    videoSrc: string;
    title:string;
    description:string
}

const Card2:React.FC<StatusProp> = ({videoSrc, title, description }) => {
  return (
    <div className="flex flex-col  overflow-hidden mt-16
                    md:flex-row md:w-[700px]">
       
        <div className="flex-col  p-0 md:w-2/3">
            <h3 className="text-4xl text-[#e1fd6f] font-semibold mb-2 text-center">{title}</h3>
            <p className="mt-8 text-white text-xl text-center">{description}</p>
        </div>
        <div className="flex justify-center md:w-1/3">
            <video loop 
                    muted 
                    autoPlay
                className="w-[200px] rounded-xl"><source src={videoSrc} type="video/mp4" /></video>
        </div>
    </div>
  )
}

export default Card2