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
    console.log("Adding idol:", idol.name);
    console.log("idol?", idol);
    this.db.push({ ...idol, id: this.db.length + 1 });
  }
  remove(id: number): Idol[] {
    // const newData = mockData.filter((idol) => idol.id !== id);
    // mockData = newData;
    const newData = this.db.filter((idol) => idol.id !== id);
    this.db = newData;
    console.log("this.db?", this.db);
    return this.db;
  }
  update(idol: Idol): Idol[] {
    const {id} = idol;
    const newData = this.db.filter((idol) => idol.id !== id);
    this.db = newData;
    console.log("this.db before pushing?", this.db);
    this.db.push(idol);
    return this.db;
  }
}
