
import Image from 'next/image';
import CamaraChiquita from '@/assets/img/CamaraChiquita.png';


interface ModalCartProps {
  closeModal: () => void;
}

const ModalCart: React.FC<ModalCartProps> = ({ closeModal }) => {
  const pricePerItem = 2990; 
  const originalPricePerItem = 4116;
  

  return (
    <section className='bg-black/80 fixed z-[60] -inset-20 flex items-center justify-center text-white'>
      <main className='bg-[#222227] p-4 rounded absolute top-[40px] right-3 h-full'>
        <div className='flex justify-between text-center items-center mb-4'>
          <h5 className='-tracking-[-.05rem] font-medium'>Carrito</h5>
          <button className='font-bold text-xl -mt-6 -mr-2' onClick={closeModal}>x</button>
        </div>
        
          <div className='flex -ml-8'>
            <Image
              src={CamaraChiquita}
              alt="Etiqueta del Black Friday"
              width={90}
              height={93}
            />
            <div>
              <h4 className='font-bold text-xl'>Smart Net Camera V380</h4>
              <div className='flex'>
                <span className='grid'>
                  <del className='text-gray-400 text-xs'><span className='text-gray-400'>${originalPricePerItem}</span></del>
                  <ins className='leading-loose no-underline'><span className='font-bold'>${pricePerItem }</span></ins>
                </span>
                
              </div>
            </div>
          </div>
   
       
        
        <p className='border-[#e1fd6f] border-2 text-[#e1fd6f] py-1 px-2 my-2'>⏰ ¡Haz tu pedido antes de que se agoten!</p>
        <button className="w-full h-10 rounded-2xl bg-[#e1fd6f] hover:bg-[#dafd4c] text-xl text-[#222227] font-bold -tracking-[-.05rem] mt-2 mb-2">Finalizar Compra</button>
      </main>
    </section>
  );
};

export default ModalCart;
