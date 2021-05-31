import React, { memo } from "react";
import classNames from "classnames";
import { BaseProps } from "../type";

interface Props extends BaseProps {
  children?: React.ReactNode;
}

function ControlBar({ className, style, children }: Props) {
  return (
    <div className={classNames(className, "hf-player-controls")} style={style}>
      {children}
    </div>
  );
}

export default memo(ControlBar);
