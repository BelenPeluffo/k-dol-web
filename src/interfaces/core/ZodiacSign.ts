import { Entity } from "./Entity";

export type Sign =
  | "Capricorn"
  | "Aquarius"
  | "Pisces"
  | "Aries"
  | "Taurus"
  | "Gemini"
  | "Cancer"
  | "Leo"
  | "Virgo"
  | "Libra"
  | "Scorpio"
  | "Sagittarius";

export interface ZodiacSign extends Entity {
  name: Sign;
}
