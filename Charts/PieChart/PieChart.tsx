import * as React from 'react';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

interface PieChartProps {
  pieData: Array<number>;
  labels: Array<string>;
}

const PieChart: React.FC<PieChartProps> = ({ labels, pieData }) => {
  console.log({ pieData });
  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: pieData,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(275, 285, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };
  return <Pie plugins={[ChartDataLabels]} data={data} options={options} />;
};

export default PieChart;
