import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import styles from '../../styles/Table.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Grafica InfoDesign',
    },
  },
};

export default function BarChartTC({ data }) {
  const chartData = {
    labels: data.map((item) => item.Linea),
    datasets: [
      {
        label: 'Perdidas',
        data: data.map((item) => item.Perdidas),
        backgroundColor: '#ed6359',
      },
    ],
  };

  return (
    <div className={styles.bar}>
      <Bar options={options} data={chartData} />
    </div>
  );
}
