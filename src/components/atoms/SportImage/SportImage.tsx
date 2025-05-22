import { SPORT_TYPE } from "@/constants/article";
import Image from "next/image";
import React, { useMemo } from "react";

export interface SportImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  type: string;
  alt: string;
}

export const SportImage: React.FC<SportImageProps> = ({ type, alt = "" }) => {
  const imageSrc = useMemo(() => {
    if (type === SPORT_TYPE.PICKLEBALL) {
      return "/images/pickleball.png";
    }

    return "/images/badminton.png";
  }, [type]);

  return (
    <Image
      src={imageSrc}
      width={0}
      height={0}
      sizes="100vh"
      className="w-full h-auto"
      alt={alt}
    />
  );
};
