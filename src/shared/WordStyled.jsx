import { useEffect, useState } from "react";
import HeadingLine from "../assets/HeadingLine.png";
import { useMediaQuery } from "@mui/material";
const WordStyled = ({ word, top = -10, id }) => {
  const isSmallScreen = useMediaQuery("(max-width: 750px)");

  const [spanWidth, setSpanWidth] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Function to update window size state
    function updateWindowSize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener for window resize
    window.addEventListener("resize", updateWindowSize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []); // Note: Empty dependency array to run once on mount

  useEffect(() => {
    console.log("spannnnnwidth", spanWidth);
    setSpanWidth(document.querySelector(`#${id}`)?.offsetWidth);
  }, [spanWidth, word, isSmallScreen, windowSize]);

  return (
    <>
      <div className="inline-block">
        <h1
          id={id}
          className="whitespace-nowrap z-20"
          style={{ width: "fit-content" }}
        >
          {word}
        </h1>
        <img
          className="z-10"
          src={HeadingLine}
          width={`${spanWidth}px`}
          style={{ marginTop: `${top}px` }}
        />
      </div>
    </>
  );
};

export default WordStyled;
