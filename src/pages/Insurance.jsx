import React from "react";
import Header from "../shared/Header";
import MainHead from "../components/InsuranceBreakdown/MainHead";
import MainTable from "../components/InsuranceBreakdown/MainTable";
import sampleData from "../data/data";

const Insurance = () => {
  return (
    <div>
      <Header />
      <MainHead />
      <MainTable data={sampleData} />
    </div>
  );
};

export default Insurance;
