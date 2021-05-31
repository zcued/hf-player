import React, { memo } from "react";
import classNames from "classnames";
import { BaseProps } from "../../type";

export interface Props extends BaseProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  direction?: "horizontal" | "vertical";
  onChange?: (value: number) => void;
}

function Slider({
  min = 0,
  max = 100,
  step = 1,
  defaultValue,
  className,
  style,
  direction = "horizontal",
  value,
  onChange,
}: Props) {
  const handleChange = (v: number) => {
    onChange(v);
  };

  const percentage = (value / max) * 100;
  const horizontalStyle = { width: `${percentage}%`, height: "4px" };
  const verticalStyle = { height: `${percentage}%`, width: "4px" };

  return (
    <div
      className={classNames(
        className,
        {
          [`slider-${direction}`]: true,
        },
        "hf-player-slider-container"
      )}
      style={style}
    >
      {percentage ? (
        <div
          className="slider-default"
          style={direction === "vertical" ? verticalStyle : horizontalStyle}
        />
      ) : null}
      <div
        className="slider-thumb"
        style={
          direction === "vertical"
            ? { bottom: `${percentage}%` }
            : { left: `${percentage}%` }
        }
      />
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        defaultValue={defaultValue}
        onChange={(e) => handleChange(Number(e.target.value))}
      />
    </div>
  );
}

export default memo(Slider);
