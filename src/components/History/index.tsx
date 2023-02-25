import { TimeLine } from "../TimeLine";

export const History = () => {
  return (
    <div
      id="history"
      className="flex flex-col justify-center items-center gap-5"
    >
      <h2 className="font-alex text-5xl md:text-9xl text-white drop-shadow-lg shadow-black">
        Vamos nos casar!
      </h2>

      <TimeLine />
    </div>
  );
};
