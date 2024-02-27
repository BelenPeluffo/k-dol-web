import { ReactNode, useEffect, useState } from "react";
import { IdolContext, IdolState } from "./IdolContext";
import { IdolService } from "../../services";
import { Idol } from "../../interfaces/core";

const IdolProvider = ({ children }: { children: ReactNode }) => {
  const service = new IdolService();
  const [idols, setIdols] = useState<Idol[] | null>(null);
  const [idol, setIdol] = useState<Idol | null>(null);
  const [apiResponse, setApiResponse] = useState(false);
  console.log("apiResponse state?", apiResponse);
  console.log('idol?', idol);

  useEffect(() => {
    console.log("Idols cambió. Idols:", idols);
    handleGetAllIdols();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetAllIdols = () => {
    setApiResponse(false);
    const response = service.get();
    setIdols(response);
  };

  const handleDelete = (id: number) => {
    setApiResponse(false);
    console.log("removing ID", id);
    const response = service.remove(id);
    console.log("delete response?", response);
    setIdols(response);
  };

  const handleCreate = (idol: Idol) => {
    console.log("handleCreate");
    setApiResponse(false);
    service.add(idol);
    setApiResponse(true);
  };

  const handleEdit = (idol: Idol) => {
    setApiResponse(false);
    const response = service.update(idol);
    console.log("handleEdit response?", response);
    setIdols(response);
    setApiResponse(true);
  }

  const prepareEditting = (id: number) => {
    const response = service.get({id});
    setIdol(response[0]);
  }

  const state: IdolState = {
    idols,
    handleGetAllIdols,
    handleDelete,
    handleCreate,
    apiResponse,
    prepareEditting,
    idol,
    handleEdit,
    setIdol,
  };
  return <IdolContext.Provider value={state}>{children}</IdolContext.Provider>;
};

export default IdolProvider;
