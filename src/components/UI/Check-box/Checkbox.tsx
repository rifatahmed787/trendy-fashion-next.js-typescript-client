"use client";
import React from "react";
import { FiCheck } from "react-icons/fi";
import classes from "./Checkbox.module.css";

interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

export default function CheckBox({
  checked,
  onChange,
  id = "checkbox",
  ...rest
}: ICheckbox) {
  return (
    <label
      className={`h-4 w-4 lg:h-5 lg:w-5 inline-block items-center justify-center rounded-md 
            border-2 border-primary-100 cursor-pointer
            overflow-hidden ${classes?.label}
            `}
      htmlFor={id}
    >
      <input
        className={`hidden h-0 w-0 opacity-0 ${classes?.checkbox}`}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        id={id}
        {...rest}
      />
      <div
        className={`h-full w-full flex items-center justify-center  ${classes?.checkmark}`}
      >
        <FiCheck
          className={`text-white h-3 w-3 lg:h-4 lg:w-4 
                    transition-all duration-300 ease-in-out
                    top-0 left-0 right-0 bottom-0`}
        />
      </div>
    </label>
  );
}
