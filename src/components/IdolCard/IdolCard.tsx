import { Idol } from "../../interfaces/core";
import "./IdolCard.css";

const IdolCard = ({
  idol,
  selected,
  onSelected,
  onEdit,
  onDelete,
}: {
  idol: Idol;
  onSelected: (id: number) => void;
  selected: number;
  onEdit: () => void;
  onDelete: (id: number) => void;
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
        {Object.keys(idol).map((property) => (
          <div>
            {property}: {idol[property]}
          </div>
        ))}
        <div>
          <button onClick={onEdit}>Edit</button>
          <button onClick={() => onDelete(idol.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default IdolCard;
