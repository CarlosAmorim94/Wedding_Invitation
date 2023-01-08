import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { MenuMobile } from "../components/Header/MenuMobile";

export default function Confirm() {
  return (
    <main className="bg-gradient-to-r from-gray-200 to-pink-500 w-full pb-5">
      <div className="max-w-7xl flex flex-col mx-auto px-2 md:px-0 gap-20">
        <MenuMobile />
        <Header />
        <Form />
      </div>
    </main>
  );
}
