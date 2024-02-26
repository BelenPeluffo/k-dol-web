import { ReactNode } from "react";

const FooterActions = ({ actions }: { actions: ReactNode[] }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: 4
      }}
    >
      {actions}
    </div>
  );
};

export default FooterActions;
