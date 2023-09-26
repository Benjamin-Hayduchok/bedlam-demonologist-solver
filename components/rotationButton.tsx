import { FC } from "react";

interface rotationButtonProps  {
  handleRotate: () => void;
};

export const RotationButton: FC<rotationButtonProps> = (props) => {
    const { handleRotate } = props;
  return (
    <div
    className={"w-16 h-16 backdrop-blur-[2px] fixed bottom-6 right-6"}
    style={{
      backgroundImage: `url(refresh-reverse.svg)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    }}
    onClick={handleRotate}
  ></div>
  );
};
