import Image from "next/image";
import Calendario from "/public/img/calendar-removebg-preview.png";

export const Calendar = () => {
  return (
    <div id="calendar" className="flex items-center justify-center">
      <Image src={Calendario} alt="Calendar of wedding, 19/ago/2023" />
    </div>
  );
};
