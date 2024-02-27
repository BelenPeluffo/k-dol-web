import { mockData } from ".";
import { Idol } from "../interfaces/core";
import { IdolsService as IdolInterface } from "../interfaces/services/IdolsService";

export class IdolService implements IdolInterface {
  db = mockData;
  constructor() {
    this.db = mockData;
  }
  get(id?: number): Idol[] {
    if (!id) {
      return this.db;
    }
    return this.db.filter((data) => data.id === id);
  }
  add(idol: Idol): void {
    throw new Error("Method not implemented.");
  }
  remove(id: number): Idol[] {
    // const newData = mockData.filter((idol) => idol.id !== id);
    // mockData = newData;
    this.db.splice(id, 1);
    console.log("this.db?", this.db);
    return this.db;
  }
  update(idol: Idol): void {
    throw new Error("Method not implemented.");
  }
}
