import { IStarProps } from "@/Types/Interface/Interface";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";

const stars = {
  full: (props: IStarProps) => <TiStarFullOutline {...props} />,
  half: (props: IStarProps) => <TiStarHalfOutline {...props} />,
  empty: (props: IStarProps) => <TiStarOutline {...props} />,
};

export default function Star({
  state = "empty",
  size,
  color = "#FFC522",
  className = "",
  style = {},
  ...rest
}: IStarProps) {
  const RatingsStar = stars[state];

  return (
    <RatingsStar
      size={size}
      color={color}
      className={className}
      style={style}
      {...rest}
    />
  );
}
