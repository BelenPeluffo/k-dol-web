import { useContext } from "react";
import { IdolContext } from "../contexts/Idols";
import { Idol } from "../interfaces/core";
import { IdolState } from "../contexts/Idols/IdolContext";

const Idols = () => {
  const { idols } = useContext<IdolState | null>(IdolContext);
  console.log("idols?", idols);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: 8 }}>
      <div
        style={{
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          justifyContent: "center",
          padding: 16
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
  );
};

export default Idols;
