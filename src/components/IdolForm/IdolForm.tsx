import { ReactNode } from "react";
import { useGenericForm } from "../../hooks";
import { Idol } from "../../interfaces/core";

const IdolForm = ({
  actions,
  onDataChange,
  initialData
}: {
  actions?: ReactNode[];
  onDataChange: (field: string, value: string | number) => void;
  initialData?: Idol;
}) => {
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
        <input
          type="text"
          name="name"
          id="name"
          onChange={(event) => onDataChange("name", event.target.value)}
        />
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
        {createPositionsFormField(onDataChange, initialData)}
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
