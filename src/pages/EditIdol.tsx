import { useContext, useState } from "react";
import { IdolContext } from "../contexts/Idols";
import { useNavigate } from "react-router-dom";
import { FooterActions, IdolForm, Modal } from "../components";
import { Idol } from "../interfaces/core";

const EditIdol = () => {
  const {
    idol,
    setIdol,
    apiResponse,
    handleEdit: handleEditService,
  } = useContext(IdolContext);
  const navigation = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const footerActions = [
    <button onClick={() => navigation(-1)}>Go back to idols</button>,
    <button onClick={() => navigation("/idols/create")}>Create new idol</button>,
  ];

  const handleChangeData = (field: string, value: string | number) => {
    setIdol((current: Idol) => {
      return current ? { ...current, [field.toLowerCase()]: value } : null;
    });
  };

  const handleEdit = () => {
    if (idol) {
      console.log("Trying to edit");
      handleEditService(idol);
      // if (apiResponse) {
      //   setIsModalOpen(true);
      // }
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
        Edit Idol
      </div>
      <div style={{ gap: 4 }}>
        <IdolForm
          actions={[<button onClick={handleEdit}>Edit idol</button>]}
          onDataChange={handleChangeData}
          initialData={idol ? idol : undefined}
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

export default EditIdol;
