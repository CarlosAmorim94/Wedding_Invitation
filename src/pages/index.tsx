import { Calendar } from "../components/Calendar";
import { Gift } from "../components/Gift";
import { Header } from "../components/Header";
import { MenuMobile } from "../components/Header/MenuMobile";
import { Hero } from "../components/Hero";
import { History } from "../components/History";
import { Localization } from "../components/Localization";
import { Presence } from "../components/Presense";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-gray-200 to-pink-500 w-full pb-5">
      <div className="max-w-7xl flex flex-col mx-auto px-2 md:px-0 gap-20">
        <MenuMobile />
        <Header />
        <Hero />
        <div className="w-full border-t border-gold" />
        <History />
        <div className="w-full border-t border-gold" />
        <Presence />
        <div className="w-full border-t border-gold" />
        <Gift />
        <div className="w-full border-t border-gold" />
        <Calendar />
        <div className="w-full border-t border-gold" />
        <Localization />
        <div>form de mensagem</div>
      </div>
    </main>
  );
}
