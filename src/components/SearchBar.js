import { useState } from "react";

const SearchBar = ({ handleSearchText }) => {
  // Whenever state variables update, React triggers a reconciliation cycle(re-renders the component)
  const [searchText, setSearchText] = useState("");

  const submitSearchText = () => {
    console.log(searchText);
    handleSearchText(searchText);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        className="border-2 p-1"
      />
      <button type="button" onClick={() => submitSearchText()} className="bg-blue-500 p-1.5 w-24 text-white">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
