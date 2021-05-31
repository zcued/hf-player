import React, { useState, memo } from "react";

interface Props {
  children: React.ReactNode;
  title: React.ReactNode;
}

function Tooltip({ children, title }: Props) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      className="hf-player-tooltip-container"
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      <div
        className="tooltip"
        style={{ display: showContent ? "block" : "none" }}
      >
        <div className="tooltip-content">{title}</div>
        <div className="tooltip-straw" />
      </div>
      {children}
    </div>
  );
}

export default memo(Tooltip);
