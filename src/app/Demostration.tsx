// pages/index.tsx
import React from 'react';
import Card from '@/Components/Card';
import Card2 from '@/Components/Card2';


const Demostration: React.FC = () => {
  return (
    <div className='md:mx-12'>
      <Card
        videoSrc="/Video1.mp4"
        title="Monitoreo en Tiempo Real 📱👀"
        description="Mantente conectado con tu hogar desde cualquier lugar, recibiendo alertas y notificaciones instantáneas."
      />

      <div className='justify-end hidden
                         md:flex'>
        <Card2
          videoSrc="/Video2.mp4"
          title="Cámara Infrarroja y LED"
          description="Con tecnología de infrarrojos y una potente lus LED .No te pierdas ningún detalle."
        />
      </div>

      <div className='justify-end flex
                         md:hidden'>
        <Card
          videoSrc="/Video2.mp4"
          title="Cámara Infrarroja y LED"
          description="Con tecnología de infrarrojos y una potente lus LED .No te pierdas ningún detalle."
        />
      </div>

      <Card
        videoSrc="/Video3.mp4"
        title="Doble Lente 🔍📷"
        description="Equipado con dos cámaras en una, una móvil de 360° y una fija, para una cobertura completa."
      />

      <div className='justify-end flex
                         md:hidden'>
        <Card
          videoSrc="/Video4.mp4"
          title="Cámara Infrarroja y LED"
          description="Con tecnología de infrarrojos y una potente lus LED .No te pierdas ningún detalle."
        />
      </div>

      <div className='justify-end hidden
                md:flex'>
        <Card2
          videoSrc="/Video4.mp4"
          title="Protección Integral 💪💰"
          description="No solo protege tu casa, sino también tus ahorros y bienes más preciados."
        />
      </div>

      <Card
        videoSrc="/Video5.mp4"
        title="Resistente a Climas Extremos ☔🌞"
        description="Diseñada para soportar diversas condiciones climáticas, asegurando su funcionamiento duradero."
      />
      

    </div>
  );
};

export default Demostration;
