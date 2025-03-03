"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { SearchManufacturer } from ".";
import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 flex justify-center ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({ setManufacturer, setModel }) => {
  
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const router = useRouter()
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(searchManufacturer === '' && searchModel === '') {
      return alert('Please fill in the search bar')
    };
    setModel(searchModel)
    setManufacturer(searchManufacturer)
  };

  // const updateSearchParams = (model: string, manufacturer: string) => {
  //   const searchParams = new URLSearchParams(window.location.search)
    

  //   if (model) {
  //     searchParams.set('model', model)
  //   } else {
  //     searchParams.delete('model')
  //   }

  //   if (manufacturer) {
  //     searchParams.set('manufacturer', manufacturer)
  //   } else {
  //     searchParams.delete('manufacturer')
  //   }

  //   const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  //   router.push(newPathname)
  // }


  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="search__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          height={25}
          width={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"

        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
