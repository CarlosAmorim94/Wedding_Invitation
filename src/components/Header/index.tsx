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
      <Link className="w-1/5 md:w-logo" href="/">
        <Image src={Alianca} alt="Simbolo escrito 'Danielle e Carlos'" />
      </Link>

      <nav className="hidden md:block">
        <ul className="flex flex-row justify-between items-center gap-4">
          <Link href="/">
            <li className="text-xl text-white hover:text-gold font-bold drop-shadow-lg shadow-black">
              Home
            </li>
          </Link>
          <Link href="#history">
            <li className="text-xl text-white hover:text-gold font-bold drop-shadow-lg shadow-black">
              História
            </li>
          </Link>
          <Link href="#confirm">
            <li className="text-xl text-white hover:text-gold font-bold drop-shadow-lg shadow-black">
              Confirmar
            </li>
          </Link>
          <Link href="#gift">
            <li className="text-xl text-white hover:text-gold font-bold drop-shadow-lg shadow-black">
              Lista de presentes
            </li>
          </Link>
          <Link href="#calendar">
            <li className="text-xl text-white hover:text-gold font-bold drop-shadow-lg shadow-black">
              Data e Local
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
