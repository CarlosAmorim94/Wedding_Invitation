import React from "react";

export default function Form() {
  return (
    <div id="confirm">
      <section className="flex w-full flex-col justify-center items-center mt-5 mb-5">
        <h2 className="font-wedding  text-white drop-shadow-lg shadow-black text-3xl md:text-6xl">
          Confirmação de presença
        </h2>
      </section>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 font-bold text-base text-gray-800 drop-shadow-lg shadow-black "
            >
              Primeiro nome
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gold text-gray-800 text-sm rounded-lg block w-full p-2.5"
              placeholder="Ex: Carlos, Ex: Danielle"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 font-bold text-base text-gray-800 drop-shadow-lg shadow-black "
            >
              Ultimo nome
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gold text-gray-800 text-sm rounded-lg block w-full p-2.5"
              placeholder="Ex: Amorim"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block mb-2 font-bold text-base text-gray-800 drop-shadow-lg shadow-black "
            >
              Celular/Telefone
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gold text-gray-800 text-sm rounded-lg block w-full p-2.5"
              placeholder="Ex: (14)98765-4321"
              required
            />
          </div>
          <div>
            <label
              htmlFor="countries"
              className="block mb-2 font-bold text-base text-gray-800 drop-shadow-lg shadow-black "
            >
              Tipo de Convidado
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gold text-gray-800 text-sm rounded-lg block w-full p-2.5"
            >
              <option selected>Selecione</option>
              <option value="US">Padrinho/Madrinha</option>
              <option value="CA">Convidado</option>
            </select>
          </div>

          <button
            type="submit"
            className="md:col-span-2 mx-auto text-white drop-shadow-lg shadow-black bg-gold hover:bg-amber-500 rounded-lg text-xl w-full md:w-1/3 px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
