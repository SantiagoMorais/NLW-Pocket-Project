import logo from "@assets/in-orbit-logo.svg";
import letsStart from "@assets/lets-start-illustration.svg";
import { Button } from "@components/ui/button";
import { DialogTrigger } from "@components/ui/dialog";
import { Plus } from "lucide-react";

export const EmptyGoals = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit logo" />
      <img src={letsStart} alt="Lets Start" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
};
