import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import { InOrbitIcon } from "./in-orbit-icon";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-BR";

dayjs.locale(ptBR);

export const SummaryHeader = () => {
  const firstDayOfWeek = dayjs().startOf("week").format("DD MMM");
  const lastDayOfWeek = dayjs().endOf("week").format("DD MMM");

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <InOrbitIcon />
        <span className="text-lg font-semibold capitalize">
          {firstDayOfWeek} - {lastDayOfWeek}
        </span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>
    </div>
  );
};
