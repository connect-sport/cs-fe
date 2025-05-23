import { SPORT_TYPE } from "@/constants/article";
import React from "react";
import { BadmintonIcon } from "../Icons/BadmintonIcon";
import { PickleBallIcon } from "../Icons/PickleballIcon";

export interface CategoryIconProps extends React.SVGProps<SVGSVGElement> {
  type:
    | typeof SPORT_TYPE.BADMINTON
    | typeof SPORT_TYPE.PICKLEBALL
    | typeof SPORT_TYPE.TENNIS
    | typeof SPORT_TYPE.TABLE_TENNIS
    | typeof SPORT_TYPE.FOOTBALL;
  size?: number;
  color?: string;
}

const icons: Record<string, React.FC<{ size?: number; color?: string }>> = {
  [SPORT_TYPE.BADMINTON]: BadmintonIcon,
  [SPORT_TYPE.PICKLEBALL]: PickleBallIcon,
};

const CategoryIcon: React.FC<CategoryIconProps> = ({
  type,
  size = 24,
  color = "currentColor",
  ...props
}) => {
  const IconComponent = icons[type];

  return IconComponent ? (
    <IconComponent size={size} color={color} {...props} />
  ) : (
    <BadmintonIcon />
  );
};

export { CategoryIcon };
