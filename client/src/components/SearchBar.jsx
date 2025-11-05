const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="flex">
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="  rounded-md p-2 w-full bg-white  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mr-6"
    />
    <button className="bg-blue-500  text-white px-18 py-2 rounded-md hover:bg-blue-700 transition">Search</button>
    </div>
  );
};

export default SearchBar;