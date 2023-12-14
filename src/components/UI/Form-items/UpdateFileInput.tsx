import React, { ChangeEventHandler } from "react";

type FileInputProps = {
  label?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  currentFile?: File | undefined;
  placeholder: string;
  className?: string;
  required?: boolean;
  id?: string;
  htmlFor?: string;
};

const FileInput = ({
  label,
  onChange,
  placeholder,
  className,
  required,
  id,
}: FileInputProps) => {
  return (
    <div className="flex items-center justify-center ">
      <label htmlFor={id || "dropzone-file"}>
        {/* Hidden Input Field */}
        <input
          id="dropzone-file"
          type="file"
          className={className}
          required={required ?? false}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default FileInput;
