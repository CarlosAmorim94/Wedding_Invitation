import Image from "next/image";
import React from "react";
import Alianca from "/public/img/alianca.png";

export function Header() {
  return (
    <header className="w-full flex flex-row justify-between items-center py-5">
      <div className="w-logo">
        <Image src={Alianca} alt="Simbolo escrito 'Danielle e Carlos'" />
      </div>

      <nav>
        <ul className="flex flex-row justify-between items-center gap-4">
          <li>Home</li>
          <li>História</li>
          <li>Confirmar</li>
        </ul>
      </nav>
    </header>
  );
}
