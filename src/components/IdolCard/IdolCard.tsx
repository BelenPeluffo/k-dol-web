import { Idol } from "../../interfaces/core";
import "./IdolCard.css";

const IdolCard = ({
  idol,
  selected,
  onSelected,
}: {
  idol: Idol;
  onSelected: (id: number) => void;
  selected: number;
}) => {
  console.log("selected?", selected);
  return (
    <div className={`container ${selected === idol.id ? "active" : ""}`}>
      <button
        className={`collapsible ${selected === idol.id ? "active" : ""}`}
        onClick={() => {
          onSelected(selected !== idol.id ? idol.id : 0);
        }}
      >
        {idol.name}
      </button>
      <div
        className="panel"
        style={{
          display: selected === idol.id ? "flex" : "none",
        }}
      >
        {Object.keys(idol).map((property) => `${property}: ${idol[property]}`)}
      </div>
    </div>
  );
};

export default IdolCard;
