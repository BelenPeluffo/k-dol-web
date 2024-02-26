import { createContext } from "react";
import { Idol } from "../../interfaces/core";

export interface IdolState {
  idols: Idol[] | null;
  handleGetAllIdols: () => void;
}

export const IdolContext = createContext<IdolState | null>(null);
