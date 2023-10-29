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

export default function BarChartC({ data }) {
  const chartData = {
    labels: data.map((item) => item.Linea),
    datasets: [
      {
        label: 'Costo comercial',
        data: data.map((item) => item.costo_comercial),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Costo Industrial',
        data: data.map((item) => item.costo_industrial),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Costo Residencial',
        data: data.map((item) => item.costo_residencial),
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
