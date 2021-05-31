import React, { memo, useContext } from "react";
import { PlayerContext } from "./player";
import { BaseProps } from "../type";

interface Props extends BaseProps {
  icon?: React.ReactNode;
}

function PlayToggle({ className, style, icon }: Props) {
  const { player } = useContext(PlayerContext);
  const { isPlaying, onTogglePlay } = player;

  if (icon) {
    return (
      <span className={className} style={style} onClick={onTogglePlay}>
        {icon}
      </span>
    );
  }

  return (
    <button type="button" onClick={onTogglePlay}>
      {isPlaying ? "暂停" : "播放"}
    </button>
  );
}

export default memo(PlayToggle);
