import { ReactNode } from "react";
import { IdolContext, IdolState } from "./IdolContext";

const IdolProvider = ({ children }: { children: ReactNode }) => {
  const state: IdolState = { value: "yeah" };
  return <IdolContext.Provider value={state}>{children}</IdolContext.Provider>;
};

export default IdolProvider;
