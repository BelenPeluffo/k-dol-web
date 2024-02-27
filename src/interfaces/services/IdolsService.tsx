import { Idol } from "../core";

export interface IdolsService {
  get(filters: Partial<Idol>): Idol[];
  add(idol: Idol): void;
  remove(id: number): Idol[];
  update(idol: Idol): void;
}
