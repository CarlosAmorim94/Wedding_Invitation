import React from "react";

export const Message = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="font-alex text-center text-5xl md:text-7xl text-white drop-shadow-lg shadow-black mb-5">
        Escreva uma mensagem para os noivos...
      </h2>
      <form
        action="https://formsubmit.co/carlos.av.amorim@gmail.com"
        method="POST"
        className="w-full md:w-[800px] flex flex-col gap-5"
      >
        <input
          type="hidden"
          name="_next"
          value="https://casamentodaniellecarlos.vercel.app/"
        />
        <label>
          Nome
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            required
            className="bg-gray-50 border border-gold text-gray-800 text-sm rounded-lg block w-full p-2.5"
          />
        </label>
        <label>
          Mensagem
          <textarea
            name="message"
            placeholder="Digite uma mensagem para os noivos..."
            className="bg-gray-50 border border-gold text-gray-800 text-sm rounded-lg block w-full p-2.5"
            required
          />
        </label>

        <button
          type="submit"
          className=" mx-auto text-white  font-semibold drop-shadow-lg shadow-black bg-gold hover:bg-amber-500 rounded-lg text-xl w-full md:w-1/3 px-5 py-2.5 text-center"
        >
          Enviar!
        </button>
      </form>
    </div>
  );
};
