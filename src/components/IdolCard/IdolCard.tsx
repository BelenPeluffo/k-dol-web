import { useState } from "react";
import { Idol } from "../../interfaces/core";

const IdolCard = ({ idol }: { idol: Idol }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <button onClick={() => setIsActive(!isActive)}>{idol.name}</button>
      <div style={{ display: isActive ? "block" : "none", overflow: "hidden" }}>
        {Object.keys(idol).map((property) => `${property}: ${idol[property]}`)}
      </div>
    </div>
  );
};

export default IdolCard;
