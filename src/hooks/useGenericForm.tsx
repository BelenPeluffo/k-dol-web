import { planets, zodiacSigns } from "../constants";
import { Idol, ZodiacSign } from "../interfaces/core";

const useGenericForm = () => {
  const createPositionsFormField = (
    onChange?: (field: string, value: string | number) => void,
    intialValues?: Idol
  ) => {
    return planets.map((planet) => (
      <div style={{ display: "flex", flexDirection: "column", width: "48%" }}>
        <label htmlFor={planet}>{planet}</label>
        <select
          name={planet}
          id={planet}
          title={planet}
          onChange={(event) => {
            console.log(planet, event.target.value);
            console.log('onChange?', onChange);
            onChange?.(planet, event.target.value);
          }}
          value={intialValues ? intialValues[planet] : 0}
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
