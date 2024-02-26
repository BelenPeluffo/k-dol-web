import { IdolForm } from "../components";

const CreateIdol = () => {
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
    </div>
  );
};

export default CreateIdol;
