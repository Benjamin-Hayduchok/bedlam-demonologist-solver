import { FC, useState } from "react";
import { PatternPic } from "./patternPic";
import classNames from "classnames";
import { TimeInput } from "./timeInput";

export const PictureList: FC = () => {
  var patternList = ["1-3", "3-5", "5-8", "8-10", "10-12", "12-1"];

  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleHourChange = (newHour: number) => {
    setHour(newHour);
    updatePatternList();
  };

  const handleMinuteChange = (newMinutes: number) => {
    setMinutes(newMinutes);
    updatePatternList();
  };

  const updatePatternList = () => {
    if (hour === 0) return patternList;
    if (hour <= 2) return [patternList[0]];
    if (hour <= 4) return [patternList[1]];
    if (hour <= 7) return [patternList[2]];
    if (hour <= 9) return [patternList[3]];
    if (hour <= 11) return [patternList[4]];
    if (hour === 12) return [patternList[5]];
    return patternList;
  };

  patternList = updatePatternList();
  return (
    <div className={classNames("flex w-full gap-6 flex-wrap justify-center")}>
      <div className={"w-full flex justify-center"}>
        <TimeInput
          setHour={handleHourChange}
          setMinutes={handleMinuteChange}
        ></TimeInput>
      </div>
      {patternList.map((pattern) => (
        <PatternPic patternType={pattern} key={pattern} />
      ))}
    </div>
  );
};
