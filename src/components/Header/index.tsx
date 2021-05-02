import Brand from "../Brand";

export default function Header() {
  return (
    <div className="flex flex-row h-12 p-2 bg-midnight-blue justify-between items-center text-white">
      <Brand />
      <span>SearchBAR</span>
    </div>
  );
}
