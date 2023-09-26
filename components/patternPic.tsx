import { FC, useState } from "react";
import { PictureHeader } from "./pictureHeader";
import { RotationButton } from "./rotationButton";

export type PatternPicType = {
  patternType: string;
  count: number;
};

export const PatternPic: FC<PatternPicType> = (patternTypeProps) => {
  const { patternType, count } = patternTypeProps;
  const [isRotated, setIsRotated] = useState(false);
  const handleRotate = () => {
    setIsRotated(!isRotated);
  };

  const rotatedString = isRotated ? "-rotated" : "";
  const picSize = count === 1 ? "750" : "500";

  return (
    <div
      className={
        `w-[600px] border-red-50 h-[600px] drop-shadow-md`
      }
      style={{
        backgroundImage: `url(${patternType + rotatedString + ".png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <PictureHeader
        patternText={patternType}
        rotationText={
          isRotated ? "LEAVING PUZZLE ROOM" : "ENTERING PUZZLE ROOM"
        }
      />
      <RotationButton
        handleRotate={handleRotate}
      />
    </div>
  );
};
