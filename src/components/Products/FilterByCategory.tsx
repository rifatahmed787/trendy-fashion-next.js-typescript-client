import React, { useEffect, useState } from "react";
import CheckBox from "../UI/Check-box/Checkbox";
import { useGetUniqueFilteringItemsQuery } from "@/Redux/features/products/productApi";
import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import AnimatedFilter from "../FramerMotion/AnimatedFilter/AnimatedFilter";

type IFilterProduct = {
  filter: {
    productGender: any;
    productCategory: string;
  };
  setFilter: React.Dispatch<
    React.SetStateAction<{
      productName: string;
      productCategory: string;
      productGender: string;
      search: string;
    }>
  >;
};

const FilterByCategory = ({ filter, setFilter }: IFilterProduct) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isAllProducts, setIsAllProducts] = useState(false);
  const [isProductGender, setIsProductGender] = useState(false);

  const { data: uniqueFilter, isLoading } = useGetUniqueFilteringItemsQuery({
    refetchOnFocus: true,
  });

  const { all_gender = [], all_category = [] } = uniqueFilter?.data?.data || {};

  const uniqueCategory: string[] = (all_category as string[]).flatMap(
    (productCategory: string) => productCategory.split(", ")
  );

  const uniqueGender: string[] = (all_gender as string[]).flatMap(
    (productGender: string) => productGender.split(",")
  );

  useEffect(() => {
    // Set default filter category if not present
    if (!filter.productCategory) {
      setFilter((prevFilter) => ({
        ...prevFilter,
        productCategory: "",
      }));
    }
  }, [filter.productCategory, setFilter]);

  // Handle filter change
  const handleFilterChange = (category: string) => {
    const newCategory = filter.productCategory === category ? "" : category;
    setFilter((prevFilter) => ({
      ...prevFilter,
      productCategory: newCategory,
    }));

    // Update search params and route
    router.push(`/products?${searchParams.toString()}`);
  };

  // Handle gender change
  const handleGenderChange = (gender: string) => {
    const newGender = filter.productGender === gender ? "" : gender;

    setFilter((prevFilter) => ({
      ...prevFilter,
      productGender: newGender,
    }));

    // Update search params and route
    router.push(`/products?${searchParams.toString()}`);
  };

  const toggleProductGender = () => {
    setIsProductGender(!isProductGender);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const toggleAllProducts = () => {
    setIsAllProducts(!isAllProducts);

    if (isAllProducts) {
      // Reset the productCategory filter when showing all products
      setFilter((prevFilter) => ({
        ...prevFilter,
        productCategory: "",
      }));
      // Update search params and route
      router.push(`/products`);
    }
  };

  return (
    <div className="space-y-5 mt-3">
      {/* ----------------
         All the products
      ------------------- */}
      <div className="flex items-center">
        <div
          className="flex items-center justify-between gap-[83px]"
          onClick={toggleAllProducts}
        >
          <div className="w-full font-bold">All Category</div>
          <div className="cursor-pointer rounded-full bg-primary-100 p-1 text-xl">
            <Icon
              icon="ep:arrow-down"
              width={15}
              className={`${
                isAllProducts ? "rotate-180 duration-500" : "duration-500"
              }`}
            />
          </div>
        </div>
      </div>

      <AnimatedFilter isVisible={isAllProducts}>
        {isAllProducts && (
          <div>
            <div className="mt-2 flex items-center">
              <CheckBox
                id="all-products"
                checked={!filter.productCategory}
                onChange={() => {
                  // Toggle all products selection
                  setFilter((prevFilter) => ({
                    ...prevFilter,
                    productCategory: prevFilter.productCategory
                      ? ""
                      : uniqueCategory.join(", "),
                  }));
                  // Update search params and route
                  router.push(`/products`);
                }}
              />
              <h1 className="font-medium leading-none text-gray-700">
                All Products
              </h1>
            </div>
          </div>
        )}
      </AnimatedFilter>

      {/* ----------------------
        Filter By category items
       -------------------------*/}
      <div className="flex items-center">
        <div
          className="flex items-center justify-between gap-10"
          onClick={toggleFilterVisibility}
        >
          <div className="w-full font-bold">Filter By Category</div>
          <div className="cursor-pointer rounded-full bg-primary-100 p-1 text-xl">
            <Icon
              icon="ep:arrow-down"
              width={15}
              className={`${
                isFilterVisible ? "rotate-180 duration-500" : "duration-500"
              }`}
            />
          </div>
        </div>
      </div>

      <AnimatedFilter isVisible={isFilterVisible}>
        {isFilterVisible && (
          <div>
            {uniqueCategory.map((category: string) => (
              <div key={category} className="mt-2 flex items-center space-x-2">
                <CheckBox
                  id={category}
                  checked={filter.productCategory.includes(category)}
                  onChange={() => handleFilterChange(category)}
                />
                <h1 className="font-medium leading-none text-gray-700">
                  {category}
                </h1>
              </div>
            ))}
          </div>
        )}
      </AnimatedFilter>

      {/* ----------------------
      Filter By gender items
    -------------------------*/}
      <div className="flex items-center">
        <div
          className="flex items-center justify-between gap-[55px]"
          onClick={toggleProductGender}
        >
          <div className="w-full font-bold">Filter By Gender</div>
          <div className="cursor-pointer rounded-full bg-primary-100 p-1 text-xl">
            <Icon
              icon="ep:arrow-down"
              width={15}
              className={`${
                isProductGender ? "rotate-180 duration-500" : "duration-500"
              }`}
            />
          </div>
        </div>
      </div>
      <AnimatedFilter isVisible={isProductGender}>
        {isProductGender && (
          <div>
            {uniqueGender.map((gender: string) => (
              <div key={gender} className="mt-2 flex items-center space-x-2">
                <CheckBox
                  id={gender}
                  checked={filter.productGender.includes(gender)}
                  onChange={() => handleGenderChange(gender)}
                />
                <h1 className="font-medium leading-none text-gray-700">
                  {gender}
                </h1>
              </div>
            ))}
          </div>
        )}
      </AnimatedFilter>
    </div>
  );
};

export default FilterByCategory;
