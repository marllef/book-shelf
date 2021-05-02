export default function SearchBar() {
  return (
    <div>
      <form>
        <input
          className="outline-none bg-black-asphalt p-1.5 rounded font-bold text-clouds text-xs"
          name="author"
          placeholder='Pesquise um autor...'
          inputMode="search"
          required
        />
      </form>
    </div>
  );
}
