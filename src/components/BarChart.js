import ReactECharts from 'echarts-for-react';

const BarChart = ({ option }) => {
  return(
    <div style={{width: '500px' , height: '500px'}}>
    <ReactECharts option={option} />
    </div>
  )
};

export default BarChart;
