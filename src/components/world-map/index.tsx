"use client";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Brazil", 800],
];

const options = {
  backgroundColor: "#11262F",
  colorAxis: { colors: ["#183F51", "#346B77"] }, // Gradient for countries
  datalessRegionColor: "#193D4E", // Color for regions with no data
  defaultColor: "#346B77", // Default country color
};

export default function WorldMap() {
  return (
    <div className="h-screen animate-zoomOut absolute w-screen">
      <Chart
        options={options}
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper?.getChart();
              const selection = chart?.getSelection();
              if (selection && selection.length === 0) return;
              const region = data[selection && selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        height="100%"
        data={data}
      />
    </div>
  );
}
