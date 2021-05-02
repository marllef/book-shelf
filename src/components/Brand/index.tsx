import { FaBookmark as Icon } from "react-icons/fa";

export default function Brand() {
  return (
    <div className="flex flex-row justify-center items-center text-emerald font-bold italic text-lg">
      <span className='text-xl'>
        <Icon />
      </span>
      <span className="ml-1">BookMark</span>
    </div>
  );
}
