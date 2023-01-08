import Link from "next/link";
import React from "react";

export const Gift = () => {
  return (
    <div id="gift" className="flex flex-col justify-center items-center gap-5">
      <h2 className="font-wedding text-5xl md:text-7xl text-white drop-shadow-lg shadow-black mb-5">
        Lista de presentes
      </h2>
      <h3 className="font-sans md:w-1/2 md:text-center text-white drop-shadow-lg shadow-black font-semibold text-xl md:text-2xl bg-clip-text">
        Querido convidado, caso queira nos agraciar com um presente, ficaríamos
        muito felizes! Mas saiba que nosso maior presente é sua presença!
      </h3>
      <Link
        target="_blank"
        href="https://app.wedy.com/registry"
        className=" mx-auto text-white drop-shadow-lg font-semibold shadow-black bg-gold hover:bg-amber-500 rounded-lg text-xl w-full md:w-1/3 px-5 py-2.5 text-center"
      >
        Lista de presentes
      </Link>
    </div>
  );
};
