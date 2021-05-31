import React, { memo, useContext } from "react";
import { PlayerContext } from "./player";
import { BaseProps } from "../type";

interface Props extends BaseProps {
  icon?: React.ReactNode;
}

function FullscreenToggle({ className, style, icon }: Props) {
  const { player } = useContext(PlayerContext);
  const { isFullScreen, onToggleFullScreen } = player;

  if (icon) {
    return (
      <span className={className} style={style} onClick={onToggleFullScreen}>
        {icon}
      </span>
    );
  }

  return (
    <button type="button" onClick={onToggleFullScreen}>
      {isFullScreen ? "还原" : "全屏"}
    </button>
  );
}

export default memo(FullscreenToggle);
