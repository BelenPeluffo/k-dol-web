import { createContext } from "react";
import { Idol } from "../../interfaces/core";

export interface IdolState {
  idols: Idol[] | null;
  handleGetAllIdols: () => void;
  handleDelete: (id: number) => void;
  handleCreate: (idol: Idol) => void;
  apiResponse: boolean;
  prepareEditting: (id: number) => void;
  idol: Idol | null;
  handleEdit: (idol: Idol) => void;
  setIdol: (value: React.SetStateAction<Idol | null>) => void;
}

export const IdolContext = createContext<IdolState | null>(null);
