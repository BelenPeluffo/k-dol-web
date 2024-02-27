import { Idol } from "../core";

export interface IdolsService {
  get(id?: number): Idol[];
  add(idol: Idol): void;
  remove(id: number): Idol[];
  update(idol: Idol): void;
}
