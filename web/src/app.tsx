import logo from "@assets/in-orbit-logo.svg";
import letsStart from "@assets/lets-start-illustration.svg";
import { Button } from "@components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "@components/ui/radio-group";
import { Plus, X } from "lucide-react";

export function App() {
  interface IFormOptions {
    desiredWeeklyFrequency: string;
    emoji: string;
    value: string;
  }

  const formOptions: IFormOptions[] = [
    { desiredWeeklyFrequency: "1x na semana", emoji: "🥱", value: "1" },
    { desiredWeeklyFrequency: "2x na semana", emoji: "🙂", value: "2" },
    { desiredWeeklyFrequency: "3x na semana", emoji: "😎", value: "3" },
    { desiredWeeklyFrequency: "4x na semana", emoji: "😜", value: "4" },
    { desiredWeeklyFrequency: "5x na semana", emoji: "🤨", value: "5" },
    { desiredWeeklyFrequency: "6x na semana", emoji: "🤯", value: "6" },
    { desiredWeeklyFrequency: "Todos dias da semana", emoji: "🔥", value: "7" },
  ];

  return (
    <Dialog>
      <div className="h-screen flex flex-col items-center justify-center gap-8">
        <img src={logo} alt="in.orbit logo" />
        <img src={letsStart} alt="Lets Start" />
        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora
          mesmo?
        </p>

        <DialogTrigger asChild>
          <Button>
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <DialogContent>
        <div className="flex flex-col gap-6 h-full">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <DialogTitle>Cadastrar Meta</DialogTitle>
              <DialogClose>
                <X className="size-5 text-zinc-600" />
              </DialogClose>
            </div>

            <DialogDescription>
              Adicione atividades que{" "}
              <span className="underline">te fazem bem</span> e que você quer
              continuar praticando toda semana.
            </DialogDescription>
          </div>

          <form action="" className="flex-1 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Qual a atividade? </Label>
                <Input
                  id="title"
                  autoFocus
                  placeholder="Praticar exercícios, meditar, etc..."
                ></Input>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Quantas vezes na semana?</Label>
                <RadioGroup>
                  {formOptions.map((item) => (
                    <RadioGroupItem value={item.value} id={item.value}>
                      <RadioGroupIndicator />
                      <span className="text-zinc-300 text-sm font-medium leading-none">
                        {item.desiredWeeklyFrequency}
                      </span>
                      <span className="text-lg leading-none">{item.emoji}</span>
                    </RadioGroupItem>
                  ))}
                </RadioGroup>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <DialogClose asChild>
                <Button type="button" className="flex-1" variant="secondary">
                  Fechar
                </Button>
              </DialogClose>
              <Button className="flex-1">Salvar</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
