import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  const [searchPhrase, setsearchPhrase] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchPhrase) {
      console.log(searchPhrase);
      setsearchPhrase("");
    }
  };

  return (
    <div className="flex flex-row justify-start items-center bg-white px-4 py-1 rounded cursor-pointer ml-10 w-[70%] max-[1540px]:w-80 max-[800px]:hidden">
      <MagnifyingGlassIcon className="w-5 h-5 mr-4 text-teal-900" />
      <form onSubmit={handleSubmit}>
        <input
          className="outline-none text-xl py-1 pl-3 max-[1540px]:w-60 w-[100%] "
          type="text"
          value={searchPhrase}
          placeholder="Search..."
          onChange={(e) => setsearchPhrase(e.target.value)}
        />
        <button type="submit" className="hidden"></button>
      </form>
    </div>
  );
};

export default Search;
