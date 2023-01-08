import Link from "next/link";
import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { MobileContext } from "../../../Context/MobileContext";

export function MenuMobile() {
  const mobile = useContext(MobileContext);

  return (
    <div
      className={
        mobile?.menuOpen
          ? `absolute top-0 bottom-0 right-0 w-full left-0 z-50 bg-transparent-mobile backdrop-blur-md `
          : `hidden`
      }
    >
      <MdClose
        onClick={() => {
          mobile?.setMenuOpen(false);
        }}
        className="absolute text-5xl top-4 right-4 text-gold font-bold"
      />
      <ul className="flex flex-col m-auto h-full w-full justify-center items-center gap-10">
        <Link
          href="/"
          className="w-11/12 py-4 px-6 rounded-2xl bg-transparent-mobile flex justify-center items-center"
          onClick={() => {
            mobile?.setMenuOpen(false);
          }}
        >
          <li className="text-gold text-3xl font-bold ">Home</li>
        </Link>
        <Link
          href="#history"
          className="w-11/12 py-4 px-6 rounded-2xl bg-transparent-mobile flex justify-center items-center"
          onClick={() => {
            mobile?.setMenuOpen(false);
          }}
        >
          <li className="text-gold text-3xl font-bold">História</li>
        </Link>
        <Link
          href="#confirm"
          className="w-11/12 py-4 px-6 rounded-2xl bg-transparent-mobile flex justify-center items-center"
          onClick={() => {
            mobile?.setMenuOpen(false);
          }}
        >
          <li className="text-gold text-3xl font-bold">Confirmar</li>
        </Link>
        <Link
          href="#gift"
          className="w-11/12 py-4 px-6 rounded-2xl bg-transparent-mobile flex justify-center items-center"
          onClick={() => {
            mobile?.setMenuOpen(false);
          }}
        >
          <li className="text-gold text-3xl font-bold">Lista de presentes</li>
        </Link>
        <Link
          href="#calendar"
          className="w-11/12 py-4 px-6 rounded-2xl bg-transparent-mobile flex justify-center items-center"
          onClick={() => {
            mobile?.setMenuOpen(false);
          }}
        >
          <li className="text-gold text-3xl font-bold">Data e Local</li>
        </Link>
      </ul>
    </div>
  );
}
