import React, { memo, useContext } from "react";
import { PlayerContext } from "./player";
import Slider from "./common/slider";
import { BaseProps } from "../type";

function Progress({ className, style }: BaseProps) {
  const { player } = useContext(PlayerContext);
  const { currentTime, duration, onChangeCurrentTime } = player;

  return (
    <Slider
      className={className}
      style={style}
      value={Math.round(currentTime)}
      max={Math.round(duration)}
      step={1}
      onChange={onChangeCurrentTime}
    />
  );
}

export default memo(Progress);
