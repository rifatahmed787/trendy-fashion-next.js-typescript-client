import { cn } from "@/lib/Utils";
import { useContext, useState } from "react";

type ITextInput = {
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  currentValue: string;
  placeHolder: string;
  className?: string;
  required?: boolean;
  row?: number;
  htmlFor?: string;
  id?: string;
};

const TextArea = ({
  label,
  onChange,
  currentValue,
  placeHolder,
  className,
  required,
  row,
  id,
}: ITextInput) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const defaultClassValue = `block py-3 px-0 w-full text-sm bg-transparent border-2 border-primary-100 appearance-none rounded-md focus:outline-none focus:ring-0 focus:border-primary-100 peer focus:border-t-1 pl-2 `;
  return (
    <div className="flex flex-col gap-2 relative">
      <label
        htmlFor={id || "input-box"}
        className={`absolute text-sm text-bold text-gray-500 transform transition-all ${
          isFocused || currentValue
            ? "top-0 scale-75 -translate-y-2.5 bg-white"
            : "top-3 scale-100 translate-y-0"
        } peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0   peer-focus:absolute peer-focus:z-10 pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate px-3 peer-focus:pt-0 leading-[1.6] text-gray-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-gray-700 peer-focus:bg-white`}
      >
        {label}
      </label>
      <textarea
        id="text-box"
        className={cn(className, defaultClassValue)}
        value={currentValue}
        onChange={onChange}
        placeholder={placeHolder}
        required={required ?? false}
        rows={row ?? 3}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default TextArea;
