import React from 'react'
import {
    Chart,
    Series,
    ArgumentAxis,
    CommonSeriesSettings,
    Export,
    Legend,
    Size
  } from 'devextreme-react/chart';
  import { dataSource } from './dataRevenue.js';

function ChartRevenue() {
    return (
        <Chart
        dataSource={dataSource}
      >
        <CommonSeriesSettings
          argumentField="country"
          type='stackedsplinearea'
        />
        <Size
            height={235}
            // width={600}
        />
        <Series valueField="y1564" name="Income"></Series>
        <Series valueField="y014" name="Expanse"></Series>
        <ArgumentAxis valueMarginsEnabled={false} />
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
        />
        {/* <Export enabled={true} /> */}
      </Chart>
    )
}

export default ChartRevenue
