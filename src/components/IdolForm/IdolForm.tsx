import { zodiacSigns } from "../../constants";
import { ZodiacSign } from "../../interfaces/core";

const IdolForm = () => {
  const createFormField = (fields: [], onChange: () => void, intialValues: []) => {
    return fields.map((field) => (
      <select name={field} id={field} title={field}>
        {zodiacSigns.map((zodiacSign: ZodiacSign) => (
          <option value={zodiacSign.id} key={zodiacSign.id}>
            {zodiacSign.name}
          </option>
        ))}
      </select>
    ));
  };
  return <div>IdolForm</div>;
};

export default IdolForm;
