import Card from "../../components/Card";
import { CardGridTypes } from "../../interfaces";

export default function CardGrid({ data }: CardGridTypes) {
  return (
    <div
      id="Card-Grid"
      className="flex flex-row p-12 flex-wrap justify-center items-baseline"
    >
      {data.map((value, key) => (
        <Card
          key={key}
          title={value.title}
          author={value.author}
          font={value.font}
          link={value.link}
        />
      ))}
    </div>
  );
}
