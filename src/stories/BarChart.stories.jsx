import BarChart from '../components/BarChart'


export default {
    title: 'Barchart',
    component: BarChart,
}

const chartOptions = {
    title: {
      text: 'Bar Chart Example',
    },
    xAxis: {
      data: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    },
    yAxis: {},
    series: [
      {
        name: 'Series 1',
        type: 'bar',
        data: [120, 200, 150, 80, 70], // Example data for the series
      },
    ],
  };

  const columnBarChartOption  = {
    xAxis: {
      type: 'category',
      data: ['Less than 2 years', '3-5 years', '6 years ormore'],
      splitLine: {
        show: false // Hide the grid lines under the x-axis
      },
      axisLabel: {
        show:true // Hide labels
      },
      axisLine:{ show: false },
      axisTick:{
        show: false
      }
    },
    yAxis: {
      type: 'value',
       axisTick: {}, // Remove ticks
       axisLabel: {
         show: false // Hide labels
       },
       splitLine: {
         show: false // Hide lines
       },
       axisLine:{ show: false },
       minorTick:{show: false},
    },
    series: [
      {
        data: [55.6, 40.5, 3.9],
        type: 'bar',
        barWidth: 65,
        // barGap: '5%',
        // barWidth: '10',
        barGap: '5%', // Adjust the value as per your requirement
        barCategoryGap: '10%',
        barMinWidth : '5%',
        barMinHeight : 20,
        barMaxWidth: 70,
        label: {
          show: true, // Display the labels
          formatter: '{c}%',
          position: 'insideTop', // Position the labels at the top of the bars
          color: '#000', // Customize the label text color
          fontWeight: 'bold',
          itemStyle: {borderWidth: 0}
        }
      }
    ]
  };

export const DefaultBarChart  = () => <BarChart option={chartOptions}/>
export const USABarChart = {
    args:{
        option : columnBarChartOption,
    }
}


