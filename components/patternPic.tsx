import { FC, useState } from "react";
import { PictureHeader } from "./pictureHeader";
import { RotationButton } from "./rotationButton";

export type PatternPicType = {
  patternType: string;
};

export const PatternPic: FC<PatternPicType> = (patternTypeProps) => {
  const { patternType } = patternTypeProps;
  const [isRotated, setIsRotated] = useState(false);
  const handleRotate = () => {
    setIsRotated(!isRotated);
  };

  const rotatedString = isRotated ? "-rotated" : "";

  return (
    <div
      className={
        "w-[500px] border-red-50 h-[500px] drop-shadow-md"
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
      {/* <div
        className={"w-16 h-16 backdrop-blur-[2px] fixed bottom-6 right-6"}
        style={{
          backgroundImage: `url(refresh-reverse.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        onClick={handleRotate}
      ></div> */}
    </div>
  );
};
