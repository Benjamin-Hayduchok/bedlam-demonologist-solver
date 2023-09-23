import { FC } from "react";
import { PatternPic } from "./patternPic";
import classNames from "classnames";

export const PictureList: FC = () => {
    const patternList = ['1-3', '3-5', '5-8', '8-10', '10-12', '12-1']
    return (
        <div
            className={classNames(
                "flex w-full gap-6 flex-wrap justify-center"
            )}
        >
            {
                patternList.map((pattern) => (
                    <PatternPic
                        patternType={pattern}
                    />
                ))
            }
        </div>
    )
}