import { CheckCircle2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import { InOrbitIcon } from "./in-orbit-icon";
import { Progress, ProgressIndicator } from "./ui/progress-bar";
import { Separator } from "./ui/separator";
import { OutlineButton } from "./ui/outline-button";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "http/get-summary";
import { ISummaryData } from "@interfaces/summaryTypes";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-BR";

dayjs.locale(ptBR);

export const Summary = () => {
  const { data } = useQuery<ISummaryData>({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
  });

  if (!data) return null;

  const firstDayOfWeek = dayjs().startOf("week").format("DD MMM");
  const lastDayOfWeek = dayjs().endOf("week").format("DD MMM");
  const completedPercentage = ((data?.completed * 100) / data?.total).toFixed(
    0
  );

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold capitalize">
            {firstDayOfWeek} - {lastDayOfWeek}
          </span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>
      <div className="flex flex-col gap-3">
        <Progress max={data?.total} value={data?.completed}>
          <ProgressIndicator style={{ width: `${completedPercentage}%` }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <p className="">
            Você completou{" "}
            <span className="text-zinc-100">{data?.completed}</span> de{" "}
            <span className="text-zinc-100">{data?.total}</span> metas nessa
            semana.
          </p>
          <p>{completedPercentage}%</p>
        </div>

        <Separator />

        <div className="flex flex-wrap gap-3">
          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Meditar
          </OutlineButton>

          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Nadar
          </OutlineButton>

          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Rezar
          </OutlineButton>

          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Comer verduras e legumes
          </OutlineButton>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>

        {Object.entries(data.goalsPerDay).map(([date, goals]) => {
          const weekDay = dayjs(date).format("dddd");
          const formattedDate = dayjs(date).format("DD[ de ]MMMM");

          return (
            <div key={date} className="flex flex-col gap-4">
              <h3 className="font-medium capitalize">
                {weekDay}{" "}
                <span className="text-zinc-400 text-xs lowercase">
                  ({formattedDate})
                </span>
              </h3>

              <ul className="flex flex-col gap-3">
                {goals.map(goal => {
                  const formattedHour = dayjs(goal.completedAt).format("HH:mm[h]");
                  return (
                    <li key={goal.id} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-pink-500" />
                      <p className="text-sm text-zinc-400">
                        Você completou "
                        <span className="text-zinc-100">{goal.title}</span>" às{" "}
                        <span className="text-zinc-100">
                          {formattedHour}
                        </span>
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
