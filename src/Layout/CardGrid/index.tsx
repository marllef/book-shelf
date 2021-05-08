import Card from "../../components/Card";
import { CardGridTypes } from "../../interfaces";

export default function CardGrid({ data }: CardGridTypes) {
  return (
    <div
      id="Card-Grid"
      className="flex flex-row p-12 flex-wrap justify-center items-baseline"
    >
      {data.map((book, key) => (
        <Card
          key={key}
          title={book.title}
          author={book.author.replace(/\s/g, "")}
          font={book.font}
          link={book.link}
        />
      ))}
    </div>
  );
}
