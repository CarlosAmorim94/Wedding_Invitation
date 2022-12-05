import { SwiperDesktop } from "./Swiper";
import { SwiperMobile } from "./SwiperMobile";

export function Hero() {
  return (
    <div id="home">
      <section className="flex w-full flex-col justify-center items-center mb-5">
        <h1 className="font-wedding text-5xl md:text-9xl text-white drop-shadow-lg shadow-black mb-5">
          Casamento
        </h1>
        <h2 className="font-wedding  text-white drop-shadow-lg shadow-black text-3xl md:text-5xl">
          Danielle e Carlos
        </h2>
      </section>
      <SwiperDesktop />
      <SwiperMobile />
    </div>
  );
}
