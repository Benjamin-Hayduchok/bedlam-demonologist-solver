import { FC, useState } from "react";
import classNames from "classnames";

export type PatternPicType = {
    patternType : string;
}

export const PatternPic: FC<PatternPicType> = (patternTypeProps) => {
    const {patternType} = patternTypeProps;
    const [isRotated, setIsRotated] = useState(false);
    const handleRotate = () => {
        setIsRotated(!isRotated);
        console.log(isRotated)
    }

    const rotatedString = isRotated ? "-rotated" : "";
    const imageHeader = patternType + (isRotated ? "LEAVING PUZZLE ROOM" : "");

    return (
        <div
            className={"w-[500px] border-red-50 h-[500px] text-red-900 text-6xl font-serif drop-shadow-md"}
            style={{
                backgroundImage: `url(${patternType + rotatedString+ ".png"})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
            }}
        >   
        <div
            className={"backdrop-blur-sm inline-block"}
        >
            {
               patternType
            }
        </div>

        <div
            className={"backdrop-blur-sm inline-block text-red-900 text-2xl ml-8 underline"}
        >
            {
               isRotated ? "LEAVING PUZZLE ROOM" : "ENTERING PUZZLE ROOM"
            }
        </div>

            <div
                className={"w-16 h-16 backdrop-blur-[2px] fixed bottom-6 right-6"}
                style={{
                    backgroundImage: `url(refresh-reverse.svg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain"
                }}
                onClick={handleRotate}
            >
            </div>
        </div>
    )
}