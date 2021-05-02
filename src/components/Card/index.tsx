import Image from "next/image";

type CardPropsType = {
  title: string;
  author: string;
  font: string;
  link: string;
};

export default function Card({
  title = "Título Do Livro",
  author = "AutorDaObra",
  font = "Domínio Público",
  link = "/#",
}: CardPropsType) {
  return (
    <div className="bg-clouds flex flex-col w-56 max-h-96 m-1 rounded border overflow-hidden">
      <Image
        className="bg-black-asphalt"
        layout="responsive"
        src="/#"
        width="400"
        height="250"
      />
      <div>
        <div id="Profile-Card" className="flex flex-row border-b p-2">
          <div className="flex flex-wrap flex-col">
            <div className="text-left text-xl leading-tight font-bold">
              {title}
            </div>

            <div className="text-left text-sm leading-3 italic text-blue-hole">
              @{author}
            </div>

            <div className="text-left text-xs leading-6">{font}</div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-white p-1.5 text-sm">
          <a
            className="flex flex-1 font-bold justify-center items-center text-midnight-blue"
            href={link}
          >
            Visualizar
          </a>
        </div>
      </div>
    </div>
  );
}
