/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import leaf from "../../assets/leaf.svg";
import "../../styles/MainTable.css";
import Tooltip from "@mui/material/Tooltip";

const MainTable = ({ data }) => {
  return (
    <div className="mt-main-container">
      <h1 className="mt-coverage-heading">Coverage Details</h1>
      {data.map((item, index) => (
        <div
          className={`mt-card-container ${
            index % 2 === 0 ? "mt-card-even" : "mt-card-odd"
          }`}
          key={index}
        >
          <h2 className="mt-card-heading">
            <img src={leaf} alt="Icon" className="mt-heading-icon" />
            {item.firstHeading.includes("in network provider") ? (
              <>
                {item.firstHeading
                  .split("in network provider")
                  .map((part, index) => (
                    <React.Fragment key={index}>
                      {index > 0 ? (
                        <Tooltip
                          title="Healthcare providers with agreements 
                                 with your insurance company,
                                 often resulting in
                                 lower out-of-pocket costs."
                          classes={{ tooltip: "white-tooltip" }}
                          arrow
                          interactive
                          placement="top"
                          enterTouchDelay={0}
                        >
                          <span className="tooltip-target">
                            in network provider
                          </span>
                        </Tooltip>
                      ) : null}
                      {part}
                    </React.Fragment>
                  ))}
              </>
            ) : (
              item.firstHeading
            )}
          </h2>
          <div className="mt-card-paragraph-section">
            {item.paragraphs.slice(0, 3).map((para,i) =>
              para.includes("Coinsurance") ? (
                <p key={i} className="mt-card-paragraph">
                  <Tooltip
                    title="The percentage of medical costs 
                               you share with your insurance 
                               after meeting your deductible."
                    classes={{ tooltip: "white-tooltip" }}
                    arrow
                    interactive
                    placement="top"
                    enterTouchDelay={0}
                  >
                    <span className="tooltip-target">{para}</span>
                  </Tooltip>
                </p>
              ) : (
                <p className="mt-card-paragraph">{para}</p>
              )
            )}
          </div>
          <h2 className="mt-card-heading">
            <img src={leaf} alt="Icon" className="mt-heading-icon" />
            {item.secondHeading.includes("out of network provider") ? (
              <>
                {item.secondHeading
                  .split("out of network provider")
                  .map((part, index) => (
                    <React.Fragment key={index}>
                      {index > 0 ? (
                        <Tooltip
                          title="Healthcare providers without agreements
                       with your insurance, potentially
                       leading to
                       higher out-of-pocket costs."
                          classes={{ tooltip: "white-tooltip" }}
                          arrow
                          interactive
                          placement="bottom"
                          enterTouchDelay={0}
                        >
                          <span className="tooltip-target">
                            out of network provider
                          </span>
                        </Tooltip>
                      ) : null}
                      {part}
                    </React.Fragment>
                  ))}
              </>
            ) : (
              item.secondHeading
            )}
          </h2>
          <div className="mt-card-paragraph-section_1">
            {item.paragraphs.slice(3, 6).map((para,i) =>
              para.includes("Coinsurance") ? (
                <p key={i} className="mt-card-paragraph">
                  <Tooltip
                    title="The percentage of medical costs 
                               you share with your insurance 
                               after meeting your deductible."
                    classes={{ tooltip: "white-tooltip" }}
                    arrow
                    interactive
                    placement="top"
                    enterTouchDelay={0}
                  >
                    <span className="no-outline">{para}</span>
                  </Tooltip>
                </p>
              ) : (
                <p className="mt-card-paragraph">{para}</p>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainTable;
