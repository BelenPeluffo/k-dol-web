import { useNavigate } from "react-router-dom";
import { FooterActions, IdolForm, Modal } from "../components";
import { useContext, useState } from "react";
import { IdolContext } from "../contexts/Idols";
import { Idol } from "../interfaces/core";

const CreateIdol = () => {
  const { handleCreate: handleCreateService, apiResponse } =
    useContext(IdolContext);
  const navigation = useNavigate();
  const [idol, setIdol] = useState<Idol | object>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("CreateIdol. idol?", idol);

  const footerActions = [
    <button onClick={() => navigation("/idols")}>See all idols</button>,
  ];

  const handleChangeData = (field: string, value: string | number) => {
    setIdol((current) => {
      return current ? { ...current, [field.toLowerCase()]: value } : null;
    });
  };

  const handleCreate = () => {
    if (idol) {
      handleCreateService(idol);
      if (apiResponse) {
        setIsModalOpen(true);
      }
    }
  };
  return (
    <div>
      <div
        style={{
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          justifyContent: "center",
          padding: 16,
        }}
      >
        CreateIdol
      </div>
      <div style={{ gap: 4 }}>
        <IdolForm
          actions={[<button onClick={handleCreate}>Create idol</button>]}
          onDataChange={handleChangeData}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 24,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <FooterActions actions={footerActions} />
      </div>
      {isModalOpen ? (
        <Modal
          title="Create idol"
          message={""}
          open={isModalOpen}
          actions={[
            <button
              onClick={() => {
                setIsModalOpen(false);
                navigation("/idols");
              }}
            >
              OK
            </button>,
          ]}
        />
      ) : null}
    </div>
  );
};

export default CreateIdol;
