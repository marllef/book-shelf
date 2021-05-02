import Brand from "../Brand";
import SearchBar from "../SearchBar";

export default function Header() {
  return (
    <div className="flex fixed top-0 left-0 z-50 flex-row h-12 w-full p-2 bg-midnight-blue justify-between items-center text-white">
      <Brand />
      <span>
        <SearchBar />
      </span>
    </div>
  );
}
