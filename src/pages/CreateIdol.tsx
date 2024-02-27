import { useNavigate } from "react-router-dom";
import { FooterActions, IdolForm } from "../components";

const CreateIdol = () => {
  const navigation = useNavigate();
  const footerActions = [
    <button onClick={() => navigation("/idols")}>See all idols</button>,
  ];
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
        <IdolForm actions={[<button>Create idol</button>]} />
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
    </div>
  );
};

export default CreateIdol;
