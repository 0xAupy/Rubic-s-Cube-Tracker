import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { TimeDistribution } from '../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface TimeDistributionChartProps {
  data: TimeDistribution[];
}

const TimeDistributionChart: React.FC<TimeDistributionChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.range),
    datasets: [
      {
        label: 'Number of Solves',
        data: data.map(item => item.count),
        backgroundColor: 'rgba(139, 92, 246, 0.7)',
        borderColor: 'rgb(139, 92, 246)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Solve Time Distribution',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Solves'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time Range'
        }
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 h-80">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default TimeDistributionChart;