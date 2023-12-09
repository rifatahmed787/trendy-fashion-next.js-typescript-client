"use client";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "@/Redux/features/products/searchSlice";
import { useRouter } from "next/navigation";
import TextInput from "@/components/UI/Form-items/TextInput";
import ICONS from "@/components/shared/Icons/AllIcons";

const AdminSearchbar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearch);
  const [searchKey, setSearchKey] = useState("");
  const router = useRouter();

  useEffect(() => {
    setSearchKey(searchValue);
  }, [searchValue]);

  const handleFilterValue = () => {
    dispatch(setSearch(searchKey));
    router.push(`/products?search=${encodeURIComponent(searchKey)}`);
  };

  return (
    <div className="relative flex items-center ">
      <TextInput
        type="text"
        placeHolder="Search"
        currentValue={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        required={true}
        className="pr-5 md:pr-10 bg-white h-10"
      />
      <button
        className=" text-black h-10 px-2 py-1  rounded-r-md  hover:text-white hover:bg-primary-100 duration-300 -ml-10 z-10"
        onClick={handleFilterValue}
      >
        {ICONS.Search_Icon}
      </button>
    </div>
  );
};

export default AdminSearchbar;
