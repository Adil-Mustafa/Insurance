import { useEffect, useState } from "react";
import HeadingLine from "../assets/HeadingLine.png";
import { useMediaQuery } from "@mui/material";
const WordStyled = ({ word, top = -10, id }) => {
  const isSmallScreen = useMediaQuery("(max-width: 750px)");

  const [spanWidth, setSpanWidth] = useState(0);
  // const simplifyWord = (word) => word.replace(/[^a-zA-Z0-9]/g, "");
  useEffect(() => {
    setSpanWidth(document.querySelector(`#${id}`)?.offsetWidth);
  }, [spanWidth, word, isSmallScreen]);

  return (
    <>
      <div className="inline-block ">
        <h1 id={id} className="whitespace-nowrap "  >
          {word}
        </h1>
        <img
          src={HeadingLine}
          width={`${spanWidth}px`}
          style={{ marginTop: `${top}px` }}
        />
      </div>
    </>
  );
};

export default WordStyled;
