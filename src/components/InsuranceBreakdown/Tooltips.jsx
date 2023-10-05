import React, { useState } from "react";
import "../../styles/Tooltip.css";
const Tooltips = ({ children, content }) => {
  const [show, setShow] = useState(false);

  return (
    <span
      className="tooltip-container"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && <div className="tooltip-content">{content}</div>}
    </span>
  );
};
export default Tooltips;
