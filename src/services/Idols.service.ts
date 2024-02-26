import { mockData } from ".";
import { Idol } from "../interfaces/core";
import { IdolsService as IdolInterface } from "../interfaces/services/IdolsService";


export class IdolService implements IdolInterface {
  get(id: number): Idol {
    throw new Error("Method not implemented.");
  }
  getAll(): Idol[] {
    return mockData;
  }
  add(idol: Idol): void {
    throw new Error("Method not implemented.");
  }
  remove(idol: Idol): void {
    throw new Error("Method not implemented.");
  }
  update(idol: Idol): void {
    throw new Error("Method not implemented.");
  }
}
