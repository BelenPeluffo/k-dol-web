import { useContext } from "react";
import { IdolContext } from "../contexts/Idols";
import { Idol } from "../interfaces/core";
import { IdolState } from "../contexts/Idols/IdolContext";
import { FooterActions } from "../components";
import { useNavigate } from "react-router-dom";

const Idols = () => {
  const { idols } = useContext<IdolState | null>(IdolContext);
  const navigation = useNavigate();

  const footerActions = [
    <button>Filter</button>,
    <button onClick={() => navigation("/idols/create")}>Create</button>,
  ];

  return (
    <>
      <div style={{ width: "100vw", height: "100vh", padding: 8 }}>
        <div
          style={{
            fontWeight: 600,
            fontSize: 24,
            textAlign: "center",
            justifyContent: "center",
            padding: 16,
          }}
        >
          Idols
        </div>
        <div>
          {idols.length > 0
            ? idols.map((idol: Idol) => idol.name)
            : "There's no idols in your DB."}
        </div>
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
    </>
  );
};

export default Idols;
