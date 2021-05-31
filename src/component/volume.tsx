import React, { memo, useContext } from "react";
import classNames from "classnames";
import Slider from "./common/slider";
import Tooltip from "./common/tooltip";
import { PlayerContext } from "./player";
import { BaseProps } from "../type";

interface Props extends BaseProps {
  icon?: React.ReactNode;
}
function Volume({ className, style, icon }: Props) {
  const { player } = useContext(PlayerContext);
  const { isMuted, currentVolume, onChangeVolume, onChangeMuted } = player;

  return (
    <Tooltip
      title={
        <Slider
          value={isMuted ? 0 : currentVolume}
          step={0.01}
          max={1}
          direction="vertical"
          onChange={onChangeVolume}
        />
      }
    >
      {icon ? (
        <span className={className} style={style} onClick={onChangeMuted}>
          {icon}
        </span>
      ) : (
        <button
          type="button"
          style={style}
          className={classNames(className, "volume")}
          onClick={onChangeMuted}
        >
          {isMuted ? "音量" : "静音"}
        </button>
      )}
    </Tooltip>
  );
}

export default memo(Volume);
