import './index.scss'
import React from 'react'
import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import Column2D from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.umber'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFusioncharts from 'react-fusioncharts'

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme)
Charts(FusionCharts)

const data = [
  {
    label: 'Completed Requests',
    value: '24',
  },
  {
    label: 'Open Requests',
    value: '3',
  },
  {
    label: 'Requests on Hold',
    value: '2',
  },
]

const configurations = {
  type: 'column3d',
  width: '500',
  height: '300',
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: 'All My Requests',
      xAxisName: 'Status of Request',
      yAxisName: '# of Requests',
      theme: 'umber',
    },

    data: data,
  },
}

const dataSource = {
  chart: {
    caption: 'Requests by Priority',
    enablesmartlabels: '1',
    showlabels: '1',
    usedataplotcolorforlabels: '1',
    theme: 'umber',
  },
  data: [
    {
      label: 'Normal',
      value: '24',
    },
    {
      label: 'High',
      value: '3',
    },
    {
      label: 'Medium',
      value: '2',
    },
  ],
}

const Progress = () => {
  return (
    <>
      <div className="chart1">
        <ReactFC {...configurations} />
      </div>
      <div className="chart2">
        <ReactFusioncharts
          type="doughnut3d"
          width="500"
          height="300"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </div>
    </>
  )
}

export default Progress
