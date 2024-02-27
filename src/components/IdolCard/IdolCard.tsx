import { useState } from "react";
import { Idol } from "../../interfaces/core";
import "./IdolCard.css";

const IdolCard = ({ idol }: { idol: Idol }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      <button
        className={`collapsible ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        {idol.name}
      </button>
      <div
        className="panel"
        style={{
          display: isActive ? "flex" : "none",
        }}
      >
        {Object.keys(idol).map((property) => `${property}: ${idol[property]}`)}
      </div>
    </div>
  );
};

export default IdolCard;
