import { ObjectID } from "bson";

export type User = {
  id: number;
  name: string;
};

export interface CardGridTypes {
  data: Array<{
    _id?: ObjectID,
    title: string;
    imgPath?: string;
    author: string;
    font: string;
    link: string;
  }>;
}
