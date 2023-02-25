import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { storage } from "../../services/firebase";

type FormType = {
  name: string;
  phone: number | null;
};

export const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    phone: yup.number().required("Telefone obrigatório"),
  });

  const { register, handleSubmit, formState, reset } = useForm<FormType>({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const onSubmitHandler = async (data: FormType, e: any) => {
    e.preventDefault();
    try {
      await addDoc(collection(storage, "confirmacao"), {
        name: data.name,
        phone: data.phone,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    reset({
      name: "",
      phone: null,
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
            {...register("name")}
          />
        </label>
        <label>
          Celular:
          <input
            type="number"
            className="bg-gray-50 border border-gold text-gray-800 text-sm rounded-lg block w-full p-2.5"
            {...register("phone")}
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
