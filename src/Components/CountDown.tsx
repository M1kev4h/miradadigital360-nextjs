'use client'
import React, { useEffect, useState } from 'react';

const CountDown: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setMonth(11);
    targetDate.setDate(31);
    targetDate.setHours(0, 0, 0, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const seconds = Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0');

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center">
      <div>
        <h4 className="font-['Squada_One'] text-4xl grid text-center">{timeRemaining.days}<span className="text-xs text-center">DÍAS</span></h4>
      </div>
      <span className="font-['Squada_One'] text-4xl leading-9">:</span>
      <div>
        <h4 className="font-['Squada_One'] text-4xl grid text-center">{timeRemaining.hours}<span className="text-xs text-center">HORAS</span></h4>
      </div>
      <span className="font-['Squada_One'] text-4xl leading-9">:</span>
      <div>
        <h4 className="font-['Squada_One'] text-4xl grid text-center">{timeRemaining.minutes}<span className="text-xs text-center">MINUTOS</span></h4>
      </div>
      <span className="font-['Squada_One'] text-4xl leading-9">:</span>
      <div>
        <h4 className="font-['Squada_One'] text-4xl grid text-center">{timeRemaining.seconds}<span className="text-xs text-center">SEGUNDOS</span></h4>
      </div>
    </div>
  );
};

export default CountDown;
