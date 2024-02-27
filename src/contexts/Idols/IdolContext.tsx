import { createContext } from "react";
import { Idol } from "../../interfaces/core";

export interface IdolState {
  idols: Idol[] | null;
  handleGetAllIdols: () => void;
  handleDelete: (id: number) => void;
  handleCreate: (idol: Idol) => void;
  apiResponse: boolean;
}

export const IdolContext = createContext<IdolState | null>(null);
