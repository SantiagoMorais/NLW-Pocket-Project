import logo from "@assets/in-orbit-logo.svg";
import letsStart from "@assets/lets-start-illustration.svg";
import { Plus } from "lucide-react";

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit logo" />
      <img src={letsStart} alt="Lets Start" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>
      <button
        type="button"
        className="flex gap-2 items-center bg-violet-500 px-4 py-2.5 rounded-lg text-violet-50 text-sm font-medium tracking-tight duration-300 hover:bg-violet-600"
      >
        <Plus className="size-4" />
        Cadastrar meta
      </button>
    </div>
  );
}
