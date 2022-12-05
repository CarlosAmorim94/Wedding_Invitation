import React from "react";

type BoxProps = {
  side: "right" | "left";
  number: number;
  title: string;
  text: string;
  img?: string;
};

export default function Box({ side, number, title, text, img }: BoxProps) {
  if (side === "right") {
    return (
      <div className="mb-8 flex justify-around items-center w-full right-timeline">
        <div className="hidden md:block order-1 w-5/12"></div>
        <div className="z-20 mr-3 md:mr-0 flex items-center order-1 bg-gold shadow-xl w-8 h-8 rounded-full">
          <h2 className="mx-auto font-semibold text-lg text-white">{number}</h2>
        </div>
        <div className="order-1 bg-gradient-to-r from-slate-50 to-gold rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
          <h3 className="mb-3 font-bold text-gray-800 text-xl">{title}</h3>
          <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
            {text}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
        <div className="hidden md:block order-1 w-5/12"></div>
        <div className="z-20 ml-3 md:ml-0 flex items-center order-1 bg-gold shadow-xl w-8 h-8 rounded-full">
          <h2 className="mx-auto font-semibold text-xl text-white">{number}</h2>
        </div>
        <div className="order-1 bg-gradient-to-r from-gold to-slate-50 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
          <h3 className="mb-3 font-bold text-gray-900 text-xl">{title}</h3>
          <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
            {text}
          </p>
        </div>
      </div>
    );
  }

  return null;
}
