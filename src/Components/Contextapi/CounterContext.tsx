'use client'

import React, { createContext, useState, useContext,useEffect, ReactNode } from 'react';


interface CounterContextType {
  count: number;
  increment: () => void;
}


const CounterContext = createContext<CounterContextType | undefined>(undefined);


export const CounterProvider = ({children} : {children:ReactNode}) => {
  const [count, setCount] = useState(0);

useEffect (() => {
  const savedCount = localStorage.getItem("counter");
  if (savedCount){
    setCount(Number(savedCount));
  }
},[]);

useEffect(() => {
  localStorage.setItem('counter',
    count.toString());
},[count]);
  
  const increment = () => 
    setCount((prev) => prev  + 1);

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};


export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter debe usarse dentro de un CounterProvider');
  }
  return context;
};
