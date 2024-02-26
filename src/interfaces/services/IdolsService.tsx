import { Idol } from "../core";

export interface IdolsService {
  get(id: number): Idol;
  getAll(): Idol[];
  add(idol: Idol): void;
  remove(idol: Idol): void;
  update(idol: Idol): void;
}
