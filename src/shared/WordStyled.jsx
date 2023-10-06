import { useEffect, useState } from "react";
import HeadingLine from "../assets/HeadingLine.png";
import { useMediaQuery } from "@mui/material";
const WordStyled = ({ word, top = -10 }) => {
  const isSmallScreen = useMediaQuery("(max-width: 750px)");
    
  const [spanWidth, setSpanWidth] = useState(0);
  const simplifyWord = (word) => word.replace(/[^a-zA-Z0-9]/g, "");
  useEffect(() => {
    setSpanWidth(
      document.querySelector(`#wspan${simplifyWord(word)}`)?.offsetWidth
    );
  }, [spanWidth, word, isSmallScreen]);

  return (
    <>
      <div className="inline-block ">
        <span id={`wspan${simplifyWord(word)}`} className="whitespace-nowrap">
          {word}
        </span>
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
