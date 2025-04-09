import Image from "next/image";
const SearchBar: React.FC = () => {
  return (
    <div className="flex flex-row items-center">
      <input
        name="search"
        type="text"
        className="text-md px-4 w-[780px] h-[50px] border-gray-200 border rounded-lg"
        placeholder="ค้นหาสินค้า"
      />
      <button type="submit" className="px-4 py-2 rounded-lg transition-all">
        <Image
          height={200}
          width={200}
          src="/image/searchIcon.png"
          alt="search icon"
          className="ml-4 w-10 h-10 rounded-full border border-gray-200"
        />
      </button>
    </div>
  );
};

export default SearchBar;
