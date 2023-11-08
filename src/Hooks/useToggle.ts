import { TToggler } from "@/Types/Interface/Interface";
import React from "react";

export default function useToggle(): TToggler {
  const [value, setValue] = React.useState(false);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  const customToggle = (value: boolean) => {
    setValue(value);
  };

  return [value, toggle, customToggle];
}
