import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../UI/Table/Table";
import Dropdown from "../UI/Dropdown";

const TableSkeleteon = () => {
  return (
    <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Invoice</TableHead>
        <TableHead>Date</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {Array.from({ length: 5 }).map((_, index) => (
        <TableRow key={index}>
          <TableCell className="font-medium">
            <div className="w-16 h-4 bg-gray-200 animate-pulse rounded"></div>
          </TableCell>
          <TableCell>
            <div className="w-32 h-4 bg-gray-200 animate-pulse rounded"></div>
          </TableCell>
          <TableCell>
            <div className="w-20 h-6 bg-gray-200 animate-pulse rounded-full"></div>
          </TableCell>
          <TableCell>
            <div className="w-24 h-4 bg-gray-200 animate-pulse rounded"></div>
          </TableCell>
          <TableCell className="text-right">
            <div className="w-12 h-4 bg-gray-200 animate-pulse rounded"></div>
          </TableCell>
          <Dropdown>
            <p className="cursor-pointer py-1.5 font-semibold font-secondary">
              <div className="w-24 h-4 bg-gray-200 animate-pulse rounded"></div>
            </p>
            <p className="cursor-pointer py-1.5 font-semibold font-secondary">
              <div className="w-24 h-4 bg-gray-200 animate-pulse rounded"></div>
            </p>
          </Dropdown>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  
  );
};

export default TableSkeleteon;
