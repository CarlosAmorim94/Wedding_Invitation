import Form from "../components/Form";
import { Header } from "../components/Header";
import { MenuMobile } from "../components/Header/MenuMobile";
import { Hero } from "../components/Hero";
import { TimeLine } from "../components/TimeLine";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-white to-pink-500 w-full pb-5">
      <div className="max-w-7xl mx-auto px-2 md:py-0">
        <MenuMobile />
        <Header />
        <Hero />
        <TimeLine />
        <Form />
      </div>
    </main>
  );
}
