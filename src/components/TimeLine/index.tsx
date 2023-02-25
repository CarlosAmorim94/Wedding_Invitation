import Box from "./Box";
import First from "/public/img/first.webp";
import Tinder from "/public/img/OIP.webp";
import Olho from "/public/img/olho.jpg";
import Viagem from "/public/img/praia.png";

export function TimeLine() {
  return (
    <div id="history" className="w-full">
      <section className="flex w-full flex-col justify-center items-center mt-9">
        <h2 className="font-wedding mb-3 text-white drop-shadow-lg shadow-black text-3xl md:text-5xl">
          Um resumo da nossa
        </h2>
        <h2 className="font-wedding text-5xl md:text-9xl text-white drop-shadow-lg shadow-black mb-5">
          História
        </h2>
      </section>
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-3 md:p-10 h-full">
          <div className="border-2-2 absolute h-full "></div>

          <Box
            side="right"
            number={1}
            title="O primeiro olhar"
            text="Foi amor a primeira vista, naquele olhar que ficou marcado em suas histórias, dentro da Embraer!"
            img={Olho}
          />

          <Box
            side="left"
            number={2}
            title="Primeira conversa"
            text="Quem diria? deram match no Tinder e começaram a conversar!"
            img={Tinder}
          />

          <Box
            side="right"
            number={3}
            title="Primeiro encontro"
            text="No dia 19/01/2020 o clássico passeio no shopping e cinema! com
            muita cerveja é claro!"
            img={First}
          />

          <Box
            side="left"
            number={4}
            title="Morando juntos"
            text="O amor é tão grande que decidiram morar juntos em 11/2020"
          />
          <Box
            side="right"
            number={5}
            title="O pedido"
            text="No dia 19/07/21, Carlos pediu Danielle em casamento no Kyga, com muita comida japonesa!"
          />
          <Box
            side="left"
            number={6}
            title="Casamento civil"
            text="No dia 11/06/22 trocaram as alianças e realizaram o casamento no cívil"
          />
          <Box
            side="right"
            number={7}
            title="Lua de mel"
            text="Uma viagem incrível e cheia de beleza, contemplando o amor e união"
            img={Viagem}
          />
        </div>
      </div>
    </div>
  );
}
