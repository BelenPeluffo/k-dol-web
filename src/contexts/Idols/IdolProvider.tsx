import { ReactNode, useEffect, useState } from "react";
import { IdolContext, IdolState } from "./IdolContext";
import { IdolService } from "../../services";
import { Idol } from "../../interfaces/core";

const IdolProvider = ({ children }: { children: ReactNode }) => {
  const service = new IdolService();
  const [idols, setIdols] = useState<Idol[] | null>(null);

  useEffect(() => {
    handleGetAllIdols();
  }, []);

  const handleGetAllIdols = () => {
    const response = service.getAll();
    setIdols(response);
  };

  const state: IdolState = { idols, handleGetAllIdols };
  return <IdolContext.Provider value={state}>{children}</IdolContext.Provider>;
};

export default IdolProvider;
