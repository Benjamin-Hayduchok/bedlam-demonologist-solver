import classNames from "classnames";
import { FC, useState } from "react";

export type timeInputProps = {
  setHour: (hour: number) => void;
  setMinutes: (minute: number) => void;
};

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
      props.setMinutes(minutes);
    }
  };

  const clearTime = () => {
    setMinutes(0);
    setHour(0);
    props.setHour(0);
    props.setMinutes(0);
  }

  return (
    <div
      className={classNames("flex text-center font-bold font-mono text-4xl")}
    >
      <p>{"Enter Current Clock Time →"}</p>
      <label className={classNames("pl-5 pr-5 inline-flex")}>
        Hour:
        <div className={classNames("pl-1")}>
          <input
            className={"number-input"}
            type="number"
            value={hour}
            onChange={handleHourChange}
            min={1}
            max={12}
          />
        </div>
      </label>
      <label className={classNames("inline-flex")}>
        Minutes:
        <div className={classNames("pl-1")}>
          <input
            className={"number-input"}
            type="number"
            value={minutes}
            onChange={handleMinuteChange}
            min={0}
            max={59}
          />
        </div>
      </label>
      <button
        type="button"
        className={classNames(
          "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600",
          "hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800",
          "font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",
          "ml-5 max-h-10"
        )}
        onClick={clearTime}
      >
        CLEAR
      </button>
    </div>
  );
};
