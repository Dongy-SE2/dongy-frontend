"use client";

import { useContext } from "react";
import { filterContext } from "./ProductListWithSearch";

interface Props {
  filter: string;
}

const Button: React.FC<Props> = ({ filter }) => {
  const { filters, setFilters } = useContext(filterContext);
  const handleFilter = (e: React.MouseEvent, filter: string) => {
    e.preventDefault();
    if (!setFilters) return;
    setFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter],
    );
  };
  return (
    <button
      type="button"
      className={`px-4 py-2 rounded-lg transition-all text-md w-fit h-10 border ${
        filters.includes(filter)
          ? "bg-gray-700 text-white"
          : "bg-white text-gray-800 border-gray-100 shadow-md"
      }`}
      onClick={(e) => handleFilter(e, filter)}
    >
      {filter}
    </button>
  );
};

export default Button;
