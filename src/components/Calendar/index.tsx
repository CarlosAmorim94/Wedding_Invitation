import Image from "next/image";
import Calendario from "/public/img/calendar.gif";

export const Calendar = () => {
  return (
    <div
      id="calendar"
      className="flex flex-col items-center justify-center relative"
    >
      <p className="font-alex text-5xl md:text-7xl text-white drop-shadow-lg shadow-black mb-5">
        Nosso grande dia!
      </p>
      <p className="font-alex text-xl md:text-5xl text-white drop-shadow-lg shadow-black mb-5 absolute top-32">
        19/ago/2023
      </p>
      <Image
        src={Calendario}
        alt="Calendar of wedding, 19/ago/2023"
        className="rounded-lg z-10"
      />
    </div>
  );
};
