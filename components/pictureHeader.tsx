import { FC } from "react";

export type pictureHeader = {
  patternText: string;
  rotationText: string;
};

export const PictureHeader: FC<pictureHeader> = (pictureHeaderProps) => {
  return (
    <div className={"flex backdrop-blur-md"}>
      <div className={"w-1/4 text-red-900 text-5xl font-serif drop-shadow-md"}>{pictureHeaderProps.patternText}</div>
      <div className={" text-red-900 text-[20px] underline pt-4"}>
        <b>{pictureHeaderProps.rotationText}</b>
      </div>
    </div>
  );
};
