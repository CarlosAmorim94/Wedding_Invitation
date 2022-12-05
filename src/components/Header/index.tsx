import Image from "next/image";
import React, { useContext } from "react";
import Alianca from "/public/img/alianca.png";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import { MobileContext } from "../../Context/MobileContext";

export function Header() {
  const mobile = useContext(MobileContext);

  return (
    <header className="w-full flex flex-row justify-between items-center py-5">
      <div className="w-1/5 md:w-logo">
        <Image src={Alianca} alt="Simbolo escrito 'Danielle e Carlos'" />
      </div>

      <nav className="hidden md:block">
        <ul className="flex flex-row justify-between items-center gap-4">
          <Link href="/">
            <li className="text-slate-300 hover:text-white font-bold drop-shadow-lg shadow-black">
              Home
            </li>
          </Link>
          <Link href="/">
            <li className="text-slate-300 hover:text-white font-bold drop-shadow-lg shadow-black">
              História
            </li>
          </Link>
          <Link href="/">
            <li className="text-slate-300 hover:text-white font-bold drop-shadow-lg shadow-black">
              Confirmar
            </li>
          </Link>
        </ul>
      </nav>
      <TiThMenu
        onClick={() => {
          mobile?.setMenuOpen(true);
        }}
        className="flex md:hidden mr-3 text-white text-4xl"
      />
    </header>
  );
}
