import fs from "fs";
import { Entity } from "../interfaces/core";

export const getData = <T extends Entity>(file: string, id?: number) => {
  const fileContent: T[] = JSON.parse(
    fs.readFileSync(file) as unknown as string
  );
  let data;
  if (id) {
    console.log("id", id);
    data = fileContent.filter((item) => item.id === id)[0];
  } else {
    data = fileContent;
  }
  return data;
};

export const postData = () => {};

export const putData = () => {};

export const deleteData = () => {};
