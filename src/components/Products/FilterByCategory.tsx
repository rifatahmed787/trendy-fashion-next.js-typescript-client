import React, { useEffect, useState } from "react";
import CheckBox from "../UI/Check-box/Checkbox";
import { useGetUniqueFilteringItemsQuery } from "@/Redux/features/products/productApi";
import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import AnimatedFilter from "../UI/Framer-motion/AnimatedFilter";
import Slider from "rc-slider"; 
import "rc-slider/assets/index.css"; 

type IFilterProduct = {
  filter: {
    productGender: any;
    categoryName: string;
    typeName: string;
    minPrice: string;
    maxPrice: string;
  };
  setFilter: React.Dispatch<
    React.SetStateAction<{
      productName: string;
      categoryName: string;
      typeName: string;
      productGender: string;
      search: string;
      minPrice: string;
      maxPrice: string;
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
    all_price = [],
  } = uniqueFilter?.data?.data || {};

  const uniqueCategory: string[] = (all_category as string[]).flatMap(
    (categoryName: string) => categoryName.split(", ")
  );

  const uniqueGender: string[] = (all_gender as string[]).flatMap(
    (productGender: string) => productGender.split(",")
  );

  const uniqueType: string[] = (all_type as string[]).flatMap(
    (productType: string) => productType.split(",")
  );

  const [minPrice, maxPrice] = all_price.length ? all_price : [0, 0];

  useEffect(() => {
    // Set default filter price range if not present
    if (!filter.minPrice) {
      setFilter((prevFilter) => ({
        ...prevFilter,
        minPrice: String(minPrice),
      }));
    }
    if (!filter.maxPrice) {
      setFilter((prevFilter) => ({
        ...prevFilter,
        maxPrice: String(maxPrice),
      }));
    }
  }, [filter.minPrice, filter.maxPrice, minPrice, maxPrice, setFilter]);

  // Handle price range change
  const handlePriceRangeChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      const [newMinPrice, newMaxPrice] = value;

      // Update state only if values change
      if (
        newMinPrice !== Number(filter.minPrice) ||
        newMaxPrice !== Number(filter.maxPrice)
      ) {
        setFilter((prevFilter) => ({
          ...prevFilter,
          minPrice: String(newMinPrice),
          maxPrice: String(newMaxPrice),
        }));

        console.log("Updated Filter State:", {
          minPrice: String(newMinPrice),
          maxPrice: String(newMaxPrice),
        }); // Log new filter state

        // Update search params
        router.push(`/products?${searchParams.toString()}`);
      }
    }
  };

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
      {/* All Products Toggle */}
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

      {/* Filter By Category */}
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

      {/* Filter By Gender */}
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
                  checked={filter.productGender === gender}
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

      {/* Filter By Type */}
      <div className="flex items-center">
        <div
          className="flex items-center justify-between gap-[72px]"
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
                  checked={filter.typeName === type}
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

      {/* Price Range Filter */}
      <div className="flex items-center">
        <div
          className="flex items-center justify-between gap-[72px]"
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
      </div>
      <AnimatedFilter isVisible={isPriceRangeVisible}>
        {isPriceRangeVisible && (
          <div className="mt-2">
            <Slider
              range
              min={0} 
              max={5000} 
              value={[Number(filter.minPrice), Number(filter.maxPrice)]} 
              onChange={handlePriceRangeChange} 
              allowCross={false}
              step={1}
            />

            <div className="flex justify-between">
              <span>Min: {filter.minPrice}</span>
              <span>Max: {filter.maxPrice}</span>
            </div>
          </div>
        )}
      </AnimatedFilter>
    </div>
  );
};

export default FilterByCategory;
