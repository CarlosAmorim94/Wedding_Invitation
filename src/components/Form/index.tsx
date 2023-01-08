import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

type FormType = {
  first_name: string;
  last_name: string;
  phone: number | null;
  invite: string;
};

export const Form = () => {
  const router = useRouter();

  const schema = yup.object().shape({
    first_name: yup.string().required("Nome obrigatório"),
    last_name: yup.string().required("Sobrenome obrigatório"),
    phone: yup.number().required("Telefone obrigatório"),
    invite: yup.string().required("Seecione o tipo"),
  });

  const { register, handleSubmit, formState, reset } = useForm<FormType>({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const onSubmitHandler = (data: FormType) => {
    console.log(data);
    reset({
      first_name: "",
      last_name: "",
      phone: null,
      invite: "",
    });
  };

  return (
    <div id="confirm">
      <section className="flex w-full flex-col justify-center items-center mt-5 mb-5">
        <h2 className="font-wedding  text-white drop-shadow-lg shadow-black text-4xl md:text-6xl">
          Confirmação de presença
        </h2>
      </section>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
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
              {...register("first_name", { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 font-bold text-base text-gray-800 drop-shadow-lg shadow-black "
            >
              Sobrenome
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gold text-gray-800 text-sm rounded-lg block w-full p-2.5"
              placeholder="Ex: Amorim"
              {...register("last_name", { required: true })}
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
              {...register("phone", { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="inviteType"
              className="block mb-2 font-bold text-base text-gray-800 drop-shadow-lg shadow-black "
            >
              Tipo de Convidado
            </label>
            <select
              id="inviteType"
              className="bg-gray-50 border border-gold text-gray-800 text-sm rounded-lg block w-full p-2.5"
              {...register("invite", { required: true })}
            >
              <option selected> </option>
              <option value="padrinho/madrinha">Padrinho/Madrinha</option>
              <option value="convidado">Convidado</option>
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
};
