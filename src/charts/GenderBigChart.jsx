import React from 'react'

import { ResponsivePie } from '@nivo/pie'

const GenderBigChart = ({gData}) => {

    const data = [
        {
          "id": "male",
          "label": "Male",
          "value": gData?.male,
          "color": "#7D76CF"
        },
        {
          "id": "female",
          "label": "Female",
          "value": gData?.female,
          "color": "#26A7E9"
        },
        {
          "id": "other",
          "label": "Not Specified",
          "value": 0,
          "color": "#24C1D3"
        },
        
      ]

  return (
   
    <ResponsivePie
        data={data}
        margin={{ top: 10, right: 100, bottom: 0, left: 0 }}
        innerRadius={0.5}
        padAngle={0}
        cornerRadius={0}
        // activeOuterRadiusOffset={8}
        // borderWidth={1}
        width={500}
        height={300}
        colors={{ datum: 'data.color' }}
        // borderColor={{
        //     from: 'color',
        //     modifiers: [
        //         [
        //             'darker',
        //             0.2
        //         ]
        //     ]
        // }}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        // arcLinkLabelsSkipAngle={10}
        // arcLinkLabelsTextColor="#333333"
        // arcLinkLabelsThickness={2}
        // arcLinkLabelsColor={{ from: 'color' }}
        // arcLabelsSkipAngle={10}
        // arcLabelsTextColor={{
        //     from: 'color',
        //     modifiers: [
        //         [
        //             'darker',
        //             2
        //         ]
        //     ]
        // }}
        
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                itemsSpacing: 0,
                itemWidth: 1,
                itemHeight: 25,
                itemTextColor: '#000000',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 10,
                symbolShape: 'circle',
            }
        ]}
    />
    
  )
}

export default GenderBigChart