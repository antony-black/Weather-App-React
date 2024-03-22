export default function Search({ search, setSearch, handleSearch }) {
  const isValue = (value) => {
    return value?.length > 0 ? false : true;
  };
  return (
    <div className="search-contianer">
      <input
        name="search"
        type="text"
        className="city-searching"
        placeholder="Enter the city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        disabled={isValue(search)}
        className="search-button"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
