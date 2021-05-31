import React, { memo, useContext } from "react";
import { PlayerContext } from "./player";
import { formatTime } from "../utils";
import { BaseProps } from "../type";

function Time({ className, style }: BaseProps) {
  const { player } = useContext(PlayerContext);
  const { currentTime, duration } = player;
  return (
    <span className={className} style={style}>
      {`${formatTime(currentTime)}/${formatTime(duration)}`}
    </span>
  );
}

export default memo(Time);
