import Link from "next/link";
import React from "react";

export const Presence = () => {
  return (
    <div
      id="confirm"
      className="flex flex-col justify-center items-center gap-5"
    >
      <h2 className="font-wedding text-5xl md:text-7xl text-white drop-shadow-lg shadow-black mb-5">
        Confirme sua Presença
      </h2>

      <Link
        href="/confirmar"
        className=" mx-auto text-white  font-semibold drop-shadow-lg shadow-black bg-gold hover:bg-amber-500 rounded-lg text-xl w-full md:w-1/3 px-5 py-2.5 text-center"
      >
        Confirmar!
      </Link>
    </div>
  );
};
