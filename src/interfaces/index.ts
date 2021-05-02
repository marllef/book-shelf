import { Component, ReactChildren, ReactNodeArray } from "react";

export type User = {
  id: number;
  name: string;
};

export interface CardGridTypes {
  data: Array<{
    title: string;
    author: string;
    font: string;
    link: string;
  }>;
}
