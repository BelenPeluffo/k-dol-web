import { Idol } from "../../interfaces/core";

const IdolCard = ({ idol }: { idol: Idol }) => {
  return <div>{idol.name}</div>;
};

export default IdolCard;
