import * as React from 'react';
import { Bar } from 'react-chartjs-2';
import { formatDate } from '../../utils/helpers';

interface BarChartProps {
  barData: Array<number>;
  labels: Array<string>;
}

const BarChart: React.FC<BarChartProps> = ({ labels, barData }) => {
  // const formattedLabels = labels?.map((label: string) => formatDate(label));
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Views',
        data: barData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(255, 152, 4, 0.2)',
          'rgba(254, 217, 157, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
          'rgb(261, 223, 217)',
          'rgb(216, 266, 205)',
          'rgb(231, 243, 206)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Bar data={data} />;
};

export default BarChart;
