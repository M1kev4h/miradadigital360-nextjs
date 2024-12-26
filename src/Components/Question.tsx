"use client"
import React, { useState } from "react";
import Down from "../../public/assets/icons/Down.svg"
import Image from "next/image";

export interface Question {
  question: string;
  answer: string;
}

interface FAQProps {
  questions: Question[];
}

export const FAQ: React.FC<FAQProps> = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" space-y-4">
      {questions.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleQuestion(index)}
            className="flex items-center justify-between text-white font-bold
            w-full text-left focus:outline-none"
          >
            {item.question}
            <Image
              src={Down}
              alt="flecha abajo"
              width={32}
              height={32}
              className="py-2 -mb-1">
            </Image>
          </button>
          {openIndex === index && (
            <div className="my-2 text-white ">
              {item.answer.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};