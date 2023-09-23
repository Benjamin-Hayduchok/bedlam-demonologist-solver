import { FC } from "react";
import classNames from "classnames";

export type PatternPicType = {
    patternType : string;
}

export const PatternPic: FC<PatternPicType> = (patternTypeProps) => {
    const {patternType} = patternTypeProps;
    return (
        <div
            className={classNames(
                "w-[500px]",
                "border-red-50",
                "h-[500px]",
                "text-red-900 text-6xl font-serif drop-shadow-md"
            )}
            style={{
                backgroundImage: `url(${patternType + ".png"})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
            }}
        >
            {
                patternType
            }
        </div>
    )
}