import { IStar } from "@/Types/Interface/Interface";
import Star from "./Star/Star";
import useRatings from "@/Hooks/useRating";

export default function Ratings({
  ratings = 0,
  className = "",
  starClassName = "",
  starProps = {},
  style = {},
}: IStar) {
  const ratingsValues = useRatings({
    currentRatings: ratings,
    maximumRatings: 5,
  });

  return (
    <div className={`flex space-x-[5px] ${className}`} style={style}>
      {ratingsValues.map((rat) => {
        const isHalfStar = rat.value === 0.5;

        const state = isHalfStar ? "half" : "full";

        return (
          <Star
            key={rat.key}
            state={rat.value === 0 ? "empty" : state}
            className={`star ${starClassName}`}
            {...starProps}
          />
        );
      })}
    </div>
  );
}
