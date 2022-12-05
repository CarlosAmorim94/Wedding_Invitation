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
          ? `absolute top-0 bottom-0 right-0 left-0 z-50 bg-transparent backdrop-blur-md `
          : `hidden`
      }
    >
      <MdClose
        onClick={() => {
          mobile?.setMenuOpen(false);
        }}
        className="absolute text-5xl top-0 right-0"
      />
      <ul className="flex flex-col m-auto h-full w-full justify-center items-center gap-10">
        <Link href="/">
          <li className="text-black text-3xl font-bold">Home</li>
        </Link>
        <Link href="/">
          <li className="text-black text-3xl font-bold">História</li>
        </Link>
        <Link href="/">
          <li className="text-black text-3xl font-bold">Confirmar</li>
        </Link>
      </ul>
    </div>
  );
}
