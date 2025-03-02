import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { DailyProgress } from '../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ProgressChartProps {
  data: DailyProgress[];
}

const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Average Solve Time (seconds)',
        data: data.map(item => item.averageTime / 1000), // Convert ms to seconds
        borderColor: 'rgb(14, 165, 233)',
        backgroundColor: 'rgba(14, 165, 233, 0.5)',
        tension: 0.3,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Solve Time Progress',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const value = context.parsed.y;
            return `Average: ${value.toFixed(2)}s (${Math.floor(data[context.dataIndex].solveCount)} solves)`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        reverse: true, // Lower times are better, so we reverse the scale
        title: {
          display: true,
          text: 'Time (seconds)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 h-80">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ProgressChart;