export type User = {
  id: number;
  name: string;
};

export interface CardGridTypes {
  data: Array<{
    title: string;
    imgPath?: string;
    author: string;
    font: string;
    link: string;
  }>;
}
