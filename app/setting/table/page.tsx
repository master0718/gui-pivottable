"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import PivotTableUI, { PivotTableUIProps } from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";
import TableRenderers from "react-pivottable/TableRenderers";
// import Plot from "react-plotly.js";
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });
import createPlotlyRenderers from "react-pivottable/PlotlyRenderers";

const PlotlyRenderers = createPlotlyRenderers(Plot);

const isBrowser = typeof window !== undefined;

const data = [
  [
    "Total Bill",
    "Tip",
    "Payer Gender",
    "Payer Smoker",
    "Day of Week",
    "Meal",
    "Party Size",
  ],
  [16.99, 1.01, "Female", "Non-Smoker", "Sunday", "Dinner", 2],
  [10.34, 1.66, "Male", "Non-Smoker", "Sunday", "Dinner", 3],
  [21.01, 3.5, "Male", "Non-Smoker", "Sunday", "Dinner", 3],
  [23.68, 3.31, "Male", "Non-Smoker", "Sunday", "Dinner", 2],
];

const TableSample: React.FC = () => {
  const [state, setState] = useState<PivotTableUIProps>(
    {} as PivotTableUIProps
  );

  return (
    <div className="container mx-auto px-4 h-hull">
      Here goes react pivot table body.
      {isBrowser && data ? (
        <PivotTableUI
          data={data}
          onChange={(s: PivotTableUIProps) => setState(s)}
          {...state}
          renderers={{ ...TableRenderers, ...PlotlyRenderers }}
        />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default TableSample;
