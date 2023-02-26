import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { storage } from "../../services/firebase";
import { useState } from "react";
import InputMask from "react-input-mask";

type FormType = {
  name: string;
  phone: string;
};

export const Form = () => {
  const [loading, setLoading] = useState(false);
  const [banner, setBanner] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    phone: yup.string().required("Telefone obrigatório"),
  });

  const { register, handleSubmit, reset } = useForm<FormType>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (data: FormType, e: any) => {
    setLoading(true);
    e.preventDefault();
    try {
      await addDoc(collection(storage, "confirmacao"), {
        name: data.name,
        phone: data.phone,
      });
      setBanner(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    reset({
      name: "",
      phone: "",
    });
    setLoading(false);
  };

  return (
    <div id="confirm" className="w-full flex  flex-col items-center">
      <section className="flex w-full flex-col justify-center items-center mt-5 mb-5 gap-6">
        <h2 className="font-alex text-center text-white drop-shadow-lg shadow-black text-5xl md:text-6xl">
          Confirmação de presença
        </h2>
        <h3 className="text-white text-center drop-shadow-lg shadow-black text-2xl md:text-2xl">
          Confirme seu nome e número de telefone, nossa assessora Maiara irá
          entrar em contato próximo da cerimônia.
        </h3>
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
            {...register("name")}
          />
        </label>
        <label>
          Celular:
          <InputMask
            mask="(99)99999-9999"
            //@ts-ignore
            className="bg-gray-50 border border-gold text-gray-800 text-sm rounded-lg block w-full p-2.5"
            {...register("phone")}
          />
        </label>
        <button
          type="submit"
          className="mx-auto text-white drop-shadow-lg shadow-black bg-gold hover:bg-amber-500 rounded-lg text-xl w-full md:w-1/3 px-5 py-2.5 text-center"
        >
          {loading ? (
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gold animate-spin fill-pink-500 m-auto"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          ) : (
            "Confirmar"
          )}
        </button>
      </form>
      {banner ? (
        <div className="w-full flex mt-4 flex-col gap-4 justify-center items-center">
          <h2 className="font-serif text-white drop-shadow-lg shadow-black text-center text-3xl md:text-6xl">
            Confirmação enviada com sucesso!
          </h2>
        </div>
      ) : null}
    </div>
  );
};
