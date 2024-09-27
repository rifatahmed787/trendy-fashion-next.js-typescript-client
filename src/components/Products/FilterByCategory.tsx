import React, { useEffect, useState } from "react";
import CheckBox from "../UI/Check-box/Checkbox";
import { useGetUniqueFilteringItemsQuery } from "@/Redux/features/products/productApi";
import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import AnimatedFilter from "../UI/Framer-motion/AnimatedFilter";

type IFilterProduct = {
  filter: {
    productGender: any;
    categoryName: string;
    typeName: string;
    minPrice: number;
    maxPrice: number;
  };
  setFilter: React.Dispatch<
    React.SetStateAction<{
      productName: string;
      categoryName: string;
      typeName: string;
      productGender: string;
      search: string;
      minPrice: number;
      maxPrice: number;
    }>
  >;
};

const FilterByCategory = ({ filter, setFilter }: IFilterProduct) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isAllProducts, setIsAllProducts] = useState(false);
  const [isProductGender, setIsProductGender] = useState(false);
  const [isProductType, setIsProductType] = useState(false);
  const [isPriceRangeVisible, setIsPriceRangeVisible] = useState(false);

  const { data: uniqueFilter, isLoading } = useGetUniqueFilteringItemsQuery({
    refetchOnFocus: true,
  });

  const {
    all_gender = [],
    all_category = [],
    all_type = [],
    all_price=[]
  } = uniqueFilter?.data?.data || {};
  const [minPrice, setMinPrice] = useState<number>(all_price[0]);
  const [maxPrice, setMaxPrice] = useState<number>(all_price[1]);
  const uniqueCategory: string[] = (all_category as string[]).flatMap(
    (categoryName: string) => categoryName.split(", ")
  );

  const uniqueGender: string[] = (all_gender as string[]).flatMap(
    (productGender: string) => productGender.split(",")
  );

  const uniqueType: string[] = (all_type as string[]).flatMap(
    (productType: string) => productType.split(",")
  );

  useEffect(() => {
    // Set default filter category if not present
    if (!filter.categoryName) {
      setFilter((prevFilter) => ({
        ...prevFilter,
        categoryName: "",
      }));
    }
  }, [filter.categoryName, setFilter]);

  // Handle filter change
  const handleFilterChange = (category: string) => {
    const newCategory = filter.categoryName === category ? "" : category;
    setFilter((prevFilter) => ({
      ...prevFilter,
      categoryName: newCategory,
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
  // Handle type change
  const handleTypeChange = (type: string) => {
    const newType = filter.typeName === type ? "" : type;

    setFilter((prevFilter) => ({
      ...prevFilter,
      typeName: newType,
    }));

    // Update search params and route
    router.push(`/products?${searchParams.toString()}`);
  };

  const toggleProductGender = () => {
    setIsProductGender(!isProductGender);
  };

  const toggleProductType = () => {
    setIsProductType(!isProductType);
  };

  const togglePriceRange = () => {
    setIsPriceRangeVisible(!isPriceRangeVisible);
  };
  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const toggleAllProducts = () => {
    setIsAllProducts(!isAllProducts);

    if (isAllProducts) {
      // Reset the categoryName filter when showing all products
      setFilter((prevFilter) => ({
        ...prevFilter,
        categoryName: "",
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
                checked={!filter.categoryName}
                onChange={() => {
                  // Toggle all products selection
                  setFilter((prevFilter) => ({
                    ...prevFilter,
                    categoryName: prevFilter.categoryName
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
                  checked={filter.categoryName.includes(category)}
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
      {/* ----------------------
      Filter By type items
    -------------------------*/}
      <div className="flex items-center">
        <div
          className="flex items-center justify-between gap-[75px]"
          onClick={toggleProductType}
        >
          <div className="w-full font-bold">Filter By Type</div>
          <div className="cursor-pointer rounded-full bg-primary-100 p-1 text-xl">
            <Icon
              icon="ep:arrow-down"
              width={15}
              className={`${
                isProductType ? "rotate-180 duration-500" : "duration-500"
              }`}
            />
          </div>
        </div>
      </div>
      <AnimatedFilter isVisible={isProductType}>
        {isProductType && (
          <div>
            {uniqueType.map((type: string) => (
              <div key={type} className="mt-2 flex items-center space-x-2">
                <CheckBox
                  id={type}
                  checked={filter.typeName.includes(type)}
                  onChange={() => handleTypeChange(type)}
                />
                <h1 className="font-medium leading-none text-gray-700">
                  {type}
                </h1>
              </div>
            ))}
          </div>
        )}
      </AnimatedFilter>

      {/* ----------------
         Price Range Filter
      ------------------- */}
      <div
        className="flex items-center justify-between gap-[55px]"
        onClick={togglePriceRange}
      >
        <div className="w-full font-bold">Filter By Price</div>
        <div className="cursor-pointer rounded-full bg-primary-100 p-1 text-xl">
          <Icon
            icon="ep:arrow-down"
            width={15}
            className={`${
              isPriceRangeVisible ? "rotate-180 duration-500" : "duration-500"
            }`}
          />
        </div>
      </div>

      <AnimatedFilter isVisible={isPriceRangeVisible}>
  {isPriceRangeVisible && (
    <div className="flex flex-col space-y-2 mt-2">
      <div>
        <label className="font-medium leading-none text-gray-700">Min Price</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => {
            const value = e.target.value ? Number(e.target.value) : 0; // Ensure it's a number
            setMinPrice(value);
            setFilter((prevFilter) => ({
              ...prevFilter,
              minPrice: value,
            }));
            // Update search params and route
            const params = new URLSearchParams(searchParams.toString());
            params.set('minPrice', value.toString());
            router.push(`/products?${params.toString()}`);
          }}
          className="border rounded p-1"
          placeholder="Min Price"
        />
      </div>
      <div>
        <label className="font-medium leading-none text-gray-700">Max Price</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => {
            const value = e.target.value ? Number(e.target.value) : 0; // Ensure it's a number
            setMaxPrice(value);
            setFilter((prevFilter) => ({
              ...prevFilter,
              maxPrice: value,
            }));
            // Update search params and route
            const params = new URLSearchParams(searchParams.toString());
            params.set('maxPrice', value.toString());
            router.push(`/products?${params.toString()}`);
          }}
          className="border rounded p-1"
          placeholder="Max Price"
        />
      </div>
    </div>
  )}
</AnimatedFilter>

    </div>
  );
};

export default FilterByCategory;
