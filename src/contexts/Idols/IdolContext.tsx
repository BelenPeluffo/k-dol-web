import { createContext } from "react";

export interface IdolState {
  value: string;
}

export const IdolContext = createContext<IdolState | null>(null);
