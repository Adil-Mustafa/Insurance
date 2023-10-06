import React from "react";
import Header from "../shared/Header";
import MainHead from "../components/InsuranceBreakdown/MainHead";
import MainTable from "../components/InsuranceBreakdown/MainTable";
import data from "../data/data";

const Insurance = () => {
  return (
    <div>
      <Header />
      <MainHead />
      <MainTable data={data.InsuranceData} />
    </div>
  );
};

export default Insurance;
