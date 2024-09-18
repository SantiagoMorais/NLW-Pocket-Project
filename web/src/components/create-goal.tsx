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
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { createGoal } from "http/create-goal";
import { X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

interface IFormOptions {
  desiredWeeklyFrequency: string;
  emoji: string;
  value: string;
}

const createGoalForm = z.object({
  title: z.string().min(1, "Informe a meta que deseja realizar"),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
});

type CreateGoalForm = z.infer<typeof createGoalForm>;

export const CreateGoal = () => {
  const queryClient = useQueryClient();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateGoalForm>({
    resolver: zodResolver(createGoalForm),
  });

  const handleCreateGoal = async (data: CreateGoalForm) => {
    const { title, desiredWeeklyFrequency } = data;
    await createGoal({ title, desiredWeeklyFrequency });

    queryClient.invalidateQueries({ queryKey: ["summary"] });
    queryClient.invalidateQueries({ queryKey: ["pendingGoal"] });

    reset();
  };

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

        <form
          onSubmit={handleSubmit(handleCreateGoal)}
          className="flex-1 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Qual a atividade? </Label>
              <Input
                {...register("title")}
                id="title"
                autoFocus
                placeholder="Praticar exercícios, meditar, etc..."
              />
              {errors.title && (
                <>
                  <p className="text-red-400 text-sm">{errors.title.message}</p>
                </>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label>Quantas vezes na semana?</Label>
              <Controller
                control={control}
                name="desiredWeeklyFrequency"
                defaultValue={1}
                render={({ field }) => {
                  return (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={String(field.value)}
                    >
                      {formOptions.map((item) => (
                        <RadioGroupItem
                          key={item.value}
                          value={item.value}
                          id={item.value}
                        >
                          <RadioGroupIndicator />
                          <span className="text-zinc-300 text-sm font-medium leading-none">
                            {item.desiredWeeklyFrequency}
                          </span>
                          <span className="text-lg leading-none">
                            {item.emoji}
                          </span>
                        </RadioGroupItem>
                      ))}
                    </RadioGroup>
                  );
                }}
              />
              {errors.desiredWeeklyFrequency && (
                <>
                  <p className="text-red-400 text-sm">
                    {errors.desiredWeeklyFrequency.message}
                  </p>
                </>
              )}
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
