import Image from "next/image";
import Igreja from "/public/img/igreja.jpg";
import ADC from "/public/img/ADC.png";

export const Localization = () => {
  return (
    <div
      id="local"
      className=" w-full text-center flex flex-col justify-center items-center gap-5"
    >
      <h2 className="font-alex text-6xl md:text-7xl text-white drop-shadow-lg shadow-black">
        Localização
      </h2>
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center gap-5">
        <div className="w-full md:w-96 text-lg flex flex-col justify-center items-center text-white drop-shadow font-semibold shadow-black">
          <h3>
            Cerimônia começa às{" "}
            <span className="text-gold text-xl font-bold">10:30hrs</span>
          </h3>
          <h4>Paróquia Nossa Senhora do Rosário de Fátima</h4>
          <p className="mb-5">R. Nossa Sra. de Fátima, 400</p>
          <Image
            src={Igreja}
            alt="Image slider of wedding"
            className="rounded-lg"
          />
        </div>
        <iframe
          className="w-full md:w-[350px] h-[350px] rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4446.7976651224935!2d-48.45977162810744!3d-22.871025774946688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c72097d6d037e5%3A0x653f78905b9f5a95!2sPar%C3%B3quia%20Nossa%20Senhora%20do%20Ros%C3%A1rio%20de%20F%C3%A1tima!5e1!3m2!1spt-BR!2sbr!4v1673202658772!5m2!1spt-BR!2sbr"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-full border-t border-gold" />
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center gap-5">
        <div className="w-full md:w-96 text-lg flex flex-col justify-center items-center text-white drop-shadow font-semibold shadow-black">
          <h3 className="text-4xl">Festa</h3>
          <h4>Salão ADC Embraer</h4>
          <p className="mb-5">Av. Alcides Cagliari, Sem número</p>
          <Image src={ADC} alt="Image ADC" className="rounded-lg" />
        </div>
        <iframe
          className="w-full md:w-[350px] h-[350px] rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d881.9972266833687!2d-48.46589257937243!3d-22.92625454227191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1673203748936!5m2!1spt-BR!2sbr"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
