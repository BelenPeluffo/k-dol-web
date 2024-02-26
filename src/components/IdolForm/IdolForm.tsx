import { ReactNode } from "react";
import { useGenericForm } from "../hooks";

const IdolForm = ({ actions }: { actions?: ReactNode[] }) => {
  const { createPositionsFormField } = useGenericForm();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 8,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {createPositionsFormField()}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 4,
          padding: 8,
        }}
      >
        {actions}
      </div>
    </div>
  );
};

export default IdolForm;
