import React from "react";
import { ResponsiveLine } from "@nivo/line";

const MonthlyData = ({ data }) => {
  const mData = [
    {
      id: "Users",
      color: "#1DD75B",
      data: [
        {
          x: "January",
          y: 0,
        },
        {
          x: "February",
          y: 0,
        },
        {
          x: "March",
          y: 0,
        },
        {
          x: "April",
          y: 0,
        },
        {
          x: "May",
          y: 0,
        },
        {
          x: "June",
          y: 0,
        },
        {
          x: "July",
          y: 0,
        },
        {
          x: "August",
          y: 0,
        },
        {
          x: "September",
          y: 0,
        },
        {
          x: "October",
          y: 0,
        },
        {
          x: "November",
          y: 0,
        },
        {
          x: "December",
          y: data,
        },
      ],
    },
  ];

  return (
    <ResponsiveLine
      data={mData}
      margin={{ top: 30, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 8,
        tickPadding: 5,
        tickRotation: -40,
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Total Users",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      pointSize={4}
      colors="green"
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableArea={true}
      areaOpacity={0.25}
      useMesh={true}
      legends={[
        {
          anchor: "top-right",
          direction: "column",
          justify: false,
          translateX: 80,
          translateY: -30,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 1,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default MonthlyData;
