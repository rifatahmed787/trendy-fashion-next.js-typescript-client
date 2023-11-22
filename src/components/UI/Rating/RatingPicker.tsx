import ICONS from "@/components/shared/Icons/AllIcons";
import React from "react";

const RatingPicker = ({
  current_value,
  clickHandler,
}: {
  current_value: number;
  clickHandler?: (value: number) => void;
}) => {
  const handleStarClick = (value: number) => {
    if (clickHandler) {
      clickHandler(value);
    }
  };

  return (
    <div className="flex items-center justify-center gap-1">
      {[1, 2, 3, 4, 5].map((starValue) => (
        <button
          key={starValue}
          type="button"
          className={[
            current_value >= starValue ? "text-primary-100" : "text-white",
            !clickHandler && "cursor-text",
          ].join(" ")}
          onClick={() => handleStarClick(starValue)}
        >
          {ICONS.star_icon}
        </button>
      ))}
    </div>
  );
};

export default RatingPicker;
