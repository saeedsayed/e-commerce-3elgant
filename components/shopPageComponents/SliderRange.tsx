"use client";
import React, { Dispatch, MutableRefObject, useEffect, useRef } from "react";
import styles from "./sliderRange.module.css";

type Props = {
  rangeTo: number;
  handleRangePrice: Dispatch<React.SetStateAction<number[]>>;
};

const SliderRange = ({ rangeTo, handleRangePrice }: Props) => {
  const range: number[] = [0, rangeTo];
  const [currentMinVal, setCurrentMinVal] = React.useState<number>(range[0]);
  const [currentMaxVal, setCurrentMaxVal] = React.useState<number>(range[1]);
  const progressBar = useRef() as MutableRefObject<HTMLDivElement>;
  const steps = range[1] / 20;

  const handleChangeMaxVal = (v: number) => {
    if (v <= currentMinVal + steps) {
      setCurrentMaxVal(currentMinVal + steps);
      handleRangePrice([currentMinVal, currentMinVal + steps]);
    } else if (v > range[1]) {
      setCurrentMaxVal(range[1]);
    } else {
      setCurrentMaxVal(v);
      handleRangePrice([currentMinVal, v]);
    }
  };
  const handleChangeMinVal = (v: number) => {
    if (v >= currentMaxVal - steps) {
      setCurrentMinVal(currentMaxVal - steps);
      handleRangePrice([currentMaxVal - steps, currentMaxVal]);
    } else if (v < range[0]) {
      setCurrentMinVal(range[0]);
    } else {
      setCurrentMinVal(v);
      handleRangePrice([v, currentMaxVal]);
    }
  };

  const handleReset = () => {
    setCurrentMinVal(range[0]);
    setCurrentMaxVal(range[1]);
    handleRangePrice([range[0], range[1]]);
  };

  useEffect(() => {
    progressBar.current.style.right = `${
      100 - ((currentMaxVal + range[0]) / range[1]) * 100
    }%`;
    progressBar.current.style.left = `${
      ((currentMinVal - range[0]) / range[1]) * 100
    }%`;
  }, [currentMinVal, currentMaxVal]);

  return (
    <div className=" flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p>The highest price is: ${rangeTo}</p>
        <button
          className="text-red-600 border-b border-red-600"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="flex items-center gap-5 justify-between">
        <label htmlFor="" className="border py-2 ps-1">
          From: $
          <input
            type="number"
            min={range[0]}
            max={range[1]}
            step={steps}
            className="w-16 focus:outline-none"
            value={currentMinVal}
            onChange={(e) => handleChangeMinVal(+e.target.value)}
          />
        </label>
        <label htmlFor="to" className="border py-2 ps-1">
          To: $
          <input
            type="number"
            min={range[0]}
            max={range[1]}
            className="w-16 focus:outline-none"
            value={currentMaxVal}
            onChange={(e) => handleChangeMaxVal(+e.target.value)}
          />
        </label>
      </div>

      <div className="relative h-2 select-none">
        <div
          ref={progressBar}
          className={`absolute z-10 h-full bg-badge left-0 right-full`}
        />
        <input
          type="range"
          min={range[0]}
          max={range[1]}
          step={steps}
          className={styles.minRangeInput}
          value={currentMinVal}
          onChange={(e) => handleChangeMinVal(+e.target.value)}
        />
        <input
          type="range"
          min={range[0]}
          max={range[1]}
          step={steps}
          className={styles.maxRangeInput}
          value={currentMaxVal}
          onChange={(e) => handleChangeMaxVal(+e.target.value)}
        />
      </div>
    </div>
  );
};

export default SliderRange;
