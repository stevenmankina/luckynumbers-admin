import React, { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

const SearchBar = ({ searchUsers }) => {
  const [search, setSearch] = useState(3);

  const [searchValue, setSearchValue] = useState({
    age: 0,
    location: "",
    gender: "male",
  });

  const handleSearch = async () => {
    if (search === 1) {
      setSearchValue({ ...searchValue, location: "", gender: "male" });
    } else if (search === 2) {
      setSearchValue({ ...searchValue, age: 0, gender: "male" });
    } else if (search === 3) {
      setSearchValue({ ...searchValue, age: 0, location: "" });
    }
    await searchUsers(search, searchValue);
  };

  return (
    <div className="md:w-fit w-full my-5">
      <div className="flex md:flex-row flex-col p-3 md:rounded-full rounded-3xl  border  items-center">
        <div className="flex md:flex-col justify-around md:w-fit w-full text-left mx-2 p-2">
          <p className="font-semibold">Main Search</p>
          <p className="font-light">What do you want?</p>
        </div>
        <div className="flex md:flex-col justify-around md:w-fit w-full text-left mx-2 p-2">
          <p className="font-semibold">Age</p>
          <input
            value={searchValue.age}
            onChange={(e) => {
              setSearchValue({ ...searchValue, age: e.target.value });
              setSearch(1);
            }}
            className="border w-16 px-0.5 rounded border-primary-500 text-sm outline-none"
            type="number"
            min={0}
          />
        </div>
        <div className="flex md:flex-col justify-around md:w-fit w-full text-left mx-2 p-2">
          <p className="font-semibold">Country</p>
          <input
            value={searchValue.location}
            onChange={(e) => {
              setSearchValue({ ...searchValue, location: e.target.value });
              setSearch(2);
            }}
            className="border w-32 px-0.5 rounded border-primary-500 text-sm outline-none"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex md:flex-col justify-around md:w-fit w-full text-left mx-2 p-2">
          <p className="font-semibold">Gender</p>

          <select
            value={searchValue.gender}
            onChange={(e) => {
              setSearchValue({ ...searchValue, gender: e.target.value });
              setSearch(3);
            }}
            className="border rounded border-primary-500 text-sm outline-none"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <MagnifyingGlass
          onClick={handleSearch}
          size={60}
          className="ml-3 mt-3 md:mt-0 cursor-pointer bg-primary-500 p-4 text-white rounded-full"
        />
      </div>
    </div>
  );
};

export default SearchBar;
