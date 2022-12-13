import React from 'react'

import { ResponsivePie } from '@nivo/pie'

const Gender = ({gData}) => {

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
        width={200}
        height={100}
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
        // defs={[
        //     {
        //         id: 'dots',
        //         type: 'patternDots',
        //         background: 'inherit',
        //         color: 'rgba(255, 255, 255, 0.3)',
        //         size: 4,
        //         padding: 1,
        //         stagger: true
        //     },
        //     {
        //         id: 'lines',
        //         type: 'patternLines',
        //         background: 'inherit',
        //         color: 'rgba(255, 255, 255, 0.3)',
        //         rotation: -45,
        //         lineWidth: 6,
        //         spacing: 10
        //     }
        // ]}
        // fill={[
        //     {
        //         match: {
        //             id: 'ruby'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'c'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'go'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'python'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'scala'
        //         },
        //         id: 'lines'
        //     },
        //     {
        //         match: {
        //             id: 'lisp'
        //         },
        //         id: 'lines'
        //     },
        //     {
        //         match: {
        //             id: 'elixir'
        //         },
        //         id: 'lines'
        //     },
        //     {
        //         match: {
        //             id: 'javascript'
        //         },
        //         id: 'lines'
        //     }
        // ]}
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
                // effects: [
                //     {
                //         on: 'hover',
                //         style: {
                //             itemTextColor: '#000'
                //         }
                //     }
                // ]
            }
        ]}
    />
    
  )
}

export default Gender