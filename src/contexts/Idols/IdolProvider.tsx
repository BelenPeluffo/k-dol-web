import { ReactNode, useEffect, useState } from "react";
import { IdolContext, IdolState } from "./IdolContext";
import { IdolService } from "../../services";
import { Idol } from "../../interfaces/core";

const IdolProvider = ({ children }: { children: ReactNode }) => {
  const service = new IdolService();
  const [idols, setIdols] = useState<Idol[] | null>(null);

  useEffect(() => {
    console.log("Idols cambió. Idols:", idols);
    handleGetAllIdols();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idols]);

  const handleGetAllIdols = () => {
    const response = service.get();
    setIdols(response);
  };

  const handleDelete = (id: number) => {
    console.log("removing ID", id);
    const response = service.remove(id);
    console.log('delete response?', response);
    setIdols(response);
  };

  const state: IdolState = { idols, handleGetAllIdols, handleDelete };
  return <IdolContext.Provider value={state}>{children}</IdolContext.Provider>;
};

export default IdolProvider;
