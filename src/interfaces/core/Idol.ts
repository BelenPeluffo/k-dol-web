import { Entity } from "./Entity";

export interface Idol extends Entity {
  [index: string]: string | number | undefined;
  sun?: number;
  moon?: number;
  rising?: number;
  mercury?: number;
  venus?: number;
  mars?: number;
  jupiter?: number;
  saturn?: number;
  uranus?: number;
  neptune?: number;
  pluto?: number;
  chiron?: number;
}
