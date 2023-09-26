import classNames from "classnames";
import { FC, useState } from "react";

export type timeInputProps = {
    setHour: (hour: number) => void;
    setMinutes: (minute: number) => void;
}

export const TimeInput: FC<timeInputProps> = (props) => {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHour = parseInt(e.target.value);
    if (!isNaN(newHour)) {
      setHour(newHour);
      props.setHour(newHour);
    }
  };
 
  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minutes = parseInt(e.target.value);
    if (!isNaN(minutes)) {
      setMinutes(minutes);
    }
  };

  return (
    <div className={classNames("flex")}>
    <p>{"Enter Current Clock Time --->  "}</p>
      <label>
        Hour:
        <input
          className={classNames("text-black")}
          type="number"
          value={hour}
          onChange={handleHourChange}
          min={1}
          max={12}
        />
      </label>
      <label>
        Minutes:
        <input
          className={classNames("text-black")}
          type="number"
          value={minutes}
          onChange={handleMinuteChange}
          min={0}
          max={59}
        />
      </label>
    </div>
  );
};
