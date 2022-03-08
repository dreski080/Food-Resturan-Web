import React from 'react'
import {
    Chart,
    Series,
    ArgumentAxis,
    CommonSeriesSettings,
    Size,
    Grid,
    Export,
    Legend,
    Margin,
    Tooltip,
    Label,
    Format,
  } from 'devextreme-react/chart';
  import { architectureSources, sharingStatisticsInfo } from './dataMap.js';

function ChartMap() {
    return (
        <Chart
        //   palette="Violet"
          dataSource={sharingStatisticsInfo}
        >
          <CommonSeriesSettings
            argumentField="day"
            type='spline'
          />
            <Size
            height={250}
            // width={600}
            />
          {
            architectureSources.map((item) => <Series
              key={item.value}
              valueField={item.value}
              name={item.name} />)
          }
          <ArgumentAxis
            allowDecimals={false}
            axisDivisionFactor={10}
          >
            <Label>
              <Format type="decimal" />
            </Label>
          </ArgumentAxis>
          <Legend
             verticalAlignment="bottom"
             horizontalAlignment="center"
             itemTextPosition="bottom"
          />
          {/* <Export enabled={true} /> */}
          {/* <Tooltip enabled={true} /> */}
        </Chart>
    )
}

export default ChartMap
