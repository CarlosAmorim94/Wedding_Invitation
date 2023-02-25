import Link from "next/link";
import React from "react";

export const Presence = () => {
  return (
    <div
      id="confirm"
      className="flex flex-col justify-center items-center gap-5"
    >
      <h2 className="font-alex text-center text-5xl md:text-7xl text-white drop-shadow-lg shadow-black mb-5">
        Confirme sua Presença
      </h2>
      <h3 className="font-serif text-center md:w-1/2 md:text-center text-white drop-shadow-lg shadow-black font-semibold text-xl md:text-2xl bg-clip-text">
        Obs: Não esqueça de levar sua própria bebida(alcoolica) para a festa!
      </h3>

      <Link
        href="/confirmar"
        className=" mx-auto text-white  font-semibold drop-shadow-lg shadow-black bg-gold hover:bg-amber-500 rounded-lg text-xl w-full md:w-1/3 px-5 py-2.5 text-center"
      >
        Confirmar!
      </Link>
    </div>
  );
};
