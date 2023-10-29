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

export default function BarChart({ data }) {
  const chartData = {
    labels: data.map((item) => item.Linea),
    datasets: [
      {
        label: 'Consumo',
        data: data.map((item) => item.consumo),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Costo',
        data: data.map((item) => item.costo),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div className={styles.bar}>
      <Bar options={options} data={chartData} />
    </div>
  );
}
