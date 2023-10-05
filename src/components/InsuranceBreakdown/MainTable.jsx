import React from "react";
import leaf from "../../assets/leaf.svg";
import "../../styles/MainTable.css";
import Tooltips from "./Tooltips";

const MainTable = ({ data }) => {
  return (
    <div className="mt-main-container">
      <h1 className="mt-coverage-heading">Coverage Details</h1>
      {data.map((item, index) => (
        <div
          className={`mt-card-container ${index % 2 === 0 ? "mt-card-even" : "mt-card-odd"
            }`}
          key={index}
        >
          <h2 className="mt-card-heading">
            <img src={leaf} alt="Icon" className="mt-heading-icon" />
            {item.firstHeading.includes("in network provider") ? (
              <Tooltips
                content="Healthcare providers with agreements 
              with your insurance company,
               often resulting in
               lower out-of-pocket costs."
              >
                {item.firstHeading}
              </Tooltips>
            ) : (
              item.firstHeading
            )}
          </h2>
          <div className="mt-card-paragraph-section">
            {item.paragraphs.slice(0, 3).map((para) =>
              para.includes("Coinsurance") ? (
                <p className="mt-card-paragraph">
                  <Tooltips
                    content="The percentage of medical costs 
you share with your insurance 
after meeting your deductible."
                  >
                    {para}
                  </Tooltips>
                </p>
              ) : (
                <p className="mt-card-paragraph">{para}</p>
              )
            )}
          </div>
          <h2 className="mt-card-heading">
            <img src={leaf} alt="Icon" className="mt-heading-icon" />
            {item.secondHeading.includes("out of network provider") ? (
              <Tooltips
                content="Healthcare providers without agreements
              with your insurance, potentially
              leading to
              higher out-of-pocket costs."
              >
                {item.secondHeading}
              </Tooltips>
            ) : (
              item.secondHeading
            )}
          </h2>
          <div className="mt-card-paragraph-section_1">
            {item.paragraphs.slice(3, 6).map((para) =>
              para.includes("Coinsurance") ? (
                <p className="mt-card-paragraph">
                  <Tooltips
                    content="The percentage of medical costs 
you share with your insurance 
after meeting your deductible."
                  >
                    {para}
                  </Tooltips>
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
