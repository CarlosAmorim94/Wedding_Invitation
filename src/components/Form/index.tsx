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
    <div
      id="confirm"
      className="w-full flex flex-col justify-center items-center"
    >
      <section className="flex w-full flex-col justify-center items-center mt-5 mb-5">
        <h2 className="font-wedding  text-white drop-shadow-lg shadow-black text-4xl md:text-6xl">
          Confirmação de presença
        </h2>
      </section>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="w-full md:w-[800px] flex flex-col gap-5"
      >
        <label>
          Nome:
          <input
            type="text"
            className="bg-gray-50 border border-gold text-gray-800 text-sm rounded-lg block w-full p-2.5"
          />
        </label>
        <label>
          Nome:
          <input
            type="text"
            className="bg-gray-50 border border-gold text-gray-800 text-sm rounded-lg block w-full p-2.5"
          />
        </label>
        <button
          type="submit"
          className="mx-auto text-white drop-shadow-lg shadow-black bg-gold hover:bg-amber-500 rounded-lg text-xl w-full md:w-1/3 px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
