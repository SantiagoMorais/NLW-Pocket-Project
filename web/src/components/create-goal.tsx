import { Button } from "@components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "@components/ui/radio-group";
import { X } from "lucide-react";

export const CreateGoal = () => {
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
                  <RadioGroupItem key={item.value} value={item.value} id={item.value}>
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
  );
};
