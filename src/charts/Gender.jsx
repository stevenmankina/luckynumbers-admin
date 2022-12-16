import React from "react";

import { ResponsivePie } from "@nivo/pie";

const Gender = ({ gData }) => {
  const data = [
    {
      id: "male",
      label: "Male",
      value: gData?.male,
      color: "#7D76CF",
    },
    {
      id: "female",
      label: "Female",
      value: gData?.female,
      color: "#26A7E9",
    },
    {
      id: "other",
      label: "Not Specified",
      value: 0,
      color: "#24C1D3",
    },
  ];

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 10, right: 100, bottom: 0, left: 0 }}
      innerRadius={0.5}
      padAngle={0}
      cornerRadius={0}
      width={200}
      height={100}
      colors={{ datum: "data.color" }}
      enableArcLabels={false}
      enableArcLinkLabels={false}
      legends={[
        {
          anchor: "right",
          direction: "column",
          justify: false,
          itemsSpacing: 0,
          itemWidth: 1,
          itemHeight: 25,
          itemTextColor: "#000000",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 10,
          symbolShape: "circle",
        },
      ]}
    />
  );
};

export default Gender;
