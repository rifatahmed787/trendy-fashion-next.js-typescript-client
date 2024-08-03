"use client";
import {  useMemo } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface IPaginationProps {
  isLoading?: boolean;
  total:number;
  totalPage: number;
  pageSize: number;
  currentPage: number;
  paginationOption?: number;
  pageSizeOptions?: number[];
  handleSelectPage?: (clickedPage: number) => void;
  handleNextPage?: (nextPage: number) => void;
  handlePreviousPage?: (previousPage: number) => void;
  handlePageSizeChange?: (newPageSize: number) => void;
}

export default function Pagination({
  isLoading,
  total,
  pageSize = 1,
  totalPage = 1,
  currentPage = 1,
  paginationOption = 5,
  pageSizeOptions = [10, 15, 20, 25, 30, 35, 40, 45, 50],
  handleSelectPage,
  handleNextPage,
  handlePreviousPage,
  handlePageSizeChange,
}: IPaginationProps) {
  const paginationPageNumbers = useMemo(() => {
    const pageNumbers = [];
    if (totalPage <= paginationOption) {
      for (let i = 1; i <= totalPage; i++) {
        pageNumbers.push(i);
      }
    } else {
      const halfOption = Math.floor(paginationOption / 2);
      let start = Math.max(currentPage - halfOption, 1);
      let end = Math.min(currentPage + halfOption, totalPage);

      if (currentPage <= halfOption) {
        end = paginationOption;
      } else if (currentPage >= totalPage - halfOption) {
        start = totalPage - paginationOption + 1;
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  }, [totalPage, currentPage, paginationOption]);

  return (
    <div className="flex justify-center gap-5 md:gap-10 items-center my-5 md:my-10 px-3">
      <span className="text-gray-600 text-sm md:text-lg">
        Showing {pageSize} out of {total}
      </span>
      <div className="flex items-center space-x-2">
        <span className="text-gray-600 text-sm md:text-lg">Show:</span>
        <select
          value={pageSize}
          onChange={(e) => handlePageSizeChange?.(parseInt(e.target.value))}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          {pageSizeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center space-x-4 mx-auto lg:mx-0">
        <button
          disabled={currentPage === 1 || isLoading}
          onClick={() => handlePreviousPage?.(currentPage - 1)}
          className="p-2 rounded-full hover:bg-primary-100 disabled:cursor-not-allowed group"
        >
          <IoIosArrowBack className="lg:text-xl text-[#A7A7A7] group-hover:text-white duration-200" />
        </button>
        {paginationPageNumbers?.map((paginationPageNumber) => (
          <button
            key={paginationPageNumber}
            disabled={paginationPageNumber === currentPage || isLoading}
            onClick={() => handleSelectPage?.(paginationPageNumber)}
            className={`disabled:cursor-not-allowed px-2 ${
              paginationPageNumber === currentPage
                ? "w-7 h-7 rounded-full bg-primary-100 text-white"
                : ""
            }`}
          >
            {paginationPageNumber}
          </button>
        ))}
        <button
          disabled={currentPage === totalPage || isLoading}
          onClick={() => handleNextPage?.(currentPage + 1)}
          className="p-2 rounded-full hover:bg-primary-100 disabled:cursor-not-allowed group"
        >
          <IoIosArrowForward className="lg:text-xl text-[#A7A7A7] group-hover:text-white duration-200" />
        </button>
      </div>
    </div>
  );
}
