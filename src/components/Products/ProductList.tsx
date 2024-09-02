/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
"use client";
import React, { useEffect, useState } from "react";
import FilterByCategory from "./FilterByCategory";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetProductsQuery } from "@/Redux/features/products/productApi";
import { IProduct } from "@/Types/products";
import Pagination from "../Pagination/Pagination";
import ProductSkeleton from "./ProductSkeleton";
import { useSelector } from "react-redux";
import { selectSearch } from "@/Redux/features/products/searchSlice";
import ICONS from "../shared/Icons/AllIcons";
import CartProduct from "../UI/CartProduct";
import Paragraph from "../UI/Paragraph/Paragraph";

const ProductList = () => {
  const [open, setOpen] = useState(true);
  
  const router = useRouter();
  const searchTerm = useSelector(selectSearch);
  // Pagination state
  const [pagination, setPagination] = useState({
    totalPage: 1,
    pageSize: 10,
    currentPage: 1,
  });
  // filter state and effect
  const [filter, setFilter] = useState({
    productName: "",
    categoryName: "",
    typeName:"",
    productGender: "",
    search: "",
  });
  // the useGetProductsQuery hook
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetProductsQuery({
    page: pagination.currentPage,
    limit: pagination.pageSize,
    productName: filter.productName,
    categoryName: filter.categoryName,
    typeName:filter.typeName,
    productGender: filter.productGender,
    searchTerm: searchTerm,
  });

  const searchParams = useSearchParams();

  // Handlers for page navigation
  const handleSelectPage = (clickedPage: number) => {
    setPagination({ ...pagination, currentPage: clickedPage });
  };

  const handleNextPage = () => {
    setPagination((prev) => ({ ...prev, currentPage: prev.currentPage + 1 }));
  };

  const handlePreviousPage = () => {
    setPagination((prev) => ({ ...prev, currentPage: prev.currentPage - 1 }));
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPagination({ pageSize: newPageSize, currentPage: 1, totalPage: 1 });
  };

  useEffect(() => {
    const totalProducts = products?.data?.meta?.total ?? 0;
    const newTotalPage = Math.ceil(totalProducts / pagination.pageSize);
    setPagination((prev) => ({
      ...prev,
      totalPage: newTotalPage > 0 ? newTotalPage : 1,
      total: totalProducts,
    }));
  }, [products, pagination.pageSize]);

  useEffect(() => {
    const tempSearchParams = {
      productName: searchParams.get("productName") ?? "",
      categoryName: searchParams.get("categoryName") ?? "",
      typeName:searchParams.get("typeName") ?? "",
      productGender: searchParams.get("productGender") ?? "",
      search: searchParams.get("search") ?? "",
    };

    // Convert 'searchParams' to a regular object
    const searchParamsObj = Object.fromEntries(searchParams.entries());
    setFilter({ ...tempSearchParams, ...searchParamsObj });
  }, [router, searchParams]);

  const products_list_data = products?.data?.data;

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="mx-auto max-w-screen-2xl mt-10">
      <div
        className={`${
          open ? " flex-col lg:flex-row " : "flex-row lg:flex-row"
        } flex`}
      >
        <div
          className={` ${
            open ? "w-72" : "w-[5px] "
          }   relative duration-700 mx-auto`}
        >
          <svg
            className={`text-primary-300 absolute   -top-5  z-10 cursor-pointer  rounded-full  ${
              !open ? "rotate-180 -right-8" : "right-4"
            } `}
            onClick={() => setOpen(!open)}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 50 50"
          >
            <path
              fill="currentColor"
              d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
            />
            <path
              fill="currentColor"
              d="M25.3 34.7L15.6 25l9.7-9.7l1.4 1.4l-8.3 8.3l8.3 8.3z"
            />
            <path fill="currentColor" d="M17 24h17v2H17z" />
          </svg>

          <div
            className={`${
              open ? "block" : "hidden lg:block "
            } items-center  gap-x-4 lg:flex`}
          >
            <div
              className={`origin-left font-medium duration-700 ${
                !open && "scale-0"
              }`}
            >
              <div className=" flex h-auto items-center justify-center">
                <div className="h-auto w-64 border p-5">
                  <p className="text-xl font-semibold">Filter By</p>
                  <FilterByCategory filter={filter} setFilter={setFilter} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* body */}
        <div className="flex-1">
          <div className="pb-10">
            <div>
              {isLoading ? (
                <div className="mx-auto">
                  <ProductSkeleton />
                </div>
              ) : (
                <div>
                  {products_list_data?.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 px-5 md:px-10">
                      {" "}
                      {!isError &&
                        !error &&
                        products_list_data.map((product: IProduct) => {
                          return (
                            <CartProduct key={product.id} product={product} />
                          );
                        })}
                    </div>
                  ) : (
                    <>
                      {searchTerm && (
                        <div className="flex justify-center items-center gap-2 min-h-[50vh]">
                          <p className="text-base md:text-lg font-tertiary font-semibold">No products match your search.</p>
                        </div>
                      )}
                      {
                        isError || error &&  <div className="flex justify-center items-center gap-2 min-h-[50vh]">
                        <Paragraph>Can't Load the data! Please</Paragraph>
                        <button
                          onClick={handleReload}
                          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm flex items-center px-2 py-1 gap-1"
                        >
                          {ICONS.refresh}
                          reload
                        </button>
                      </div>
                      }
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Pagination component */}
          <div className="mx-auto max-w-screen-2xl mt-10">
            <Pagination
              total={products?.data?.meta?.total ?? 0}
              totalPage={pagination.totalPage}
              pageSize={pagination.pageSize}
              currentPage={pagination.currentPage}
              handleSelectPage={handleSelectPage}
              handleNextPage={handleNextPage}
              handlePreviousPage={handlePreviousPage}
              handlePageSizeChange={handlePageSizeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
