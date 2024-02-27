import { planets, zodiacSigns } from "../constants";
import { ZodiacSign } from "../interfaces/core";

const useGenericForm = () => {
  const createPositionsFormField = (
    onChange?: () => void,
    intialValues?: []
  ) => {
    return planets.map((planet) => (
      <div style={{ display: "flex", flexDirection: "column", width: "48%" }}>
        <label htmlFor={planet}>{planet}</label>
        <select
          name={planet}
          id={planet}
          title={planet}
          onChange={(event) => console.log(planet, event.target.value)}
        >
            <option value={0}>Select a sign...</option>
          {zodiacSigns.map((zodiacSign: ZodiacSign) => (
            <option value={zodiacSign.id} key={zodiacSign.id}>
              {zodiacSign.name}
            </option>
          ))}
        </select>
      </div>
    ));
  };
  return { createPositionsFormField };
};

export default useGenericForm;
