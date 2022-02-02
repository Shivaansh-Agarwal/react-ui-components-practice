export function InputField({ searchText, setSearchText }) {
  function handleTextChange(e) {
    setSearchText(e.target.value);
  }
  return (
    <input
      type="text"
      className="p-2 border w-full"
      placeholder="Search..."
      value={searchText}
      onChange={handleTextChange}
    />
  );
}
