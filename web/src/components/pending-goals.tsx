import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";

export const PendingGoals = () => {
  return (
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
  );
};
